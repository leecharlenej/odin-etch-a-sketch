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
let grid = document.querySelector(".grid");

const handleMouseEnter = (event) => {
    grid.setAttribute("style", "background-color: blue;");
};

const handleMouseLeave = (event) => {
    grid.setAttribute("style", "background-color: white;");
};

grid.addEventListener("mouseenter", handleMouseEnter);
grid.addEventListener("mouseleave", handleMouseLeave);

