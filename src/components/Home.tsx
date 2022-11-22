import React from "react"
import { Link } from "react-router-dom"


function Home() {
  return (
    <section className="everything-centred">
      <div className="everything-centred">
        <div>
          <img src="https://txt.1001fonts.net/img/txt/dHRmLjExNi4wMDAwMDAuU0dGeWNua2dVRzkwZEdWeUlGQmxjbk52Ym1Gc2FYUjVJRkYxYVhvLjA/parry-hotter.regular.webp" alt="hp-font"></img><br></br>
          <Link className="begin" to={"/quiz"}>
            Begin!
          </Link>
          <div><img src="https://www.pngmart.com/files/8/Hogwarts-Logo-PNG-Transparent.png" alt="hogwarts"></img></div>
        </div>
      </div>
    </section>
  )
}

export default Home
