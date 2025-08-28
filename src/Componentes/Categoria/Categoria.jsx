import { useState } from "react"
import './categoria.css'
import Bolha from "./Bolha/Bolha";

function categoria_inicial() {
    return (
        <>
            <div className="fundo_dest">
                    <ul>
                        <li><Bolha text="Blusas" img="./Destaque/Blusa_destaq.png" alt="Imagem de Blusa"/></li>
                        <li><Bolha text="Calças" img="./Destaque/Calça_destaq.png" alt="Imagem de Calça"/></li>
                        <li><Bolha text="Shorts" img="./Destaque/Blusa_destaq.png" alt="Imagem de Short"/></li>
                        <li><Bolha text="Camisetas" img="./Destaque/Camiseta_destaq.png" alt="Imagem de Camiseta"/></li>
                        <li><Bolha text="Tênis" img="./Destaque/Tenis_destaq.png" alt="Imagem de Tênis"/></li>
                        <li><Bolha text="Bonés" img="./Destaque/Bone_destaq.png" alt="Imagem de Boné" id="bone"/></li>
                    </ul>
            </div>
        </>
    )
};

export default categoria_inicial;