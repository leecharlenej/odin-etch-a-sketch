// ----------------------------------
// Create responsive square grid
// ----------------------------------
let container = document.querySelector(".container");

for (let i=0; i<16; i++) {

    const div = document.createElement("div");
    div.classList.add("grid");
    container.appendChild(div);

}

// ----------------------------------
// Create hover effect
// ----------------------------------
let gridList = document.querySelectorAll(".grid");

const handleMouseEnter = (event) => {
    event.target.setAttribute("style", "background-color: rgb(97, 151, 223);");
};

const handleMouseLeave = (event) => {
    event.target.setAttribute("style", "background-color: rgb(248, 183, 248);");
};

for (let i=0; i<gridList.length; i++){
    gridList[i].addEventListener("mouseenter", handleMouseEnter);
    gridList[i].addEventListener("mouseleave", handleMouseLeave);
}



