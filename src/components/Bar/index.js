import React from "react";
import { css } from "emotion";

export class Bar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width:
        Math.round((this.props.numYes / this.props.numResponses) * 100) + "%",
      color: this.props.isUCLA === "true" ? "#83B8D7" : "#CD6969",
      isUCLA: this.props.isUCLA
    };
  }

  render() {
    return (
      <div
        className={css`
          width: 100%;
          justify-content: center;
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
              left: ${this.state.isUCLA === "true" ? "-70px" : "70px"};
              font-family: "Poppins", sans-serif;
              font-style: normal;
              font-weight: bold;
              font-size: 24px;
              line-height: 24px;
              color: ${this.props.isUCLA === "true" ? "#83B8D7" : "#CD6969"};
            `}
          >
            {this.state.width}
          </span>
        </div>
      </div>
    );
  }
}
