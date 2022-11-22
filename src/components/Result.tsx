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

const hp = characters?.filter(
  character => (`${character.name}`
  .toLowerCase()
  .includes("harry potter")
  )
)
console.log(hp)
updateCharacters(hp)

function Result() {

}
export default Result