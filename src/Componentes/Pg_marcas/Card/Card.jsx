import React from "react";
import './card.css'

function Card (props){
    return(
        <>
            <div className="div-card">
                <img src={props.img} alt={props.alt} id="img-item"/>
            </div>
        </>
    )
}

export default Card;