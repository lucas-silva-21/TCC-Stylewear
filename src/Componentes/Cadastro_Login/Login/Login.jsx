import React, { useState, useContext } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../Inicio/Header/AuthContext';
import "./login.css";

const API_LOGIN = "http://localhost:3000/api/clients/login";

function Login() {
    const navigate = useNavigate();
    const [identifier, setIdentifier] = useState(""); // email or username
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");

    const { login } = useContext(AuthContext);

    const enviarLogin = async (e) => {
        e.preventDefault();
        setErro("");

        if (!identifier || !senha) {
            setErro('Preencha os campos.');
            return;
        }

        try {
            const body = {
                senha,
            };

            // Detecta se o identificador parece ser um email
            if (identifier.includes('@')) body.email = identifier;
            else body.name = identifier;

            const resp = await fetch(API_LOGIN, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });

            const data = await resp.json().catch(() => ({}));

            if (!resp.ok) {
                throw new Error(data.error || 'Erro ao autenticar.');
            }

            // Atualiza o contexto de autenticação (salva em localStorage)
            if (login) login(data);

            // navega para rota principal
            navigate('/');
        } catch (err) {
            console.error(err);
            setErro(err.message || 'Erro ao autenticar.');
        }
    };

    return (
        <>
            <div className="container_login">
                <div className="Titulo">
                    <h1 className="text">Entrar</h1>
                </div>

                <form onSubmit={enviarLogin}>
                    <div className="mb-1">
                        <label htmlFor="identifier" className="form-label">Email ou Nome de usuário:</label>
                        <input
                            id="identifier"
                            type="text"
                            placeholder="Email ou nome de usuário..."
                            className="form"
                            value={identifier}
                            onChange={(e) => setIdentifier(e.target.value)}
                        />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="senha" className="form-label">Senha:</label>
                        <input
                            id="senha"
                            type="password"
                            className="form"
                            placeholder="Senha ..."
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </div>

                    {erro && <p className="erro">{erro}</p>}

                    <div className="sla">
                        <Link to="/cadastro" id="C-text">Cadastro</Link>
                    </div>

                    <div className="col-auto">
                        <button type="submit" className="btn-entrar">Entrar</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;