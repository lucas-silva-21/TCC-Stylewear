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
    const url = item_Short[idx] && item_Short[idx].img;
    if (!url) return;
    setSelected(prev => {
      const next = { ...prev };
      if (next[url]) delete next[url]; else next[url] = true;
      return next;
    });
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
            <label className="hanger-label" htmlFor={`hanger-acessorio-${index}`}>
              <img src="/cabide.png" alt="cabide" className="hanger-icon-outline" />
            </label>
          </div>
        </div>
      ))}
    </>
  )
}

export default Cards;