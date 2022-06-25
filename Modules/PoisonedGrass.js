let LivingCreature = require("./LivingCreature")
let rand = require("./rand")


module.exports = class PosionedGrass extends LivingCreature {
    mul() {
        this.multiply++
        let emptyCells = this.chooseCell(0)
        let emptyCell = rand(emptyCells)
        if (this.multiply >= 4 && emptyCell) {
            let newX = emptyCell[0]
            let newY = emptyCell[1]
            matrix[newX][newY] = 4
            let toxic = new PosionedGrass(newX, newY)
            PosionedGrassArr.push(toxic)
            this.multiply = 0

        }

    }
    
}
