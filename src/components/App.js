import React from "react";
import Layout from "./Layout";
import { ArticleGrid } from "./ArticleGrid";
import { PhotoGallery } from "./PhotoGallery";
import { SubHeading } from "./SubHeading";
import { Video } from "./Video";
import { Navbar } from "./Navbar";
import { Questions } from "./Questions";
import { BarGraph } from "./BarGraph";
import { Timeline } from "./Timeline";
import { isThisSecond } from "date-fns";

import { css } from "emotion";

const questions = [
  {
    question: "Do you like cats?",
    answer1: "Yes",
    answer2: "No"
  },
  {
    question: "Do you like squirrels?",
    answer1: "Yes",
    answer2: "No"
  },
  {
    question: "Do you like dogs?",
    answer1: "Yes",
    answer2: "No"
  },
  {
    question: "Do you like cupcakes?",
    answer1: "Yes",
    answer2: "No"
  },
  {
    question: "Do you like goats?",
    answer1: "Yes",
    answer2: "No"
  },
  {
    question: "Do you like ducks?",
    answer1: "Yes",
    answer2: "No"
  },
  {
    question: "Do you like horses?",
    answer1: "Yes",
    answer2: "No"
  }
];

const timelineCards = [
  {
    img:
      "https://dailybruin.com/images/2019/11/web.ns_.joebiden.KH_-640x466.jpg",
    blurb:
      "this thing happened and it was really cool thi thing happened and it was really cool this thing happened and it was really cool this thing really cool this thing happened and it was really cool this thing happened and it was really cool this thing happened and it was really cool this thing happened and it was really cool this thing happened and it was really cool this thing happened and it was really cool this thing happened and it was really cool happened",
    year: "2015"
  },
  {
    img:
      "https://dailybruin.com/images/2019/11/web.ns_.joebiden.KH_-640x466.jpg",
    blurb:
      "this thing happened and it was really cool thi thing happened and it was really cool this thing happened and it was really cool this thing really cool this thing happened and it was really cool this thing happened and it was really cool this thing happened and it was really cool this thing happened and it was really cool this thing happened and it was really cool this thing happened and it was really cool this thing happened and it was really cool happened",
    year: "2015"
  },
  {
    img:
      "https://dailybruin.com/images/2019/11/web.ns_.joebiden.KH_-640x466.jpg",
    blurb:
      "this thing happened and it was really cool thi thing happened and it was really cool this thing happened and it was really cool this thing really cool this thing happened and it was really cool this thing happened and it was really cool this thing happened and it was really cool this thing happened and it was really cool this thing happened and it was really cool this thing happened and it was really cool this thing happened and it was really cool happened",
    year: "2015"
  },
  {
    img:
      "https://dailybruin.com/images/2019/11/web.ns_.joebiden.KH_-640x466.jpg",
    blurb:
      "this thing happened and it was really cool thi thing happened and it was really cool this thing happened and it was really cool this thing really cool this thing happened and it was really cool this thing happened and it was really cool this thing happened and it was really cool this thing happened and it was really cool this thing happened and it was really cool this thing happened and it was really cool this thing happened and it was really cool happened",
    year: "2015"
  },
  {
    img:
      "https://dailybruin.com/images/2019/11/web.ns_.joebiden.KH_-640x466.jpg",
    blurb:
      "this thing happened and it was really cool thi thing happened and it was really cool this thing happened and it was really cool this thing really cool this thing happened and it was really cool this thing happened and it was really cool this thing happened and it was really cool this thing happened and it was really cool this thing happened and it was really cool this thing happened and it was really cool this thing happened and it was really cool happened",
    year: "2015"
  },
  {
    img:
      "https://dailybruin.com/images/2019/11/web.ns_.joebiden.KH_-640x466.jpg",
    blurb:
      "this thing happened and it was really cool thi thing happened and it was really cool this thing happened and it was really cool this thing really cool this thing happened and it was really cool this thing happened and it was really cool this thing happened and it was really cool this thing happened and it was really cool this thing happened and it was really cool this thing happened and it was really cool this thing happened and it was really cool happened",
    year: "2015"
  }
];

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fetch_data: []
    };
  }

  componentWillMount() {
    fetch(
      "https://kerckhoff.dailybruin.com/api/packages/flatpages/interactive.2019.db-dt-football/"
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          fetch_data: data.data["data.aml"]
        });
      });
  }
  render() {
    let { fetch_data } = this.state;
    let { questions, timeline, papers } = fetch_data;

    console.log(fetch_data);

    return (
      <>
        <Navbar papers={fetch_data["papers"]} />

        <SubHeading
          text="Are you #GoBruins or #FightOn?"
          explainer="Answer these poll questions to see how others did as well."
          ID="poll"
        />
        {questions && <Questions questions={questions} />}

        <SubHeading text="Here's how it all came together." ID="timeline" />
        {timeline && (
          <Timeline
            cards={timeline}
            colors={["#CD6969", "#F7CD6A", "#83B8D7"]}
          />
        )}

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
