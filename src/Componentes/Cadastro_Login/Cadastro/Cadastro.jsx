import "./cadastro.css"

function cadastro() {
    return (
        <>
            <div class="container_cadast">
                <div className="Titulo">
                    <h1 class="text">Cadastre-se</h1>
                </div>

                <div class="mb-1">
                    <label for="exampleFormControlInput1" class="form-label">Nome de usuario:</label>
                    <input type="usurio" placeholder="Nome de usuario ..." className="form" id="exampleFormControlInput1" />
                </div>

                <div class="mb-1">
                    <label for="exampleFormControlInput1" class="form-label">Email:</label>
                    <input type="email" placeholder="Nome@gmail.com" className="form" id="exampleFormControlInput1" />
                </div>

                <div class="mb-2">
                    <label for="inputPassword5" class="form-label">Senha:</label>
                    <input type="password" id="inputPassword5" class="form" aria-describedby="passwordHelpBlock" placeholder="Senha ..."></input>
                    <div id="passwordHelpBlock" class="form-text">
                        Sua senha deve ter de 8 a 20 caracteres, conter letras e números e não deve conter espaços, caracteres especiais ou emoji.
                    </div>
                </div>

                <div class="mb-1">
                    <label for="inputPassword5" class="form-label">Confirme a senha:</label>
                    <input type="password" id="inputPassword5" class="form" aria-describedby="passwordHelpBlock" placeholder="Corfirme a senha ..."></input>
                </div>

                <div className="sla">
                    <a href="/login" id="C-text">Entrar</a>
                    <h2>|</h2>
                    <a href="/cadastro" id="C-text">Cadastro</a>
                </div>

                <div class="col-auto">
                    <a href="/"><button type="submit" class="btn-cadast">Cadastrar-se</button></a>
                </div>

            </div>
        </>

    )
}

export default cadastro;