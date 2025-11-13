import Seleção from './Crrsl/Crrsl_BadBoy';
import Marcas_secund from '../Inicio/Marcas_secund/Marcas_secund';
import './pg_marcas.css'

function BadBoy(props) {

    return (
        <>
            <section className='painel'>
                <span></span>
                <img src={props.painel} alt={props.altpainel} id='painel_marca' />
                <span></span>
            </section>
            <div>
                <Seleção tituloTenis="Tênis" tituloShort="Shorts" tituloCalça="Calças" tituloCamiseta="Camisetas" tituloBlusa="Blusas" tituloBone="Bonés" tituloAcessorio="Acessórios"/>
            </div>
            <Marcas_secund/>
            <div className='div-logo'><img src={props.logo} alt={props.altlog} id='img_log' /></div>
        </>
    )
}

export default BadBoy;