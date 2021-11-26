const containerSquares = document.querySelector(".containerSquares");

for (i = 1; i < 17; i++){

   for (j = 1; j< 17 ; j++){
   
        const div = document.createElement("div");
        containerSquares.appendChild(div);
        div.addEventListener('mouseover', () => { 
        div.style.backgroundColor = "black";
        
        });
   } 
  
}
// Button interactivity 

const resetButton = document.querySelector(".resetButton");
resetButton.addEventListener("click", () => {
    const divs = containerSquares.querySelectorAll("div");
    divs.forEach( (div) => {
        div.style.backgroundColor = "white";
    });
});

