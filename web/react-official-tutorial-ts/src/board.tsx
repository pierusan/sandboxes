import React from "react";
import "./index.css";

interface SquareProps {
  value: string | null;
  onClick: () => void;
}

/**
 * Square is a 'function component' i.e. only has a render() method and does not
 * have a state so can be written as a function
 * We use TypeScript's React generic type here
 * https://www.digitalocean.com/community/tutorials/react-typescript-with-react
 */
const Square: React.FC<SquareProps> = ({ value, onClick }) => (
  <button type="button" className="square" onClick={onClick}>
    {value}
  </button>
);

interface BoardProps {
  squares: (string | null)[];
  onClick: (i: number) => void;
}

export class Board extends React.Component<BoardProps> {
  renderSquare(i: number): React.ReactElement {
    const { squares, onClick } = this.props;
    return <Square value={squares[i]} onClick={() => onClick(i)} />;
  }

  render(): React.ReactElement {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
