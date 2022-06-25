
var socket = io();



let side = 25
let n = 20
function setup() {
     
    createCanvas(20 * side, 20 * side)
    // frameRate(20) 
    
    background("#2e4057")
  
}

socket.on("send matrix", paint)


function paint(matrix) {
    for (var x = 0; x < matrix.length; x++) {
        for (var y = 0; y < matrix[x].length; y++) {
            if (matrix[x][y] == 0) {
                fill("#acacac")
            }
            else if (matrix[x][y] == 1) { 
                fill("green")
            }
            else if (matrix[x][y] == 2) {
                fill("yellow")
            }
            else if (matrix[x][y] == 3) {
                fill("red")
            }
            else if (matrix[x][y] == 4) {
                fill("brown")
            }
            else if (matrix[x][y] == 5) {
                fill("black")
            }
            else if (matrix[x][y] == 9) {
                fill("black")
            }
            rect(x * side, y * side, side, side);
        }
    }

    
}

setInterval(() => {
    socket.on("send matrix", paint)
}, 100);

function reload() {
    
}

function reload() {
    socket.emit("reload")
}
socket.on("send stats", stats)

function stats(st) {
    let stat = JSON.parse(st)
    console.log(stat);
}

// let array = getElementById("stats")

// array.innerText = 