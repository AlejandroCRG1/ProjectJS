
let squares = document.getElementsByClassName("squares")
let input = document.getElementById("number")
console.log(input.value)

function game() {
    let answer = getAnswer()
}

game()

function getAnswer() {
    let arrNumbers = []
    for (let i = 0; i < 5; i++) {
        if (i === 0) {
            arrNumbers.push(Math.floor(Math.random() * 9) + 1)
        }
        else {
            arrNumbers.push(Math.floor(Math.random() * 10))   
        }
    }
    return arrNumbers
}

function getInput() {
    let numbers = input.value
    console.log(numbers)
}