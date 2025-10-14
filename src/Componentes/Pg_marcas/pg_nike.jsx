import Seleção from './Crrsl/Crrsl';
import './pg_marcas.css'

function Nike(props) {

    return (
        <>
            <section className='painel'>
                <span></span>
                <img src={props.painel} alt={props.altpainel} id='painel_marca' />
                <span></span>
            </section>
            <div>
                <Seleção titulo="Tênis" />
                <Seleção titulo="Shorts" />
                <Seleção titulo="Calças" />
                <Seleção titulo="Camisetas" />
            </div>
            <div className='div-logo'><img src={props.logo} alt={props.altlog} id='img_log' /></div>
        </>
    )
}

export default Nike;