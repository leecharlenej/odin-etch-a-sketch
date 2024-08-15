// ----------------------------------
// Create hover effect
// ----------------------------------
let isRandomColourFlag = 0;
let isRandomColour = false;

const handleMouseEnter = (event) => {
    event.target.style.backgroundColor = 'rgb(97, 151, 223)';
    //event.target.setAttribute("style", "background-color: rgb(97, 151, 223);");
};

const handleMouseLeave = (event) => {
    event.target.style.backgroundColor = getRandomColour(isRandomColour);
    //event.target.setAttribute("style", "background-color: black;");
};

// ----------------------------------
// Create responsive square grid
// ----------------------------------

function addSquaresPerRow (numPerRow, elem) {

    for (let i=0; i<numPerRow; i++) {
        const square = document.createElement("div");
        square.classList.add('square');
        square.addEventListener("mouseenter", handleMouseEnter);
        square.addEventListener("mouseleave", handleMouseLeave);
        elem.appendChild(square);
    };
}

let sketchpad = document.querySelector(".sketchpad");

for (let i=0; i<4; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    addSquaresPerRow(4,row);

    sketchpad.appendChild(row);
}

// ----------------------------------
// Change size
// ----------------------------------
let sizeButton = document.querySelector("#sizeButton")

function changeSize (event) {
    console.log(event);
    sketchpad.innerHTML ="";

    while (true) {
        userInput = parseInt(prompt("No. of squares per side?"));

        if(userInput > 0 && userInput <= 100) {
            break;
        };
    };

    for (let i=0; i<userInput; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
    
        addSquaresPerRow(userInput,row);

        sketchpad.appendChild(row);
    };
}

sizeButton.addEventListener("click", changeSize);

// ----------------------------------
// Reset
// ----------------------------------
let resetButton = document.querySelector("#resetButton");

function resetColours () {
    let squaresList = document.querySelectorAll(".square");
    console.log(squaresList);

    for (let i=0; i<squaresList.length; i++){
        squaresList[i].style.backgroundColor='';

    };
}

resetButton.addEventListener("click", resetColours);

// ----------------------------------
// Randomize colours
// ----------------------------------

let coloursButton = document.querySelector("#coloursButton");

function getRandomColour (boolVal) {
    if (boolVal ===  false) {
        colour = 'black';
    } else {
        colour ='rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')';
    }
    return colour;
}

function randomizeColours (event) {
    if (isRandomColourFlag === 0) {
        isRandomColour = true;
        isRandomColourFlag = 1;
        coloursButton.textContent="Paint me black again!";
    } else {
        isRandomColour = false;
        isRandomColourFlag = 0;
        coloursButton.textContent="Make me a rainbow!";
    }
}

coloursButton.addEventListener("click", randomizeColours);


