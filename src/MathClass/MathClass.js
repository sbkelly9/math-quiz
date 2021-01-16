class MathClass {
    constructor() {
        this.randomNumber1 = Math.floor(Math.random() * 100)
        this.randomNumber2 = Math.floor(Math.random() * 100)
        this.numberToUse1 = null
        this.numberToUse2 = null
        this.operatorFunctions = {
            '+': (x, y) => x + y,
            '-': (x, y) => x - y,
            '*': (x, y) => x * y,
            '/': (x, y) => x / y
        }
        this.options = {
            option1: Math.floor(Math.random() * 100),
            option2: Math.floor(Math.random() * 100),
            option3: null,
            option4: Math.floor(Math.random() * 100),
        }
        this.choices = null
    }

    checkToSeeIfFirstNumberIsSmallerThanSecond = (operator) => {
        // console.log(a, b)
        if (this.randomNumber2 > this.randomNumber1) {
            this.numberToUse1 = this.randomNumber2
            this.numberToUse2 = this.randomNumber1

            this.performMathEquation(this.numberToUse1, this.numberToUse2, operator)

            // console.log(this.numberToUse1, this.numberToUse2)
            return (this.numberToUse1, this.numberToUse2)
        } else {
            this.numberToUse1 = this.randomNumber1
            this.numberToUse2 = this.randomNumber2

            this.performMathEquation(this.numberToUse1, this.numberToUse2, operator)
            // console.log(this.numberToUse1, this.numberToUse2)

            return (this.numberToUse1, this.numberToUse2)
        }
    }

    performMathEquation = (num1, num2, sign) => {
        var sum = this.operatorFunctions[sign](num1, num2);
        this.options.option3 = Math.round((sum + Number.EPSILON) * 100) / 100
        // console.log(this.options)
        let { option1, option2, option3, option4 } = this.options

        let arrayOfOptions = [option1, option2, option3, option4]
        this.shuffleChoices(arrayOfOptions)

        return this.options;
    }

    shuffleChoices = (array) => {
        let m = array.length, t, i

        // While there remain elements to shuffle…
        while (m) {

            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);

            // And swap it with the current element.
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }

        this.choices = array
        // console.log(this.choices)
        return array;
    }

    handleClick = (e) => {
        // console.log(e)
        let userChoice = e.target.innerHTML
        let { option3 } = this.options
        userChoice == option3 ? console.log('correct!!') : console.log('Wrong!')
    }
}

export default new MathClass()