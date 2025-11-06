import './itens.css'

function Cards() {

    const item_Camisetas = [
        {img: './Camiseta1.png', alt: 'tenis', },
        {img: './Camiseta1.png', alt: 'tenis', },
        {img: './Camiseta1.png', alt: 'tenis', },
        {img: './Camiseta1.png', alt: 'tenis', },
        {img: './Camiseta1.png', alt: 'tenis', },
        {img: './Camiseta1.png', alt: 'tenis', },
        {img: './Camiseta1.png', alt: 'tenis', },
        {img: './Camiseta1.png', alt: 'tenis', },
        {img: './Camiseta1.png', alt: 'tenis', },
        {img: './Camiseta1.png', alt: 'tenis', },
        {img: './Camiseta1.png', alt: 'tenis', },
    ];


    return (
        <>
            {item_Camisetas.map((list, index) => (
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