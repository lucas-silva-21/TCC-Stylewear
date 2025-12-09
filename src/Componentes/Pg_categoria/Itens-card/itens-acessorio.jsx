import React, { useState, useEffect, useContext } from 'react';
import './itens.css'
import { AuthContext } from '../../Inicio/Header/AuthContext';

function Cards({ images = ['/Categoria/Acessorio_categ.png'], count }) {
  const totalImages = images.length;
  const itemCount = typeof count === 'number' ? count : totalImages;

  const item_Short = Array.from({ length: itemCount }, (_, i) => ({
    img: images[i % images.length],
    alt: `Item ${i + 1}`
  }));

  const storageKey = 'selectedItems_acessorio';
  const { user } = useContext(AuthContext);
  const getUserKey = () => (user ? user.id || user.email || user.name || 'user' : null);
  const readStorageKey = (key) => {
    try {
      const k = getUserKey();
      if (!k) return null;
      const byUser = localStorage.getItem(`${key}_${k}`);
      if (byUser) return byUser;
    } catch (e) {}
    return null;
  };
  const writeStorageKey = (key, value) => {
    try {
      const k = getUserKey();
      if (!k) return;
      localStorage.setItem(`${key}_${k}`, value);
    } catch (e) {}
  };

  const [selected, setSelected] = useState({});

  useEffect(() => {
    if (!user) { setSelected({}); return; }
    try {
      const raw = readStorageKey(storageKey) || localStorage.getItem(storageKey);
      if (raw) {
        const arr = JSON.parse(raw);
        const obj = {};
        Array.isArray(arr) && arr.forEach(u => { obj[u] = true; });
        setSelected(obj);
        return;
      }
    } catch (e) {}
    setSelected({});
  }, [user]);

  useEffect(() => {
    if (!user) return;
    try {
      const arr = Object.keys(selected).filter(k => selected[k]);
      writeStorageKey(storageKey, JSON.stringify(arr));
    } catch (e) {}
  }, [selected, user]);

  // Listen for armario updates to reset checkboxes when items are removed
  useEffect(() => {
    if (!user) return;

    const handleArmarioUpdate = () => {
      try {
        const raw = readStorageKey(storageKey) || localStorage.getItem(storageKey);
        if (raw) {
          const arr = JSON.parse(raw);
          const obj = {};
          Array.isArray(arr) && arr.forEach(u => { obj[u] = true; });
          setSelected(obj);
        } else {
          setSelected({});
        }
      } catch (e) {
        console.warn('Error updating selected state', e);
      }
    };

    window.addEventListener('armarioUpdated', handleArmarioUpdate);
    
    // Also listen for storage changes (for cross-tab updates)
    const handleStorageChange = (e) => {
      if (e.key && (e.key === storageKey || e.key.startsWith(`${storageKey}_`))) {
        handleArmarioUpdate();
      }
    };
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('armarioUpdated', handleArmarioUpdate);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [user]);

  const toggleSelect = (idx) => {
    const url = item_Short[idx] && item_Short[idx].img;
    if (!url) return;
    const wasSelected = !!selected[url];
    setSelected(prev => {
      const next = { ...prev };
      if (next[url]) delete next[url]; else next[url] = true;
      return next;
    });

    // Sync to armarioAdded
    if (user) {
      try {
        const k = getUserKey();
        if (!k) return;
        const armarioKey = `armarioAdded_${k}`;
        const raw = localStorage.getItem(armarioKey) || localStorage.getItem('armarioAdded');
        const armario = raw ? JSON.parse(raw) : {};
        // Acessórios podem não ter uma categoria específica no armário, mas vamos adicionar suporte
        // Se não houver categoria de acessórios, podemos pular ou criar uma
        // Por enquanto, vamos apenas sincronizar o evento
        localStorage.setItem(armarioKey, JSON.stringify(armario));
        // Dispatch custom event to notify Armario component
        window.dispatchEvent(new Event('armarioUpdated'));
      } catch (e) {
        console.warn('sync armarioAdded', e);
      }
    }
  }

  return (
    <>
      {item_Short.map((list, index) => (
        <div className='div-card2' key={index}>
          <img src={list.img} alt={list.alt} id='img-item2' />
          <div className="form-check hanger">
            <input
              className="hanger-checkbox"
              type="checkbox"
              id={`hanger-acessorio-${index}`}
              aria-label={`Selecionar acessorio ${index + 1}`}
              checked={!!selected[list.img]}
              onChange={() => toggleSelect(index)}
            />
            <label 
              className={`hanger-label ${selected[list.img] ? 'checked' : ''}`} 
              htmlFor={`hanger-acessorio-${index}`}
            >
              <img src="/cabide.png" alt="cabide" className="hanger-icon-outline" />
            </label>
          </div>
        </div>
      ))}
    </>
  )
}

export default Cards;