let pen = document.getElementById("game").getContext("2d")
let counter = 10
drawBackground()
let timer = setInterval(drawFrame, 1000) // clearInterval(id)

function drawFrame() {
    drawBackground()
    showString(counter+'')
    counter = counter - 1 //--counter
    if(counter === -1) {
        clearInterval(timer)
    }
}

function drawBackground() {
    pen.fillStyle = "#aaaaaa"
    pen.fillRect(0, 0, 400, 400)
}

function showString(string){
    pen.font = "80px Arial"
    pen.textBaseline = "top"
    pen.textAlign = "center"
    pen.fillStyle = "#FF0000"
    pen.fillText(string, 200, 180)
}


