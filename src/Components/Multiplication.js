import React, { Component } from 'react';
import MathClass from '../MathClass/MathClass'
import DisplayQuestion from './DisplayQuestion'

class Multiplication extends Component {
    constructor() {
        super();
        this.state = {
            question: '',
            operator: '*',
            correctChoice: null,
            choices: []
        };
    }


    componentDidMount() {
        MathClass.checkToSeeIfFirstNumberIsSmallerThanSecond(this.state.operator)

        this.setState({
            choices: MathClass.choices,
            correctChoice: MathClass.options.option3,
            question: `${MathClass.numberToUse1} ${this.state.operator} ${MathClass.numberToUse2}`
        })

    }

    render() {
        return (
            <div>
                <DisplayQuestion choices={this.state.choices} question={this.state.question} handleClick={MathClass.handleClick} />
            </div>
        );
    }
}

export default Multiplication;