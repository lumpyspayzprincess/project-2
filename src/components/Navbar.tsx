import React from "react"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>
      <header>
        <nav className="navbar is-dark">
          <div className="container">
            <div className="navbar-brand">
              {/* // ! These links tell React router to navigate to various pages. */}
              <Link to="/" className="navbar-item">
                Home
              </Link>
              <Link to="/about" className="navbar-item">
                About the Quiz
              </Link>
              <Link to="/at-characters" className="navbar-item">
                All the characters
              </Link>
              {/* <Link to="/apis" className="navbar-item">
                APIs
              </Link>
              <Link to="/jane" className="navbar-item">
                All about me
              </Link> */}
              {/* will add links later */}
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar