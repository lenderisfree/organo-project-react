import './Button.css'

const Button = (props) =>{
    return (<button className='button'>
        {props.children}  
    </button>)
}

//ao colocar props.children aqui no meu return, eu consigo colocar o conteudo do meu botão em texto, como está na minha past Forms/index.js.

export default Button