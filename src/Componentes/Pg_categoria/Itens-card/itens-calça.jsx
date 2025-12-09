import React, { useState, useEffect, useContext } from 'react';
import './itens.css'
import { AuthContext } from '../../Inicio/Header/AuthContext';

function Cards({ images = [
  '/Fotos - TCC (adidas/c 1.png',
  '/Fotos - TCC (adidas/c 2.png',
  '/Fotos - TCC (adidas/c 3.png',
  '/Fotos - TCC (adidas/c 4.png',
  '/Fotos - TCC (adidas/c 5.png',
  '/Fotos - TCC (adidas/c 6.png',
  '/Fotos - TCC (adidas/c 7.png',
  '/Fotos - TCC (adidas/c 8.png',
  '/Fotos - TCC (adidas/c 9.png',
  '/Fotos - TCC (adidas/c 10.png',
  '/Fotos - TCC (adidas/c 11.png',
  '/Fotos - TCC (adidas/c 12.png',
  '/Fotos - TCC (adidas/c 13.png',
  '/Fotos - TCC (adidas/c 14.png',
  '/Fotos - TCC (adidas/c 15.png',
  '/Fotos - TCC (lacoste/ç1.png',
  '/Fotos - TCC (lacoste/ç2.png',
  '/Fotos - TCC (lacoste/ç3.png',
  '/Fotos - TCC (lacoste/ç4.png',
  '/Fotos - TCC (lacoste/ç5.png',
  '/Fotos - TCC (lacoste/ç6.png',
  '/Fotos - TCC (lacoste/ç7.png',
  '/Fotos - TCC (lacoste/ç8.png',
  '/Fotos - TCC (lacoste/ç9.png',
  '/Fotos - TCC (lacoste/ç10.png',
  '/Fotos - TCC (lacoste/ç11.png',
  '/Fotos - TCC (lacoste/ç12.png',
  '/Fotos - TCC (lacoste/ç13.png',
  '/Fotos - TCC (lacoste/ç14.png',
  '/Fotos - TCC (lacoste/ç15.png',
  '/Fotos - TCC (nike/c1.png',
  '/Fotos - TCC (nike/c2.png',
  '/Fotos - TCC (nike/c3.png',
  '/Fotos - TCC (nike/c4.png',
  '/Fotos - TCC (nike/c5.png',
  '/Fotos - TCC (nike/c6.png',
  '/Fotos - TCC (nike/c7.png',
  '/Fotos - TCC (nike/c8.png',
  '/Fotos - TCC (nike/c9.png',
  '/Fotos - TCC (nike/c10.png',
  '/Fotos - TCC (nike/c11.png',
  '/Fotos - TCC (nike/c12.png',
  '/Fotos - TCC (nike/c13.png',
  '/Fotos - TCC (nike/c14.png',
  '/Fotos - TCC (nike/c15.png',
  '/Fotos - TCC (puma/c1.png',
  '/Fotos - TCC (puma/c2.png',
  '/Fotos - TCC (puma/c3.png',
  '/Fotos - TCC (puma/c4.png',
  '/Fotos - TCC (puma/c5.png',
  '/Fotos - TCC (puma/c6.png',
  '/Fotos - TCC (puma/c7.png',
  '/Fotos - TCC (puma/c8.png',
  '/Fotos - TCC (puma/c9.png',
  '/Fotos - TCC (puma/c10.png',
  '/Fotos - TCC (puma/c11.png',
  '/Fotos - TCC (puma/c12.png',
  '/Fotos - TCC (puma/c13.png',
  '/Fotos - TCC (puma/c14.png',
  '/Fotos - TCC (puma/c15.png',
  '/Fotos - TCC (umbro/c1.png',
  '/Fotos - TCC (umbro/c2.png',
  '/Fotos - TCC (umbro/c3.png',
  '/Fotos - TCC (umbro/c4.png',
  '/Fotos - TCC (umbro/c5.png',
  '/Fotos - TCC (umbro/c6.png',
  '/Fotos - TCC (umbro/c7.png',
  '/Fotos - TCC (umbro/c8.png',
  '/Fotos - TCC (umbro/c9.png',
  '/Fotos - TCC (umbro/c10.png',
  '/Fotos - TCC (umbro/c11.png',
  '/Fotos - TCC (umbro/c12.png',
  '/Fotos - TCC (umbro/c13.png',
  '/Fotos - TCC (umbro/c14.png',
  '/Fotos - TCC (umbro/c15.png',
], count }) {
  const totalImages = images.length;
  const itemCount = typeof count === 'number' ? count : totalImages;

  const item_Calça = Array.from({ length: itemCount }, (_, i) => ({
    img: images[i % images.length],
    alt: `Item ${i + 1}`
  }));

  const storageKey = 'selectedItems_calca';
  const { user } = useContext(AuthContext);
  const getUserKey = () => (user ? user.id || user.email || user.name || 'user' : 'guest');
  const readStorageKey = (key) => { try { const byUser = localStorage.getItem(`${key}_${getUserKey()}`); if (byUser) return byUser; } catch (e) {} return localStorage.getItem(key); };
  const writeStorageKey = (key, value) => { try { localStorage.setItem(`${key}_${getUserKey()}`, value); return; } catch (e) {} try { localStorage.setItem(key, value); } catch (e) {} };

  const [selected, setSelected] = useState(() => {
    try {
      const raw = readStorageKey(storageKey);
      if (raw) {
        const arr = JSON.parse(raw);
        const obj = {};
        Array.isArray(arr) && arr.forEach(u => { obj[u] = true; });
        return obj;
      }
    } catch (e) { console.warn('Failed to parse', e); }
    return {};
  });

  useEffect(() => {
    try {
      const arr = Object.keys(selected).filter(k => selected[k]);
      writeStorageKey(storageKey, JSON.stringify(arr));
    } catch (e) { console.warn('Failed to save', e); }
  }, [selected]);

  const toggleSelect = (idx) => {
    const url = item_Calça[idx] && item_Calça[idx].img;
    if (!url) return;
    setSelected(prev => {
      const next = { ...prev };
      if (next[url]) delete next[url]; else next[url] = true;
      return next;
    });
  }


  return (
    <>
      {item_Calça.map((list, index) => (
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
            <label className="hanger-label" htmlFor={`hanger-part_baixo-${index}`}>
              <img src="/cabide.png" alt="cabide" className="hanger-icon-outline" />
            </label>
          </div>
        </div>
      ))}
    </>
  )
}

export default Cards;