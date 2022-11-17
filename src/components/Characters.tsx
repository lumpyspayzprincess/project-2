import React from "react"
import { Link } from "react-router-dom"
import Character from "./Character"

interface Character {
  id: number,
  slug: string,
  displayName: string,
  speciies: string,
  sex: string,
  quotes: Array<string>
  sprite: string
}
type Characters = null | Array<Character>;(null)

function Characters() {
  const [characters, updateCharacters] = React.useState<Characters>(null)

  
  React.useEffect(() => {
    async function fetchCharacters() {
      const resp = await fetch("https://adventure-time-api.herokuapp.com/api/v1/characters")
      const charactersData = await resp.json()
      updateCharacters(charactersData)
    }
    fetchCharacters()
  }, [])
  
  return (<section className="section">
    <div className="container">
      <div className="columns is-multiline">
        {characters?.map((character) => {
          return <Character
          key={character.id}
          displayName={character.displayName}
          quotes={character.quotes}
          sprite={character.sprite}
          slug={character.slug}
          speciies={character.speciies}
            />
          })}
        </div>
      </div>
    </section>
  )}

export default Characters