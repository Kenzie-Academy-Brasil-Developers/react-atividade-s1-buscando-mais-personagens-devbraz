import './styles.css'

function CharCard({characterList}) {

  return (

    <>
      {characterList.status === 'Alive'?
        <div className='card'>
          <h6>{characterList.name}</h6>
          <img src={characterList.image}/>
        </div>
      :
        <div className='card-dead'>
          <h6>{characterList.name}</h6>
          <img src={characterList.image}/>
        </div>
      }
    </>

  )

}

export default CharCard 