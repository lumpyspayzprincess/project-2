import React from "react"
import { useState, useEffect, useRef } from "react"
// import ReactDOM from "react-dom";
// import { render } from "react-dom"
import QuestionTemplate from './QuestionTemplate'

interface Question {
  category: string,
  id: string,
  correctAnswer: string,
  incorrectAnswers:  Array<string>,
  question: string,
  type: string,
  index: number
}

type Questions = null | Array<Question>;(null)


const Quiz = () => {
  const [questions, setQuestions] = useState<Questions>(null)
  const [index, setIndex] = useState(0)
  // let { score } = useParams()
  
  // console.log(score)

    React.useEffect(() => {
    async function fetchQuestion() {
      const resp = await fetch("https://the-trivia-api.com/api/questions?limit=15&region=GB&difficulty=medium")
      const questionData = await resp.json()
      setQuestions(questionData)
    }
    fetchQuestion()
  }, [])
  // supposed to add something here so line 28 doesn't repeat but forgot

  let selectedIndex = 0

  var whatsTheAnswer = useRef(null)
  
  function moveTheCards(){
    console.log(whatsTheAnswer.current)
  }


  // moveTheCards()

  return (<section className="section">
    <div ref={whatsTheAnswer} className="carousel">
        {questions?.map((question, index) => {
          let className = ""
          // if (index === selectedIndex) {
          //   className = "card"
          // } else if (index !== selectedIndex) {
          //   className = "hidden"
          // }
// explain this bit as it's an interesting almost finished piece of work
          return (
            <div className={className} key={index}>
              <QuestionTemplate
            category={question.category}
            id={question.id}
            question={question.question}
            correctAnswer={question.correctAnswer}
            incorrectAnswers={question.incorrectAnswers}
            index={question.index} type={""}
            />
            </div>)
          })
          }
    </div>
  </section>
)

}


// will use https://bulma.io/documentation/components/card/ to create card
// ref video for hovering https://www.youtube.com/watch?v=4KxHcbQ8GYQ


export default Quiz

// type exampleArray = Array<any>

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