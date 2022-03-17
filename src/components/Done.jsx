import React from "react";
import PropTypes from 'prop-types'
import { BiShuffle,BiRepost } from "react-icons/bi";
const style = {
  buttonRetry: {
    fontSize: "1.5em",
    color: "#61dafb",
    fontFamily: "fantasy",
    cursor: "pointer"
  },
  otherButton: {
    color: "white",
    fontFamily: "fantasy",
    cursor: "pointer",
    fontSize: "1em",
    margin: "0.1em auto 3em"
  },
  divider: {
    height: 0,
    border: "0.5px solid #61dafb"
  },
  poinstStyle: {
    color: "#61dafb",
    fontWeight: "bold"
  }
};

class Done extends React.Component {
  render() {
    const { divider, buttonRetry, otherButton, poinstStyle } = style;
    return (
      <div>
        <h2>
          FINAL SCORE <b style={poinstStyle}>{this.props.points}</b>
        </h2>
        <hr style={divider} />
        <h3>Well Done!</h3>
        <br />
        <h1 style={buttonRetry} onClick={this.props.retryGame}>
           <BiRepost/> Play Again
        </h1>
        <hr style={divider} />
        <h5 style={otherButton} onClick={this.props.onReStartGame}>
          <BiShuffle/> Select Level
        </h5>
        {this.children}
      </div>
    );
  }
}

Done.propTypes = {
  points: PropTypes.number.isRequired,
  retryGame: PropTypes.func.isRequired,
  onReStartGame: PropTypes.func.isRequired
}

export default Done;
