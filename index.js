let divContainer = document.getElementsByClassName("square-containers")[0];
let divLines, divSquares;

let input = document.getElementById("number");

let triesCount = 0;
let startPoint = 0;
let answer = getRandom();

function createLine() {
    let userAnswer = sendAnswer()
    let arrStatus = userAnswer[0]
    let arrInput = userAnswer[1]
    let correct = true
    if (triesCount < 6) {
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

        for (let i = 0; i < 5; i++) {
            if (arrStatus[i] != 'right') {
                correct = false
            }
        }

        if (correct) {
            triesCount = 5
            alert("YOU WON BRUDDA")
        }
    }
    else alert("YOU LOST BRUDDA")
    triesCount++
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
    input.innerHTML = ""
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