const gridSizeInPixels = 500;

const gridContainer = document.querySelector(`#grid-container`);
gridContainer.setAttribute(`style`, `width:${gridSizeInPixels}px;height:${gridSizeInPixels}px;`);
const gridSizeSlider = document.querySelector(`#grid-size-slider`);
const gridSizeSliderLabel = document.querySelector(`#grid-size-slider-label`);
const clearButton = document.querySelector(`.clear-button`);
const createGridButton = document.querySelector(`.create-grid-button`);
const standardRadioButton=document.querySelector(`#standard-theme`);
const monochromeRadioButton=document.querySelector(`#monochrome-theme`);

monochromeRadioButton.addEventListener(`click`,()=>{
    let root = document.documentElement;
    root.style.setProperty(`--grid-background-color`,`#4ea96b`);
    root.style.setProperty(`--empty-cell-color`,`#4ea96b`);
    root.style.setProperty(`--full-cell-color`,`black`);
    root.style.setProperty(`--background-color`,`#4ea96b`);
    root.style.setProperty(`--settings-background-color`,`#4ea96b`);
    root.style.setProperty(`--text-color`,`black`);
    root.style.setProperty(`--border-color`,`black`);
})


standardRadioButton.addEventListener(`click`,()=>{
    let root = document.documentElement;
    root.style.setProperty(`--grid-background-color`,`black`);
    root.style.setProperty(`--empty-cell-color`,`black`);
    root.style.setProperty(`--full-cell-color`,`white`);
    root.style.setProperty(`--background-color`,`black`);
    root.style.setProperty(`--settings-background-color`,`black`);
    root.style.setProperty(`--text-color`,`white`);
    root.style.setProperty(`--border-color`,`white`);
})


clearButton.addEventListener(`click`, clearGrid);
createGridButton.addEventListener(`click`, () => { clearGrid(); createGrid() });
gridSizeSlider.oninput = () => { gridSizeSliderLabel.textContent = `Cells per grid axis: ${gridSizeSlider.value}` };

function clearGrid() {
    const gridCellsToClean = document.querySelectorAll(`.full-grid-cell`);

    gridCellsToClean.forEach(cell => {
        cell.classList.remove(`full-grid-cell`);
        cell.classList.add(`empty-grid-cell`);
    });

}

function createGrid() {

    const gridCellsToRemove = document.querySelectorAll(`.grid-cell`);
    if (gridCellsToRemove.length > 0) {
        gridCellsToRemove.forEach(cell => {
            cell.remove();
        });
    }
    const gridSizePerAxis = gridSizeSlider.value;
    const gridSize = gridSizePerAxis * gridSizePerAxis;
    const cellSize = ((gridSizeInPixels / gridSizePerAxis) * 1000) / 1000;

    for (let i = 0; i < gridSize; i++) {
        gridContainer.setAttribute(`style`, `width:${gridSizeInPixels}px;height:${gridSizeInPixels}px;display:grid;grid-template-columns:repeat(${gridSizePerAxis},${cellSize}px);`);
        let gridCell = document.createElement(`div`);
        gridCell.classList.add(`grid-cell`);
        gridCell.classList.add(`empty-grid-cell`);
        gridCell.addEventListener(`mouseenter`, () => { gridCell.classList.remove(`empty-grid-cell`);gridCell.classList.add(`full-grid-cell`); });
        gridContainer.appendChild(gridCell);

    }
}



