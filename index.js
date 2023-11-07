let divContainer = document.getElementsByClassName("square-containers")[0];
let divLines, divSquares;

let input = document.getElementById("number");
let triesCount = 0;
let startPoint = 0;
let answer = getAnswer();

function createLine(arrStatus) {
    divLines = document.createElement("div");
    divLines.classList.add("square-lines");
    console.log(divLines)

    for (let i = 0; i < 6; i++) {
        divSquares = document.createElement("div");
        divSquares.classList.add("squares");
        
        if (arrStatus[i] == "right") {
            divSquares.classList.add("right");
        }
        if (arrStatus[i] == "present") {
            divSquares.classList.add("present");
        }
        if (arrStatus[i] == "wrong") {
            divSquares.classList.add("wrong");
        }

        divLines.appendChild(divSquares);
    }

    divContainer.appendChild(divLines);
}

function checkNumbers(answer, input, index) {
    let res = "wrong";
    if (answer.includes(input)) {
        res = "present";
        console.log("present")
    }
    for (let i = 0; i < answer.length; i++) {
        if (input == answer[i] && i == index) {
            console.log("right")
            res = "right";
        } 
    }
    return res
}

function sendAnswer() {
    if (triesCount <= 6){
        triesCount++
        let arrInput = getInput();
        console.log(arrInput);
        let arrStatus = [];
        for (let i = 0; i < 5; i++) {
            let status = checkNumbers(answer, arrInput[i], i)
            arrStatus.push(status);
        }
    }
}

function getInput() {
    let arrInput = input.value.split("");
    for (let i = 0; i < arrInput.length; i++) {
        arrInput[i] = parseInt(arrInput[i])
    }
    return arrInput
}

function getAnswer() {
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