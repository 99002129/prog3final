let LivingCreature = require("./LivingCreature")
let rand = require("./rand")

module.exports = class Grass extends LivingCreature { //constructor and chooscell
    mul() {
        this.multiply++
        let emptyCells = this.chooseCell(0)
        let emptyCell = rand(emptyCells)
        if (this.multiply >= 8 && emptyCell) {
            let newX = emptyCell[0]
            let newY = emptyCell[1]
            matrix[newX][newY] = 1
            let gr = new Grass(newX, newY)
            grassArr.push(gr)
            this.multiply = 0
        }
    }
}
