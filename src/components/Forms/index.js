import Button from '../Button'
import DropDown from '../DropDown'
import TextField from '../TextField'
import './Form.css'
import { useState } from 'react'

const Form = (props) => {

    const [nome, setNome] = useState ('')
    const [cargo, setCargo] = useState ('')
    const [imagem, setImagem] = useState ('')
    const [team, setTeam] = useState ('')
    

    const saveIt = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            team
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTeam('')
    }

    return (
        <section className="form">
            <form onSubmit={saveIt}>
                <h2>Preencha os dados para criar os cards do colaborador</h2>
                <TextField 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    valor={nome}
                    toChanged={valor => setNome(valor)}
                />

                <TextField 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    valor ={cargo}
                    toChanged = {valor => setCargo(valor)}
                />

                <TextField 
                    obrigatorio={true} 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem" 
                    valor = {imagem}
                    toChanged = {valor => setImagem(valor)}
                />
                <DropDown 
                    obrigatorio={true} 
                    label = "Team" 
                    itens = {props.teams} 
                    valor = {team}
                    toChanged = {valor => setTeam(valor)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form