import React from "react";
import { css } from "emotion";
import { Section } from "./Section";
import { Header } from "./Header";
import { mobile } from "../Shared/mediaQueries";
import { colors } from "../Shared/colors";

export class ArticleGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorswitch: false
    };
    this.listenScrollEvent = this.listenScrollEvent.bind(this);
  }

  listenScrollEvent(e) {
    if (window.scrollY > 130) {
      this.setState({ colorswitch: true });
    } else {
      this.setState({ colorswitch: false });
    }
  }

  componentWillMount() {
    if (window) {
      window.addEventListener("scroll", this.listenScrollEvent);
    }
  }

  componentWillUnmount() {
    // This fixes the "leaky component" error
    // Make sure to remove any event listeners you add!
    if (window) {
      window.removeEventListener("scroll", this.listenScrollEvent);
    }
  }

  render() {
    return (
      <div
        className={css`
          width: 100%;
          min-height: 90vh;
          text-align: center;
          padding: 2em;
          ${mobile} {
            padding: 0em;
          }
          padding-top: 0.5em;
          padding: 0px 10%;
        `}
      >
        {this.props.papers && (
          <div
            className={css`
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              @media only screen and (max-width: 900px) {
                grid-template-columns: repeat(1, 1fr);
              }
            `}
          >
            {this.props.papers.map((paper, index) => (
              <div
                className={css`
                  margin: 20px;
                  padding-bottom: 30px;
                  background-color: ${index == 0 ? colors.blue : colors.red};
                `}
              >
                {" "}
                {paper.sections.map(section => (
                  <Section
                    name={section.section}
                    content={section.content}
                    schoolname={index == 0 ? "UCLA" : "USC"}
                  />
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}
