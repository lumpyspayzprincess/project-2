import React from "react"
import { Link, useParams, useLocation } from "react-router-dom"

interface Question {
  category: string,
  id: string,
  correctAnswer: string,
  incorrectAnswers:  Array<string>,
  question: string,
  type: string,
}

type ShowQuestion = null | Question

function Quiz() {
  const { QuestionName } = useParams()
  const [question, setQuestion] = React.useState<ShowQuestion>(null)

  React.useEffect(() => {
    async function fetchQuestion() {
      const resp = await fetch("https://the-trivia-api.com/api/questions?limit=15&region=GB&difficulty=medium")
      const questionData = await resp.json()
      setQuestion(questionData)
    }
    fetchQuestion()
  }, [QuestionName])
  
  return (<div className="column is-one-quarter-desktop is-one-third-tablet">
    <h2>{question}</h2>
    <button>{incorrectAnswers[0]}</button>
    <button>{incorrectAnswers[2]}</button>
    <button>{incorrectAnswers[1]}</button>
    <button>{correctAnswer}</button>
    </div>)
}

export default Quiz
