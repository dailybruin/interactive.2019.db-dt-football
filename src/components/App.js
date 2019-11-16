import React from "react";
import Layout from "./Layout";
import { ArticleGrid } from "./ArticleGrid";
import { PhotoGallery } from "./PhotoGallery";
import { SubHeading } from "./SubHeading";
import { Video } from "./Video";
import { Navbar } from "./Navbar";
import { Questions } from "./Questions";

const questions = [
  {
    question: "Question 1",
    answer1: "UCLA",
    answer2: "USC"
  },
  {
    question: "Question 2",
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
        <SubHeading text="Here's how it all came together." />
        <PhotoGallery />
        <SubHeading text="Video Title." />
        <Video />
        <SubHeading text="Read more here." />
        <Questions text={questions} />
        <ArticleGrid />
      </>
    );
  }
}
