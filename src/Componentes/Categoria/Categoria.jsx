import { useState } from "react"
import './categoria.css'
import Bolha from "./Bolha/Bolha";

function categoria_inicial() {
    return (
        <>
            <div className="fundo_dest">
                    <ul>
                        <li><Bolha text="Blusas" img="./Categoria/Blusa_destaq.png" alt="Imagem de Blusa"/></li>
                        <li><Bolha text="Calças" img="./Categoria/Calça_destaq.png" alt="Imagem de Calça"/></li>
                        <li><Bolha text="Shorts" img="./Categoria/Blusa_destaq.png" alt="Imagem de Short"/></li>
                        <li><Bolha text="Camisetas" img="./Categoria/Camiseta_destaq.png" alt="Imagem de Camiseta"/></li>
                        <li><Bolha text="Tênis" img="./Categoria/Tenis_destaq.png" alt="Imagem de Tênis"/></li>
                        <li><Bolha text="Bonés" img="./Categoria/Bone_destaq.png" alt="Imagem de Boné" id="bone"/></li>
                    </ul>
            </div>
        </>
    )
};

export default categoria_inicial;