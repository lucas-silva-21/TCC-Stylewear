import './itens.css'

function Cards({ images = [
  '/Fotos - TCC (adidas/n1.png',
  '/Fotos - TCC (adidas/n2.png',
  '/Fotos - TCC (adidas/n3.png',
  '/Fotos - TCC (adidas/n4.png',
  '/Fotos - TCC (adidas/n5.png',
  '/Fotos - TCC (adidas/n6.png',
  '/Fotos - TCC (adidas/n7.png',
  '/Fotos - TCC (adidas/n8.png',
  '/Fotos - TCC (adidas/n9.png',
  '/Fotos - TCC (adidas/n10.png',
  '/Fotos - TCC (lacoste/n1.png',
  '/Fotos - TCC (lacoste/n2.png',
  '/Fotos - TCC (lacoste/n3.png',
  '/Fotos - TCC (lacoste/n4.png',
  '/Fotos - TCC (lacoste/n5.png',
  '/Fotos - TCC (lacoste/n6.png',
  '/Fotos - TCC (lacoste/n7.png',
  '/Fotos - TCC (lacoste/n8.png',
  '/Fotos - TCC (lacoste/n9.png',
  '/Fotos - TCC (lacoste/n10.png',
  '/Fotos - TCC (lacoste/n11.png',
  '/Fotos - TCC (lacoste/n12.png',
  '/Fotos - TCC (lacoste/n13.png',
  '/Fotos - TCC (lacoste/n14.png',
  '/Fotos - TCC (lacoste/n15.png',
  '/Fotos - TCC (nike/n1.png',
  '/Fotos - TCC (nike/n2.png',
  '/Fotos - TCC (nike/n3.png',
  '/Fotos - TCC (nike/n4.png',
  '/Fotos - TCC (nike/n5.png',
  '/Fotos - TCC (nike/n6.png',
  '/Fotos - TCC (nike/n7.png',
  '/Fotos - TCC (nike/n8.png',
  '/Fotos - TCC (nike/n10.png',
  '/Fotos - TCC (puma/n1.png',
  '/Fotos - TCC (puma/n2.png',
  '/Fotos - TCC (puma/n3.png',
  '/Fotos - TCC (puma/n4.png',
  '/Fotos - TCC (puma/n5.png',
  '/Fotos - TCC (puma/n6.png',
  '/Fotos - TCC (puma/n7.png',
  '/Fotos - TCC (puma/n8.png',
  '/Fotos - TCC (puma/n9.png',
  '/Fotos - TCC (puma/n10.png',
  '/Fotos - TCC (umbro/n1.png',
  '/Fotos - TCC (umbro/n2.png',
  '/Fotos - TCC (umbro/n3.png',
  '/Fotos - TCC (umbro/n4.png',
  '/Fotos - TCC (umbro/n5.png',
  '/Fotos - TCC (umbro/n6.png',
  '/Fotos - TCC (umbro/n7.png',
  '/Fotos - TCC (umbro/n8.png',
  '/Fotos - TCC (umbro/n9.png',
  '/Fotos - TCC (umbro/n10.png',
], count }) {
  const totalImages = images.length;
  const itemCount = typeof count === 'number' ? count : totalImages;

  const item_Bone = Array.from({ length: itemCount }, (_, i) => ({
    img: images[i % images.length],
    alt: `Item ${i + 1}`
  }));

  return (
    <>
      {item_Bone.map((list, index) => (
        <div className='div-card2' key={index}>
          <img src={list.img} alt={list.alt} id='img-item2' />
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
        </div>
      ))}
    </>
  )
}

export default Cards;