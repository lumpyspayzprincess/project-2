import React from "react"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>
      <header>
        <nav className="navbar is-dark">
          <div className="container">
            <div className="navbar-brand">
              <Link to="/" className="navbar-item">
                Home
              </Link>
              <Link to="/about" className="navbar-item">
                About the Quiz
              </Link>
              <Link to="/hp-characters" className="navbar-item">
                All the characters
              </Link>
              <a href="https://the-trivia-api.com/docs/" target="_blank">
                Quiz API
              </a>
              <a href="https://hp-api.herokuapp.com/" target="_blank">
                Harry Potter API
              </a>
              <a href="https://github.com/lumpyspayzprincess" target="_blank">
                My GitHub Page
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar