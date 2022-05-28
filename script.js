function createGrid(count = 16) {
    let html = ''
    for (let i = 0; i < count; i++) {
        html += `<div class="row">`
        for (let j = 0; j < count; j++) {
            html += `<div class="cell"></div>`
        }
        html += `</div>`
    }
    document.querySelector('.paint-area').innerHTML = html
}

function hoverGrid() {
    let cells = document.querySelectorAll('.cell')
    cells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = '#000'
        })
    })
}

const pixelSelector = document.querySelector('#pixels')
pixelSelector.addEventListener('input', () => {
    document.querySelector('.pixels-value').innerText = pixelSelector.value
    createGrid(pixelSelector.value)
    hoverGrid()
})

createGrid()
hoverGrid()