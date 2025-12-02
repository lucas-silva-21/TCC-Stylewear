import React, { useRef } from 'react';
import './crrsl.css'

function Carousel(props) {

  const { titulo } = props;
  const carouselRef = useRef(null);

  // const item_imgCamisetasUmbro = [
  //     { item: '', img: './Calça1.png', alt: 'camiseta'},
  //     { item: '', img: './Camiseta1.png', alt: 'camiseta', },
  //     { item: '', img: './Camiseta1.png', alt: 'camiseta', },
  //     { item: '', img: './Camiseta1.png', alt: 'camiseta', },
  //     { item: '', img: './Camiseta1.png', alt: 'camiseta', },
  //     { item: '', img: './Calça1.png', alt: 'camiseta', },
  //     { item: '', img: './Camiseta1.png', alt: 'camiseta', },
  //     { item: '', img: './Camiseta1.png', alt: 'camiseta', },
  //     { item: '', img: './Camiseta1.png', alt: 'camiseta', },
  //     { item: '', img: './Camiseta1.png', alt: 'camiseta', },
  //     { item: '', img: './Calça1.png', alt: 'camiseta', },

  //     {item1: '', img1: './Tenis1.png', alt1: 'short'},
  //     {item1: '', img1: './Short1.png', alt1: 'short'},
  //     {item1: '', img1: './Short1.png', alt1: 'short'},
  //     {item1: '', img1: './Short1.png', alt1: 'short'},
  //     {item1: '', img1: './Tenis1.png', alt1: 'short'},
  //     {item1: '', img1: './Tenis1.png', alt1: 'short'},
  //     {item1: '', img1: './Short1.png', alt1: 'short'},
  //     {item1: '', img1: './Short1.png', alt1: 'short'},
  //     {item1: '', img1: './Short1.png', alt1: 'short'},
  //     {item1: '', img1: './Tenis1.png', alt1: 'short'},

  //     {item2: '', img2: './Tenis1.png', alt2: 'short'},
  //     {item2: '', img2: './Short1.png', alt2: 'short'},
  //     {item2: '', img2: './Short1.png', alt2: 'short'},
  //     {item2: '', img2: './Short1.png', alt2: 'short'},
  //     {item2: '', img2: './Tenis1.png', alt2: 'short'},
  //     {item2: '', img2: './Tenis1.png', alt2: 'short'},
  //     {item2: '', img2: './Short1.png', alt2: 'short'},
  //     {item2: '', img2: './Short1.png', alt2: 'short'},
  //     {item2: '', img2: './Short1.png', alt2: 'short'},
  //     {item2: '', img2: './Tenis1.png', alt2: 'short'},
  // ];

  // const item_imgTenisUmbro = [
  //     { item: '', img: './Calça1.png', alt: 'tenis', },
  //     { item: '', img: './Tenis1.png', alt: 'tenis', },
  //     { item: '', img: './Tenis1.png', alt: 'tenis', },
  //     { item: '', img: './Tenis1.png', alt: 'tenis', },
  //     { item: '', img: './Tenis1.png', alt: 'tenis', },
  //     { item: '', img: './Calça1.png', alt: 'tenis', },
  //     { item: '', img: './Tenis1.png', alt: 'tenis', },
  //     { item: '', img: './Tenis1.png', alt: 'tenis', },
  //     { item: '', img: './Tenis1.png', alt: 'tenis', },
  //     { item: '', img: './Tenis1.png', alt: 'tenis', },
  //     { item: '', img: './Calça1.png', alt: 'tenis', },
  // ];


  const DATA_UMBRO = {
    'Tênis': Array.from({ length: 12 }, () => ({
      item: '/',
      img: './Tenis1.png',
      alt: 'Tênis Umbro',
    })),
    'Shorts': Array.from({ length: 12 }, () => ({
      item: '',
      img: '/Short1.png',
      alt: 'Short Umbro',
    })),
    'Calças': Array.from({ length: 12 }, () => ({
      item: '',
      img: '/Calça1.png',
      alt: 'Calça Umbro',
    })),
    'Camisetas': Array.from({ length: 12 }, () => ({
      item: '',
      img: '/Camiseta1.png',
      alt: 'Camiseta Umbro',
    })),
  };

  const scroll = (direction) => {
    const { current } = carouselRef;
    if (direction === "left") {
      current.scrollBy({ left: -300, behavior: 'smooth' });
    } else {
      current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const items = DATA_UMBRO[titulo] || [];

  return (
    <>
      <div className='caroseul-seleção'>
        <h1 id='titulo'>{titulo}</h1>
        <div className='caroseul'>

          <button onClick={() => scroll('left')} id='left'>&#8249;</button>

          <div className="carousel2" ref={carouselRef}>
            {items.map((list, index) => (
              <div className='div-card' key={index}>
                <div className="form-check hanger">
                  <input
                    className="hanger-checkbox"
                    type="checkbox"
                    id={`hanger-blusa-${index}`}
                    aria-label={`Selecionar blusa ${index + 1}`}
                  />
                  <label className="hanger-label" htmlFor={`hanger-blusa-${index}`}>
                    <img src="/cabide.png" alt="cabide" className="hanger-icon-outline"/>
                  </label>
                </div>
                <a href={list.item}><img src={list.img} alt={list.alt} id='img-item'/></a>
              </div>
            ))}
          </div>

          <button onClick={() => scroll('right')} id='right'>&#8250;</button>

        </div>
      </div>
    </>
  )
}

export default Carousel;