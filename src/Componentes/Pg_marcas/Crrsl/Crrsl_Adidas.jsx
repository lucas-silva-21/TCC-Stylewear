import React, { useRef, useState, useEffect, useContext } from 'react';
import './crrsl.css'
import { AuthContext } from '../../Inicio/Header/AuthContext';

function Carousel(props) {
  const { tituloTenis, tituloShort, tituloCamiseta, tituloCalça, tituloBlusa, tituloBone , tituloAcessorio} = props;

  // refs separados para cada carrossel
  const carouselRefTenis = useRef(null);
  const carouselRefShort = useRef(null);
  const carouselRefCamiseta = useRef(null);
  const carouselRefCalça = useRef(null);
  const carouselRefBlusa = useRef(null);
  const carouselRefBone = useRef(null);
  const carouselRefAcessorio = useRef(null);

  const makeItems = (images, count, altBase = '') => {
    // usa todas as imagens por padrão; se count for informado limita ao total disponível
    const n = typeof count === 'number' ? Math.min(count, images.length) : images.length;
    return Array.from({ length: n }, (_, i) => ({
      img: images[i % images.length],
      alt: `${altBase} ${i + 1}`
    }));
  };

  // defina aqui os arrays de imagens (caminhos absolutos na pasta public)
  const DATA_UMBRO = {
    'Tênis': makeItems([
      'Fotos - TCC (adidas/tenis 1.png',
      'Fotos - TCC (adidas/tenis 2.png',
      'Fotos - TCC (adidas/tenis 3.png',
      'Fotos - TCC (adidas/tenis 4.png',
      'Fotos - TCC (adidas/tenis 5.png',
      'Fotos - TCC (adidas/tenis 6.png',
      'Fotos - TCC (adidas/tenis 7.png',
      'Fotos - TCC (adidas/tenis 8.png',
      'Fotos - TCC (adidas/tenis 9.png',
      'Fotos - TCC (adidas/tenis 10.png',
      'Fotos - TCC (adidas/tenis 11.png',
      'Fotos - TCC (adidas/tenis 12.png',
      'Fotos - TCC (adidas/tenis 13.png',
      'Fotos - TCC (adidas/tenis 14.png',
      'Fotos - TCC (adidas/tenis 15.png'],
      24,
      'Tênis adidas'
    ),
    'Shorts': makeItems([
      'Fotos - TCC (adidas/s 1.png',
      'Fotos - TCC (adidas/s 2.png',
      'Fotos - TCC (adidas/s 3.png',
      'Fotos - TCC (adidas/s 4.png',
      'Fotos - TCC (adidas/s 5.png',
      'Fotos - TCC (adidas/s 6.png',
      'Fotos - TCC (adidas/s 7.png',
      'Fotos - TCC (adidas/s 8.png',
      'Fotos - TCC (adidas/s 9.png',
      'Fotos - TCC (adidas/s 10.png',
      'Fotos - TCC (adidas/s 12.png',
      'Fotos - TCC (adidas/s 13.png',
      'Fotos - TCC (adidas/s 14.png',
      'Fotos - TCC (adidas/s 15.png'],
      24,
      'Short adidas'
    ),
    'Calças': makeItems([
      'Fotos - TCC (adidas/c 1.png',
      'Fotos - TCC (adidas/c 2.png',
      'Fotos - TCC (adidas/c 3.png',
      'Fotos - TCC (adidas/c 4.png',
      'Fotos - TCC (adidas/c 5.png',
      'Fotos - TCC (adidas/c 6.png',
      'Fotos - TCC (adidas/c 7.png',
      'Fotos - TCC (adidas/c 8.png',
      'Fotos - TCC (adidas/c 9.png',
      'Fotos - TCC (adidas/c 10.png', 
      'Fotos - TCC (adidas/c 11.png',
      'Fotos - TCC (adidas/c 12.png',
      'Fotos - TCC (adidas/c 13.png',
      'Fotos - TCC (adidas/c 14.png',
      'Fotos - TCC (adidas/c 15.png'],
      24,
      'Calça adidas'
    ),
    'Camisetas': makeItems([
      'Fotos - TCC (adidas/cm 1.png',
      'Fotos - TCC (adidas/cm 2.png',
      'Fotos - TCC (adidas/cm 3.png',
      'Fotos - TCC (adidas/cm 4.png',
      'Fotos - TCC (adidas/cm 5.png',
      'Fotos - TCC (adidas/cm 6.png',
      'Fotos - TCC (adidas/cm 7.png',
      'Fotos - TCC (adidas/cm 8.png',
      'Fotos - TCC (adidas/cm 9.png',
      'Fotos - TCC (adidas/cm 10.png', 
      'Fotos - TCC (adidas/cm 11.png',
      'Fotos - TCC (adidas/cm 12.png',
      'Fotos - TCC (adidas/cm 13.png',
      'Fotos - TCC (adidas/cm 14.png',
      'Fotos - TCC (adidas/cm 15.png'],
      24,
      'Camiseta adidas'
    ),
  };

  const scroll = (ref, direction) => {
    const el = ref?.current;
    if (!el) return;
    const offset = Math.round(el.clientWidth * 0.6); // ajusta quanto rola por clique
    if (direction === "left") {
      el.scrollBy({ left: -offset, behavior: 'smooth' });
    } else {
      el.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const itemsTenis = DATA_UMBRO[tituloTenis] || [];
  const itemsShort = DATA_UMBRO[tituloShort] || [];
  const itemsCamiseta = DATA_UMBRO[tituloCamiseta] || [];
  const itemsCalça = DATA_UMBRO[tituloCalça] || [];

  const storageKey = 'selected_Crrsl_Adidas';
  const [selected, setSelected] = useState(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) return JSON.parse(raw);
    } catch (e) { console.warn('load selected_Crrsl_Adidas', e); }
    return { camiseta: {}, short: {}, calca: {}, tenis: {} };
  });

  useEffect(() => {
    try { localStorage.setItem(storageKey, JSON.stringify(selected)); }
    catch (e) { console.warn('save selected_Crrsl_Adidas', e); }
  }, [selected]);

  // get current user from AuthContext to write per-user armario
  const { user } = useContext(AuthContext);
  const getUserKey = () => (user ? (user.id || user.email || user.name || 'user') : 'guest');

  // helper to map carousel group names to Armario categories
  const mapGroupToArmario = (group) => {
    switch (group) {
      case 'camiseta': return 'camiseta';
      case 'short':
      case 'calca': return 'parteDeBaixo';
      case 'tenis': return 'tenis';
      default: return 'camiseta';
    }
  };

  // items map so we can resolve an image url by group+index
  const itemsMap = {
    camiseta: itemsCamiseta,
    short: itemsShort,
    calca: itemsCalça,
    tenis: itemsTenis,
  };

  const toggleSelect = (group, idx) => {
    setSelected(prev => {
      const next = { ...(prev || {}) };
      next[group] = { ...(next[group] || {}) };
      const wasSelected = !!(prev && prev[group] && prev[group][idx]);
      if (wasSelected) delete next[group][idx]; else next[group][idx] = true;

      // sync to per-user armarioAdded in localStorage
      try {
        const kUser = getUserKey();
        const armarioKey = `armarioAdded_${kUser}`;
        const raw = localStorage.getItem(armarioKey) || localStorage.getItem('armarioAdded');
        const armario = raw ? JSON.parse(raw) : {};
        const cat = mapGroupToArmario(group);
        armario[cat] = armario[cat] || [];
        const imgUrl = itemsMap[group] && itemsMap[group][idx] && itemsMap[group][idx].img;
        if (imgUrl) {
          if (!wasSelected) {
            if (!armario[cat].includes(imgUrl)) armario[cat].push(imgUrl);
          } else {
            armario[cat] = armario[cat].filter(u => u !== imgUrl);
          }
        }
        localStorage.setItem(armarioKey, JSON.stringify(armario));
      } catch (e) {
        console.warn('sync armarioAdded', e);
      }

      return next;
    });
  };

  return (
    <>
      <div className='caroseul-seleção'>
        <h1 id='titulo'>{tituloCamiseta}</h1>
        <div className='caroseul'>
          <button onClick={() => scroll(carouselRefCamiseta, 'left')} id='left'>&#8249;</button>

          <div className="carousel2" ref={carouselRefCamiseta}>
            {itemsCamiseta.map((list, index) => (
              <div className='div-card' key={index}>
                <div className="form-check hanger">
                  <input
                    className="hanger-checkbox"
                    type="checkbox"
                    id={`hanger-camiseta-${index}`}
                    aria-label={`Selecionar camiseta ${index + 1}`}
                    checked={!!selected?.camiseta?.[index]}
                    onChange={() => toggleSelect('camiseta', index)}
                  />
                  <label className="hanger-label" htmlFor={`hanger-camiseta-${index}`}>
                    <img src="/cabide.png" alt="cabide" className="hanger-icon-outline" />
                  </label>
                </div>
                <img src={list.img} alt={list.alt} id='img-item' />
              </div>
            ))}
          </div>

          <button onClick={() => scroll(carouselRefCamiseta, 'right')} id='right'>&#8250;</button>
        </div>
      </div>

      <div className='caroseul-seleção'>
        <h1 id='titulo'>{tituloShort}</h1>
        <div className='caroseul'>
          <button onClick={() => scroll(carouselRefShort, 'left')} id='left'>&#8249;</button>

          <div className="carousel2" ref={carouselRefShort}>
            {itemsShort.map((list, index) => (
              <div className='div-card' key={index}>
                <div className="form-check hanger">
                  <input
                    className="hanger-checkbox"
                    type="checkbox"
                    id={`hanger-short-${index}`}
                    aria-label={`Selecionar short ${index + 1}`}
                    checked={!!selected?.short?.[index]}
                    onChange={() => toggleSelect('short', index)}
                  />
                  <label className="hanger-label" htmlFor={`hanger-short-${index}`}>
                    <img src="/cabide.png" alt="cabide" className="hanger-icon-outline" />
                  </label>
                </div>
                <img src={list.img} alt={list.alt} id='img-item' />
              </div>
            ))}
          </div>

          <button onClick={() => scroll(carouselRefShort, 'right')} id='right'>&#8250;</button>
        </div>
      </div>

      <div className='caroseul-seleção'>
        <h1 id='titulo'>{tituloCalça}</h1>
        <div className='caroseul'>
          <button onClick={() => scroll(carouselRefCalça, 'left')} id='left'>&#8249;</button>

          <div className="carousel2" ref={carouselRefCalça}>
            {itemsCalça.map((list, index) => (
              <div className='div-card' key={index}>
                <div className="form-check hanger">
                  <input
                    className="hanger-checkbox"
                    type="checkbox"
                    id={`hanger-calça-${index}`}
                    aria-label={`Selecionar calça ${index + 1}`}
                    checked={!!selected?.calca?.[index]}
                    onChange={() => toggleSelect('calca', index)}
                  />
                  <label className="hanger-label" htmlFor={`hanger-calça-${index}`}>
                    <img src="/cabide.png" alt="cabide" className="hanger-icon-outline" />
                  </label>
                </div>
                <img src={list.img} alt={list.alt} id='img-item' />
              </div>
            ))}
          </div>

          <button onClick={() => scroll(carouselRefCalça, 'right')} id='right'>&#8250;</button>
        </div>
      </div>
      
      <div className='caroseul-seleção'>
        <h1 id='titulo'>{tituloTenis}</h1>
        <div className='caroseul'>
          <button onClick={() => scroll(carouselRefTenis, 'left')} id='left'>&#8249;</button>

          <div className="carousel2" ref={carouselRefTenis}>
            {itemsTenis.map((list, index) => (
              <div className='div-card' key={index}>
                <div className="form-check hanger">
                  <input
                    className="hanger-checkbox"
                    type="checkbox"
                    id={`hanger-tenis-${index}`}
                    aria-label={`Selecionar tenis ${index + 1}`}
                    checked={!!selected?.tenis?.[index]}
                    onChange={() => toggleSelect('tenis', index)}
                  />
                  <label className="hanger-label" htmlFor={`hanger-tenis-${index}`}>
                    <img src="/cabide.png" alt="cabide" className="hanger-icon-outline" />
                  </label>
                </div>
                <img src={list.img} alt={list.alt} id='img-item' />
              </div>
            ))}
          </div>

          <button onClick={() => scroll(carouselRefTenis, 'right')} id='right'>&#8250;</button>
        </div>
      </div>
    </>
  )
}

export default Carousel;