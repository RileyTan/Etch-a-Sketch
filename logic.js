const containerOfSquares = document.querySelector("#container")


// code to make hover effect 
const addHoverEffect = () => {
    const cells = document.querySelectorAll(".column")
    cells.forEach(cell => {
        cell.addEventListener("mouseenter", event => {
            const randomColor = `rgb(${Math.floor(Math.random() * 256)}, 
                                ${Math.floor(Math.random() * 256)}, 
                                ${Math.floor(Math.random() * 256)})`
            event.currentTarget.style.backgroundColor = randomColor
        })
    })
}

const makeGrid = (SQUARES) => {
    for (let squares = 0; squares < SQUARES * SQUARES; squares++) {
        const cell = document.createElement("div")
        cell.classList.add("column")
        cell.style.flexBasis = `${568/SQUARES}px`
        containerOfSquares.insertAdjacentElement("beforeend", cell)
    }
    addHoverEffect()
}

makeGrid(16) // always 16 squares upon refresh

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

// code to reset grid 
const resetGrid = document.querySelector("#reset-grid")
resetGrid.addEventListener("click", () => {
    const cells = document.querySelectorAll(".column")
    cells.forEach(cell => {
        cell.style.backgroundColor = "lightgrey"
    })
})