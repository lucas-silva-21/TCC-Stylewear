import React, { useState, useEffect, useContext } from 'react';
import './itens.css'
import { AuthContext } from '../../Inicio/Header/AuthContext';


function Cards({ images = [
  '/Fotos - TCC (adidas/tenis (2).png',
  '/Fotos - TCC (adidas/tenis 3.png',
  '/Fotos - TCC (adidas/tenis 4.png',
  '/Fotos - TCC (adidas/tenis 5.png',
  '/Fotos - TCC (adidas/tenis 6.png',
  '/Fotos - TCC (adidas/tenis 7.png',
  '/Fotos - TCC (adidas/tenis 8.png',
  '/Fotos - TCC (adidas/tenis 9.png',
  '/Fotos - TCC (adidas/tenis 10.png',
  '/Fotos - TCC (adidas/tenis 11.png',
  '/Fotos - TCC (adidas/tenis 12.png',
  '/Fotos - TCC (adidas/tenis 13.png',
  '/Fotos - TCC (adidas/tenis 14.png',
  '/Fotos - TCC (adidas/tenis 15.png',
  '/Fotos - TCC (lacoste/t1.png',
  '/Fotos - TCC (lacoste/t2.png',
  '/Fotos - TCC (lacoste/t3.png',
  '/Fotos - TCC (lacoste/t4.png',
  '/Fotos - TCC (lacoste/t5.png',
  '/Fotos - TCC (lacoste/t6.png',
  '/Fotos - TCC (lacoste/t7.png',
  '/Fotos - TCC (lacoste/t8.png',
  '/Fotos - TCC (lacoste/t9.png',
  '/Fotos - TCC (lacoste/t10.png',
  '/Fotos - TCC (lacoste/t11.png',
  '/Fotos - TCC (lacoste/t12.png',
  '/Fotos - TCC (lacoste/t13.png',
  '/Fotos - TCC (lacoste/t14.png',
  '/Fotos - TCC (lacoste/t15.png',
  '/Fotos - TCC (nike/t 1.png',
  '/Fotos - TCC (nike/t 2.png',
  '/Fotos - TCC (nike/t 3.png',
  '/Fotos - TCC (nike/t 4.png',
  '/Fotos - TCC (nike/t 5.png',
  '/Fotos - TCC (nike/t 6.png',
  '/Fotos - TCC (nike/t 7.png',
  '/Fotos - TCC (nike/t 8.png',
  '/Fotos - TCC (nike/t 9.png',
  '/Fotos - TCC (nike/t 10.png',
  '/Fotos - TCC (nike/t 11.png',
  '/Fotos - TCC (nike/t 12.png',
  '/Fotos - TCC (nike/t 13.png',
  '/Fotos - TCC (nike/t 14.png',
  '/Fotos - TCC (nike/t 15.png',
  '/Fotos - TCC (puma/t1.png',
  '/Fotos - TCC (puma/t2.png',
  '/Fotos - TCC (puma/t3.png',
  '/Fotos - TCC (puma/t4.png',
  '/Fotos - TCC (puma/t5.png',
  '/Fotos - TCC (puma/t6.png',
  '/Fotos - TCC (puma/t7.png',
  '/Fotos - TCC (puma/t8.png',
  '/Fotos - TCC (puma/t9.png',
  '/Fotos - TCC (puma/t10.png',
  '/Fotos - TCC (puma/t11.png',
  '/Fotos - TCC (puma/t12.png',
  '/Fotos - TCC (puma/t13.png',
  '/Fotos - TCC (puma/t14.png',
  '/Fotos - TCC (puma/t15.png',
  '/Fotos - TCC (umbro/t1.png',
  '/Fotos - TCC (umbro/t2.png',
  '/Fotos - TCC (umbro/t3.png',
  '/Fotos - TCC (umbro/t4.png',
  '/Fotos - TCC (umbro/t5.png',
  '/Fotos - TCC (umbro/t6.png',
  '/Fotos - TCC (umbro/t7.png',
  '/Fotos - TCC (umbro/t8.png',
  '/Fotos - TCC (umbro/t9.png',
  '/Fotos - TCC (umbro/t10.png',
  '/Fotos - TCC (umbro/t11.png',
  '/Fotos - TCC (umbro/t12.png',
  '/Fotos - TCC (umbro/t13.png',
  '/Fotos - TCC (umbro/t14.png',
  '/Fotos - TCC (umbro/t15.png',
], count }) {
  const totalImages = images.length;
  const itemCount = typeof count === 'number' ? count : totalImages;

  const item_Tenis = Array.from({ length: itemCount }, (_, i) => ({
    img: images[i % images.length],
    alt: `Item ${i + 1}`
  }));

  const storageKey = 'selectedItems_tenis';
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
    const url = item_Tenis[idx] && item_Tenis[idx].img;
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
        armario.tenis = armario.tenis || [];
        
        if (!wasSelected) {
          // Adding item
          if (!armario.tenis.includes(url)) {
            armario.tenis.push(url);
          }
        } else {
          // Removing item
          armario.tenis = armario.tenis.filter(u => u !== url);
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
      {item_Tenis.map((list, index) => (
        <div className='div-card2' key={index}>
          <img src={list.img} alt={list.alt} id='img-item2' />
          <div className="form-check hanger">
              <input
              className="hanger-checkbox"
              type="checkbox"
              id={`hanger-tenis-${index}`}
              aria-label={`Selecionar tenis ${index + 1}`}
              checked={!!selected[list.img]}
              onChange={() => toggleSelect(index)}
            />
            <label 
              className={`hanger-label ${selected[list.img] ? 'checked' : ''}`} 
              htmlFor={`hanger-tenis-${index}`}
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