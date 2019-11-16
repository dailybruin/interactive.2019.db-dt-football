import React from "react";
import { css } from "emotion";

class QuestionHover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
    this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
    this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
  }

  onMouseEnterHandler() {
    this.setState({
      hover: true
    });
  }
  onMouseLeaveHandler() {
    this.setState({
      hover: false
    });
  }

  render() {
    return (
      <div
        onMouseEnter={this.onMouseEnterHandler}
        onMouseLeave={this.onMouseLeaveHandler}
        className={css`
          width: 60px !important;
          text-align: center;
          font-family: "Poppins", sans-serif;
          font-style: normal;
          font-weight: bold;
          font-size: 24px;
          line-height: 28px;
          flex-shrink: 0;
          position: relative;
        `}
      >
        {this.props.question_num}
        <div
          className={css`
            width: 300px;
            position: absolute;
            left: -120px;
            top: 30px;
            border-radius: 5px;
            border: 2px solid black;
            font-weight: normal;
            font-size: 18px;
            background: white;
            z-index: 5;
            display: ${this.state.hover === true ? "inline-block" : "none"};
          `}
        >
          {this.props.question}
        </div>
      </div>
    );
  }
}
export default QuestionHover;
