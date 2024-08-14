// ----------------------------------
// Create responsive square grid
// ----------------------------------
let sketchpad = document.querySelector(".sketchpad");

for (let i=0; i<16; i++) {

    const div = document.createElement("div");
    div.classList.add("grid");
    sketchpad.appendChild(div);

}

// ----------------------------------
// Create hover effect
// ----------------------------------
let gridList = document.querySelectorAll(".grid");

const handleMouseEnter = (event) => {
    event.target.style.backgroundColor = 'rgb(97, 151, 223)';
    //event.target.setAttribute("style", "background-color: rgb(97, 151, 223);");
};

const handleMouseLeave = (event) => {
    event.target.style.backgroundColor = 'black';
    //event.target.setAttribute("style", "background-color: black;");
};

for (let i=0; i<gridList.length; i++){
    gridList[i].addEventListener("mouseenter", handleMouseEnter);
    gridList[i].addEventListener("mouseleave", handleMouseLeave);
}

// ----------------------------------
// Reset
// ----------------------------------
let reset = document.querySelector("#resetButton")

const resetColours = (event => {
    console.log("welps");

});

resetButton.addEventListener("click", resetColours);

// ----------------------------------
// Change size
// ----------------------------------
let sizeButton = document.querySelector("#sizeButton")

const changeSize = (event => {

    let blankSketchpad = document.querySelector(".sketchpad");
    let squaresTotalNum;

    while (true) {
        userInput = parseInt(prompt("No. of squares per side?"));

        if(userInput > 0 && userInput <= 100) {
            break;
        };
    };



    flexNum = Math.floor(100/userInput)-2;
    squaresTotalNum = userInput**2;
    console.log(`Total squares: ${squaresTotalNum}`);
    blankSketchpad.innerHTML ="";

    for (let i=0; i<squaresTotalNum; i++) {
        const div = document.createElement("div");
        div.classList.add("grid");
        

        div.addEventListener("mouseenter", handleMouseEnter);
        div.addEventListener("mouseleave", handleMouseLeave);

        div.style.flex = `1 1 ${flexNum}%`;
        blankSketchpad.appendChild(div);

        
        console.log(div);
    }
});

sizeButton.addEventListener("click", changeSize);


