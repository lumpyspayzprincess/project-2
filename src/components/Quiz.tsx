import React from "react"
import { useState } from "react"
import { render } from "react-dom"
// import { Link, useParams, useLocation } from "react-router-dom"
import QuestionTemplate from './QuestionTemplate'

interface Question {
  category: string,
  id: string,
  correctAnswer: string,
  incorrectAnswers:  Array<string>,
  question: string,
  type: string,
}

type Questions = null | Array<Question>;(null)

// type exampleArray = Array<any>

const Quiz = () => {
  const [questions, setQuestions] = useState<Questions>(null)

    React.useEffect(() => {
    async function fetchQuestion() {
      const resp = await fetch("https://the-trivia-api.com/api/questions?limit=15&region=GB&difficulty=medium")
      const questionData = await resp.json()
      setQuestions(questionData)
      console.log(questionData)
    }
    fetchQuestion()
  }, [])
  // supposed to add something here so line 28 doesn't repeat but forgot

  return (<section className="section">
    <div className="container">
      <div className="columns is-multiline">
        {questions?.map((question, index) => {
          return <QuestionTemplate
            category={question.category}
            id={question.id}
            question={question.question}
            correctAnswer={question.correctAnswer}
            incorrectAnswers={question.incorrectAnswers}
            // isShown={index === } should equal selected index,is only true for one card at a time, so one card should be shown
            />
          })
          }
        </div>
    </div>
  </section>
)}

// will use https://bulma.io/documentation/components/card/ to create card
// ref video for hovering https://www.youtube.com/watch?v=4KxHcbQ8GYQ


export default Quiz

// interface Question {
//   category: string,
//   id: string,
//   correctAnswer: string,
//   incorrectAnswers:  Array<string>,
//   question: string,
//   type: string,
// }

// type ShowQuestion = null | Question
// const questionsShown = Array<ShowQuestion>


// // const exampleArrayT: any = [
// //   {1: "What's my name?", "Jane": }
// //   {2, "When's my birthday?", "1st December"}
// // }]