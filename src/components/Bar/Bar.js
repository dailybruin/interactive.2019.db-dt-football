import React from "react";
import { css } from "emotion";

class Bar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width:
        Math.round((this.props.numYes / this.props.numResponses) * 100) + "%",
      color: this.props.isUCLA === "true" ? "blue" : "red",
      isUCLA: this.props.isUCLA
    };
  }

  render() {
    return (
      <div
        className={css`
          width: 50%;
        `}
      >
        <div
          className={css`
            width: ${this.state.width};
            background: ${this.state.color};
            float: ${this.state.isUCLA === "true" ? "right" : "left"};
          `}
        >
          <span
            className={css`
              float: ${this.state.isUCLA === "true" ? "left" : "right"};
              position: relative;
              left: ${this.state.isUCLA === "true" ? "-40px" : "40px"};
            `}
          >
            {this.state.width}
          </span>
          {/* {"\u00A0"}               */}
        </div>
      </div>
    );
  }
}
export default Bar;
