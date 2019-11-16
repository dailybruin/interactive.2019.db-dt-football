import React from "react";
import { css } from "emotion";
import { Section } from "./Section";
import { colors } from "../Shared/colors";
import { Header } from "./Header";
import { mobile } from "../Shared/mediaQueries";

export class ArticleGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
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
    fetch(
      "https://kerckhoff.dailybruin.com/api/packages/flatpages/interactive.2019.db-dt-football/"
    )
      .then(response => response.json())
      .then(data => {
        let papers = data.data["data.aml"].papers;
        console.log(papers);
        this.setState({
          data: papers
        });
      });
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
            padding: 1em;
          }
          padding-top: 0.5em;
          border-top: 2vh solid white;
        `}
      >
        {this.state.data.length && (
          <div
            className={css`
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              @media only screen and (max-width: 900px) {
                grid-template-columns: repeat(1, 1fr);
              }
            `}
          >
            {this.state.data.map((d, index) => (
              <Section
                key={d.paper}
                data={d}
                schoolname={index == 0 ? "UCLA" : "USC"}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}
