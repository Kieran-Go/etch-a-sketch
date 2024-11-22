function setupGrid(squares){
    // Clear the grid first
    gridContainer.innerHTML = "";
    
    const squareWidth = gridContainer.clientWidth / squares;
    const squareHeight = gridContainer.clientHeight / squares;

    populateGrid(squareWidth, squareHeight, (squares*squares));
}

function populateGrid(w, h, totalSquares){
    // Variable for storing all square elements of the grid
    let gridArray = [];

    for(let i = 0; i < totalSquares; i++){
        gridArray[i] = document.createElement("div");
        let styleString = "width: " + w + "px; height: " + h + "px;"
        gridArray[i].setAttribute("style", styleString);
        gridContainer.appendChild(gridArray[i]);

        gridArray[i].addEventListener("mouseover", () => {
            gridArray[i].setAttribute("style", styleString + " background-color: black;");
        });
    }
}

// By default, the grid can contain 16 squares for each axis
const DEFAULT_SQUARES = 16;
// Init grid
const gridContainer = document.querySelector(".gridContainer");

setupGrid(DEFAULT_SQUARES);

// Init button
const clearBtn = document.querySelector(".clearBtn");
clearBtn.addEventListener("click", () =>{
    let squares = prompt("How many squares for the x and y axis you would like (MAX: 100)");
    if(squares > 100 || isNaN(squares)){
        alert("Invalid entry. Try again.");
    }
    setupGrid(squares);
});

