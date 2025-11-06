import './itens.css'

function Cards() {

    const item_Short = [
        {img: './Categoria/Short_categ.png', alt: 'Short da Adidas', },
        {img: './Categoria/Short_categ.png', alt: 'Short da Adidas', },
        {img: './Categoria/Short_categ.png', alt: 'Short da Adidas', },
        {img: './Categoria/Short_categ.png', alt: 'Short da Adidas', },
        {img: './Categoria/Short_categ.png', alt: 'Short da Adidas', },
        {img: './Categoria/Short_categ.png', alt: 'Short da Adidas', },
        {img: './Categoria/Short_categ.png', alt: 'Short da Adidas', },
        {img: './Categoria/Short_categ.png', alt: 'Short da Adidas', },
        {img: './Categoria/Short_categ.png', alt: 'Short da Adidas', },
        {img: './Categoria/Short_categ.png', alt: 'Short da Adidas', },
        {img: './Categoria/Short_categ.png', alt: 'Short da Adidas', },
    ];


    return (
        <>
            {item_Short.map((list, index) => (
              <div className='div-card2' key={index}>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="checkDefault" />
                </div>
                <img src={list.img} alt={list.alt} id='img-item2'/>
              </div>
            ))}
        </>
    )
}

export default Cards;