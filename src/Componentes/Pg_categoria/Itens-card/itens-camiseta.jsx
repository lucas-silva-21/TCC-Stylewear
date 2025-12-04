import './itens.css'

function Cards({ images = [
  '/Fotos - TCC (adidas/cm 1.png',
  '/Fotos - TCC (adidas/cm 2.png',
  '/Fotos - TCC (adidas/cm 3.png',
  '/Fotos - TCC (adidas/cm 4.png',
  '/Fotos - TCC (adidas/cm 5.png',
  '/Fotos - TCC (adidas/cm 6.png',
  '/Fotos - TCC (adidas/cm 7.png',
  '/Fotos - TCC (adidas/cm 8.png',
  '/Fotos - TCC (adidas/cm 9.png',
  '/Fotos - TCC (adidas/cm 10.png',
  '/Fotos - TCC (adidas/cm 11.png',
  '/Fotos - TCC (adidas/cm 12.png',
  '/Fotos - TCC (adidas/cm 13.png',
  '/Fotos - TCC (adidas/cm 14.png',
  '/Fotos - TCC (adidas/cm 15.png',
  '/Fotos - TCC (lacoste/c1.png',
  '/Fotos - TCC (lacoste/c2.png',
  '/Fotos - TCC (lacoste/c3.png',
  '/Fotos - TCC (lacoste/c4.png',
  '/Fotos - TCC (lacoste/c5.png',
  '/Fotos - TCC (lacoste/c6.png',
  '/Fotos - TCC (lacoste/c7.png',
  '/Fotos - TCC (lacoste/c8.png',
  '/Fotos - TCC (lacoste/c9.png',
  '/Fotos - TCC (lacoste/c10.png',
  '/Fotos - TCC (lacoste/c11.png',
  '/Fotos - TCC (lacoste/c12.png',
  '/Fotos - TCC (lacoste/c13.png',
  '/Fotos - TCC (lacoste/c14.png',
  '/Fotos - TCC (lacoste/c15.png',
  '/Fotos - TCC (nike/b1.png',
  '/Fotos - TCC (nike/b2.png',
  '/Fotos - TCC (nike/b3.png',
  '/Fotos - TCC (nike/b4.png',
  '/Fotos - TCC (nike/b5.png',
  '/Fotos - TCC (nike/b6.png',
  '/Fotos - TCC (nike/b7.png',
  '/Fotos - TCC (nike/b8.png',
  '/Fotos - TCC (nike/b9.png',
  '/Fotos - TCC (nike/b10.png',
  '/Fotos - TCC (nike/b11.png',
  '/Fotos - TCC (nike/b12.png',
  '/Fotos - TCC (nike/b13.png',
  '/Fotos - TCC (nike/b14.png',
  '/Fotos - TCC (nike/b15.png',
  '/Fotos - TCC (puma/b1.png',
  '/Fotos - TCC (puma/b2.png',
  '/Fotos - TCC (puma/b3.png',
  '/Fotos - TCC (puma/b4.png',
  '/Fotos - TCC (puma/b5.png',
  '/Fotos - TCC (puma/b6.png',
  '/Fotos - TCC (puma/b7.png',
  '/Fotos - TCC (puma/b8.png',
  '/Fotos - TCC (puma/b9.png',
  '/Fotos - TCC (puma/b10.png',
  '/Fotos - TCC (puma/b11.png',
  '/Fotos - TCC (puma/b12.png',
  '/Fotos - TCC (puma/b13.png',
  '/Fotos - TCC (puma/b14.png',
  '/Fotos - TCC (puma/b15.png',
  '/Fotos - TCC (umbro/b1.png',
  '/Fotos - TCC (umbro/b2.png',
  '/Fotos - TCC (umbro/b3.png',
  '/Fotos - TCC (umbro/b4.png',
  '/Fotos - TCC (umbro/b5.png',
  '/Fotos - TCC (umbro/b6.png',
  '/Fotos - TCC (umbro/b7.png',
  '/Fotos - TCC (umbro/b8.png',
  '/Fotos - TCC (umbro/b9.png',
  '/Fotos - TCC (umbro/b10.png',
  '/Fotos - TCC (umbro/b11.png',
  '/Fotos - TCC (umbro/b12.png',
  '/Fotos - TCC (umbro/b13.png',
  '/Fotos - TCC (umbro/b14.png',
  '/Fotos - TCC (umbro/b15.png',
  ], count }) {
  const totalImages = images.length;
  const itemCount = typeof count === 'number' ? count : totalImages;

  const item_Camisetas = Array.from({ length: itemCount }, (_, i) => ({
    img: images[i % images.length],
    alt: `Item ${i + 1}`
  }));


  return (
    <>
      {item_Camisetas.map((list, index) => (
        <div className='div-card2' key={index}>
          <img src={list.img} alt={list.alt} id='img-item2' />
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
        </div>
      ))}
    </>
  )
}

export default Cards;