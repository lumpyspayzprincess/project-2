import React from "react"

function About() {
  React.useEffect(() => {
    // alert("Welcome to the Harry Potter Quiz!")
  }, [])

  return (
    <section>
      <div>
        <div>
          <img src="https://txt.1001fonts.net/img/txt/dHRmLjY2LjAwMDAwMC5RV3hzSUdGaWIzVjBJSFJvWlNCSVlYSnllU0JRYjNSMFpYSWdWVzVwZG1WeWMyVS4w/parry-hotter.regular.webp" />
          <p><b>**I got this from Wikipedia**</b><br />
          Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people).</p>
          <h2>Which characters can be assigned?</h2>
          <ul>
            <li>Harry Potter</li>
            <li>Hermione Granger</li>
            <li>Ron Weasley</li>
            <li>Draco Malfoy</li>
          </ul>
          <h2>How are the characters assigned? </h2>
          <p>A variety of questions will be thrown at you, and your match depends on you many questions are answered correctly!</p>\
          <img src="https://media.tenor.com/Ipt5cRVw_9AAAAAi/dnd-wizard.gif" alt="sparkly-wizard" />
        </div>
      </div>
    </section>
  )
}

export default About
