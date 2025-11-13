import React from 'react';
import './itens.css';

function Cards({ images = ['/Categoria/Blusa_categ.png'], count }) {
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