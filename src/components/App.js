import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Page } from "./Page";
import Video from "./Video";
import Sample from "./Article";

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
            <Sample />
          </Route>
          <Route path="/">
            <Page />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
