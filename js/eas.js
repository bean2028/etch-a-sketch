//Function to create grid
function createGrid(size) {
    for (i = 0 ; i < (size * size) ; i++) {
        const square = document.createElement('div');
        square.classList.add('gridSquare');
        container.appendChild(square);
    
        square.onmouseover = () => square.classList.add('hoverSquare');
    }
}
//Function to remove all existing grid squares
function resetGrid(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }    
}

//Function to get new size of grid and recreate the grid
function reSize() {
    let size = prompt("Enter a size less than 100 squares wide");
    while (isNaN(size) || size > 100) {
        size = prompt("Enter a size less than 100 squares wide");
    }
    resetGrid(container);
    container.style.cssText = `grid-template-columns: repeat(${size}, 1fr)`;
    createGrid(size);
}

const container = document.querySelector('#container');
let size = 16;
createGrid(size);

const changeButton = document.querySelector('#change-button');
changeButton.onclick = () => reSize();

