import React, { useRef } from "react"
import { useState } from "react"
import ReactDOM from "react-dom"
// import { render } from "react-dom"

interface QuestionProps {
  category: string,
  id: string,
  correctAnswer: string,
  incorrectAnswers:  Array<string>,
  question: string,
  type: string,
  index: number
}

function QuestionTemplate({ question, correctAnswer, incorrectAnswers, category }: QuestionProps) {
  const [show, setShow]=React.useState(true)
  const [score, setScore]=React.useState(0)

  function hideTheCard() {
    setShow(!show)
  }

function runningScore() {
  setScore((prev) => prev + 1)
  hideTheCard()
}
// the problem I had here was with trying to tie the different buttons together


  function Correct(){
    return <button id="1" onClick={runningScore}>{correctAnswer}</button>
  }

  
  var whatsTheAnswer = useRef(null)


  console.log(score) //it does work

  return (<div className="card" >
{ show?<div><h2>Here's a question from the {category} category:</h2>
  <h1>{question}</h1>
  <Correct/>
  <button id="2" >{incorrectAnswers[0]}</button>
  <button id="3" >{incorrectAnswers[1]}</button>
  <button id="4" >{incorrectAnswers[2]}</button></div>:<div><h2 ref={whatsTheAnswer}>Thanks for answering!</h2></div>
  }
  </div>)
}


  // function answerWrong() {
  //   hideTheCard()
    //  this is to not show the card

    // function addValueToArray() {
    //   if (!{correctAnswer}){
    //     setCount(count + 1)
    //     return count
    //   } else {
    //     return count
    //   }
    // }
    // console.log(count)


  // function showNextCard() {
  //   let index = 0
  //   for (index = 0, index <16, index++) }
  // }

  // function answerCorrect() {
  //   hideTheCard()
  //   addPoint()

  // }

  // () => setCounter((prevCount) => prevCount - 1)

  // function whatsHappened(event) {
  //   console.log(event)
  //   if (score === 0)
  //   setScore(1)
  //   else {setScore(score + 1)}
  //   console.log(score)
  // }

  // console.log(score)

  // const [total, setTotal]=React.useState(0)
  // const [showOne, setShowOne]=React.useState([])



  // function addPoint(score:number){
  //   setScore((score) => score + 1)
  //   return score
  //   // setTotal((oldTotal) => oldTotal + sc )
  // }

  // const showACard = showOne[Math.floor(Math.random() * showOne.length)]

  // function indexIsRight(){
  //   if (index === currentIndex){
  //     setShow(show)
  //   }
  // }

  // setInterval(indexIsRight, 500)

//add className to show question, remove className to hide question
// thinking to change class to 0 and if class === 0, then show, when click on button, class = answer

// show one at a time 
// have a counter -> // need to add onClick to buttons
// need to randomise buttons (nb, remember correctanswer at the end and put in variable)
// showing the character at the end

export default QuestionTemplate