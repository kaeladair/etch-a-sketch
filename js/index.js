const gridContainer = document.getElementById('grid-container');

// create a 16 x 16 grid
for (let i = 0; i < 16 * 16; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridContainer.appendChild(gridItem);
}
