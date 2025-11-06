import './itens.css'

function Cards() {

  const item_Bones = new Array(24).fill(0).map(() => ({
    img: '/Categoria/Bone_categ.png',
    alt: 'Boné'
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