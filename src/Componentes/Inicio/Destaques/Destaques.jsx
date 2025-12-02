import { useState } from "react"
import './destaques.css'
import Elemento from "./Elementos/Elementos";

function carrosel_inicial() {
    return (
        <>
            <div className="fundo_princ">
                <div className="fundo_crrsl">
                    <h2 id="titulo-destaque">Destaques</h2>
                    <h1 id="linha"></h1>
                </div>
                <section className="elementos-dest">
                    <ul>
                        <li><Elemento text="OUTFIT STREETWEAR" img="./Outfit/outfit-streetwear.png"/></li>
                        <li><Elemento text="OUTFIT SPORTLIFE" img="./Outfit/outfit-sportlife.png"/></li>
                        <li><Elemento text="OUTFIT SPORWEAR" img="./Outfit/outfit-sportwear.png"/></li>
                        <li><Elemento text="OUTFIT Y2K" img="./Outfit/outfit-y2k.png"/></li>
                        <li><Elemento text="OUTFIT OLDMONEY" img="./Outfit/outfit-oldmoney.png"/></li>
                    </ul>
                </section>
            </div>
        </>
    )
};

export default carrosel_inicial;