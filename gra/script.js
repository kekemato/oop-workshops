function Game() {
    this.boardArray = [
        [1, 1],
        [0, 0]
    ]
    this.playerPosition = {
        x: 0,
        y: 1
    }

    this.render()
}

Game.prototype.render = function () {
    document.body.innerHTML = ''

    this.composeBoard()
}

Game.prototype.composeBoard = function () {
    this.boardArray[this.playerPosition.y][this.playerPosition.x] = 'P'
}