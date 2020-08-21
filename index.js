let grid = [[0, 5, 0, 3, 8, 0, 9, 4, 0], [4, 0, 0, 6, 0, 1, 5, 0, 8], [7, 8, 0, 0, 0, 0, 0, 0, 0], [0, 2, 0, 0, 0, 0, 0, 3, 7], [5, 0, 0, 0, 0, 0, 0, 0, 9], [8, 3, 0, 0, 0, 0, 0, 6, 0], [0, 0, 0, 0, 0, 0, 0, 5, 1], [3, 0, 1, 2, 0, 4, 0, 0, 6], [0, 6, 5, 0, 1, 3, 0, 2, 0]];

function printGrid() {
  console.log("***** SOLUZIONE ******");
  for (let i = 0; i < 9; i++) {
    console.log(grid[i]);
  }
  console.log("**************************");
}

function isPossible(y, x, n) {
  for (let i = 0; i < 9; i++) {
    if (grid[y][i] === n) {
      return false;
    }
  }
  for (let i = 0; i < 9; i++) {
    if (grid[i][x] === n) {
      return false;
    }
  }

  cuboX = (Math.floor(x / 3)) * 3;
  cuboY = (Math.floor(y / 3)) * 3;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (grid[cuboY + i][cuboX + j] === n) {
        return false;
      }
    }
  }

  return true;
}

function solve() {
  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      if (grid[y][x] === 0) {
        for (let n = 1; n < 10; n++) {
          if (isPossible(y, x, n)) {
            grid[y][x] = n;
            solve();
            grid[y][x] = 0;
          }
        }
        return;
      }
    }
  }
  printGrid();
}

solve();


