import  {useState} from "react"
import "bootstrap-icons/font/bootstrap-icons";
import './Footer.css'

function footer() {
    return (
        
            <footer>
                <div class="container1">
                    <h1 class="titulo">Nos acompanhe:</h1>
                    <div class="container-icones">
                        <ul class="icones">
                            <img src="./public/instagram.svg" alt="instagram" id="icon"/>
                            <img src="./public/tiktok.svg" alt="tiktok" id="icon"/>
                            <img src="./public/pinterest.svg" alt="pinterest" id="icon"/>
                            <img src="./public/twitter-x.svg" alt="x" id="icon"/> 
                            <img src="./public/facebook.svg" alt="facebook" id="icon"/>  
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
                            <h1 class="titulo2">Informações de contato:</h1><br />
                            <a>Endereço: <br />
                            <a>Rua - Rio Caio Hebling, 278 </a><br />
                            <a>Osasco | São Paulo</a></a><br />
                            <a></a>                            
                            <a>Telefone: <br />
                            <a>(11) 4002-8922</a></a><br />
                            <a></a>
                            <a>Email: <br />
                            <a>stylewear@gmail.com</a></a>
                        </div>
                        <div class="text">
                            <h1 class="titulo2">Atendimento:</h1><br />
                            <a>Atendimento ao cliente<br />
                            <a>Quem nós somos</a><br />
                            <a>Termos de venda</a><br />
                            <a>Segurança</a></a>
                        </div>
                    </div>
                </div>
            </footer>
        
    )
};

export default footer;