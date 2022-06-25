let LivingCreature = require("./LivingCreature")
let rand = require("./rand")


module.exports = class Mard {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        // document.onkeydown = this.checkKey;
    }

    move(x, y) {
        console.log(matrix[0].length, x);
        if ((x >= 0 && x <= matrix[0].length) && (y >= 0 && y <= matrix.length)) {
            console.log(this.x, this.y);
            console.log(x, y);
            const exChar = matrix[y][x]
            this.killAll(exChar, x, y)
            matrix[y][x] = 9;
            matrix[this.y][this.x] = 0;
            this.x = x
            this.y = y
            if (this.x > matrix.length) {
                x++
            }
        }
    }
    
    // checkKey = (e) => {
    //     console.log(e);
    //     e = e || window.event;
    //     if (e.keyCode == '38') {
    //         this.move(this.x, this.y - 1)
    //     }
    //     else if (e.keyCode == '40') {
    //         this.move(this.x, this.y + 1)
    //     }
    //     else if (e.keyCode == '37') {
    //         this.move(this.x - 1, this.y)
    //     }
    //     else if (e.keyCode == '39') {
    //         this.move(this.x + 1, this.y)
    //     }
    // }

    killAll(character, x, y) {
        if (character == 0) {
            return
        }
        else if (character == 1) {
            for (let i = 0; i < grassEaterArr.length; i++) {
                if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1)
                }
            }
        }
        else if (character == 2) {
            for (let i = 0; i < grassArr.length; i++) {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                    grassArr.splice(i, 1)
                }
            }
        }
        else if (character == 3) {
            for (let i = 0; i < predatorArr.length; i++) {
                if (this.x == predatorArr[i].x && this.y == predatorArr[i].y) {
                    predatorArr.splice(i, 1)
                }
            }
        }
        else if (character == 4) {
            for (let i = 0; i < PosionedGrassArr.length; i++) {
                if (this.x == PosionedGrassArr[i].x && this.y == PosionedGrassArr[i].y) {
                    PosionedGrassArr.splice(i, 1)
                }
            }
        }
        else if (character == 5) {
            for (let i = 0; i < vochxarArr.length; i++) {
                if (this.x == vochxarArr[i].x && this.y == vochxarArr[i].y) {
                    vochxarArr.splice(i, 1)
                }
            }
        }



    }
}
