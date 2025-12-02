import './pg_categoria.css'
import Card from './Itens-card/itens-blusas';

function Blusas(props) {

    return (
        <>
            <div className="Categoria-text">
                <h2 id="categoria-titulo">{props.titulo}</h2>
            </div>

            <div className="div-fila">
                <Card list={props.img}/>
            </div>
        </>
    )
}

export default Blusas;