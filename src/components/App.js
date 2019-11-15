import React from "react";
import Layout from "./Layout";
import { ArticleGrid } from "./ArticleGrid";
import { PhotoGallery } from "./PhotoGallery";
import { SubHeading } from "./SubHeading";
import { Video } from "./Video";
import { Navbar } from "./Navbar";
import BarGraph from "./BarGraph/BarGraph";

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
        <ArticleGrid />
        <BarGraph />
      </>
    );
  }
}
