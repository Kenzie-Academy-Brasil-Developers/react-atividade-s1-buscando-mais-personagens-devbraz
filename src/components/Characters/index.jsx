import './styles.css'
import CharCard from '../CharCard'

function Characters({characterList, nextPage, prevPage, setCurrentPage, currentPage}) {
  
  return (

    <div>
      <h1>Meus Personagens</h1>
      <div>
          <ul>
            {characterList.map((characterList, index)=>{
              return <li key={index}>
                      <CharCard characterList={characterList} />
                    </li>        
            })}
          </ul>
      </div>
      {prevPage === null?  

        <>
          <button onClick={() => {
            setCurrentPage(nextPage)
          }} >Next Page</button>
        </>

      : 

        <>
          <button onClick={() => {
            setCurrentPage(prevPage)
          }}>Previous Page</button>
          <button onClick={() => {
            setCurrentPage(nextPage)
          }} >Next Page</button>
        </>
      }

    </div> 
    
  )

} 

export default Characters