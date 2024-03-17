import PlayerCard from './components/PlayerCard'

function App() {
  const data = [
    {name:'Roger Federer', description: 'Arguably the best Tennis Player ever', rating: 5},
    {name:'Rafael Nadal', description: 'The King clay', rating: 4},
    {name:'Roger Federer', description: 'The Rising phenom of the next generation', rating: 3},
  ]

  return (
    <div className="App container flex justify-center gap-20 ml-[40vh] items-center mt-5 w-max">
      {data.map((person)=> (
        <PlayerCard name={person.name} description={person.description} rating={person.rating}/>
      ))}
    </div>
  )
}

export default App
