import { useRef } from "react";
import './armario.css';

function Armario() {

    {/*const item_imgCamisetas = [
        { img: './Calça1.png', alt: 'camiseta' },
        { img: './Camiseta1.png', alt: 'camiseta' },
        { img: './Short1.png', alt: 'camiseta' },
        { img: './Tenis1.png', alt: 'camiseta' },
        { img: './Calça1.png', alt: 'camiseta' },
        { img: './Camiseta1.png', alt: 'camiseta' },
        { img: './Short1.png', alt: 'camiseta' },
        { img: './Tenis1.png', alt: 'camiseta' },
        { img: './Calça1.png', alt: 'camiseta' },
        { img: './Camiseta1.png', alt: 'camiseta' },
        { img: './Tenis1.png', alt: 'camiseta' },
    ];

    const carouselRef = useRef(null);

    const scroll = (direction) => {
        const { current } = carouselRef;
        if (direction === "left") {
            current.scrollBy({ left: -224, behavior: 'smooth' });
        } else {
            current.scrollBy({ left: 224, behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className='caroseul-armario'>
                <div className="caroseul-bone">
                    <button onClick={() => scroll('left')} id='left2'>&#8249;</button>
                    <div className="armario" ref={carouselRef}>
                        {item_imgCamisetas.map((list, index) => (
                            <div className='div-card_armario' key={index}>
                                <img src={list.img} alt={list.alt} id='img-item' />
                            </div>
                        ))}
                    </div>
                    <button onClick={() => scroll('right')} id='right2'>&#8250;</button>
                </div>

                <div className="caroseul-blusa">
                    <button onClick={() => scroll('left')} id='left2'>&#8249;</button>
                    <div className="armario" ref={carouselRef}>
                        {item_imgCamisetas.map((list, index) => (
                            <div className='div-card_armario' key={index}>
                                <img src={list.img} alt={list.alt} id='img-item' />
                            </div>
                        ))}
                    </div>
                    <button onClick={() => scroll('right')} id='right2'>&#8250;</button>
                </div>

                <div className="caroseul-calça">
                    <button onClick={() => scroll('left')} id='left2'>&#8249;</button>
                    <div className="armario" ref={carouselRef}>
                        {item_imgCamisetas.map((list, index) => (
                            <div className='div-card_armario' key={index}>
                                <img src={list.img} alt={list.alt} id='img-item' />
                            </div>
                        ))}
                    </div>
                    <button onClick={() => scroll('right')} id='right2'>&#8250;</button>
                </div>

                <div className="caroseul-tenis">
                    <button onClick={() => scroll('left')} id='left2'>&#8249;</button>
                    <div className="armario" ref={carouselRef}>
                        {item_imgCamisetas.map((list, index) => (
                            <div className='div-card_armario' key={index}>
                                <img src={list.img} alt={list.alt} id='img-item' />
                            </div>
                        ))}
                    </div>
                    <button onClick={() => scroll('right')} id='right2'>&#8250;</button>
                </div>
            </div>
        </>
    )*/}

    
}
export default Armario;