import data from "../Data/got.json"

import CharacterCard from "./CharacterCard"

export default Body = ()=>{
    return (<div className="character-card-container">
    {data.map((character) => <CharacterCard key = {character.id} data = {character}/>)}
    </div>)
}

