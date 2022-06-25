let rand = require("./rand")

module.exports = class LivingCreature {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.multiply = 0
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y - 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y - 1],
            [this.x + 1, this.y],
            [this.x + 1, this.y + 1]
        ]
    }

    chooseCell(char) {

        let found = []
        for (let i in this.directions) {
            let x = this.directions[i][0]
            let y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length && matrix[x][y] == char) {
                found.push(this.directions[i])
            }
        }
        return found
    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y - 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y - 1],
            [this.x + 1, this.y],
            [this.x + 1, this.y + 1]
        ]
    }


    boom() {
        let cells = this.chooseCell(1, 2, 3, 4, 5)
        let cell = rand(cells)
        if (cell) {
            let newX = cell[0]
            let newY = cell[1]
            matrix[newX][newY] = 0
            matrix[this.x][this.y] = 0
            for (var i = 0; i < vochxarArr.length; i++) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1)
                }
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1)
                }

                if (newX == predatorArr[i].x && newY == predatorArr[i].y) {
                    predatorArr.splice(i, 1)
                }
                if (newX == PosionedGrassArr[i].x && newY == PosionedGrassArr[i].y) {
                    PosionedGrassArr.splice(i, 1)
                }

            }
            this.x = newX
            this.y = newY
        }
    }

    posion() {
        let predatorCells = this.chooseCell(3)
        let predatorCell = rand(predatorCells)
        if (predatorCell) {
            let newX = predatorCell[0]
            let newY = predatorCell[1]
            if (matrix[newX][newY] == 3) {
                matrix[newX][newY] = 4
                for (var i = 0; i < predatorArr.length; i++) {
                    if (newX == predatorArr[i].x && newY == predatorArr[i].y) {
                        predatorArr.splice(i, 1)
                        break
                    }
                }
            }
        }
    }
}
