import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { useState } from 'react'
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Characters from "./components/Characters"
import './App.css'
import Character from "./components/Character"
import Quiz from "./components/Quiz"

// interface IStatus { statusSeverityDescription: string }
// interface ILine { id: string, name: string, lineStatuses: Array<IStatus> }
// type Lines = null | Array<ILine>

function App() {

  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/hp-characters" element={<Characters />} />
      <Route path="/quiz" element={<Quiz />} />
    </Routes>
  </Router>
  )
}

export default App