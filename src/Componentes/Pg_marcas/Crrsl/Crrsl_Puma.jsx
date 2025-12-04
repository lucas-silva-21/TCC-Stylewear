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
      'Fotos - TCC (puma/t1.png',
      'Fotos - TCC (puma/t2.png',
      'Fotos - TCC (puma/t3.png',
      'Fotos - TCC (puma/t4.png',
      'Fotos - TCC (puma/t5.png',
      'Fotos - TCC (puma/t6.png',
      'Fotos - TCC (puma/t7.png',
      'Fotos - TCC (puma/t8.png',
      'Fotos - TCC (puma/t9.png',
      'Fotos - TCC (puma/t10.png',
      'Fotos - TCC (puma/t11.png',
      'Fotos - TCC (puma/t12.png',
      'Fotos - TCC (puma/t13.png',
      'Fotos - TCC (puma/t14.png',
      'Fotos - TCC (puma/t15.png'],
      24,
      'Tênis puma'
    ),
    'Shorts': makeItems([
      'Fotos - TCC (puma/s1.png',
      'Fotos - TCC (puma/s2.png',
      'Fotos - TCC (puma/s3.png',
      'Fotos - TCC (puma/s4.png',
      'Fotos - TCC (puma/s5.png',
      'Fotos - TCC (puma/s6.png',
      'Fotos - TCC (puma/s7.png',
      'Fotos - TCC (puma/s8.png',
      'Fotos - TCC (puma/s9.png',
      'Fotos - TCC (puma/s10.png',
      'Fotos - TCC (puma/s12.png',
      'Fotos - TCC (puma/s13.png',
      'Fotos - TCC (puma/s14.png',
      'Fotos - TCC (puma/s15.png'],
      24,
      'Short puma'
    ),
    'Calças': makeItems([
      'Fotos - TCC (puma/c1.png',
      'Fotos - TCC (puma/c2.png',
      'Fotos - TCC (puma/c3.png',
      'Fotos - TCC (puma/c4.png',
      'Fotos - TCC (puma/c5.png',
      'Fotos - TCC (puma/c6.png',
      'Fotos - TCC (puma/c7.png',
      'Fotos - TCC (puma/c8.png',
      'Fotos - TCC (puma/c9.png',
      'Fotos - TCC (puma/c10.png', 
      'Fotos - TCC (puma/c11.png',
      'Fotos - TCC (puma/c12.png',
      'Fotos - TCC (puma/c13.png',
      'Fotos - TCC (puma/c14.png',
      'Fotos - TCC (puma/c15.png'],
      24,
      'Calça puma'
    ),
    'Camisetas': makeItems([
      'Fotos - TCC (puma/b1.png',
      'Fotos - TCC (puma/b2.png',
      'Fotos - TCC (puma/b3.png',
      'Fotos - TCC (puma/b4.png',
      'Fotos - TCC (puma/b5.png',
      'Fotos - TCC (puma/b6.png',
      'Fotos - TCC (puma/b7.png',
      'Fotos - TCC (puma/b8.png',
      'Fotos - TCC (puma/b9.png',
      'Fotos - TCC (puma/b10.png', 
      'Fotos - TCC (puma/b11.png',
      'Fotos - TCC (puma/b12.png',
      'Fotos - TCC (puma/b13.png',
      'Fotos - TCC (puma/b14.png',
      'Fotos - TCC (puma/b15.png'],
      24,
      'Camiseta puma'
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
    </>
  )
}

export default Carousel;