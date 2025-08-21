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
                </div>
                <div className="part2">
                    <ul className="part2_marcas">
                        <li><img src="/Logo_Umbro.png" alt="" /></li>
                        <li><img src="/nike_logo.png" alt="" /></li>
                        <li><img src="/Adidas_logo.png" alt="" /></li>
                        <li><img src="/lacoste-logo.png" alt="" /></li>
                        <li><img src="/puma-logo.png" alt="" /></li>
                    </ul>
                </div>
            </header>
        </>
    )
};

export default menu;