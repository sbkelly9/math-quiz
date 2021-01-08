import React, { Component } from "react";
import SubtractionData from "./data/subtraction.json";

class Subtraction extends Component {
    constructor() {
        super()
        this.state = {
            question: '',
            answer: ''
        }
    }
    render() {
        let subtractionList = SubtractionData.map((dataset, i) => {
            return (
              <div key={i}>
                <p>{dataset.problem}</p>
                <p>{dataset.answer}</p>
              </div>
            );
          });
        return <div>{subtractionList}</div>;
      }

    export default Subtraction;