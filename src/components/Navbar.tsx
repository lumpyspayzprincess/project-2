import React from "react"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>
      <header>
        <nav className="navbar">
          <Link to="/" className="nav-links">
            Home
          </Link>
          <Link to="/about" className="nav-links">
            About the Quiz
          </Link>
          <Link to="/hp-characters" className="nav-links">
            All the characters
          </Link>
          <a href="https://the-trivia-api.com/docs/" target="_blank" className="nav-links">
            Quiz API
          </a>
          {/* <a href="https://hp-api.herokuapp.com/" target="_blank" className="nav-links">
                Harry Potter API ----> Heroku app not working */}
          <a href="https://rickandmortyapi.com/" target="_blank" className="nav-links">
            Replacement Rick And Morty API
          </a>
          <a href="https://github.com/lumpyspayzprincess" target="_blank" className="nav-links">
            My GitHub Page
          </a>
        </nav>
      </header>
    </>
  )
}

export default Navbar