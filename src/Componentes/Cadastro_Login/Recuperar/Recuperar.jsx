import React, { useState } from 'react';
import './recuperar.css';

const RecuperarSenha = () => {
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [carregando, setCarregando] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setCarregando(true);
        setMensagem('');

        try {
            await new Promise((resolve) => setTimeout(resolve, 1500));
            setMensagem('Se o e-mail estiver cadastrado, você receberá instruções para redefinir sua senha.');
        } catch (error) {
            setMensagem('Ocorreu um erro. Tente novamente.');
        } finally {
            setCarregando(false);
        }
    };

    return (
        <div className="recuperar-container">
            <h2 className="recuperar-titulo">Recuperar Senha</h2>
            <form className="recuperar-form" onSubmit={handleSubmit}>
                <label className="recuperar-label" htmlFor="email">E-mail:</label>
                <input
                    className="recuperar-input"
                    type="email"
                    id="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <button className="recuperar-btn" type="submit" disabled={carregando}>
                    {carregando ? 'Enviando...' : 'Recuperar'}
                </button>
            </form>
            {mensagem && <p className="recuperar-mensagem">{mensagem}</p>}
        </div>
    );
};

export default RecuperarSenha;
