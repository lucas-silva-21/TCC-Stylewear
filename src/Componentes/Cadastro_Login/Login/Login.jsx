import "./login.css"


const API_URL = "http://localhost:5173/api/users";

function login() {
    return (
        <>
            <div class="container_login">
                <div class="Titulo">
                    <h1 class="text">Entrar</h1>
                </div>

                <div class="mb-1">
                    <label for="exampleFormControlInput1" class="form-label">Nome de usuario:</label>    
                
                    <input type="usuario" placeholder="Nome de usuario ..." className="form" id="exampleFormControlInput1" />
                </div>

                <div class="mb-2">
                    <label for="inputPassword5" class="form-label">Senha:</label>
                    <input type="password" id="inputPassword5" class="form" aria-describedby="passwordHelpBlock" placeholder="Senha ..."></input>
                </div>

                <div className="sla">
                    <a href="/cadastro" id="C-text">Cadastro</a>
                </div>

                <div class="col-auto">
                    <a href="/"><button type="submit" class="btn-entrar">Entrar</button></a>
                </div>

            </div>
        </>

    )
}

export default login;