import React, { useContext } from 'react';
import { AuthContext } from '../../Inicio/Header/AuthContext';
import './perfil.css';

function Perfil() {
    const { user, logout } = useContext(AuthContext);
    
    return (
        <section className='section-perfil'>
            <div className='div-part1'>
                <img src="./avatar.png" alt="" id='avatar' />
                <span id="H-text">Olá,{user?.name || ' Usuário'}</span>
                <a href="/"><button onClick={logout} id="button-text">Sair</button></a>
            </div>

            <div className='div-mail'>
                <h1>Email:</h1>
                <span id="H-text">{user?.email || 'email não encontrado'}</span>
            </div>

            <section>
                <div className='div-armario'>
                    <a href="/Armario"><button id="button-text">Meu Armário</button></a>
                </div>
            </section>
        </section>
    );
}
export default Perfil;