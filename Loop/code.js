let pen = document.getElementById("c").getContext("2d")
let pen2 = document.getElementById("c2").getContext("2d")
drawBackground(pen)
drawBackground(pen2)
//how to repeat the while-body N times
let N = 13
let i = 0
// while (i < N) {
//     drawSquare(10+12*30-i*30, 10+i*30, "#ff0000")
// //  ++i: // i = i + 1; i += 1; i++
// }
// for (i = 0; i < N; ++i) {
//     drawSquare(10 + i*30, 10 + i*30, "#00ff00")
// }

for (let r = 0; r < N; ++r) {
    i = 0 
    while (i < N) {
        drawSquare(pen, 10+i*30, 10+r*30, "#ff0000")
        ++i; // i = i + 1:
    }
}
for (let r = 0; r < N; ++r) {
    for (let c = 0; c < N; ++c) {
         if (c%2 === 0 && r%2 === 0 || c%2 === 1 && r%2 === 1) {
            drawSquare(pen2, 10 + c*30, 10+r*30, "#00ff00")
        }
    }
}
function drawBackground (p) {
    p.fillStyle = "#aaaaaa"
    p.fillRect(0, 0, 400, 400)
}

function drawSquare (p, x, y, c) {
    p.fillStyle = c // variable for the color
    p.fillRect(x, y, 20, 20)
}


