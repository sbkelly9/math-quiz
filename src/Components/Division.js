import { MuiThemeProvider } from "@material-ui/core";
import React, { Component } from "react";
import MathClass from '../mathClass/MathClass'
// import SubtractionData from '../data/subtraction.json'
// import AdditionData from '../data/additon.json'

class Division extends Component {
  constructor() {
    super();
    this.state = {
      question: "",
      answer: "",
      operator: '/',
    };
  }

  componentDidMount() {
    // this.creatDivisionQuestions();
    // let something = MathClass

  }

  render() {
    // let listOptions = this.state.choices.map(choice => <button onClick={checkIfItIsCorrectChoice}>{choice}</button>)

    console.log(MathClass.checkToSeeIfFirstNumberIsSmallerThanSecond('+'))

    // console.log(this.state);
    return (
      <div>
        <p>{this.state.question}</p>
        <button>Check Answer</button>
        <button>Next</button>
      </div>
    );
  }
}

export default Division;
