const gameContainer = document.getElementById("gameContainer");
const snakeCanvas = document.getElementById("snakeGame");
const notGame = document.getElementById("notGame");
const startButton = document.getElementById("startGame");
const gameScore = document.getElementById("gameScore");
const c = snakeCanvas.getContext("2d");
const cWidth = snakeCanvas.width;
const cHeight = snakeCanvas.height;
let intervalId = 0;

const snakeMap = [];
for (let i = 0; i < 40; i++) {
  snakeMap.push([]);
}
for (let row of snakeMap) {
  for (let i = 0; i < 40; i++) {
    row.push("#bbbbbb");
  }
}

const snarray = [];
snarray.push([0, 1]);
snarray.push([0, 0]);
for (let coords of snarray) {
  snakeMap[coords[1]][coords[0]] = "#444444";
}
let currDir = 0; // 0123 is down, right, up and left;
let lastDir = 0;
let growing = false;
const food = [];
food.push(20);
food.push(20);
snakeMap[food[1]][food[0]] = "#884444";

function drawBackground() {
  c.fillStyle = "#888888";
  c.fillRect(0, 0, cWidth, cHeight);
}

function drawSnixels() {
  const height = (cHeight - 1) / snakeMap.length;
  for (let i = 0; i < snakeMap.length; i++) {
    let y = 1 + i * height;
    let row = snakeMap[i];
    const width = (cWidth - 1) / row.length;
    for (let j = 0; j < row.length; j++) {
      let x = 1 + j * width;
      c.fillStyle = row[j];
      c.fillRect(x, y, width - 1, height - 1);
    }
  }
}

function draw() {
  drawBackground();
  drawSnixels();
}

function notInMap(x, y) {
  return x < 0 || y < 0 || x >= snakeMap[0].length || y >= snakeMap.length;
}

function inSnarray(x, y) {
  for (let pair of snarray) {
    if (pair[0] === x && pair[1] === y) {
      return true;
    }
  }
  return false;
}

function move() {
  // TODO get growing to work
  if (!growing) {
    const last = snarray.pop();
    snakeMap[last[1]][last[0]] = "#bbbbbb";
  } else {
    growing = false;
  }
  let x = snarray[0][0];
  let y = snarray[0][1];
  if (currDir === 0) {
    // TODO figure out why a switch statement doesn't work here
    y++;
  } else if (currDir === 1) {
    x--;
  } else if (currDir === 2) {
    y--;
  } else if (currDir == 3) {
    x++;
  }
  if (notInMap(x, y) || inSnarray(x, y)) {
    clearInterval(intervalId);
    snakeCanvas.style.display = "none";
    notGame.style.display = "flex";
    gameScore.innerText = "Your Score was: " + snarray.length * 30;
    // resetting the gameState
    for (let row of snakeMap) {
      for (let i = 0; i < 40; i++) {
        row[i] = "#bbbbbb";
      }
    }
    while (snarray.length > 0) {
      snarray.pop();
    }
    snarray.push([0, 1]);
    snarray.push([0, 0]);
    for (let coords of snarray) {
      snakeMap[coords[1]][coords[0]] = "#444444";
    }
    currDir = 0;
    lastDir = 0;
    growing = false;
    while (food.length > 0) {
      food.pop();
    }
    food.push(20);
    food.push(20);
    snakeMap[food[1]][food[0]] = "#884444";
  } else {
    snarray.unshift([x, y]);
    snakeMap[y][x] = "#444444";
    if (x === food[0] && y === food[1]) {
      growing = true;
      let placing = true;
      while (placing) {
        const newX = Math.floor(Math.random() * snakeMap.length);
        const newY = Math.floor(Math.random() * snakeMap[0].length);
        placing = false;
        for (let coord of snarray) {
          if (newX === coord[0] && newY === coord[1]) {
            placing = true;
            break;
          }
        }
        if (!placing) {
          food[0] = newX;
          food[1] = newY;
        }
      }
      snakeMap[food[1]][food[0]] = "#884444";
      // TODO put new food down after eating
    }
    lastDir = currDir;
  }
}

function notReverse(dir) {
  return dir !== (lastDir + 2) % 4;
}

gameContainer.onkeydown = (e) => {
  const keysToDirs = {
    83: 0,
    65: 1,
    87: 2,
    68: 3,
  };
  const dir = keysToDirs[e.keyCode];
  if (notReverse(dir)) {
    currDir = dir;
  }
};

function gameFn() {
  move();
  draw();
}

function startGame() {
  intervalId = setInterval(gameFn, 90);
  notGame.style.display = "none";
  snakeCanvas.style.display = "block";
}
startButton.onclick = startGame;
