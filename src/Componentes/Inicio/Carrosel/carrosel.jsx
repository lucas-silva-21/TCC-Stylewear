import React, { useState, useEffect } from 'react';
import './Carrosel.css';

const images = [
  './recomendados/streetwear.jpeg',
  './recomendados/y2k.jpeg',
  './recomendados/sportlife.jpeg',
  './recomendados/opium.jpeg',
];

const Carrosel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Imagem ${index + 1}`} className="carousel-image" />
        ))}
      </div>
    </div>
  );
};

export default Carrosel;