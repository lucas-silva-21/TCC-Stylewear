import { useState } from "react"
import './categoria.css'
import Bolha from "./Bolha/Bolha";

function categoria_inicial() {
    return (
        <>
            <div className="fundo_dest">
                    <ul>
                        <li><a href="/Categoria+Bones"><Bolha text="Bonés" img="./Categoria/Bone_categ.png" alt="Imagem de Boné" id="bone"/></a></li>
                        <li><a href="/Categoria+Blusas"><Bolha text="Blusas" img="./Categoria/Blusa_categ.png" alt="Imagem de Blusa"/></a></li>
                        <li><a href="/Categoria+Camiseta"><Bolha text="Camiseta" img="./Categoria/Camiseta_categ.png" alt="Imagem de Camiseta"/></a></li>
                        {/* <li><a href="/Categoria+Parte_inferior"><Bolha text="Parte de baixo" img="./Categoria/Calça_categ.png" alt="Imagem de Calça"/></a></li> */}
                        <li><a href="/Categoria+Calças"><Bolha text="Calça" img="./Categoria/Calça_categ.png" alt="Imagem de Calça"/></a></li>
                        {/* <li><a href="/Categoria+Acessorios"><Bolha text="Acessorios" img="./Categoria/Acessorio_categ.png" alt="Imagem de Short"/></a></li> */}
                        <li><a href="/Categoria+Shorts"><Bolha text="Shorts" img="./Categoria/Short_categ.png" alt="Imagem de Short"/></a></li>
                        <li><a href="/Categoria+Tenis"><Bolha text="Tênis" img="./Categoria/Tenis_categ.png" alt="Imagem de Tênis"/></a></li>
                    </ul>
            </div>
        </>
    )
};

export default categoria_inicial;