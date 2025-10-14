import "./login.css"

function login() {
    return (
        <> <body>
            <div class="container_login">
                <div class="Titulo">
                    <h1 class="text">ENTRAR</h1>
                </div>

                <div class="mb-1">
                    <label for="exampleFormControlInput1" class="form-label">Email:</label>
                    <input type="usuario" placeholder="Nome de usuario" className="form" id="exampleFormControlInput1" />
                </div>

                <div class="mb-2">
                    <label for="inputPassword5" class="form-label">Senha:</label>
                    <input type="password" id="inputPassword5" class="form" aria-describedby="passwordHelpBlock" placeholder="Senha"></input>
                </div>
                <div className="esqueci">
                    <a href="/recuperar" id="C-text">Esqueci minha senha</a>
                </div>

                <div className="sla">
                    <a href="/login" id="C-text">Entrar</a>
                    <h2>|</h2>
                    <a href="/cadastro" id="C-text">Cadastro</a>
                </div>

                <div class="col-auto">
                    <a href="/"><button type="submit" class="btn-entrar">Entrar</button></a>
                </div>

            </div>
            </body>
        </>

    )
}

export default login;