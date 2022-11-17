import { Link } from "react-router-dom"

interface QuestionProps {
  category: string,
  id: string,
  correctAnswer: string,
  incorrectAnswers:  Array<string>,
  question: string,
  type: string,
}


function QuestionTemplate({ id, category, correctAnswer, incorrectAnswers, question, type }: QuestionProps) {
  return (<div className="column is-one-quarter-desktop is-one-third-tablet">
    <h2>{question}</h2>
    <button>{incorrectAnswers[0]}</button>
    <button>{incorrectAnswers[2]}</button>
    <button>{incorrectAnswers[0]}</button>
    <button>{correctAnswer}</button>
  </div>)
}

export default QuestionTemplate