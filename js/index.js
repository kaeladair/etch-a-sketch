let gridSize = 16;
const gridContainer = document.getElementById('grid-container');

function createGrid() {
    gridContainer.innerHTML = '';
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    const rowHeight = (600 - (gridSize - 1)) / gridSize;
    gridContainer.style.height = `${rowHeight * gridSize}px`;

    for (let i = 0; i < gridSize * gridSize; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridContainer.appendChild(gridItem);

        gridItem.addEventListener('mouseover', () => {
            gridItem.style.backgroundColor = 'cyan';
        });
    }
}

createGrid();

const sizeInput = document.getElementById('size-input');
sizeInput.addEventListener('input', () => {
    gridSize = parseInt(sizeInput.value);
    createGrid();
});

const clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', () => {
    const gridItems = document.querySelectorAll('.grid-item');
    for (const gridItem of gridItems) {
        gridItem.style.backgroundColor = 'white';
    }
});


