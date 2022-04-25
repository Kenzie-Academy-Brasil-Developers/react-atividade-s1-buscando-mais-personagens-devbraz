import './App.css';
import {useState, useEffect} from 'react'
import Characters from './components/Characters'

function App() {

  const [currentPage, setCurrentPage] = useState('https://rickandmortyapi.com/api/character/')
  const [nextPage, setNextPage] = useState('')
  const [prevPage, setPrevPage] = useState('')
  const [characterList, setCharacterList] = useState([])

  useEffect(() => {
    fetch(currentPage)
    .then((response) => response.json())
    .then((response) => {
      setCharacterList(response.results)
      setNextPage(response.info.next)
      setPrevPage(response.info.prev)
    })
  },[currentPage])

  return (

    <div className="App">
      <header className="App-header">
        <Characters currentPage={currentPage} characterList={characterList} nextPage={nextPage} prevPage={prevPage}  setCurrentPage={setCurrentPage} />
      </header>
    </div>

  );
  
}

export default App;
