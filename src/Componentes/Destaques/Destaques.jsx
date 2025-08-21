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
                        <li><Elemento text="o"/></li>
                        <li><Elemento text="i"/></li>
                        <li><Elemento text="t"/></li>
                        <li><Elemento text="n"/></li>
                        <li><Elemento text="s"/></li>
                        <li><Elemento text="c"/></li>
                    </ul>
                </section>
            </div>
        </>
    )
};

export default carrosel_inicial;