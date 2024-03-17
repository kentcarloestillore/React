import Rating from './Rating'

function PlayerCard(person){
    return(
        <div className="p-4 rounded bg-blue-300 shadow w-1/3 h-[200px] flex flex-col justify-between">
            <div className="mb-2">
                <div>Name: </div>
                <strong>{person.name}</strong>
            </div>
            <div>
                <div>Description: </div>
                <strong>{person.description}</strong>
            </div>
            <div>
                <div>Rating: </div>
                <Rating rating={person.rating}/>
            </div>
            
        </div>
    )
}

export default PlayerCard