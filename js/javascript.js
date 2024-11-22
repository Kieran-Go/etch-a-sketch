function setupGrid(){
    /* Use the getboundingClientRect function to get an object that
    contains the grid width and height*/
    const gridInfo = gridContainer.getBoundingClientRect();
    const gridWidth = Math.floor(gridInfo.width / 16);
    const gridHeight = Math.floor(gridInfo.height / 16);

    populateGrid(gridWidth, gridHeight);
}

function populateGrid(w, h){
    for(let i = 0; i < 256; i++){
        gridArray[i] = document.createElement("div");
        let styleString = "width: " + w + "px; height: " + h + "px;"
        gridArray[i].setAttribute("style", styleString);
        gridContainer.appendChild(gridArray[i]);

        gridArray[i].addEventListener("mouseover", () => {
            gridArray[i].setAttribute("style", styleString + " background-color: black;");
        });
    }
}

// Init grid
const gridContainer = document.querySelector(".gridContainer");

// Variable for storing all 256 elements of the 16x16 grid
let gridArray = [];

setupGrid();

