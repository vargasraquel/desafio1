import { useState, useEffect } from 'react'
import './styles.css'

function App() {
  const [ personagens, setPersonagem ] = useState([])
  const [ busca, setBusca ] = useState('')
  const [ filtro, setFiltro ] = useState([])

  useEffect(() => {
    fetch('http://www.irmaodojorel.com/api/Personagem')
      .then(response =>response.json())
      .then(data => setPersonagem(data))
  },[])

  useEffect(() => {
    setFiltro(
      personagens.filter(personagem => {
        return personagem.nome.includes(busca)
      })
    )
  },[ busca, personagens ])

  return (
    <div className="container">
      <input 
        placeholder="Digite o nome do personagem"
        onChange={e => {setBusca(e.target.value)}}
      />
      <div className="cards">
        {filtro.map(personagem => (
          <div className="card" key={personagem.id}>
            <p>{personagem.nome}</p>
            <img src={personagem.imagemUrl} alt={personagem.nome}/>
          </div>
        ))}
       
      </div>
    </div>
  );
}

export default App;