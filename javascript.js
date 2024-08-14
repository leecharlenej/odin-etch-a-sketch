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
    event.target.setAttribute("style", "background-color: rgb(97, 151, 223);");
};

const handleMouseLeave = (event) => {
    event.target.setAttribute("style", "background-color: black;");
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

    squaresTotalNum = userInput**2;
    console.log(`Total squares: ${squaresTotalNum}`);
    blankSketchpad.innerHTML ="";

    for (let i=0; i<squaresTotalNum; i++) {
        const div = document.createElement("div");
        div.classList.add("grid");

        div.addEventListener("mouseenter", handleMouseEnter);
        div.addEventListener("mouseleave", handleMouseLeave);

        blankSketchpad.appendChild(div);
        console.log(i);
    }

    // let styleSheet = document.styleSheets[0];
    // for (let i=0; i< styleSheet.cssRules.length; i++){
    //     if (styleSheet.cssRules[i].selectorText === ".grid") {
    //         let rule = styleSheet.cssRules[i];
    //         console.log("Found .grid rule. Current flex:", rule.style.flex);
    //         rule.style.flex = `1 1 ${Math.floor((100/userInput))- 2}%`;
    //         console.log("Updated flex:", rule.style.flex);
    //         break;
    //     }
    // }
});

sizeButton.addEventListener("click", changeSize);


