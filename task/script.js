function Calculator() {
    this.firstNumber = 0
    this.secondNumber = 0
}

Calculator.prototype.inputFirst = function (number) {
    this.firstNumber = number
}

Calculator.prototype.inputSecond = function (number) {
    this.secondNumber = number
}

Calculator.prototype.add = function () {
    console.log(this.firstNumber + this.secondNumber)
}

Calculator.prototype.subtract = function () {
    console.log(this.firstNumber - this.secondNumber)
}

Calculator.prototype.multiply = function () {
    if (this.firstNumber === 0 || this.secondNumber === 0) {
        console.log('One of the numbers is equal to 0, function stopped.')
    } else {
        console.log(this.firstNumber * this.secondNumber)
    }
}

Calculator.prototype.divide = function () {
    if (this.firstNumber === 0 || this.secondNumber === 0) {
        console.log('Zapamiętaj cholero, że nie dzieli się przez zero!')
    } else {
        console.log(this.firstNumber / this.secondNumber)
    }
}

Calculator.prototype.power = function () {
    let result = 1
    for (let i = 0; i < this.secondNumber; i++) {
        result *= this.firstNumber
    }

    console.log(result)
}

const calc = new Calculator()

calc.inputFirst(3)
calc.inputSecond(3)

calc.add()
calc.subtract()
calc.multiply()
calc.divide()
calc.power()

// class Calculator {
//     constructor() {
//         this.firstNumber = 0
//         this.secondNumber = 0
//     }

//     inputFirst(number) {
//         this.firstNumber = number
//     }

//     inputSecond(number) {
//         this.secondNumber = number
//     }

//     add () {
//         console.log(this.firstNumber + this.secondNumber)
//     }

//     subtract() {
//         console.log(this.firstNumber - this.secondNumber)
//     }

//     multiply() {
//         if (this.firstNumber === 0 || this.secondNumber === 0) {
//             console.log('One of the numbers is equal to 0, function stopped.')
//         } else {
//             console.log(this.firstNumber * this.secondNumber)
//         }
//     }

//     divide() {
//         if (this.firstNumber === 0 || this.secondNumber === 0) {
//             console.log('Zapamiętaj cholero, że nie dzieli się przez zero!')
//         } else {
//             console.log(this.firstNumber / this.secondNumber)
//         }
//     }
// }

// const calc = new Calculator()

// calc.inputFirst(2)
// calc.inputSecond(3)

// calc.add()
// calc.subtract()
// calc.multiply()
// calc.divide()