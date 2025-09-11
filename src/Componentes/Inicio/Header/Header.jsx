import { useState } from "react"

import './header.css'

function menu() {
    return (
        <>
            <header>
                <div className="part1">
                    <img src="/logo2.png" alt="Stylewear" id="logo" />

                    <div>
                        <input placeholder="Pesquisar" class="Busca"></input>
                    </div>

                    <a href=""><img src="/cabide.png" alt="cabide" id="cabide"/></a>
                    <h2>|</h2>
                    <a href="/login" id="H-text">Entrar</a>
                    <h2>|</h2>
                    <a href="/cadastro" id="H-text">Cadastro</a>
                    
                </div>
                
                <div className="part2">
                    <ul className="part2_marcas">
                        <li><a href="/Umbro"><img src="/Logos/Logo_Umbro.png" alt="Umbro" /></a></li>
                        <li><a href="/Nike"><img src="/Logos/nike_logo.png" alt="Nike" /></a></li>
                        <li><a href="/Adidas"><img src="/Logos/Adidas_logo.png" alt="Adidas" /></a></li>
                        <li><a href="/Lacoste"><img src="/Logos/lacoste-logo.png" alt="Lacoste" /></a></li>
                        <li><a href="/Puma"><img src="/Logos/puma-logo.png" alt="Puma" /></a></li>
                    </ul>
                </div>
            </header>
        </>
    )
};

export default menu;