import { useState } from "react"
import './elementos.css'

function elemento_dest(props) {
    return (
        <>
            <a href={props.link}>
                <section className="elemento">
                    <div className="part1">
                        <img src={props.img} id="foto-dest" alt="Foto1_destaque"></img>
                    </div>
                    <div className="part2">
                        <h2 id="text">{props.text}</h2>
                    </div>
                </section>
            </a>
        </>
    )
};

export default elemento_dest;