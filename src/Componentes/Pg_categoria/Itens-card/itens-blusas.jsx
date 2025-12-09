import React, { useState, useEffect, useContext } from 'react';
import './itens.css'
import { AuthContext } from '../../Inicio/Header/AuthContext';

// Final clean implementation — single component only
export default function Cards({ images = [
  '/Fotos - TCC (adidas/m1.png',
  '/Fotos - TCC (adidas/m2.png',
  '/Fotos - TCC (adidas/m3.png',
  '/Fotos - TCC (adidas/m4.png',
  '/Fotos - TCC (adidas/m5.png',
  '/Fotos - TCC (adidas/m6.png',
  '/Fotos - TCC (adidas/m7.png',
  '/Fotos - TCC (adidas/m8.png',
  '/Fotos - TCC (adidas/m9.png',
  '/Fotos - TCC (adidas/m10.png',
  '/Fotos - TCC (lacoste/m1.png',
  '/Fotos - TCC (lacoste/m2.png',
  '/Fotos - TCC (lacoste/m3.png',
  '/Fotos - TCC (lacoste/m4.png',
  '/Fotos - TCC (lacoste/m5.png',
  '/Fotos - TCC (lacoste/m6.png',
  '/Fotos - TCC (lacoste/m7.png',
  '/Fotos - TCC (lacoste/m8.png',
  '/Fotos - TCC (lacoste/m9.png',
  '/Fotos - TCC (lacoste/m10.png',
  '/Fotos - TCC (lacoste/m11.png',
  '/Fotos - TCC (lacoste/m12.png',
  '/Fotos - TCC (lacoste/m13.png',
  '/Fotos - TCC (lacoste/m14.png',
  '/Fotos - TCC (lacoste/m15.png',
  '/Fotos - TCC (nike/m1.png',
  '/Fotos - TCC (nike/m2.png',
  '/Fotos - TCC (nike/m3.png',
  '/Fotos - TCC (nike/m4.png',
  '/Fotos - TCC (nike/m5.png',
  '/Fotos - TCC (nike/m6.png',
  '/Fotos - TCC (nike/m7.png',
  '/Fotos - TCC (nike/m8.png',
  '/Fotos - TCC (nike/m10.png',
  '/Fotos - TCC (puma/m1.png',
  '/Fotos - TCC (puma/m2.png',
  '/Fotos - TCC (puma/m3.png',
  '/Fotos - TCC (puma/m4.png',
  '/Fotos - TCC (puma/m5.png',
  '/Fotos - TCC (puma/m6.png',
  '/Fotos - TCC (puma/m7.png',
  '/Fotos - TCC (puma/m8.png',
  '/Fotos - TCC (puma/m9.png',
  '/Fotos - TCC (puma/m10.png',
  '/Fotos - TCC (umbro/m1.png',
  '/Fotos - TCC (umbro/m2.png',
  '/Fotos - TCC (umbro/m3.png',
  '/Fotos - TCC (umbro/m4.png',
  '/Fotos - TCC (umbro/m5.png',
  '/Fotos - TCC (umbro/m6.png',
  '/Fotos - TCC (umbro/m7.png',
  '/Fotos - TCC (umbro/m8.png',
  '/Fotos - TCC (umbro/m9.png',
  '/Fotos - TCC (umbro/m10.png',
], count }) {
  const totalImages = images.length;
  const itemCount = typeof count === 'number' ? count : totalImages;

  const items = Array.from({ length: itemCount }, (_, i) => ({ img: images[i % images.length], alt: `Blusa ${i + 1}` }));

  const storageKey = 'selectedItems_blusas';
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
    const url = items[idx] && items[idx].img;
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
        armario.blusas = armario.blusas || [];
        
        if (!wasSelected) {
          // Adding item
          if (!armario.blusas.includes(url)) {
            armario.blusas.push(url);
          }
        } else {
          // Removing item
          armario.blusas = armario.blusas.filter(u => u !== url);
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
      {items.map((list, index) => (
        <div className='div-card2' key={index}>
          <img src={list.img} alt={list.alt} id='img-item2' />
          <div className="form-check hanger">
            <input
              className="hanger-checkbox"
              type="checkbox"
              id={`hanger-blusa-${index}`}
              aria-label={`Selecionar blusa ${index + 1}`}
              checked={!!selected[list.img]}
              onChange={() => toggleSelect(index)}
            />
            <label className="hanger-label" htmlFor={`hanger-blusa-${index}`}>
              <img src="/cabide.png" alt="cabide" className="hanger-icon-outline" />
            </label>
          </div>
        </div>
      ))}
    </>
  )
}
