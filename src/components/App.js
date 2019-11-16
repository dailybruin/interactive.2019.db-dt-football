import React from "react";
import Layout from "./Layout";
import { ArticleGrid } from "./ArticleGrid";
import { PhotoGallery } from "./PhotoGallery";
import { SubHeading } from "./SubHeading";
import { Video } from "./Video";
import { Navbar } from "./Navbar";
import { Questions } from "./Questions";
import BarGraph from "./BarGraph/BarGraph";
import { Timeline } from "./Timeline";

const questions = [
  {
    question: "Question 1",
    answer1: "Max Wu LOLOL",
    answer2: "USC"
  },
  {
    question: "Question 2",
    answer1: "UCLA",
    answer2: "USC"
  },
  {
    question: "Question 3",
    answer1: "UCLA",
    answer2: "USC"
  },
  {
    question: "Do you like cupcakes?",
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
  render() {
    return (
      <>
        <Navbar />

        <SubHeading text="Are you #GoBruins or #FightOn?" />
        <Questions questions={questions} />
        <SubHeading
          text="Here's where your allegiance lies."
          explainer="explainer here."
        />
        <BarGraph />

        <SubHeading text="Here's how it all came together." />
        <Timeline
          cards={timelineCards}
          colors={["#CD6969", "#F7CD6A", "#83B8D7"]}
        />

        <SubHeading text="Video Title." />
        <Video />

        <SubHeading text="Read more here." />

        <div>
          <ArticleGrid />
        </div>
      </>
    );
  }
}
