import { useState } from "react";
import Button from "../components/Button";

const Square = ({ value, onSquareClick }) => {
  return (
    <div className="square" onClick={onSquareClick}>
      {value}
    </div>
  );
};

const TicTacToe = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  setTimeout(() => {
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((e) => observer.observe(e));
  }, 100);

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    }
    setSquares(nextSquares);

    const botMove = getRandomMove(nextSquares);
    if (botMove !== null) {
      nextSquares[botMove] = "O";
      setSquares(nextSquares);
      setXIsNext(true);
    }
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next Player: " + (xIsNext ? "X" : "O");
  }

  /////IMPLEMENTASI BOT/////
  function getRandomMove(squares) {
    const availableMoves = [];
    for (let i = 0; i < squares.length; i++) {
      if (!squares[i] || calculateWinner(squares)) {
        availableMoves.push(i);
      }
    }

    console.log(availableMoves);
    const randomIndex = Math.floor(Math.random() * availableMoves.length);
    return availableMoves[randomIndex];
  }

  /////REFRESH/////
  function refresh() {
    setSquares(Array(9).fill(null));
  }

  return (
    <>
      <main>
        <Button name="Back" customStyle="back-button hidden" target="/" />
        <h1 className="title hidden" style={{ transform: "translateX(0)" }}>
          Tictactoe Game
        </h1>
        <div className="content hidden" style={{ transform: "translateX(0)" }}>
          <div className="game">
            <div className="tictactoe-result" style={{ textAlign: "center" }}>
              <h2>{status}</h2>
              <Button name="Refresh" customStyle="refresh-button" handleOnClick={() => refresh()} />
            </div>
            <div className="tictactoe-container">
              <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
              </div>
              <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
              </div>
              <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
              </div>
            </div>
          </div>
          <div className="score-board">Score Board</div>
        </div>
      </main>
    </>
  );
};

export default TicTacToe;

/////TICTACTOE RULES/////
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
