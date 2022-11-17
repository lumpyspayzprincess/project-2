import React from "react"
import { Link } from "react-router-dom"


function Home() {
  return (
    <section>
      <div>
        <div>
          <p>
            Adventure Time Personality Quiz
          </p>
          <Link to={"/quiz"} className="button is-large">
            Begin!
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Home