import { useState } from "react"

import './header.css'

function menu() {
    return (
        <>
            <header>
                <div className="part1">
                    <a href="/" id="vazio"><img src="/logo2.png" href="/" alt="Stylewear" id="logo" /></a>

                    <div>
                        <input placeholder="Pesquisar" class="Busca"></input>
                    </div>

                    <a href="/Armario" id="cabide"><img src="/cabide.png" alt="cabide" id="cabide-img"/></a>
                    <h2>|</h2>
                    <a href="/login" id="H-text">Entrar</a>
                    <h2>|</h2>
                    <a href="/cadastro" id="H-text">Cadastro</a>
                    
                </div>
                
                <div className="part2">
                    <ul className="part2_marcas">
                        <li><a href="/Umbro"><img src="/Logos/Umbro_logo.png" alt="Umbro" /></a></li>
                        <li><a href="/Nike"><img src="/Logos/Nike_logo.png" alt="Nike" /></a></li>
                        <li><a href="/Adidas"><img src="/Logos/Adidas_logo.png" alt="Adidas" /></a></li>
                        {/* <li><a href="/PlanetGirls"><img src="/Logos/PlanetGirls_logo.png" alt="Planet Girls" /></a></li> */}
                        <li><a href="/Lacoste"><img src="/Logos/Lacoste_logo.png" alt="Lacoste" /></a></li>
                        <li><a href="/Puma"><img src="/Logos/Puma_logo.png" alt="Puma" /></a></li>
                        {/* <li><a href="/Polo"><img src="/Logos/Polo_logo.png" alt="Polo" /></a></li> */}
                        {/* <li><a href="/BadBoy"><img src="/Logos/BadBoy_logo2.png" alt="Bad Boy" /></a></li> */}
                    </ul>
                </div>
            </header>
        </>
    )
};

export default menu;