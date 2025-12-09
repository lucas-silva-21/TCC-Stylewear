import React, { useState, useEffect } from 'react';
import './itens.css'

function Cards({ images = ['/Categoria/Calça_categ.png'], count }) {
  const totalImages = images.length;
  const itemCount = typeof count === 'number' ? count : totalImages;

  const item_Calça = Array.from({ length: itemCount }, (_, i) => ({
    img: images[i % images.length],
    alt: `Item ${i + 1}`
  }));

  const storageKey = 'selectedItems_part_baixo';
  const [selected, setSelected] = useState(() => {
    try {
      const raw = localStorage.getItem(storageKey);
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
      localStorage.setItem(storageKey, JSON.stringify(arr));
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