import React, { useState } from "react";
import { Navbar } from "./Navbar";
import { Page } from "./Page";
import Video from "./Video";

const App = ({ visited }) => {
  const [showVideo, setShowVideo] = useState(!visited);

  if (showVideo) {
    setTimeout(() => setShowVideo(false), 4000);
    return <Video />;
  }

  return (
    <>
      <Navbar />
      <Page />
    </>
  );
};

export default App;
