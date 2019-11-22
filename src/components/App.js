import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Page } from "./Page";
import { css } from "emotion";
import { mobile } from "./Shared/mediaQueries";
import Video from "./Video";
import ArticlePage from "./ArticlePage";

const App = ({ visited }) => {
  const [showVideo, setShowVideo] = useState(!visited);

  if (showVideo) {
    setTimeout(() => setShowVideo(false), 4000);
    return <Video />;
  }

  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route path="/article">
            <ArticlePage />
          </Route>
          <Route path="/">
            <Page />
          </Route>
        </Switch>
      </Router>
      <div
        className={css`
          background-color: white;
          margin-top: 50px;
          margin-bottom: 50px;
          text-align: center;
          color: black;
          padding: 0px 20%;
          ${mobile} {
            padding: 0px 20px;
            margin: 20px;
          }
        `}
      >
        Developed by Max Wu, Dustin Newman, Sarthak More, Alina Abidi, Henry
        Trinh, Karl Huang, Alina Abidi, Matthew Ko, Thomas Gerard, and Caden
        McQuillen. Designed by Callista Wu and Lauren Ho.
      </div>
    </>
  );
};

export default App;
