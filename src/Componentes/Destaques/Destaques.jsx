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
                        <li><Elemento text="o" img="./outfit-streetwear.png"/></li>
                        <li><Elemento text="i" img="./outfit-sportlife.png"/></li>
                        <li><Elemento text="t" img="./outfit-sportwear.png"/></li>
                        <li><Elemento text="n" img="./outfit-y2k.png"/></li>
                        <li><Elemento text="s" img="./outfit-oldmoney.png"/></li>
                    </ul>
                </section>
            </div>
        </>
    )
};

export default carrosel_inicial;