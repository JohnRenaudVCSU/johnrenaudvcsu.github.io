const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Bird
let birdY = 200;
let birdVelocity = 0;
let gravity = 0.6;
let jump = -9;

// Pipe
let pipeX = 400;
let pipeGap = 120;
let pipeTopHeight = 150;
let pipeSpeed = 2;

// Game
let score = 0;
let gameOver = false;

// Jump
document.addEventListener("keydown", function (e) {
  if (e.code === "Space" && !gameOver) {
    birdVelocity = jump;
  }
});

// Game loop
function gameLoop() {
  if (gameOver) return;

  update();
  draw();
  requestAnimationFrame(gameLoop);
}

function update() {
  // Bird physics
  birdVelocity += gravity;
  birdY += birdVelocity;

  // Move pipe
  pipeX -= pipeSpeed;

  // Reset pipe
  if (pipeX < -50) {
    pipeX = canvas.width;
    pipeTopHeight = Math.random() * 200 + 50;
    score++;
  }

  // Collision
  if (
    birdY < pipeTopHeight ||
    birdY > pipeTopHeight + pipeGap ||
    birdY + 20 > canvas.height
  ) {
    if (pipeX < 60 && pipeX > 20) {
      gameOver = true;
    }
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Bird
  ctx.fillStyle = "yellow";
  ctx.fillRect(50, birdY, 20, 20);

  // Pipes
  ctx.fillStyle = "green";
  ctx.fillRect(pipeX, 0, 40, pipeTopHeight);
  ctx.fillRect(
    pipeX,
    pipeTopHeight + pipeGap,
    40,
    canvas.height
  );

  // Score
  ctx.fillStyle = "white";
  ctx.fillText("Score: " + score, 10, 20);

  // Game over text
  if (gameOver) {
    ctx.fillText("Game Over", 150, 250);
  }
}

gameLoop();
