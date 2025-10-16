const containerOfSquares = document.querySelector("#container")

const SQUARES = 16 

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
    prompt("")
})