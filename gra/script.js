function Game() {
    this.initialBoardArr = (
        Array(20)
        .fill(1)
        .map(el => (
            Array(20)
            .fill(1)
            .map(el => Math.round(Math.random() * 1.49) )
        ))
    )
    this.boardArr = null
    this.playerPosition = {
        x: 0,
        y: 1
    }

    this.init()
}

Game.prototype.init = function () {
    this.startListeningToArrows()
    this.render()
}

Game.prototype.render = function () {
    document.body.innerHTML = ''

    this.composeBoard()
    this.boardArr.forEach((row, i) => {
        const rowDiv = document.createElement('div')
        rowDiv.style.height = '20px'

        row.forEach((cell, j) => {
            this.renderSingleCell(cell, rowDiv)
        })
        document.body.appendChild(rowDiv)
    })
}

Game.prototype.renderSingleCell = function (cell, rowDiv) {
    const cellDiv = document.createElement('div')

    cellDiv.style.display = "inline-block"
    cellDiv.style.width = '20px'
    cellDiv.style.height = '20px'

    if (cell === 0) cellDiv.style.backgroundColor = 'black'
    if (cell === 1) cellDiv.style.backgroundColor = 'gray'
    if (cell === 'P') cellDiv.style.backgroundColor = 'red'

    rowDiv.appendChild(cellDiv)
}

Game.prototype.composeBoard = function () {
    this.boardArr = JSON.parse(JSON.stringify(this.initialBoardArr))
    this.boardArr[this.playerPosition.y][this.playerPosition.x] = 'P'
}

Game.prototype.startListeningToArrows = function () {
    window.addEventListener(
        'keydown',
        event => {
            switch (event.key) {
                case 'ArrowUp':
                    event.preventDefault
                    this.checkIfMoveIsAvailable(0, -1)
                    break
                case 'ArrowDown':
                    event.preventDefault
                    this.checkIfMoveIsAvailable(0, 1)
                    break
                case 'ArrowRight':
                    event.preventDefault
                    this.checkIfMoveIsAvailable(1, 0)
                    break
                case 'ArrowLeft':
                    event.preventDefault
                    this.checkIfMoveIsAvailable(-1, 0)
                    break
            }
        }
    )
}

Game.prototype.checkIfMoveIsAvailable = function (deltaX, deltaY) {
    const newPlayerPosition = {
        x: this.playerPosition.x + deltaX,
        y: this.playerPosition.y + deltaY
    }

    if (
        this.boardArr[newPlayerPosition.y] &&
        this.boardArr[newPlayerPosition.y][newPlayerPosition.x]
    ) {
        this.move(newPlayerPosition)
    }
}

Game.prototype.move = function (newPlayerPosition) {
    this.playerPosition = newPlayerPosition

    this.render()
}