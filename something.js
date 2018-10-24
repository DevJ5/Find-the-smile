const calculateWinner = (board) =>
  board
    .concat(
      // vertical winner
      [0, 1, 2].map(n => board.map(row => row[n])) 
    )
    .concat(
      [
        // diagonal winner ltr
        [0, 1, 2].map(n => board[n][n]),
        // diagonal winner rtl
        [0, 1, 2].map(n => board[2 - n][n])
      ]
    )
    .filter(row => row[0] && row.every(symbol => symbol === row[0]))
    .map(row => row[0])[0] || null

board = [['x', 'x', 'x'], [null, null, null], [null, null, null]]