import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

import './header.css'

function Menu(props) {
    const { user, isLoggedIn, logout } = useContext(AuthContext);

    return (
        <>
            <header>
                <div className="part1">
                    <a href="/" id="vazio"><img src="/logo2.png" href="/" alt="Stylewear" id="logo" /></a>

                    <div>
                        <input placeholder="Pesquisar" class="Busca"></input>
                        {/* <span></span> */}
                    </div>

                    {isLoggedIn ? (
                        <>
                            <a href="/Armario" id="cabide"><img src="/cabide.png" alt="cabide" id="cabide-img" /></a>
                            <h2>|</h2>
                            <span id="H-text">Olá <a href='/Usuario' id='t_usuario'>{user?.name || ' Usuário'}</a></span>
                            <h2>|</h2>
                            <span></span>
                        </>
                    ) : (
                        <>
                            {/* <a href="/Armario" id="cabide"><img src="/cabide.png" alt="cabide" id="cabide-img" /></a> */}
                            <span></span>
                            {/* <h2>|</h2> */}
                            <span></span>
                            <a href="/Login" id="H-text">Entrar</a>
                            <h2>|</h2>
                            <a href="/Cadastro" id="H-text">Cadastro</a>
                            <span></span>
                        </>
                    )}

                </div>

                <div className="part2">
                    <ul className="part2_marcas">
                        <li><a href="/Umbro"><img src="/Logos/Umbro_logo.png" alt="Umbro" id={props.tt_dest1} /></a></li>
                        <li><a href="/Nike"><img src="/Logos/Nike_logo.png" alt="Nike" id={props.tt_dest2} /></a></li>
                        <li><a href="/Adidas"><img src="/Logos/Adidas_logo.png" alt="Adidas" id={props.tt_dest3} /></a></li>
                        <li><a href="/Lacoste"><img src="/Logos/Lacoste_logo.png" alt="Lacoste" id={props.tt_dest4} /></a></li>
                        <li><a href="/Puma"><img src="/Logos/Puma_logo.png" alt="Puma" id={props.tt_dest5} /></a></li>
                    </ul>
                </div>
            </header>
        </>
    )
};

export default Menu;