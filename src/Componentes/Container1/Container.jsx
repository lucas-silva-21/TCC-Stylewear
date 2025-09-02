import { useState } from "react";
import "./Container.css"

function container(){
    return(
        <div class="container-principal1">
            <div class="container-boneco">
                <img src="./boneco.png" alt="boneco" id="boneco" />
            </div>
                <div class="texto-principal">
                    <h1>Teste seu</h1><br />
                    <h1>estilo da sua</h1><br />
                    <h1>maneira.</h1>
                </div>
        </div>
    )
}
export default container;