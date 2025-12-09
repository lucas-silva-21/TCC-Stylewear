import React, { useRef, useState, useEffect } from 'react';
import './crrsl.css'

function Carousel(props) {
  const { tituloTenis, tituloShort, tituloCamiseta, tituloCalça, tituloBlusa, tituloBone, tituloAcessorio } = props;

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
      'Fotos - TCC (umbro/t1.png',
      'Fotos - TCC (umbro/t2.png',
      'Fotos - TCC (umbro/t3.png',
      'Fotos - TCC (umbro/t4.png',
      'Fotos - TCC (umbro/t5.png',
      'Fotos - TCC (umbro/t6.png',
      'Fotos - TCC (umbro/t7.png',
      'Fotos - TCC (umbro/t8.png',
      'Fotos - TCC (umbro/t9.png',
      'Fotos - TCC (umbro/t10.png',
      'Fotos - TCC (umbro/t11.png',
      'Fotos - TCC (umbro/t12.png',
      'Fotos - TCC (umbro/t13.png',
      'Fotos - TCC (umbro/t14.png',
      'Fotos - TCC (umbro/t15.png'],
      24,
      'Tênis Umbro'
    ),
    'Shorts': makeItems([
      'Fotos - TCC (umbro/s1.png',
      'Fotos - TCC (umbro/s2.png',
      'Fotos - TCC (umbro/s3.png',
      'Fotos - TCC (umbro/s4.png',
      'Fotos - TCC (umbro/s5.png',
      'Fotos - TCC (umbro/s6.png',
      'Fotos - TCC (umbro/s7.png',
      'Fotos - TCC (umbro/s8.png',
      'Fotos - TCC (umbro/s9.png',
      'Fotos - TCC (umbro/s10.png',
      'Fotos - TCC (umbro/s12.png',
      'Fotos - TCC (umbro/s13.png',
      'Fotos - TCC (umbro/s14.png',
      'Fotos - TCC (umbro/s15.png'],
      24,
      'Short Umbro'
    ),
    'Calças': makeItems([
      'Fotos - TCC (umbro/c1.png',
      'Fotos - TCC (umbro/c2.png',
      'Fotos - TCC (umbro/c3.png',
      'Fotos - TCC (umbro/c4.png',
      'Fotos - TCC (umbro/c5.png',
      'Fotos - TCC (umbro/c6.png',
      'Fotos - TCC (umbro/c7.png',
      'Fotos - TCC (umbro/c8.png',
      'Fotos - TCC (umbro/c9.png',
      'Fotos - TCC (umbro/c10.png', 
      'Fotos - TCC (umbro/c11.png',
      'Fotos - TCC (umbro/c12.png',
      'Fotos - TCC (umbro/c13.png',
      'Fotos - TCC (umbro/c14.png',
      'Fotos - TCC (umbro/c15.png'],
      24,
      'Calça Umbro'
    ),
    'Camisetas': makeItems([
      'Fotos - TCC (umbro/b1.png',
      'Fotos - TCC (umbro/b2.png',
      'Fotos - TCC (umbro/b3.png',
      'Fotos - TCC (umbro/b4.png',
      'Fotos - TCC (umbro/b5.png',
      'Fotos - TCC (umbro/b6.png',
      'Fotos - TCC (umbro/b7.png',
      'Fotos - TCC (umbro/b8.png',
      'Fotos - TCC (umbro/b9.png',
      'Fotos - TCC (umbro/b10.png', 
      'Fotos - TCC (umbro/b11.png',
      'Fotos - TCC (umbro/b12.png',
      'Fotos - TCC (umbro/b13.png',
      'Fotos - TCC (umbro/b14.png',
      'Fotos - TCC (umbro/b15.png'],
      24,
      'Camiseta Umbro'
    )
  };

  // função de scroll que recebe o ref do carrossel desejado
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
  const itemsBlusa = DATA_UMBRO[tituloBlusa] || [];
  const itemsBone = DATA_UMBRO[tituloBone] || [];
  const itemsAcessorio = DATA_UMBRO[tituloAcessorio] || [];

  const keyFor = (title) => 'selected_' + (title || '').replace(/[^a-z0-9]/gi, '_').toLowerCase();
  const [selCamiseta, setSelCamiseta] = useState(() => { try { const raw = localStorage.getItem(keyFor(tituloCamiseta)); if (raw) { const arr = JSON.parse(raw); const obj = {}; Array.isArray(arr) && arr.forEach(i => { obj[i] = true; }); return obj; } } catch(e){} return {}; });
  const [selShort, setSelShort] = useState(() => { try { const raw = localStorage.getItem(keyFor(tituloShort)); if (raw) { const arr = JSON.parse(raw); const obj = {}; Array.isArray(arr) && arr.forEach(i => { obj[i] = true; }); return obj; } } catch(e){} return {}; });
  const [selCalca, setSelCalca] = useState(() => { try { const raw = localStorage.getItem(keyFor(tituloCalça)); if (raw) { const arr = JSON.parse(raw); const obj = {}; Array.isArray(arr) && arr.forEach(i => { obj[i] = true; }); return obj; } } catch(e){} return {}; });
  const [selTenis, setSelTenis] = useState(() => { try { const raw = localStorage.getItem(keyFor(tituloTenis)); if (raw) { const arr = JSON.parse(raw); const obj = {}; Array.isArray(arr) && arr.forEach(i => { obj[i] = true; }); return obj; } } catch(e){} return {}; });
  const [selBlusa, setSelBlusa] = useState(() => { try { const raw = localStorage.getItem(keyFor(tituloBlusa)); if (raw) { const arr = JSON.parse(raw); const obj = {}; Array.isArray(arr) && arr.forEach(i => { obj[i] = true; }); return obj; } } catch(e){} return {}; });
  const [selBone, setSelBone] = useState(() => { try { const raw = localStorage.getItem(keyFor(tituloBone)); if (raw) { const arr = JSON.parse(raw); const obj = {}; Array.isArray(arr) && arr.forEach(i => { obj[i] = true; }); return obj; } } catch(e){} return {}; });
  const [selAcessorio, setSelAcessorio] = useState(() => { try { const raw = localStorage.getItem(keyFor(tituloAcessorio)); if (raw) { const arr = JSON.parse(raw); const obj = {}; Array.isArray(arr) && arr.forEach(i => { obj[i] = true; }); return obj; } } catch(e){} return {}; });

  useEffect(() => { try { localStorage.setItem(keyFor(tituloCamiseta), JSON.stringify(Object.keys(selCamiseta).filter(k => selCamiseta[k]).map(k => Number(k)))); } catch(e){} }, [selCamiseta, tituloCamiseta]);
  useEffect(() => { try { localStorage.setItem(keyFor(tituloShort), JSON.stringify(Object.keys(selShort).filter(k => selShort[k]).map(k => Number(k)))); } catch(e){} }, [selShort, tituloShort]);
  useEffect(() => { try { localStorage.setItem(keyFor(tituloCalça), JSON.stringify(Object.keys(selCalca).filter(k => selCalca[k]).map(k => Number(k)))); } catch(e){} }, [selCalca, tituloCalça]);
  useEffect(() => { try { localStorage.setItem(keyFor(tituloTenis), JSON.stringify(Object.keys(selTenis).filter(k => selTenis[k]).map(k => Number(k)))); } catch(e){} }, [selTenis, tituloTenis]);
  useEffect(() => { try { localStorage.setItem(keyFor(tituloBlusa), JSON.stringify(Object.keys(selBlusa).filter(k => selBlusa[k]).map(k => Number(k)))); } catch(e){} }, [selBlusa, tituloBlusa]);
  useEffect(() => { try { localStorage.setItem(keyFor(tituloBone), JSON.stringify(Object.keys(selBone).filter(k => selBone[k]).map(k => Number(k)))); } catch(e){} }, [selBone, tituloBone]);
  useEffect(() => { try { localStorage.setItem(keyFor(tituloAcessorio), JSON.stringify(Object.keys(selAcessorio).filter(k => selAcessorio[k]).map(k => Number(k)))); } catch(e){} }, [selAcessorio, tituloAcessorio]);

  const toggle = (setter, idx) => setter(prev => { const next = { ...prev }; if (next[idx]) delete next[idx]; else next[idx] = true; return next; });

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
                    checked={!!selCamiseta[index]}
                    onChange={() => toggle(setSelCamiseta, index)}
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
                    checked={!!selShort[index]}
                    onChange={() => toggle(setSelShort, index)}
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
                    checked={!!selCalca[index]}
                    onChange={() => toggle(setSelCalca, index)}
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
                    checked={!!selTenis[index]}
                    onChange={() => toggle(setSelTenis, index)}
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