import Carousel_Umbro from './Crrsl/Crrsl';
import Marcas_secund from '../Inicio/Marcas_secund/Marcas_secund';
import './pg_marcas.css'

function Puma(props){

    return(
        <>  
            <section className='painel'>
                <span></span>
                <img src={props.painel} alt={props.altpainel} id='painel_marca'/>
                <span></span>
            </section>
            <div>
                <Carousel_Umbro titulo="Tênis"/>
                <Carousel_Umbro titulo="Shorts"/>
                <Carousel_Umbro titulo="Calças" />
                <Carousel_Umbro titulo="Camisetas"/>
            </div>
            <Marcas_secund/>
            <div className='div-logo'><img src={props.logo} alt={props.altlog} id='img_log'/></div>
        </>
    )
}

export default Puma;