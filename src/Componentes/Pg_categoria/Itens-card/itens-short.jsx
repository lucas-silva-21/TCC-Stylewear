import React, { useState, useEffect, useContext } from 'react';
import './itens.css'
import { AuthContext } from '../../Inicio/Header/AuthContext';

function Cards({ images = [
  '/Fotos - TCC (adidas/s 1.png',
  '/Fotos - TCC (adidas/s 2.png',
  '/Fotos - TCC (adidas/s 3.png',
  '/Fotos - TCC (adidas/s 4.png',
  '/Fotos - TCC (adidas/s 5.png',
  '/Fotos - TCC (adidas/s 6.png',
  '/Fotos - TCC (adidas/s 7.png',
  '/Fotos - TCC (adidas/s 8.png',
  '/Fotos - TCC (adidas/s 9.png',
  '/Fotos - TCC (adidas/s 10.png',
  '/Fotos - TCC (adidas/s 11.png',
  '/Fotos - TCC (adidas/s 12.png',
  '/Fotos - TCC (adidas/s 13.png',
  '/Fotos - TCC (adidas/s 14.png',
  '/Fotos - TCC (adidas/s 15.png',
  '/Fotos - TCC (lacoste/s1.png',
  '/Fotos - TCC (lacoste/s2.png',
  '/Fotos - TCC (lacoste/ss3.png',
  '/Fotos - TCC (lacoste/s4.png',
  '/Fotos - TCC (lacoste/s5.png',
  '/Fotos - TCC (lacoste/s6.png',
  '/Fotos - TCC (lacoste/s7.png',
  '/Fotos - TCC (lacoste/s8.png',
  '/Fotos - TCC (lacoste/s9.png',
  '/Fotos - TCC (lacoste/s10.png',
  '/Fotos - TCC (lacoste/s11.png',
  '/Fotos - TCC (lacoste/s12.png',
  '/Fotos - TCC (lacoste/s13.png',
  '/Fotos - TCC (lacoste/s14.png',
  '/Fotos - TCC (lacoste/s15.png',
  '/Fotos - TCC (nike/s1.png',
  '/Fotos - TCC (nike/s2.png',
  '/Fotos - TCC (nike/s3.png',
  '/Fotos - TCC (nike/s4.png',
  '/Fotos - TCC (nike/s5.png',
  '/Fotos - TCC (nike/s6.png',
  '/Fotos - TCC (nike/s7.png',
  '/Fotos - TCC (nike/s8.png',
  '/Fotos - TCC (nike/s9.png',
  '/Fotos - TCC (nike/s10.png',
  '/Fotos - TCC (nike/s11.png',
  '/Fotos - TCC (nike/s12.png',
  '/Fotos - TCC (nike/s13.png',
  '/Fotos - TCC (nike/s14.png',
  '/Fotos - TCC (nike/s15.png',
  '/Fotos - TCC (puma/s1.png',
  '/Fotos - TCC (puma/s2.png',
  '/Fotos - TCC (puma/s3.png',
  '/Fotos - TCC (puma/s4.png',
  '/Fotos - TCC (puma/s5.png',
  '/Fotos - TCC (puma/s6.png',
  '/Fotos - TCC (puma/s7.png',
  '/Fotos - TCC (puma/s8.png',
  '/Fotos - TCC (puma/s9.png',
  '/Fotos - TCC (puma/s10.png',
  '/Fotos - TCC (puma/s11.png',
  '/Fotos - TCC (puma/s12.png',
  '/Fotos - TCC (puma/s13.png',
  '/Fotos - TCC (puma/s14.png',
  '/Fotos - TCC (puma/s15.png',
  '/Fotos - TCC (umbro/s1.png',
  '/Fotos - TCC (umbro/s2.png',
  '/Fotos - TCC (umbro/s3.png',
  '/Fotos - TCC (umbro/s4.png',
  '/Fotos - TCC (umbro/s5.png',
  '/Fotos - TCC (umbro/s6.png',
  '/Fotos - TCC (umbro/s7.png',
  '/Fotos - TCC (umbro/s8.png',
  '/Fotos - TCC (umbro/s9.png',
  '/Fotos - TCC (umbro/s10.png',
  '/Fotos - TCC (umbro/s11.png',
  '/Fotos - TCC (umbro/s12.png',
  '/Fotos - TCC (umbro/s13.png',
  '/Fotos - TCC (umbro/s14.png',
  '/Fotos - TCC (umbro/s15.png',
], count }) {
  const totalImages = images.length;
  const itemCount = typeof count === 'number' ? count : totalImages;

  const item_Short = Array.from({ length: itemCount }, (_, i) => ({
    img: images[i % images.length],
    alt: `Item ${i + 1}`
  }));

  const storageKey = 'selectedItems_short';
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
        armario.parteDeBaixo = armario.parteDeBaixo || [];
        
        if (!wasSelected) {
          // Adding item
          if (!armario.parteDeBaixo.includes(url)) {
            armario.parteDeBaixo.push(url);
          }
        } else {
          // Removing item
          armario.parteDeBaixo = armario.parteDeBaixo.filter(u => u !== url);
        }
        
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
              id={`hanger-part_baixo-${index}`}
              aria-label={`Selecionar part_baixo ${index + 1}`}
              checked={!!selected[list.img]}
              onChange={() => toggleSelect(index)}
            />
            <label 
              className={`hanger-label ${selected[list.img] ? 'checked' : ''}`} 
              htmlFor={`hanger-part_baixo-${index}`}
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