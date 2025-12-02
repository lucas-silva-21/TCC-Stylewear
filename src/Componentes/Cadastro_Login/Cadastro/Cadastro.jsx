import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./cadastro.css";

const API_URL = "http://localhost:3000/api/clients";

function Cadastro() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");

  const enviarUsuario = async (e) => {
    e.preventDefault();
    setErro("");
    setSucesso("");

    if (!nome || !email || !senha || !confirmarSenha) {
      setErro("Preencha todos os campos.");
      return;
    }

    if (senha !== confirmarSenha) {
      setErro("As senhas não coincidem.");
      return;
    }

    try {
      const resposta = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: nome, 
          email: email,
          senha: senha,
        }),
      });

      const data = await resposta.json().catch(() => ({}));

      if (!resposta.ok) {
        throw new Error(data.error || "Erro ao cadastrar usuário.");
      }

      const nomeResposta = data.name || nome;

      setSucesso(`${nomeResposta} cadastrado(a) com sucesso!`);
      setErro("");

      setNome("");
      setEmail("");
      setSenha("");
      setConfirmarSenha("");

      // navega para rota "/" após 1.5s
      setTimeout(() => {
        navigate('/');
      }, 1500);
    } catch (error) {
      console.error(error);
      setErro(error.message || "Erro ao cadastrar usuário.");
      setSucesso("");
    }
  };

  return (
    <>
      <div className="container_cadast">
        <div className="Titulo">
          <h1 className="text">Cadastre-se</h1>
        </div>

        <form onSubmit={enviarUsuario}>
          <div className="mb-1">
            <label htmlFor="nome" className="form-label">
              Nome de usuário:
            </label>
            <input
              id="nome"
              type="text"
              placeholder="Nome de usuário..."
              className="form"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>

          <div className="mb-1">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              id="email"
              type="email"
              placeholder="nome@gmail.com"
              className="form"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-2">
            <label htmlFor="senha" className="form-label">
              Senha:
            </label>
            <input
              id="senha"
              type="password"
              placeholder="Digite a senha..."
              className="form"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>

          <div className="mb-2">
            <label htmlFor="confirmarSenha" className="form-label">
              Confirmar senha:
            </label>
            <input
              id="confirmarSenha"
              type="password"
              placeholder="Confirme a senha..."
              className="form"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              required
            />
          </div>

          {erro && <p className="erro">{erro}</p>}
          {sucesso && <p className="sucesso">{sucesso}</p>}

          <div className="sla">
            <div className="Login-Cadast">
              <a href="/login" id="C-text">Login</a>
            </div>

            <div className="col-auto">
              {/* Removido onclick inline e href inválido */}
              <button type="submit" className="btn-cadast">
                Cadastrar-se
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Cadastro;
