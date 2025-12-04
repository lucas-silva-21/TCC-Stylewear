import React from 'react';
import './itens.css';

function Cards({ images = ['/Categoria/Blusa_categ.png',
  '/Fotos - TCC (adidas/m1.png',
  '/Fotos - TCC (adidas/m2.png',
  '/Fotos - TCC (adidas/m3.png',
  '/Fotos - TCC (adidas/m4.png',
  '/Fotos - TCC (adidas/m5.png',
  '/Fotos - TCC (adidas/m6.png',
  '/Fotos - TCC (adidas/m7.png',
  '/Fotos - TCC (adidas/m8.png',
  '/Fotos - TCC (adidas/m9.png',
  '/Fotos - TCC (adidas/m10.png',
  '/Fotos - TCC (lacoste/m1.png',
  '/Fotos - TCC (lacoste/m2.png',
  '/Fotos - TCC (lacoste/m3.png',
  '/Fotos - TCC (lacoste/m4.png',
  '/Fotos - TCC (lacoste/m5.png',
  '/Fotos - TCC (lacoste/m6.png',
  '/Fotos - TCC (lacoste/m7.png',
  '/Fotos - TCC (lacoste/m8.png',
  '/Fotos - TCC (lacoste/m9.png',
  '/Fotos - TCC (lacoste/m10.png',
  '/Fotos - TCC (lacoste/m11.png',
  '/Fotos - TCC (lacoste/m12.png',
  '/Fotos - TCC (lacoste/m13.png',
  '/Fotos - TCC (lacoste/m14.png',
  '/Fotos - TCC (lacoste/m15.png',
  '/Fotos - TCC (nike/m1.png',
  '/Fotos - TCC (nike/m2.png',
  '/Fotos - TCC (nike/m3.png',
  '/Fotos - TCC (nike/m4.png',
  '/Fotos - TCC (nike/m5.png',
  '/Fotos - TCC (nike/m6.png',
  '/Fotos - TCC (nike/m7.png',
  '/Fotos - TCC (nike/m8.png',
  '/Fotos - TCC (nike/m9.png',
  '/Fotos - TCC (nike/m10.png',
  '/Fotos - TCC (puma/m1.png',
  '/Fotos - TCC (puma/m2.png',
  '/Fotos - TCC (puma/m3.png',
  '/Fotos - TCC (puma/m4.png',
  '/Fotos - TCC (puma/m5.png',
  '/Fotos - TCC (puma/m6.png',
  '/Fotos - TCC (puma/m7.png',
  '/Fotos - TCC (puma/m8.png',
  '/Fotos - TCC (puma/m9.png',
  '/Fotos - TCC (puma/m10.png',
  '/Fotos - TCC (umbro/m1.png',
  '/Fotos - TCC (umbro/m2.png',
  '/Fotos - TCC (umbro/m3.png',
  '/Fotos - TCC (umbro/m4.png',
  '/Fotos - TCC (umbro/m5.png',
  '/Fotos - TCC (umbro/m6.png',
  '/Fotos - TCC (umbro/m7.png',
  '/Fotos - TCC (umbro/m8.png',
  '/Fotos - TCC (umbro/m9.png',
  '/Fotos - TCC (umbro/m10.png',
], count }) {
  const totalImages = images.length;
  const itemCount = typeof count === 'number' ? count : totalImages;

  const item_Blusas = Array.from({ length: itemCount }, (_, i) => ({
    img: images[i % images.length],
    alt: `Blusa ${i + 1}º`
  }));

  return (
    <>
      {item_Blusas.map((list, index) => (
        <div className='div-card2' key={index}>
          <img src={list.img} alt={list.alt} id='img-item2' />
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
        </div>
      ))}
    </>
  )
}

export default Cards;