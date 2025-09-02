import { useState } from "react";
import "./Capa.css"

function capa() {
    return(
        <>
            <div class="container-principal">
                <div class="text-principal">
                    <h1>Inspire-se e </h1><br />
                    <h1>monte seu</h1><br />
                    <h1>outfit conosco.</h1>

                </div>
                <div class="conteiner-capa">
                    <img src="./capa.png" alt="Capa" id="Capa"/>
                </div>
                
            </div>
        </>
        
    )
}

export default capa;