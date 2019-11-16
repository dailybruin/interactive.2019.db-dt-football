import React from "react";
import Layout from "./Layout";
import { ArticleGrid } from "./ArticleGrid";
import { PhotoGallery } from "./PhotoGallery";
import { SubHeading } from "./SubHeading";
import { Video } from "./Video";
import { Navbar } from "./Navbar";
import { Questions } from "./Questions";

import BarGraph from "./BarGraph/BarGraph";

const questions = [
  {
    question:
      "Question 1 Question 1 Question 1 Question 1 Question 1 Question 1 Question 1 Question 1",
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
    answer1: "UCLA",
    answer2: "USC"
  }
];

export class App extends React.Component {
  render() {
    return (
      <>
        {/* {this.props.visited || <LandingPage />} */}
        <Navbar />

        <SubHeading text="Here's where your allegiance lies." />
        {/* <Choose/> */}
        <SubHeading text="Here's how it all came together." />
        <PhotoGallery />
        <SubHeading text="Video Title." />
        <Video />
        <SubHeading text="Read more here." />
        <Questions questions={questions} />
        <ArticleGrid />
        <BarGraph />
      </>
    );
  }
}
