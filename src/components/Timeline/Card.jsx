import React from "react";
import { css } from "emotion";

export class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className={
          (this.props.activenum == this.props.num ? "active " : "") +
          css`
            text-align: center;
            width: 200px;
            display: inline-block;
            position: relative;
            white-space: normal;
            height: 440px;
            vertical-align: baseline;
            transition: width 500ms;

            &.active {
              width: 300px;
            }
          `
        }
      >
        <div
          className={
            ((Math.abs(this.props.activenum - this.props.num) <= 2) ? "active " : "") +
            css`
              background-color: ${this.props.color};
              padding: 15px;
              overflow: hidden;
              height: 400px;
              display: block;
              /* vertical-align: bottom; */

              transition: all 500ms;
              transform: translateY(360px);
              &.active {
                /* transform: translateY(0); */
                transform: ${this.props.activenum == this.props.num ? 'translateY(0)' : 
                ((Math.abs(this.props.activenum - this.props.num) <= 1) ? 'translateY(300px)' : 'translateY(340px)')};
              }
            `
          }
        >
          <img
            src={this.props.img}
            className={
              (this.props.activenum == this.props.num ? "active " : "") +
              css`
                width: 100%;
                height: 180px;
                margin-bottom: 10px;
                object-fit: cover;
                opacity: 0;
                transition: opacity 200ms;

                &.active {
                  opacity: 1;
                }
              `
            }
          ></img>
          <div
            className={css`
              overflow-y: auto;
              text-align: left;
              height: 175px;
            `}
          >
            <p
              className={css`
                color: #fff;
                margin: 0;
                font-size: 14px;
              `}
            >
              {this.props.blurb}
            </p>
          </div>
        </div>
        <h1
          className={
            (this.props.activenum == this.props.num ? "active " : "") +
            css`
              margin: 0;
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              background-color: #fff;
              color: ${this.props.color};
            `
          }
        >
          {this.props.year}
        </h1>
      </div>
    );
  }
}
