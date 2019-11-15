import React from "react";
import { css } from "emotion";
import { SectionUCLA } from "./SectionUCLA";
import { SectionUSC } from "./SectionUSC";
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
        let sections = data.data["data.aml"].sections;
        this.setState({
          data: sections
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
          width: calc(100% - 20em);
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
            <SectionUCLA
              key={this.state.data[0].section}
              data={this.state.data[0]}
            />
            <SectionUSC
              key={this.state.data[1].section}
              data={this.state.data[1]}
            />
          </div>
        )}
      </div>
    );
  }
}
