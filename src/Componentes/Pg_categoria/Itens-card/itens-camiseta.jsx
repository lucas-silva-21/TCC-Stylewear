import React, { useState, useEffect, useContext } from 'react';
import './itens.css'
import { AuthContext } from '../../Inicio/Header/AuthContext';

function Cards({ images = [
  '/Fotos - TCC (adidas/cm 1.png',
  '/Fotos - TCC (adidas/cm 2.png',
  '/Fotos - TCC (adidas/cm 3.png',
  '/Fotos - TCC (adidas/cm 4.png',
  '/Fotos - TCC (adidas/cm 5.png',
  '/Fotos - TCC (adidas/cm 6.png',
  '/Fotos - TCC (adidas/cm 7.png',
  '/Fotos - TCC (adidas/cm 8.png',
  '/Fotos - TCC (adidas/cm 9.png',
  '/Fotos - TCC (adidas/cm 10.png',
  '/Fotos - TCC (adidas/cm 11.png',
  '/Fotos - TCC (adidas/cm 12.png',
  '/Fotos - TCC (adidas/cm 13.png',
  '/Fotos - TCC (adidas/cm 14.png',
  '/Fotos - TCC (adidas/cm 15.png',
  '/Fotos - TCC (lacoste/c1.png',
  '/Fotos - TCC (lacoste/c2.png',
  '/Fotos - TCC (lacoste/c3.png',
  '/Fotos - TCC (lacoste/c4.png',
  '/Fotos - TCC (lacoste/c5.png',
  '/Fotos - TCC (lacoste/c6.png',
  '/Fotos - TCC (lacoste/c7.png',
  '/Fotos - TCC (lacoste/c8.png',
  '/Fotos - TCC (lacoste/c9.png',
  '/Fotos - TCC (lacoste/c10.png',
  '/Fotos - TCC (lacoste/c11.png',
  '/Fotos - TCC (lacoste/c12.png',
  '/Fotos - TCC (lacoste/c13.png',
  '/Fotos - TCC (lacoste/c14.png',
  '/Fotos - TCC (lacoste/c15.png',
  '/Fotos - TCC (nike/b1.png',
  '/Fotos - TCC (nike/b2.png',
  '/Fotos - TCC (nike/b3.png',
  '/Fotos - TCC (nike/b4.png',
  '/Fotos - TCC (nike/b5.png',
  '/Fotos - TCC (nike/b6.png',
  '/Fotos - TCC (nike/b7.png',
  '/Fotos - TCC (nike/b8.png',
  '/Fotos - TCC (nike/b9.png',
  '/Fotos - TCC (nike/b10.png',
  '/Fotos - TCC (nike/b11.png',
  '/Fotos - TCC (nike/b12.png',
  '/Fotos - TCC (nike/b13.png',
  '/Fotos - TCC (nike/b14.png',
  '/Fotos - TCC (nike/b15.png',
  '/Fotos - TCC (puma/b1.png',
  '/Fotos - TCC (puma/b2.png',
  '/Fotos - TCC (puma/b3.png',
  '/Fotos - TCC (puma/b4.png',
  '/Fotos - TCC (puma/b5.png',
  '/Fotos - TCC (puma/b6.png',
  '/Fotos - TCC (puma/b7.png',
  '/Fotos - TCC (puma/b8.png',
  '/Fotos - TCC (puma/b9.png',
  '/Fotos - TCC (puma/b10.png',
  '/Fotos - TCC (puma/b11.png',
  '/Fotos - TCC (puma/b12.png',
  '/Fotos - TCC (puma/b13.png',
  '/Fotos - TCC (puma/b14.png',
  '/Fotos - TCC (puma/b15.png',
  '/Fotos - TCC (umbro/b1.png',
  '/Fotos - TCC (umbro/b2.png',
  '/Fotos - TCC (umbro/b3.png',
  '/Fotos - TCC (umbro/b4.png',
  '/Fotos - TCC (umbro/b5.png',
  '/Fotos - TCC (umbro/b6.png',
  '/Fotos - TCC (umbro/b7.png',
  '/Fotos - TCC (umbro/b8.png',
  '/Fotos - TCC (umbro/b9.png',
  '/Fotos - TCC (umbro/b10.png',
  '/Fotos - TCC (umbro/b11.png',
  '/Fotos - TCC (umbro/b12.png',
  '/Fotos - TCC (umbro/b13.png',
  '/Fotos - TCC (umbro/b14.png',
  '/Fotos - TCC (umbro/b15.png',
  ], count }) {
  const totalImages = images.length;
  const itemCount = typeof count === 'number' ? count : totalImages;

  const item_Camisetas = Array.from({ length: itemCount }, (_, i) => ({
    img: images[i % images.length],
    alt: `Item ${i + 1}`
  }));

  const storageKey = 'selectedItems_camiseta';
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
    const url = item_Camisetas[idx] && item_Camisetas[idx].img;
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
        armario.camiseta = armario.camiseta || [];
        
        if (!wasSelected) {
          // Adding item
          if (!armario.camiseta.includes(url)) {
            armario.camiseta.push(url);
          }
        } else {
          // Removing item
          armario.camiseta = armario.camiseta.filter(u => u !== url);
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
      {item_Camisetas.map((list, index) => (
        <div className='div-card2' key={index}>
          <img src={list.img} alt={list.alt} id='img-item2' />
          <div className="form-check hanger">
              <input
              className="hanger-checkbox"
              type="checkbox"
              id={`hanger-camiseta-${index}`}
              aria-label={`Selecionar camiseta ${index + 1}`}
              checked={!!selected[list.img]}
              onChange={() => toggleSelect(index)}
            />
            <label className="hanger-label" htmlFor={`hanger-camiseta-${index}`}>
              <img src="/cabide.png" alt="cabide" className="hanger-icon-outline" />
            </label>
          </div>
        </div>
      ))}
    </>
  )
}

export default Cards;