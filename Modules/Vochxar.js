let LivingCreature = require("./LivingCreature")

let rand = require("./rand")

module.exports = class Vochxar extends LivingCreature {
    constructor(x, y) {
        super(x, y)
        this.bomb = 8
        this.directions = []
    }

    getNewCoordinates() {
        this.directions = [
            [this.x, this.y],
            [this.x + 1, this.y],
            [this.x + 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x - 1, this.y + 1],
            [this.x - 1, this.y],
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x + 2, this.y],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x - 2, this.y + 2],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y],
            [this.x - 2, this.y - 1],
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2]
        ]
    }

    chooseCell(char1, char2, char3, char4, char5) {
        this.getNewCoordinates()
        let found = []
        for (let i in this.directions) {
            let x = this.directions[i][0]
            let y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[x][y] == char1 || matrix[x][y] == char2 || matrix[x][y] == char3 || matrix[x][y] == char4 || matrix[x][y] == char5) {
                    found.push(this.directions[i])
                }
            }
        }
        return found
    }
   
}
