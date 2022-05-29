// On window load
createGrid()
paintGrid()

// Grid Density selection
const densityselector = document.querySelector('#density-selector')
densityselector.addEventListener('input', () => {
    // Change value in density-value
    document.querySelectorAll('.density-value').forEach(val => {
        val.innerText = densityselector.value
    })

    // Change Grid size
    createGrid(densityselector.value)

    // Initialise Grid paint
    paintGrid()
    changeModeBtn('solid')
})

// Mode selection
document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Change active button
        changeModeBtn(e.target.value)

        // Mode = Solid
        if (e.target.value === 'solid') {
            // Enable color picker
            colorPicker.removeAttribute('disabled')
            // colorPicker.value = '#000000'
            paintGrid(colorPicker.value)
        }

        // Mode = Erase
        else if (e.target.value == 'erase') {
            // Disable color picker
            colorPicker.setAttribute('disabled', 'disabled')
            // Paint Grid with White
            paintGrid('#ffffff')
        }

        // Mode = Rainbow
        else if (e.target.value == 'rainbow') {
            // Disable color picker
            colorPicker.setAttribute('disabled', 'disabled')
            // Paint Grid with random color
            paintGrid('random')
        }
    })
})

// Paint color selection
const colorPicker = document.querySelector('#color-picker')
colorPicker.addEventListener('input', () => {
    paintGrid(colorPicker.value)
})


// Reset
document.querySelector('.reset-btn').addEventListener('click', () => {
    document.querySelectorAll('.cell').forEach(cell => {
        cell.style.backgroundColor = '#ffffff'
    })
})

// FUNCTIONS
function getRandomColor() {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}

function changeModeBtn(activeBtn) {
    const solidBtn = document.querySelector('.mode-solid')
    const rainbowBtn = document.querySelector('.mode-rainbow')
    const eraseBtn = document.querySelector('.mode-erase')

    if (activeBtn === 'solid') {
        rainbowBtn.classList.remove('active')
        eraseBtn.classList.remove('active')
        solidBtn.classList.add('active')
    }
    else if (activeBtn === 'rainbow') {
        solidBtn.classList.remove('active')
        eraseBtn.classList.remove('active')
        rainbowBtn.classList.add('active')
    }
    else if (activeBtn === 'erase') {
        solidBtn.classList.remove('active')
        rainbowBtn.classList.remove('active')
        eraseBtn.classList.add('active')
    }
}

function createGrid(count = 20) {
    let html = ''
    for (let i = 0; i < count; i++) {
        html += `<div class="row">`
        for (let j = 0; j < count; j++) {
            html += `<div class="cell"></div>`
        }
        html += `</div>`
    }
    document.querySelector('.grid').innerHTML = html
}

function paintGrid(color = '#000000') {
    let cells = document.querySelectorAll('.cell')
    cells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            if (color === 'random') {
                cell.style.backgroundColor = getRandomColor()
            }
            else {
                cell.style.backgroundColor = color
            }
        })
    })
}
