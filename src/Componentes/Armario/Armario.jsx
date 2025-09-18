import { useRef } from "react";

function Armario() {

    const item_imgTenisUmbro = [
        { item: '', img: './Calça1.png', alt: 'camiseta', },
        { item: '', img: './Tenis1.png', alt: 'camiseta', },
        { item: '', img: './Tenis1.png', alt: 'camiseta', },
        { item: '', img: './Tenis1.png', alt: 'camiseta', },
        { item: '', img: './Tenis1.png', alt: 'camiseta', },
        { item: '', img: './Calça1.png', alt: 'camiseta', },
        { item: '', img: './Tenis1.png', alt: 'camiseta', },
        { item: '', img: './Tenis1.png', alt: 'camiseta', },
        { item: '', img: './Tenis1.png', alt: 'camiseta', },
        { item: '', img: './Tenis1.png', alt: 'camiseta', },
        { item: '', img: './Calça1.png', alt: 'camiseta', },
    ];

    const carouselRef = useRef(null);

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
            <div>
                <button onClick={() => scroll('left')} style={{ transition: "1s" }} id="l">&#8249;</button>
                <div id="carouselImg">
                    <div>
                        {item_imgTenis.map((item, index) => (
                            <div className='div-card' key={index}>
                                <a href={item.item}><img src={item.img} alt={item.alt} id='img-item' /></a>
                            </div>
                        ))}
                    </div>

                </div>
                <button onClick={() => scroll('right')} style={{ transition: "1s" }} id="r">&#8250;</button>
            </div>
        </>
    )
}
export default Armario;