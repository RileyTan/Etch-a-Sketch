const containerOfSquares = document.querySelector("#container")

const makeGrid = (SQUARES) => {
    // create 16 rows
    for (let squares = 0; squares < SQUARES; squares++) {
        // create 1 row
        const row = document.createElement("div")
        row.classList.add("row")
        for (let col = 0; col < SQUARES; col++) {
            const cell = document.createElement("div")
            cell.classList.add("column")
            row.insertAdjacentElement("beforeend", cell)
        }
        // add 1 completed row to the grid
        containerOfSquares.insertAdjacentElement("beforeend", row)
    }
}

makeGrid(16) // always 16 squares upon refresh

// code to make hover effect 
const cells = document.querySelectorAll(".column")
cells.forEach(cell => {
    cell.addEventListener("mouseenter", event => {
        const randomColor = `rgb(${Math.floor(Math.random() * 256)}, 
                             ${Math.floor(Math.random() * 256)}, 
                             ${Math.floor(Math.random() * 256)})`
        event.currentTarget.style.backgroundColor = randomColor
    })
})

// code to prompt user for number of squares per side
const setGrid = document.querySelector("#set-grid")
setGrid.addEventListener("click", () => {
    let squaresWanted = prompt("Choose number of squares per side from 16 to 100")
    while ( squaresWanted > 100 || squaresWanted < 16 || isNaN(squaresWanted)) {
        squaresWanted = prompt("Choose number of squares from 16 to 100")
    }
    containerOfSquares.innerHTML = ""
    makeGrid(squaresWanted)
})