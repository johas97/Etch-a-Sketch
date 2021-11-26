const containerSquares = document.querySelector(".containerSquares");

function generateRandomColor()
{
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    console.log(randomColor);
    return randomColor;
    //random color will be freshly served
};

function createGrid (gridSize) {
        containerSquares.style.gridTemplateColumns = `repeat(${gridSize},1fr)`;
        containerSquares.style.gridTemplateRows = `repeat(${gridSize},1fr)`;

    for (i = 0; i < gridSize * gridSize; i++) {
        const div = document.createElement("div");
        containerSquares.appendChild(div);
        div.addEventListener('mouseover', () => { 
        div.style.backgroundColor = generateRandomColor();
        });
        
    }

}

createGrid(16);
// Button interactivity 

const resetButton = document.querySelector(".resetButton");
resetButton.addEventListener("click", () => {
    let gridSize = prompt("Enter the new number of boxes in grid.");
    
    createGrid(gridSize);
    const divs = containerSquares.querySelectorAll("div");
    divs.forEach( (div) => {
        div.style.backgroundColor = "white";
    });
   
});

