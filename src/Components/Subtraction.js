import React, { Component } from "react";
// import SubtractionData from "../data/subtraction.json";

class Subtraction extends Component {
  constructor() {
    super();
    this.state = {
      question: "",
      answer: "",
    };
  }


  creatSubtractionQuestions = () => {
    // Create two random numbers between 0-100
    let randomNumber1 = Math.floor(Math.random() * 100);
    let randomNumber2 = Math.floor(Math.random() * 100);

    console.log(randomNumber1)
    console.log(randomNumber2)

    // Create a question that ask them to add the two numbers together
    let generatedQuestion = `What is ${randomNumber1} - ${randomNumber2}`
    console.log(generatedQuestion)

    if (randomNumber1 > randomNumber2) {
        var outcome = generatedQuestion;
  } 
  
// //   else {
// // //         var outcome = else block;
// // //   }
//   outcome;

    // Also want to provide the answer
    let generatedAnswer = randomNumber1 - randomNumber2
    console.log(generatedAnswer)


    this.setState({
        question: generatedQuestion,
        answer: generatedAnswer
    })

}

componentDidMount() {
    this.creatSubtractionQuestions()

   }




   render() {
    console.log(this.state)
    return (
        <div>
            <p>{this.state.question}</p>
            <button>Check Answer</button>
            <button>Next</button>
        </div>
    );
}
}


export default Subtraction;
