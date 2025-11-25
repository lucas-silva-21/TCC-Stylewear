import React, { useRef } from 'react';
import './crrsl.css'

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

  // helper: gera `count` itens alternando entre os caminhos em `images` (caminhos absolutos da pasta public)
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
      'Fotos - TCC (lacoste/t1.png',
      'Fotos - TCC (lacoste/t2.png',
      'Fotos - TCC (lacoste/t3.png',
      'Fotos - TCC (lacoste/t4.png',
      'Fotos - TCC (lacoste/t5.png',
      'Fotos - TCC (lacoste/t6.png',
      'Fotos - TCC (lacoste/t7.png',
      'Fotos - TCC (lacoste/t8.png',
      'Fotos - TCC (lacoste/t9.png',
      'Fotos - TCC (lacoste/t10.png',
      'Fotos - TCC (lacoste/t11.png',
      'Fotos - TCC (lacoste/t12.png',
      'Fotos - TCC (lacoste/t13.png',
      'Fotos - TCC (lacoste/t14.png',
      'Fotos - TCC (lacoste/t15.png'],
      24,
      'Tênis lacoste'
    ),
    'Shorts': makeItems([
      'Fotos - TCC (lacoste/s1.png',
      'Fotos - TCC (lacoste/s2.png',
      'Fotos - TCC (lacoste/ss3.png',
      'Fotos - TCC (lacoste/s4.png',
      'Fotos - TCC (lacoste/s5.png',
      'Fotos - TCC (lacoste/s6.png',
      'Fotos - TCC (lacoste/s7.png',
      'Fotos - TCC (lacoste/s8.png',
      'Fotos - TCC (lacoste/s9.png',
      'Fotos - TCC (lacoste/s10.png',
      'Fotos - TCC (lacoste/s12.png',
      'Fotos - TCC (lacoste/s13.png',
      'Fotos - TCC (lacoste/s14.png',
      'Fotos - TCC (lacoste/s15.png'],
      24,
      'Short lacoste'
    ),
    'Calças': makeItems([
      'Fotos - TCC (lacoste/ç1.png',
      'Fotos - TCC (lacoste/ç2.png',
      'Fotos - TCC (lacoste/ç3.png',
      'Fotos - TCC (lacoste/ç4.png',
      'Fotos - TCC (lacoste/ç5.png',
      'Fotos - TCC (lacoste/ç6.png',
      'Fotos - TCC (lacoste/ç7.png',
      'Fotos - TCC (lacoste/ç8.png',
      'Fotos - TCC (lacoste/ç9.png',
      'Fotos - TCC (lacoste/ç10.png', 
      'Fotos - TCC (lacoste/ç11.png',
      'Fotos - TCC (lacoste/ç12.png',
      'Fotos - TCC (lacoste/ç13.png',
      'Fotos - TCC (lacoste/ç14.png',
      'Fotos - TCC (lacoste/ç15.png'],
      24,
      'Calça lacoste'
    ),
    'Camisetas': makeItems([
      'Fotos - TCC (lacoste/c1.png',
      'Fotos - TCC (lacoste/c2.png',
      'Fotos - TCC (lacoste/c3.png',
      'Fotos - TCC (lacoste/c4.png',
      'Fotos - TCC (lacoste/c5.png',
      'Fotos - TCC (lacoste/c6.png',
      'Fotos - TCC (lacoste/c7.png',
      'Fotos - TCC (lacoste/c8.png',
      'Fotos - TCC (lacoste/c9.png',
      'Fotos - TCC (lacoste/c10.png', 
      'Fotos - TCC (lacoste/c11.png',
      'Fotos - TCC (lacoste/c12.png',
      'Fotos - TCC (lacoste/c13.png',
      'Fotos - TCC (lacoste/c14.png',
      'Fotos - TCC (lacoste/c15.png'],
      24,
      'Camiseta lacoste'
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

  return (
    <>
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

    </>
  )
}

export default Carousel;