const gridContainer = document.querySelector(".gridContainer");

// Create the divs inside the 16x16 grid
let divArray = [];
for(let i = 0; i < 256; i++){
    divArray[i] = document.createElement("div");
    divArray[i].setAttribute("style", "width: 30px; height: 30px; background-color: black;");
    gridContainer.appendChild(divArray[i]);
}