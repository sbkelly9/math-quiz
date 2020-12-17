import React, { Component } from 'react'
// import SubtractionData from '../data/subtraction.json'
// import AdditionData from '../data/additon.json'

class Addition extends Component {
    constructor() {
        super()
        this.state = {
            question: '',
            answer: ''
        }
    }

    creatAdditionQuestions = () => {
        // Create two random numbers between 0-100
        let randomNumber1 = Math.floor(Math.random() * 100);
        let randomNumber2 = Math.floor(Math.random() * 100);

        console.log(randomNumber1)
        console.log(randomNumber2)

        // Create a question that ask them to add the two numbers together
        let generatedQuestion = `What is ${randomNumber1} + ${randomNumber2}`
        console.log(generatedQuestion)

        // Also want to provide the answer
        let generatedAnswer = randomNumber1 + randomNumber2
        console.log(generatedAnswer)


        this.setState({
            question: generatedQuestion,
            answer: generatedAnswer
        })

    }

    componentDidMount() {
        this.creatAdditionQuestions()

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

export default Addition;