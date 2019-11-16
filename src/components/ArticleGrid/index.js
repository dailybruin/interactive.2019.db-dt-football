import React from "react";
import { css } from "emotion";
import { Section } from "./Section";
import { colors } from "../Shared/colors";
import { Header } from "./Header";

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
          padding: 10em;
          padding-top: 0.5em;
          border-top: 2vh solid white;
        `}
      >
        {/* <Header
                    colorswitch={this.state.colorswitch}
                    sections={this.state.data.map(x => x.section)}
                /> */}
        {this.state.data.length && (
          <div
            className={css`
              display: grid;
              grid-template-columns: repeat(2, 1fr);
            `}
          >
            <Section
              key={this.state.data[0].paper}
              data={this.state.data[0]}
              schoolname={"UCLA"}
            />
            <Section
              key={this.state.data[1].paper}
              data={this.state.data[1]}
              schoolname={"USC"}
            />
          </div>
        )}
      </div>
    );
  }
}
