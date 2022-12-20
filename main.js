const board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ];
  
  const players = ['X', 'O'];
  let currentPlayer = 0;
  
  function drawBoard() {
    console.log(` ${board[0][0]} | ${board[0][1]} | ${board[0][2]} `);
    console.log('---+---+---');
    console.log(` ${board[1][0]} | ${board[1][1]} | ${board[1][2]} `);
    console.log('---+---+---');
    console.log(` ${board[2][0]} | ${board[2][1]} | ${board[2][2]} `);
  }
  
  function getMove() {
    while (true) {
      const row = parseInt(prompt('Enter row: '));
      const col = parseInt(prompt('Enter column: '));
      if (row in [0, 1, 2] && col in [0, 1, 2] && board[row][col] === ' ') {
        return [row, col];
      }
      console.log('Invalid move');
    }
  }
  
  function makeMove(row, col) {
    board[row][col] = players[currentPlayer];
  }
  
  function hasWon(player) {
    // check rows
    for (let row = 0; row < 3; row++) {
      if (board[row].every(cell => cell === player)) {
        return true;
      }
    }
    // check columns
    for (let col = 0; col < 3; col++) {
      if (board.every(row => row[col] === player)) {
        return true;
      }
    }
    // check diagonals
    if (board.every((row, i) => row[i] === player)) {
      return true;
    }
    if (board.every((row, i) => row[2 - i] === player)) {
      return true;
    }
    return false;
  }
  
  function main() {
    while (true) {
      drawBoard();
      const [row, col] = getMove();
      makeMove(row, col);
      if (hasWon(players[currentPlayer])) {
        console.log(`${players[currentPlayer]} has won!`);
        break;
      }
      currentPlayer = (currentPlayer + 1) % 2;
    }
  }
  
  main();
  