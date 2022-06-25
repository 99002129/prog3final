let LivingCreature = require("./LivingCreature")
let rand = require("./rand")


module.exports = class Predator extends LivingCreature {
    constructor(x, y) {
        super(x, y)
        this.energy = 25
        this.directions = []
    }

   

    chooseCell(char1, char2) {
        this.getNewCoordinates()
        let found = []
        for (let i in this.directions) {
            let x = this.directions[i][0]
            let y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[x][y] == char1 || matrix[x][y] == char2) {
                    found.push(this.directions[i])
                }
            }
        }
        return found
    }
    eat() {
        this.mul()
        let grassEaterCells = this.chooseCell(1, 2)
        let grassEaterCell = rand(grassEaterCells)
        if (grassEaterCell && this.energy > 0) {
            let newX = grassEaterCell[0]
            let newY = grassEaterCell[1]
            if (matrix[newX][newY] == 2) {
                matrix[newX][newY] = 3
                matrix[this.x][this.y] = 0
                for (var i = 0; i < grassEaterArr.length; i++) {
                    if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                        grassEaterArr.splice(i, 1)
                    }

                }
                this.energy + 5
                this.x = newX
                this.y = newY
            } else this.move()


        }
    }

    move() {
        let emptyCells = this.chooseCell(0, 1)
        let emptyCell = rand(emptyCells)
        if (emptyCell && this.energy > 0) {
            this.energy--
            let newX = emptyCell[0]
            let newY = emptyCell[1]
            matrix[newX][newY] = 2
            matrix[this.x][this.y] = 0
            this.x = newX
            this.y = newY
            return this.energy
        } if (this.energy <= 0) {
            this.die()

        }
    }

    mul() {
        if (this.energy >= 20) {
            let emptyCells = this.chooseCell(0)
            let emptyCell = rand(emptyCells)
            if (this.energy >= 12 && emptyCell) {
                let newX = emptyCell[0]
                let newY = emptyCell[1]
                matrix[newX][newY] = 3
                let great = new Predator(newX, newY)
                predatorArr.push(great)
                this.energy -= 8
            }
        }
    }

    die() {
        if (this.energy <= 0) {
            matrix[this.x][this.y] = 0
            for (let i = 0; i < predatorArr.length; i++) {
                if (this.x == predatorArr[i].x && this.y == predatorArr[i].y) {
                    predatorArr.splice(i, 1)
                    break
                }
            }
        }
    }
}

