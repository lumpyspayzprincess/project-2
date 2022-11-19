import React from "react"

function About() {
  React.useEffect(() => {
    // alert("Welcome to the Harry Potter Quiz!")
  }, [])

  return (
    <section>
      <div>
        <div>
          <h2>What's Harry Potter?</h2>
          <p>Series of books and films by JK Rowling.</p>
          <h2>What Characters are available?</h2>
          <ul>
            <li>Harry Potter</li>
            <li>Hermione Granger</li>
            <li>Ron Weasley</li>
            <li>Draco Malfoy</li>
          </ul>
          <h2>How are the characters assigned? </h2>
          <p>A variety of questions will be thrown at you, and your match depends on you many questions are answered correctly!</p>
        </div>
      </div>
    </section>
  )
}

export default About
