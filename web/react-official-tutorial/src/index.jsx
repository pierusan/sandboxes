import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Board from "./board";

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

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(i) {
    const { history, stepNumber, xIsNext } = this.state;
    const historyCopy = history.slice(0, stepNumber + 1);
    const current = historyCopy[historyCopy.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";
    this.setState({
      history: historyCopy.concat([
        {
          squares,
        },
      ]),
      stepNumber: historyCopy.length,
      xIsNext: !xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  render() {
    const { history, stepNumber, xIsNext } = this.state;
    const historyCopy = history;
    const current = historyCopy[stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = historyCopy.map((step, move) => {
      const description = move ? `Go to move #${move} ()` : "Go to game start";
      const stepId = step.squares.reduce((acc, cur) => acc + (cur ? 1 : 0), 0);
      return (
        <li key={stepId}>
          <button type="button" onClick={() => this.jumpTo(move)}>
            {description}
          </button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = `Winner ${winner}`;
    } else {
      status = `Next player: ${xIsNext ? "X" : "O"}`;
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
