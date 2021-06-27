const gridSizeInPixels = 500;

const gridContainer = document.querySelector(`#grid-container`);
gridContainer.setAttribute(`style`, `width:${gridSizeInPixels}px;height:${gridSizeInPixels}px;`);
const gridSizeSlider = document.querySelector(`#grid-size-slider`);
const gridSizeSliderLabel = document.querySelector(`#grid-size-slider-label`);
const clearButton = document.querySelector(`.clear-button`);
const createGridButton = document.querySelector(`.create-grid-button`);

clearButton.addEventListener(`click`, clearGrid);
createGridButton.addEventListener(`click`, () => { clearGrid(); createGrid() });
gridSizeSlider.oninput = () => { gridSizeSliderLabel.textContent = `Cells per grid axis: ${gridSizeSlider.value}` };

function clearGrid() {
    const gridCellsToRemove = document.querySelectorAll(`.grid-cell`);

    gridCellsToRemove.forEach(cell => {
        cell.remove();
    });
}

function createGrid() {

    const gridSizePerAxis = gridSizeSlider.value;
    const gridSize = gridSizePerAxis * gridSizePerAxis;
    const cellSize = ((gridSizeInPixels / gridSizePerAxis) * 1000) / 1000;

    for (let i = 0; i < gridSize; i++) {
        gridContainer.setAttribute(`style`, `width:${gridSizeInPixels}px;height:${gridSizeInPixels}px;display:grid;grid-template-columns:repeat(${gridSizePerAxis},${cellSize}px);`);
        let gridCell = document.createElement(`div`);
       
        gridCell.classList.add(`grid-cell`);
        gridContainer.appendChild(gridCell);

    }
}