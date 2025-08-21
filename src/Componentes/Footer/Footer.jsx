import { useState } from "react"
import './Footer.css'


function footer() {
    return (
        <>
            <footer>
                <div class="container1">
                    <h1 class="titulo">Nos acompanhe:</h1>
                    <div class="container-icones">
                        <ul class="icones">
                            <i class="bi bi-instagram"></i>
                            <i class="bi bi-tiktok"></i>
                            <i class="bi bi-pinterest"></i>
                            <i class="bi bi-twitter-x"></i>
                            <i class="bi bi-facebook"></i>
                        </ul>
                    </div>
                </div>
                <div class="container2">
                    <div class="final-text">
                        <div class="text">
                            <h1 class="titulo-stylewear">Stylewear</h1>
                            <br />
                            <a> CNPJ: 07865390071234</a>
                            <br />
                            <a class="final"> ©Stylewear </a>
                        </div>
                        <div class="text">
                            <h1 class="titulo2">Informações de contato</h1><br />
                            <a>Endereço: Rua - Rio Caio Castro, 278  Osasco | São Paulo</a><br />
                            <a>Telefone: (11) 4002-8922</a><br />
                            <a>Email: stylewear@gmail.com</a>
                        </div>
                        <div class="text">
                            <h1 class="titulo2">Atendimento</h1><br />
                            <a>Atendimento ao cliente<br />
                                Quem nós somos<br />
                                Termos de venda<br />
                                Segurança</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
};

export default footer;