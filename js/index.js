const gridContainer = document.getElementById('grid-container');

// create a 16 x 16 grid
for (let i = 0; i < 16 * 16; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridContainer.appendChild(gridItem);

    gridItem.addEventListener('mouseover', () => {
        gridItem.style.backgroundColor = 'cyan';
    });
}

// Add a click event listener to the "Clear" button
const clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', () => {
    const gridItems = document.querySelectorAll('.grid-item');
    for (const gridItem of gridItems) {
        gridItem.style.backgroundColor = 'white';
    }
});

