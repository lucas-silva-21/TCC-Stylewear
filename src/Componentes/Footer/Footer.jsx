import  {useState} from "react"
import './Footer.css'

function menu() {
    return (
        <>
            <footer>
                <div class="container1">
                    <h1 class="titulo">Nos acompanbe:</h1>
                        <div class="icones">
                            <i class="bi bi-instagram"></i>
                            <i class="bi bi-tiktok"></i>
                            <i class="bi bi-pinterest"></i>
                            <i class="bi bi-twitter-x"></i>
                            <i class="bi bi-facebook"></i>
                        </div>
                </div>
                <div class="container2">
                    <div class="text1">
                        <h1>Stylewear</h1>
                        <a> CNPJ: 07865390071234</a>
                        <a> ©Stylewear </a>
                    </div>
                    <div class="text2">
                        <h1>Informações de contato</h1>
                        <a>Endereço
                        Rua - Rio Caio Castro, 278
                        Osasco | São Paulo</a>
                        <a>Telefone
                        (11) 4002-8922</a>
                        <a>Email
                        stylewear@gmail.com</a>
                    </div>
                </div>
            </footer>
        </>
    )
};