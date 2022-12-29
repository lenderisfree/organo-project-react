import { useState } from 'react'
import './TextField.css'

const TextField = (props) =>{

    const placeholderModificada = `${props.placeholder}...`

    const whenTyped = (evento) =>{
        props.toChanged(evento.target.value)
    }
    return(
        <div className="text-field">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={whenTyped} required={props.obrigatorio} placeholder={placeholderModificada}></input>
        </div>

    )
}

export default TextField

// O campo required={props.obrigatorio}, faz a ligação do meu HTML com o REACT, assim ele determina que um campo deve ser obrigatoriamnte preenchido se no meu index.js do campo Forms estiver como obrigarotio={true}, ou seja, o formulario nao é enviado caso nao tenha um campo preenchido. 