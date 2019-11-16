import React from "react";
import { css } from "emotion";
import { Card } from "./Card";

export class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activenum: 0,
      renderedCards: []
    };
    this.scrollRight = this.scrollRight.bind(this);
    this.scrollLeft = this.scrollLeft.bind(this);
  }

  scrollLeft() {
    if (this.state.activenum > 0) {
      this.setState({ activenum: this.state.activenum - 1 });
    }
  }

  scrollRight() {
    if (this.state.activenum < this.state.renderedCards.length - 1)
      this.setState({ activenum: this.state.activenum + 1 });
  }

  render() {
    this.state.renderedCards = [];
    for (let i in this.props.cards) {
      this.state.renderedCards.push(
        <Card
          img={this.props.cards[i].img}
          blurb={this.props.cards[i].blurb}
          year={this.props.cards[i].year}
          num={i}
          activenum={this.state.activenum}
          color={this.props.colors[i % this.props.colors.length]}
        ></Card>
      );
    }
    return (
      <div
        className={css`
          white-space: nowrap;
          width: 100%;
          position: relative;
          height: 440px;
          overflow: hidden;
        `}
      >
        <div
          className={css`
            position: absolute;
            left: 35%;
            transform: translateX(${-200 * this.state.activenum}px);
            transition: transform 500ms;
            height: 400px;
          `}
        >
          {this.state.renderedCards}
        </div>
        <button
          className={css`
            position: absolute;
            bottom: 0;
          `}
          onClick={this.scrollLeft}
        >
          LEFT
        </button>
        <button
          className={css`
            position: absolute;
            bottom: 0;
            left: 100px;
          `}
          onClick={this.scrollRight}
        >
          RIGHT
        </button>
      </div>
    );
  }
}
