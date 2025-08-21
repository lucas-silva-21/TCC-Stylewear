import { useState } from "react"
import './header.css'

function menu() {
    return (
        <>
            <header>
                <div className="part1">
                    <img src="/logo2.ico" alt="Stylewear" id="logo" />

                    <div>
                        <input placeholder="Pesquisar" class="Busca"></input>
                    </div>

                    <a href="" id="Entrar">Entrar</a>
                    <h2>|</h2>
                    <a href="" ><img src="/cabide.png" alt="cabide" id="cabide"/></a>
                </div>
                <div className="part2">
                    <ul className="part2_marcas">
                        <li><a href=""><img src="/Logo_Umbro.png" alt="Umbro" /></a></li>
                        <li><a href=""><img src="/nike_logo.png" alt="Nike" /></a></li>
                        <li><a href=""><img src="/Adidas_logo.png" alt="Adidas" /></a></li>
                        <li><a href=""><img src="/lacoste-logo.png" alt="Lacoste" /></a></li>
                        <li><a href=""><img src="/puma-logo.png" alt="Puma" /></a></li>
                    </ul>
                </div>
            </header>
        </>
    )
};

export default menu;