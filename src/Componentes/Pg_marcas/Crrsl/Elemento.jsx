import React, { useState, useEffect, useRef } from 'react';
import './elemento.css'

function Seleção(props) {

    const carouselRef = useRef(null);

    const item_imgCamisetasUmbro = [
        { item: '', img: './Calça1.png', alt: 'camiseta', },
        { item: '', img: './Camiseta1.png', alt: 'camiseta', },
        { item: '', img: './Camiseta1.png', alt: 'camiseta', },
        { item: '', img: './Camiseta1.png', alt: 'camiseta', },
        { item: '', img: './Camiseta1.png', alt: 'camiseta', },
        { item: '', img: './Calça1.png', alt: 'camiseta', },
        { item: '', img: './Camiseta1.png', alt: 'camiseta', },
        { item: '', img: './Camiseta1.png', alt: 'camiseta', },
        { item: '', img: './Camiseta1.png', alt: 'camiseta', },
        { item: '', img: './Camiseta1.png', alt: 'camiseta', },
        { item: '', img: './Calça1.png', alt: 'camiseta', },
    ];

    const item_imgTenisUmbro = [
        { item: '', img: './Calça1.png', alt: 'tenis', },
        { item: '', img: './Tenis1.png', alt: 'tenis', },
        { item: '', img: './Tenis1.png', alt: 'tenis', },
        { item: '', img: './Tenis1.png', alt: 'tenis', },
        { item: '', img: './Tenis1.png', alt: 'tenis', },
        { item: '', img: './Calça1.png', alt: 'tenis', },
        { item: '', img: './Tenis1.png', alt: 'tenis', },
        { item: '', img: './Tenis1.png', alt: 'tenis', },
        { item: '', img: './Tenis1.png', alt: 'tenis', },
        { item: '', img: './Tenis1.png', alt: 'tenis', },
        { item: '', img: './Calça1.png', alt: 'tenis', },
    ];
    
    const scroll = (direction) => {
        const { current } = carouselRef;
        if (direction === "left") {
            current.scrollBy({ left: -300, behavior: 'smooth' });
        } else {
            current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className='caroseul-seleção'>
                <h1 id='titulo'>{props.titulo}</h1>
                <div className='caroseul'>
                    <button onClick={() => scroll('left')} id='left'>&#8249;</button>
                    <div className="carousel2" ref={carouselRef}>
                        {item_imgTenisUmbro.map((item, index) => (
                            <div className='div-card' key={index}>
                                <a href={item.item}><img src={item.img} alt={item.alt} id='img-item'/></a>
                            </div>
                        ))}
                    </div>
                    <button onClick={() => scroll('right')} id='right'>&#8250;</button>
                </div>
            </div>
        </>
    )
}

export default Seleção;