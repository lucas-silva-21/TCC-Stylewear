import "./cadastro.css"

function cadastro() {
    return (
        <>
            <div class="container">
                <div>
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

                <div class="col-auto">
                    <button type="submit" class="btn-cadast">Cadastrar-se</button>
                </div>

            </div>
        </>

    )
}

export default cadastro;