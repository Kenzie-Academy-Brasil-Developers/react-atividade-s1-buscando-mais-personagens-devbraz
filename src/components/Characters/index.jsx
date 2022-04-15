import './styles.css'
import CharCard from '../CharCard'

function Characters({characterList}) {

  return (

    <div>
      <h1>Meus Personagens</h1>
      <div>
        <ul>
          {characterList.map((characterList)=>{
            return <li key={characterList.id}>
                    <CharCard characterList={characterList} />
                  </li>        
          })}
        </ul>
      </div>
    </div> 
    
  )

} 

export default Characters