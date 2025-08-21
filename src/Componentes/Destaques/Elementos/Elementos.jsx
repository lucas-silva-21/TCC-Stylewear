import { useState } from "react"
import './elementos.css'

function elemento_dest(props) {
    return (
        <>
            <section className="elemento">
                <div className="part1">
                    <a href=""><img src={props.img} alt="Foto1_destaque"></img></a>
                </div>
                <div className="part2">
                    <h2 id="text">{props.text}</h2>
                </div>
            </section>
        </>
    )
};

export default elemento_dest;