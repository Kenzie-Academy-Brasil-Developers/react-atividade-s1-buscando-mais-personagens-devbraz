import './App.css';
import {useState, useEffect} from 'react'
import Characters from './components/Characters'

function App() {

  const [characterList, setCharacterList] = useState([])
  const [currentPage, setCurrentPage] = useState('https://rickandmortyapi.com/api/character/')
  const [nextPage, setNextPage] = useState('')

  useEffect(() => {
    fetch(currentPage)
    .then((response) => response.json())
    .then((response) => {
      setCharacterList([...characterList, ...response.results])
      setNextPage(response.info.next)
    })
  },[currentPage])

  return (

    <div className="App">
      <header className="App-header">
        <Characters characterList={characterList}/>
        <button onClick={() => setCurrentPage(nextPage)} >Next Page</button>
      </header>
    </div>

  );
  
}

export default App;
