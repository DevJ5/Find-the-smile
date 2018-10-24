import React from 'react';
import './Board.css';

const renderCel = (makeMove, rowIndex, cellIndex, symbol, hasTurn) => {
  return (
    <button
      className={`board-tile ${symbol || null} `}
      disabled={hasTurn}
      onClick={() => makeMove(rowIndex, cellIndex)}
      key={`${rowIndex}-${cellIndex}`}
    />
  );
};

export default ({ board, makeMove }) =>
  board.map((row, rowIndex) => (
    <div key={rowIndex}>
      {row.map((symbol, cellIndex) =>
        renderCel(makeMove, rowIndex, cellIndex, symbol, false)
      )}
    </div>
  ));
