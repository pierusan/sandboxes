import React from "react";
import PropTypes from "prop-types";
import "./index.css";

/**
 * Square is a 'function component' i.e. only has a render() method and does not
 * have a state so can be written as a function
 */
function Square(props) {
  const { value, onClick } = props;
  return (
    <button type="button" className="square" onClick={onClick}>
      {value}
    </button>
  );
}

export default class Board extends React.Component {
  renderSquare(i) {
    const { squares, onClick } = this.props;
    return <Square value={squares[i]} onClick={() => onClick(i)} />;
  }

  render() {
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

/**
 * Proptypes implemented here as a good react practice mentioned in Airbnb
 * styleguide, but the react team mentions that Typescript or Flow should be
 * preferred instead
 */
Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
// Specifies the default values for props:
Square.defaultProps = {
  value: "",
};
Board.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
};
