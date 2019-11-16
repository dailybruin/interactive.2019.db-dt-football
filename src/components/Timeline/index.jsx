import React from "react";
import { css } from "emotion";
import { Card } from "./Card";
import leftArrow from "./leftArrow.png";
import rightArrow from "./rightArrow.png";

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
        />
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
            left: calc(50% - 150px);
            transform: translateX(${-200 * this.state.activenum}px);
            transition: transform 500ms;
            height: 400px;
          `}
        >
          {this.state.renderedCards}
        </div>
        <img
          className={css`
            position: absolute;
            left: calc(50% - 250px);
            bottom: 60%;
            z-index: 4;
            cursor: pointer;
          `}
          src={leftArrow}
          onClick={this.scrollLeft}
        />
        <img
          className={css`
            position: absolute;
            bottom: 60%;
            right: calc(50% - 250px);
            z-index: 4;
            cursor: pointer;
          `}
          src={rightArrow}
          onClick={this.scrollRight}
        />
      </div>
    );
  }
}
