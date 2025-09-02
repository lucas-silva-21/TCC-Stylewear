import "./login.css"

function login() {
    return (
        <>
            <div class="container">
                <div>
                    <h1 class="text">Entrar</h1>
                </div>

                <div class="mb-1">
                    <label for="exampleFormControlInput1" class="form-label">Nome de usuario:</label>
                    <input type="usuario" placeholder="Nome de usuario ..." className="form" id="exampleFormControlInput1" />
                </div>

                <div class="mb-2">
                    <label for="inputPassword5" class="form-label">Senha:</label>
                    <input type="password" id="inputPassword5" class="form" aria-describedby="passwordHelpBlock" placeholder="Senha ..."></input>
                    <div id="passwordHelpBlock" class="form-text">
                        Sua senha deve ter de 8 a 20 caracteres, conter letras e números e não deve conter espaços, caracteres especiais ou emoji.
                    </div>
                </div>

                <div class="col-auto">
                    <button type="submit" class="btn-cadast">Cadastrar-se</button>
                </div>

            </div>
        </>

    )
}

export default login;