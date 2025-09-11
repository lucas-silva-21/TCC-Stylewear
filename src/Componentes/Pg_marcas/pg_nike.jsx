import Seleção from './Crrsl/Elemento';
import './pg_marcas.css'

function Nike(props){
    return(
        <>  
            <section className='painel'>
                <span></span>
                <img src={props.painel} alt="Painel Umbro" id='painel_marca'/>
                <span></span>
            </section>
            <div>
                <Seleção titulo="Tenis" alt1="Imagem de um tenis da marca umbro"
                img="./Tenis1.png"
                />
                <Seleção titulo="Shorts" alt1="Imagem de um short da marca umbro"
                img="./Short1.png"
                />
                <Seleção titulo="Calças" alt1="Imagem de um calças da marca umbro"
                img="./Calça1.png"
                />
                <Seleção titulo="Camisetas" alt1="Imagem de um camiseta da marca umbro"
                img="./Camiseta1.png"
                />
            </div>
            <div className='div-logo'><img src="./Logos/Logo_Umbro.png" alt="Logo Umbro" id='umbro' /></div>
        </>
    )
}

export default Nike;