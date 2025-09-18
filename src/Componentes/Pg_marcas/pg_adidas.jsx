import Seleção from './Crrsl/Elemento';
import './pg_marcas.css'

function Adidas(props){

    return(
        <>  
            <section className='painel'>
                <span></span>
                <img src={props.painel} alt="Painel Adidas" id='painel_marca'/>
                <span></span>
            </section>
            <div>
                <Seleção titulo="Tênis"
                />
                <Seleção titulo="Shorts"
                />
                <Seleção titulo="Calças" 
                />
                <Seleção titulo="Camisetas"
                />
            </div>
            <div className='div-logo'><img src={props.logo} alt="Logo Adidas" id='umbro' /></div>
        </>
    )
}

export default Adidas;