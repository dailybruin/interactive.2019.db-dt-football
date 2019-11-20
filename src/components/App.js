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
  render() {
    return (
      <>
        <Navbar sections={["section1", "section2"]} />

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

        <SubHeading text="Video: Title of the video here and here" />
        <Video link="https://www.youtube.com/embed/et_uT-8TPTU" />

        <SubHeading text="Read more here." />

        <div>
          <ArticleGrid />
        </div>
      </>
    );
  }
}
