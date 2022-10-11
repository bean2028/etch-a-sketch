const container = document.querySelector('#container');

//Create 16x16 grid
for (i = 0 ; i < 256 ; i++) {
    const square = document.createElement('div');
    square.classList.add('gridSquare');
    container.appendChild(square);

    square.onmouseover = () => square.classList.add('hoverSquare');
}
