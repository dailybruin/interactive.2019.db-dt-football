import React from "react";
import Layout from "./Layout";
import { ArticleGrid } from "./ArticleGrid";
import { PhotoGallery } from "./PhotoGallery";
import { SubHeading } from "./SubHeading";
import { Video } from "./Video";
import { Navbar } from "./Navbar";

export class App extends React.Component {
  render() {
    return (
      <>
        {/* {this.props.visited || <LandingPage />} */}
        <Navbar colorswitch={false} sections={["Test1", "Test2", "Test3"]} />
        <SubHeading text="Here's where your allegiance lies." />
        {/* <Choose/> */}
        <SubHeading text="Here's how it all came together." />
        <PhotoGallery />
        <SubHeading text="Video Title." />
        <Video />
        <SubHeading text="Read more here." />
        <ArticleGrid />
      </>
    );
  }
}
