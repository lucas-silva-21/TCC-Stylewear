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

            <div className='div-info'>
                <div className='div-mail'>
                    <h1>Email:</h1>
                    <span id="H-text">{user?.email || 'email não encontrado'}</span>
                </div>

                <div className='div-senha'>
                    <h1>Senha:</h1>
                    <span id="H-text">{user?.senha || 'senha não encontrado'}</span>
                </div>

            </div>

            <div className='div-armario1' style={{justifySelf: 'center'}}>
                <a href="/Armario"><button id="button-text">Meu Armário</button></a>
            </div>

        </section>
    );
}
export default Perfil;