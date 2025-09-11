import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import './elemento.css'

function Seleção(props){
    return(
        <>
        <div className='caroseul-seleção'>
            <h1 id='titulo'>{props.titulo}</h1>
            <div className='caroseul'>
                <button id='left'>&#8249;</button>
                <ul className='ul-itens'>
                    <li><Card img={props.img} alt={props.alt} /></li>
                    <li><Card img={props.img} alt={props.alt} /></li>
                    <li><Card img={props.img} alt={props.alt} /></li>
                    <li><Card img={props.img} alt={props.alt} /></li>
                    <li><Card img={props.img} alt={props.alt} /></li>
                    <li><Card img={props.img} alt={props.alt} /></li>
                    <li><Card img={props.img} alt={props.alt} /></li>
                    <li><Card img={props.img} alt={props.alt} /></li>
                    <li><Card img={props.img} alt={props.alt} /></li>
                </ul>
                <button id='right' >&#8250;</button>
            </div>
        </div>
        </>
    )
}

export default Seleção