import React, { useState, useRef } from 'react';
import './select.css';

function Select({ imageVisibility = null }) {
  // gera itens a partir de um prefixo (o prefixo deve corresponder ao arquivo dentro de public/)
  const makeItems = (prefix, count = 8, altBase = '') => {
    const items = [];
    for (let i = 1; i <= count; i++) {
      // monta o caminho relativo para a pasta public
      const raw = `/${prefix}${i}.png`; // ex: /Fotos - TCC (adidas/bone 1.png
      items.push({
        src: encodeURI(raw),
        alt: altBase ? `${altBase} ${i}` : `img-${i}`,
        id: `${prefix.trim().replace(/\s+/g, '_')}-${i}`, // id usado para mapear visibilidade
      });
    }
    return items;
  };

  // Apenas uma categoria de exemplo: Bonés
  const DATA = {
    'Bonés': makeItems('Fotos - TCC (adidas/bone ', 8, 'Boné adidas'),
  };

  const categories = Object.keys(DATA);
  const [selected, setSelected] = useState(categories[0] || '');
  const carouselRef = useRef(null);

  const scroll = (ref, direction) => {
    const el = ref?.current;
    if (!el) return;
    const offset = Math.round(el.clientWidth * 0.6);
    const delta = direction === 'left' ? -offset : offset;
    el.scrollBy({ left: delta, behavior: 'smooth' });
  };

  // itens da categoria selecionada
  let items = DATA[selected] || [];

  // aplica filtro de visibilidade se fornecido
  if (imageVisibility && typeof imageVisibility === 'object') {
    items = items.filter((it) => {
      // prioridade: id -> src -> filename
      if (Object.prototype.hasOwnProperty.call(imageVisibility, it.id)) return !!imageVisibility[it.id];
      if (Object.prototype.hasOwnProperty.call(imageVisibility, it.src)) return !!imageVisibility[it.src];
      const filename = decodeURIComponent(it.src).split('/').pop();
      if (Object.prototype.hasOwnProperty.call(imageVisibility, filename)) return !!imageVisibility[filename];
      // se nenhuma chave encontrada, manter a imagem
      return true;
    });
  }

  return (
    <>
      <div className="select-wrapper">
        {/* só renderiza select se houver mais de uma categoria */}
        {categories.length > 1 && (
          <>
            <label htmlFor="category-select" className="sr-only">Categoria</label>
            <select
              id="category-select"
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              className="select-categories"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </>
        )}

        <div className="carousel-controls">
          <button
            type="button"
            className="carousel-btn left"
            onClick={() => scroll(carouselRef, 'left')}
            aria-label="Scroll left"
          >
            ‹
          </button>

          <div className="carousel-view" ref={carouselRef}>
            {items.map((it) => (
              <div className="carousel-item" key={it.id}>
                <img src={it.src} alt={it.alt} />
              </div>
            ))}
          </div>

          <button
            type="button"
            className="carousel-btn right"
            onClick={() => scroll(carouselRef, 'right')}
            aria-label="Scroll right"
          >
            ›
          </button>
        </div>
      </div>
    </>
  );
}
export default Select;