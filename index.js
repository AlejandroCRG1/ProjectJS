let divContainer = document.getElementsByClassName("square-containers")[0];
let divLines, divSquares;

let input = document.getElementById("number");
let info = document.getElementsByClassName("info-section")[0];
info.innerHTML = "Start the game by pressing the button, you have 6 tries!"

let triesCount = 6;
let startPoint = 0;
let answer = getRandom();

function createLine() {
    triesCount--
    let userAnswer = sendAnswer()
    let arrStatus = userAnswer[0]
    let arrInput = userAnswer[1]
    let correct = true
    if (triesCount >= 0) {
        console.log(arrStatus)
        divLines = document.createElement("div");
        divLines.classList.add("square-lines");
        console.log(divLines);

        for (let i = 0; i < 5; i++) {
            divSquares = document.createElement("div");
            divSquares.classList.add("squares");
            divSquares.innerHTML = arrInput[i]

            if (arrStatus[i] === "right") {
                divSquares.classList.add("right");
            }
            if (arrStatus[i] === "present") {
                divSquares.classList.add("present");
            }
            if (arrStatus[i] === "wrong") {
                divSquares.classList.add("wrong");
            }

            divLines.appendChild(divSquares);
        }

        divContainer.appendChild(divLines);
        info.innerHTML = `You've got ${triesCount} tries left!`

        for (let i = 0; i < 5; i++) {
            if (arrStatus[i] != 'right') {
                correct = false
            }
        }

        if (correct) {
            info.innerHTML = "YOU WON BRUDDA, NICE PLAY, THESE ARE YOUR TRIES:"
            displayEnd(correct)
        }
        
        if (triesCount == 0 && !correct) {
            info.innerHTML = "YOU LOST BRUDDA"
            displayEnd(correct)
        }
    }
}

function displayEnd(bool) {
    input.style.display = "none"
    let button = document.getElementsByClassName("button")[0]
    let label = document.getElementsByClassName("label")[0]
    button.style.display = "none"
    label.innerHTML = "The number was:"
    divCodigo = document.getElementsByClassName("codigo")[0]
    divLine = document.createElement("div");
    divLine.classList.add("square-lines");
    for (let i = 0; i < 5; i++) {
        divSquare = document.createElement("div");
        divSquare.classList.add("squares");
        divSquare.innerHTML = answer[i]
        if (bool) divSquare.classList.add("right")
        else divSquare.classList.add("wrong")
        divLine.appendChild(divSquare);
    }
    divCodigo.appendChild(divLine)
    divCodigo.style.display = "flex"
}

function checkNumbers(answer, input, index) {
    let res = "wrong";
    if (answer.includes(input)) {
        res = "present";
    }
    for (let i = 0; i < answer.length; i++) {
        if (input == answer[i] && i == index) {
            res = "right";
        } 
    }
    return res
}

function sendAnswer() { 
    let arrStatus = [];
    let arrInput = getInput();
    for (let i = 0; i < 5; i++) {
        let status = checkNumbers(answer, arrInput[i], i)
        arrStatus.push(status);
    }
    console.log(arrStatus)
    return [arrStatus, arrInput]
}

function getInput() {
    let arrInput = input.value.split("");
    input.value = ""
    for (let i = 0; i < arrInput.length; i++) {
        arrInput[i] = parseInt(arrInput[i])
    }
    return arrInput
}

function getRandom() {
    let arrNumbers = [];
    for (let i = 0; i < 5; i++) {
        if (i === 0) {
            arrNumbers.push(Math.floor(Math.random() * 9) + 1);
        }
        else {
            arrNumbers.push(Math.floor(Math.random() * 10));
        }
    }
    console.log(arrNumbers)
    return arrNumbers
}