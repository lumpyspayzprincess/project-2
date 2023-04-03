import React from "react"
// import { Link } from "react-router-dom"
import Character from "./Character"

type Characters = Array<Character>;({})

interface Character {
  name: string
  species: string
  house: string
  patronus: string
  alive: boolean
  image: string
  gender:string
  prevState: null
}

function Characters() {
  const [characters, updateCharacters] = React.useState<Characters>([]) // all characters that are loaded on the pager initially
  // const [allChars, updateAllChars] = React.useState<Characters>(null) // characters that are filtered
  
  React.useEffect(() => {
    async function fetchCharacters() {
      // const resp = await fetch("https://hp-api.herokuapp.com/api/characters")
      const resp = await fetch("https://rickandmortyapi.com/api/character")
      const charactersData = await resp.json()
      updateCharacters(charactersData)
    }
    fetchCharacters()
  }, [])
  
  return (<section className="section">
    <div className="container">
      <input type="text" placeholder="Type to search through the characters!" onChange={filterCharacters}></input>
      <div className="columns is-multiline" >
        {characters?.map((character, index) => {
          return <Character
            key={index}
            name={character.name}
            image={character.image}
            species={character.species}
            // patronus={character.patronus} house={""} alive={false} gender={""} 
            />
          })}
        </div>
      </div>
    </section>
  )

  function filterCharacters(onInput: { target: { value: string } }) {
    const searchValue = onInput.target.value.toLowerCase()
    // console.log(searchValue)
    const filteredChars = characters?.filter(
      character => (`${character.name}`
      .toLowerCase()
      .includes(searchValue)
      )
    )
    // console.log(filteredChars)
    updateCharacters(filteredChars)
    // tried to clear after but couldn't, so refresh page to get around id
    function refreshResults() {
      if (searchValue !== "")
      setTimeout(() => {
        document.location.reload();
      }, 7000);
    }

    refreshResults()
    // updateAllChars(filteredChars)
  }
}

export default Characters