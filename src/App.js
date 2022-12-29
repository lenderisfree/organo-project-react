import { useState } from 'react';
import Banner from './components/Banner/Banner.js';
import Form from './components/Forms/index.js';
import Team from './components/Team/index.js';
import Rodape from './components/Rodape/index,.js';

function App() {

  const teams = [
    
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },

    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },

    {
      nome: 'Data Science',
      corPrimaria: '#A60157',
      corSecundaria: '#F0F8E2'
    },

    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },

    {
      nome: 'UX Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },

    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    
    {
      nome:'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) =>{
    setColaboradores([...colaboradores, colaborador]) // as reticencias eu espalho todos os colaboradores do meu array, e coloco o novo colaborador no final. 
  }

  return (
    <div className="App">
      <Banner/>
      <Form teams={teams.map(team => team.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      
      {teams.map(team => <Team 
        key={team.nome} 
        nome={team.nome} 
        corPrimaria={team.corPrimaria} 
        corSecundaria={team.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.team === team.nome)}
      />)} 

      <Rodape/>

  
  
    </div>
  );
}

export default App;

// {teams.map(team => <Team nome={team.nome}/>)}  PARA CADA TIME, DENTRO DA MINHA LISTA DE TIMES, CRIA UM COMPONENTE CHAMADO TIME COM O NOME. 

// O filter, parece o map porque ele pega um array e transforma em outro array. 