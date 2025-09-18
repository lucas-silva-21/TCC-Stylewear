import Seleção from './Crrsl/Elemento';
import './pg_marcas.css'

function Nike(props){

    const item_imgTenisUmbro = [
        {item: '', img: './Calça1.png', alt: 'camiseta',},
        {item: '', img: './Tenis1.png', alt: 'camiseta',},
        {item: '', img: './Tenis1.png', alt: 'camiseta',},
        {item: '', img: './Tenis1.png', alt: 'camiseta',},
        {item: '', img: './Tenis1.png', alt: 'camiseta',},
        {item: '', img: './Calça1.png', alt: 'camiseta',},
        {item: '', img: './Tenis1.png', alt: 'camiseta',},
        {item: '', img: './Tenis1.png', alt: 'camiseta',},
        {item: '', img: './Tenis1.png', alt: 'camiseta',},
        {item: '', img: './Tenis1.png', alt: 'camiseta',},
        {item: '', img: './Calça1.png', alt: 'camiseta',},
    ];

    return(
        <>  
            <section className='painel'>
                <span></span>
                <img src={props.painel} alt="Painel Umbro" id='painel_marca'/>
                <span></span>
            </section>
            <div>
                <Seleção titulo="Tênis" list="item_imgTenisUmbro"
                />
                <Seleção titulo="Shorts" 
                />
                <Seleção titulo="Calças"
                />
                <Seleção titulo="Camisetas"
                />
            </div>
            <div className='div-logo'><img src={props.logo} alt="Logo Umbro" id='umbro' /></div>
        </>
    )
}

export default Nike;