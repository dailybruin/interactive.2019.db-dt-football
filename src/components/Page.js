import React from "react";
import ArticleGrid from "./ArticleGrid";
import { PhotoGallery } from "./PhotoGallery";
import { SubHeading } from "./SubHeading";
import { Video } from "./Video";
import { Timeline } from "./Timeline";
import { isThisSecond } from "date-fns";

import { css } from "emotion";
import Quiz from "./Quiz";

export class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      fetch_data: [],
      quizComplete: false
    };
    this.completeQuiz = this.completeQuiz.bind(this);
  }

  componentDidMount() {
    fetch(
      "https://kerckhoff.dailybruin.com/api/packages/flatpages/interactive.2019.db-dt-football/"
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          fetch_data: data.data["data.aml"]
        });
      });
  }

  completeQuiz() {
    this.setState({
      quizComplete: true
    });
  }

  render() {
    const { loading, fetch_data } = this.state;

    if (loading || !fetch_data) {
      return null;
    }

    const { questions, timeline, papers } = fetch_data;

    console.log(fetch_data);

    return (
      <>
        <SubHeading
          text="Are you #GoBruins or #FightOn?"
          explainer={[
            "With the Victory Bell on the line Saturday, UCLA will fight to keep its season alive, while USC will continue its quest for a Pac-12 title. The Daily Bruin and Daily Trojan came together to break down the two programs, the upcoming matchup and the decades-old rivalry at hand. Fans, young and old, have been taking sides all season long, and tensions only rise during rivalry week.",
            "Give us your thoughts on the upcoming game – which team will win which battles come Saturday?"
          ]}
          ID="poll"
        />
        {this.state.quizComplete ? (
          <h1>Bars</h1>
        ) : (
          <Quiz onQuizComplete={this.completeQuiz} questions={questions} />
        )}
        <SubHeading
          text="Here's how the rivalry came to be."
          explainer="UCLA and USC will face off in the 89th battle for the Victory Bell on Saturday. The crosstown rivalry boasts a dense history full of blowouts, comebacks, heated moments and season-defining plays. Here are the biggest ones from the last century."
          ID="timeline"
        />
        <Timeline cards={timeline} colors={["#CD6969", "#F7CD6A", "#83B8D7"]} />

        {/* <SubHeading text="Video: Title of the video here and here" />
        <Video link="https://www.youtube.com/embed/et_uT-8TPTU" /> */}

        <SubHeading text="Read more here." ID="stories" />
        <div
          className={css`
            width: 100%;
          `}
        >
          <ArticleGrid papers={papers} />
        </div>
      </>
    );
  }
}
