import React, { useState, useEffect, useContext } from 'react';
import './itens.css'
import { AuthContext } from '../../Inicio/Header/AuthContext';

function Cards({ images = [
  '/Fotos - TCC (adidas/n1.png',
  '/Fotos - TCC (adidas/n2.png',
  '/Fotos - TCC (adidas/n3.png',
  '/Fotos - TCC (adidas/n4.png',
  '/Fotos - TCC (adidas/n5.png',
  '/Fotos - TCC (adidas/n6.png',
  '/Fotos - TCC (adidas/n7.png',
  '/Fotos - TCC (adidas/n8.png',
  '/Fotos - TCC (adidas/n9.png',
  '/Fotos - TCC (adidas/n10.png',
  '/Fotos - TCC (lacoste/n1.png',
  '/Fotos - TCC (lacoste/n2.png',
  '/Fotos - TCC (lacoste/n3.png',
  '/Fotos - TCC (lacoste/n4.png',
  '/Fotos - TCC (lacoste/n5.png',
  '/Fotos - TCC (lacoste/n6.png',
  '/Fotos - TCC (lacoste/n7.png',
  '/Fotos - TCC (lacoste/n8.png',
  '/Fotos - TCC (lacoste/n9.png',
  '/Fotos - TCC (lacoste/n10.png',
  '/Fotos - TCC (lacoste/n11.png',
  '/Fotos - TCC (lacoste/n12.png',
  '/Fotos - TCC (lacoste/n13.png',
  '/Fotos - TCC (lacoste/n14.png',
  '/Fotos - TCC (lacoste/n15.png',
  '/Fotos - TCC (nike/n1.png',
  '/Fotos - TCC (nike/n2.png',
  '/Fotos - TCC (nike/n3.png',
  '/Fotos - TCC (nike/n4.png',
  '/Fotos - TCC (nike/n5.png',
  '/Fotos - TCC (nike/n6.png',
  '/Fotos - TCC (nike/n7.png',
  '/Fotos - TCC (nike/n8.png',
  '/Fotos - TCC (nike/n10.png',
  '/Fotos - TCC (puma/n1.png',
  '/Fotos - TCC (puma/n2.png',
  '/Fotos - TCC (puma/n3.png',
  '/Fotos - TCC (puma/n4.png',
  '/Fotos - TCC (puma/n5.png',
  '/Fotos - TCC (puma/n6.png',
  '/Fotos - TCC (puma/n7.png',
  '/Fotos - TCC (puma/n8.png',
  '/Fotos - TCC (puma/n9.png',
  '/Fotos - TCC (puma/n10.png',
  '/Fotos - TCC (umbro/n1.png',
  '/Fotos - TCC (umbro/n2.png',
  '/Fotos - TCC (umbro/n3.png',
  '/Fotos - TCC (umbro/n4.png',
  '/Fotos - TCC (umbro/n5.png',
  '/Fotos - TCC (umbro/n6.png',
  '/Fotos - TCC (umbro/n7.png',
  '/Fotos - TCC (umbro/n8.png',
  '/Fotos - TCC (umbro/n9.png',
  '/Fotos - TCC (umbro/n10.png',
], count }) {
  const totalImages = images.length;
  const itemCount = typeof count === 'number' ? count : totalImages;

  const item_Bone = Array.from({ length: itemCount }, (_, i) => ({
    img: images[i % images.length],
    alt: `Item ${i + 1}`
  }));

  const storageKey = 'selectedItems_bone';
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

  // load per-user selection when user changes; clear when no user
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

  // persist only for authenticated user
  useEffect(() => {
    if (!user) return;
    try {
      const arr = Object.keys(selected).filter(k => selected[k]);
      writeStorageKey(storageKey, JSON.stringify(arr));
    } catch (e) {}
  }, [selected, user]);

  const toggleSelect = (idx) => {
    const url = item_Bone[idx] && item_Bone[idx].img;
    if (!url) return;
    setSelected(prev => {
      const next = { ...prev };
      if (next[url]) delete next[url];
      else next[url] = true;
      return next;
    });
  };

  return (
    <>
      {item_Bone.map((list, index) => (
        <div className='div-card2' key={index}>
          <img src={list.img} alt={list.alt} id='img-item2' />
          <div className="form-check hanger">
              <input
              className="hanger-checkbox"
              type="checkbox"
              id={`hanger-bone-${index}`}
              aria-label={`Selecionar bone ${index + 1}`}
                checked={!!selected[list.img]}
                onChange={() => toggleSelect(index)}
            />
            <label className="hanger-label" htmlFor={`hanger-bone-${index}`}>
              <img src="/cabide.png" alt="cabide" className="hanger-icon-outline" />
            </label>
          </div>
        </div>
      ))}
    </>
  )
}

export default Cards;