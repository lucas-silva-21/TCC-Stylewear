import  {useState} from "react"
import './Footer.css'

function footer() {
    return (
        
            <footer>
                <div class="container1">
                    <h1 class="titulo">Nos acompanhe:</h1>
                    <div class="container-icones">
                        <ul class="icones">
                            <a href="/" target="_blank" rel="noopener noreferrer"><img src="./Logos/instagram.svg" alt="instagram" id="icon"/></a>
                            <a href="/" target="_blank" rel="noopener noreferrer"><img src="./Logos/tiktok.svg" alt="tiktok" id="icon"/></a>
                            <a href="/" target="_blank" rel="noopener noreferrer"><img src="./Logos/pinterest.svg" alt="pinterest" id="icon"/></a>
                            <a href="/" target="_blank" rel="noopener noreferrer"><img src="./Logos/twitter-x.svg" alt="x" id="icon"/></a>
                            <a href="/" target="_blank" rel="noopener noreferrer"><img src="./Logos/facebook.svg" alt="facebook" id="icon"/></a>  
                        </ul>
                    </div>
                </div>
                <div class="container2">
                    <div class="final-text">
                        <div class="text">
                            <h1 class="titulo-stylewear">Stylewear</h1>
                            <br />
                            <a> CNPJ: 07865390071234</a>
                            <a class="final"> ©Stylewear </a>
                        </div>
                        <div class="text">
                            <h1 class="titulo2">Informações de contato:</h1><br />
                            <a>Endereço: <br />
                            <a>Rua - Rio Caio Hebling, 278 </a><br />
                            <a>Osasco | São Paulo</a></a><br />
                             <a></a><br />                           
                            <a>Telefone: <br />
                            <a>(11) 4002-8922</a></a><br />
                            <a></a><br />
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
                        <div class="text">
                            <h1 class="titulo2">Programadores:</h1><br />
                            <a>Lucas da Sliva O.(Desenvolvedor Master)</a><br />
                            <a>Gustavo Sirol M.(Desenvolvedor Front-end)</a><br />
                            <a>Richard Silva D.(Desenvolvedor Back-end)</a><br />
                        </div>
                    </div>
                </div>
            </footer>
        
    )
};

export default footer;