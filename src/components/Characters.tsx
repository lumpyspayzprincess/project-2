import React from "react"
import { Link } from "react-router-dom"
import Character from "./Character"

interface Character {
  name: string
  species: string
  house: string
  patronus: string
  alive: boolean
  image: string
  gender:string
}
type Characters = null | Array<Character>;(null)

function Characters() {
  const [characters, updateCharacters] = React.useState<Characters>(null)

  
  React.useEffect(() => {
    async function fetchCharacters() {
      const resp = await fetch("https://hp-api.herokuapp.com/api/characters")
      const charactersData = await resp.json()
      updateCharacters(charactersData)
    }
    fetchCharacters()
  }, [])
  
  return (<section className="section">
    <div className="container">
      {/* <input type="text" placeholder="Type to search through the characters!"></input> */}
      {/* looking to make a search bar if I can be bothered -> look at useState https://www.youtube.com/watch?v=ZoayCCDHFiI */}
      <div className="columns is-multiline" >
        {characters?.map((character, index) => {
          return <Character
            key={index}
            name={character.name}
            image={character.image}
            species={character.species}
            patronus={character.patronus} house={""} alive={false} gender={""}            />
          })}
        </div>
      </div>
    </section>
  )}

export default Characters