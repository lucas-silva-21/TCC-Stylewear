import './itens.css'

function Cards({ images = ['/Categoria/Camiseta_categ.png', '/Categoria/Camiseta_categ2.png', '/Categoria/Camiseta_categ3.png'], count }) {
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
              id={`hanger-part_cima-${index}`}
              aria-label={`Selecionar part_cima ${index + 1}`}
            />
            <label className="hanger-label" htmlFor={`hanger-part_cima-${index}`}>
              <img src="/cabide.png" alt="cabide" className="hanger-icon-outline" />
            </label>
          </div>
        </div>
      ))}
    </>
  )
}

export default Cards;