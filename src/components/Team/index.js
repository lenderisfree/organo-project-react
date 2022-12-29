import './Team.css'
import Worker from '../Worker'

const Team = (props) => {
    const css = {backgroundColor: props.corSecundaria}
    return(
        props.colaboradores.length > 0 && <section className='team' style={css}>
            <h3 style={{borderColor: props.corPrimaria}}> {props.nome}</h3>
            <div className='colaboradores'>
                 {props.colaboradores.map(colaborador => <Worker corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
            </div>
        </section>
    )
}

export default Team

//na linha 7, o que foi feito é, se não tenho nenhum colaborador para alguma profissão, ele não aparece no meu browser. O jeito de fazermos isso com o React é peculiar. Em "index.js" de "Times", queremos pegar toda a <section>, que é um JSX, e criar uma maneira dela só ser retornada se a lista de colaboradores for maior do que zero. Chamaremos props.colaboradores.length > 0 &&., essa é a nossa condição. É assim que fazemos uma renderização condicional com o React. O JavaScript vai olhar para essa expressão e caso > 0 seja true, ele vai retornar o segundo parâmetro da condição. Se ele for falso, o React não vai fará nada.