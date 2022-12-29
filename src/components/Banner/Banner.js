import './Banner.css'
function Banner (){

    // JSX - parece HTML, mas não é. O React entende o que é isso e transforma em elementos no DOM. 
    return(
        <header className='banner'>
        <img src="/imagens/banner.png" alt="O banner principal da página do Organo" />
        </header>
    )
}

export default Banner