import React from "react";
import Layout from "./Layout";
import { ArticleGrid } from "./ArticleGrid";
import { PhotoGallery } from "./PhotoGallery";
import { SubHeading } from "./SubHeading";
import { Video } from "./Video";
import { Navbar } from "./Navbar";
import { Timeline } from "./Timeline";

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
        {/* {this.props.visited || <LandingPage />} */}
        <Navbar />
        <SubHeading text="Here's where your allegiance lies." />
        {/* <Choose/> */}
        <SubHeading text="Here's how it all came together." />
        <PhotoGallery />
        <SubHeading text="Video Title." />
        <Video />
        <SubHeading text="Read more here." />
        <Timeline
          cards={timelineCards}
          colors={["#CD6969", "#F7CD6A", "#83B8D7"]}
        ></Timeline>
        <ArticleGrid />
      </>
    );
  }
}
