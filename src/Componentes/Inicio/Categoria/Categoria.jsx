import { useState } from "react"
import './categoria.css'
import Bolha from "./Bolha/Bolha";

function categoria_inicial() {
    return (
        <>
            <div className="fundo_dest">
                    <ul>
                        <li><a href="/Categoria+Blusas"><Bolha text="Blusas" img="./Categoria/Blusa_destaq.png" alt="Imagem de Blusa"/></a></li>
                        <li><a href="/Categoria+Calças"><Bolha text="Calças" img="./Categoria/Calça_destaq.png" alt="Imagem de Calça"/></a></li>
                        <li><a href="/Categoria+Shorts"><Bolha text="Shorts" img="./Categoria/Blusa_destaq.png" alt="Imagem de Short"/></a></li>
                        <li><a href="/Categoria+Camisetas"><Bolha text="Camisetas" img="./Categoria/Camiseta_destaq.png" alt="Imagem de Camiseta"/></a></li>
                        <li><a href="/Categoria+Tenis"><Bolha text="Tênis" img="./Categoria/Tenis_destaq.png" alt="Imagem de Tênis"/></a></li>
                        <li><a href="/Categoria+Bones"><Bolha text="Bonés" img="./Categoria/Bone_destaq.png" alt="Imagem de Boné" id="bone"/></a></li>
                    </ul>
            </div>
        </>
    )
};

export default categoria_inicial;