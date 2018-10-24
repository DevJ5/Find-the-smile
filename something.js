const calculateWinner = board =>
  board
    .concat(
      // vertical winner
      [0, 1, 2].map(n => board.map(row => row[n]))
    )
    .concat([
      // diagonal winner ltr
      [0, 1, 2].map(n => board[n][n]),
      // diagonal winner rtl
      [0, 1, 2].map(n => board[2 - n][n])
    ])
    .filter(row => row[0] && row.every(symbol => symbol === row[0]))
    .map(row => row[0])[0] || null;

board = [['x', 'x', 'x'], [null, null, null], [null, null, null]];
let from = [['x', 'x', 'x'], [null, null, null], [null, null, null]];
let to = [['x', 'x', 'x'], [null, null, null], [null, null, null]];

const isValidTransition = (playerSymbol, from, to) => {
  const changes = from.map((row, rowIndex) =>
    row.map((symbol, columnIndex) => ({
      from: symbol,
      to: to[rowIndex][columnIndex]
    }))
  );

  console.log(changes);
  // .reduce((a, b) => a.concat(b))
  // .filter(change => change.from !== change.to)

  // return changes.length === 1 &&
  //   changes[0].to === playerSymbol &&
  //   changes[0].from === null
};

isValidTransition(null, from, to);
