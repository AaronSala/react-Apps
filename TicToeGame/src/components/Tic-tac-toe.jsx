import { useState } from "react";
import useTictacToe from "../hooks/Use-tic-tac-toe";

function TicTacToe() {
  const { handleClick, board, calculateWinner, resetGame, getStatusMessage } =
    useTictacToe();

 

  return (
    <div className="game">
      <div className="status">
        {getStatusMessage()}
        <button className="reset-button" onClick={resetGame}>
          Reset Button
        </button>
      </div>

      <div className="board">
        {board.map((b, index) => {
          return (
            <button
              className="cell"
              key={index}
              onClick={() => handleClick(index)}
            
              disabled = {b !== null}>
              {b}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default TicTacToe;
