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
    'Tênis': makeItems(['/Pg_Adidas/Tenis1.png', '/Pg_Adidas/Tenis2.png'], 24, 'Tênis Adidas'),
    'Shorts': makeItems(['/Pg_Adidas/Short1.png', '/Pg_Adidas/Short2.png'], 24, 'Short Adidas'),
    'Calças': makeItems(['/Pg_Adidas/Calça1.png'], 24, 'Calça Adidas'),
    'Camisetas': makeItems(['/Pg_Adidas/Camiseta1.png'], 24, 'Camiseta Adidas'),
    'Blusas': makeItems(['/Pg_Adidas/Blusa1.png'], 24, 'Blusa Adidas'),
    'Bonés': makeItems(['/Pg_Adidas/Bone1.png'], 24, 'Boné Adidas'),
    'Acessórios': makeItems(['/Pg_Adidas/Acessorio1.png'], 24, 'Acessório Adidas'),
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
  const itemsBlusa = DATA_UMBRO[tituloBlusa] || [];
  const itemsBone = DATA_UMBRO[tituloBone] || [];
  const itemsAcessorio = DATA_UMBRO[tituloAcessorio] || [];

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
        <h1 id='titulo'>{tituloBlusa}</h1>
        <div className='caroseul'>
          <button onClick={() => scroll(carouselRefBlusa, 'left')} id='left'>&#8249;</button>

          <div className="carousel2" ref={carouselRefBlusa}>
            {itemsBlusa.map((list, index) => (
              <div className='div-card' key={index}>
                <div className="form-check hanger">
                  <input
                    className="hanger-checkbox"
                    type="checkbox"
                    id={`hanger-blusa-${index}`}
                    aria-label={`Selecionar blusa ${index + 1}`}
                  />
                  <label className="hanger-label" htmlFor={`hanger-blusa-${index}`}>
                    <img src="/cabide.png" alt="cabide" className="hanger-icon-outline" />
                  </label>
                </div>
                <img src={list.img} alt={list.alt} id='img-item' />
              </div>
            ))}
          </div>

          <button onClick={() => scroll(carouselRefBlusa, 'right')} id='right'>&#8250;</button>
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
        <h1 id='titulo'>{tituloBone}</h1>
        <div className='caroseul'>
          <button onClick={() => scroll(carouselRefBone, 'left')} id='left'>&#8249;</button>

          <div className="carousel2" ref={carouselRefBone}>
            {itemsBone.map((list, index) => (
              <div className='div-card' key={index}>
                <div className="form-check hanger">
                  <input
                    className="hanger-checkbox"
                    type="checkbox"
                    id={`hanger-bone-${index}`}
                    aria-label={`Selecionar bone ${index + 1}`}
                  />
                  <label className="hanger-label" htmlFor={`hanger-bone-${index}`}>
                    <img src="/cabide.png" alt="cabide" className="hanger-icon-outline" />
                  </label>
                </div>
                <img src={list.img} alt={list.alt} id='img-item' />
              </div>
            ))}
          </div>

          <button onClick={() => scroll(carouselRefBone, 'right')} id='right'>&#8250;</button>
        </div>
      </div>

    </>
  )
}

export default Carousel;