import { useState } from "react"
import './bolha.css'

function bolha (props){
    return (
        <>
            <div className="div-dest">
                <img src={props.img} alt={props.alt} id="foto"/>
                <h1 id="texto">{props.text}</h1>
            </div>
        </>
    )
}

export default bolha;