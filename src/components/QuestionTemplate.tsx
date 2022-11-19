import React from "react"
import { useState } from "react"
// import { render } from "react-dom"

interface QuestionProps {
  category: string,
  id: string,
  correctAnswer: string,
  incorrectAnswers:  Array<string>,
  question: string,
  type: string,
}

function QuestionTemplate({ id, question, correctAnswer, incorrectAnswers, category }: QuestionProps) {
  const [show, setShow]=React.useState([])
  // const [showOne, setShowOne]=React.useState([])



  // const showACard = showOne[Math.floor(Math.random() * showOne.length)]

  // function indexIsRight(){
  //   if (index === currentIndex){
  //     setShow(show)
  //   }
  // }

  // setInterval(indexIsRight, 500)

  function hideCardAndAddValueToArrayAndShowNextCard() {
    setShow(!show) //this is to not show the card

    
  //   function addValueToArray() {
  //     if (!{correctAnswer}){
  //       setCount(count + 1)
  //       return count
  //     } else {
  //       return count
  //     }
  //   }
  //   console.log(count)
  // }

  // function showNextCard() {
  //   let index = 0
  //   for (index = 0, index <16, index++) }
  }

  return (<div className="card">
{ show?<div><h2>Here's a question from the {category} category:</h2>
  <h1>{question}</h1>
  <button id="1" onClick={hideCardAndAddValueToArrayAndShowNextCard}>{correctAnswer}</button>
  <button id="2" onClick={hideCardAndAddValueToArrayAndShowNextCard}>{incorrectAnswers[0]}</button>
  <button id="3" onClick={hideCardAndAddValueToArrayAndShowNextCard}>{incorrectAnswers[1]}</button>
  <button id="4" onClick={hideCardAndAddValueToArrayAndShowNextCard}>{incorrectAnswers[2]}</button></div>:null}
  </div>)
}

//add className to show question, remove className to hide question
// thinking to change class to 0 and if class === 0, then show, when click on button, class = answer

// show one at a time 
// have a counter -> // need to add onClick to buttons
// need to randomise buttons (nb, remember correctanswer at the end and put in variable)
// showing the character at the end

export default QuestionTemplate