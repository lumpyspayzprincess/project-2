import React from "react"

function About() {
  React.useEffect(() => {
    // alert("Welcome to the Adventure Time Quiz!")
  }, [])

  return (
    <section>
      <div>
        <div>
          <h2>What's Adventure Time?</h2>
          <p>Adventure Time is a cartoon.</p>
          <h2>What characters are available?</h2>
          <ul>
            <li>Princess Bubblegum</li>
            <li>Finn</li>
            <li>Jake</li>
            <li>BMO</li>
            <li>Lumpy Space Princess</li>
            <li>Marceline</li>
            <li>Lady Rainacorn</li>
            <li>Flame Princess</li>
          </ul>
          <h2>How are the characters assigned? </h2>
          <p>A variety of questions will be thrown at you, and your match depends on you many questions are answered correctly!</p>
        </div>
      </div>
    </section>
  )
}

export default About
