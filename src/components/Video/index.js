import React from "react";
import { css } from "emotion";
import { colors } from "../Shared/colors";

export function Video(props) {
  return (
    <div
      style={{
        position: "relative",
        paddingBottom: "56.25%" /* 16:9 ratio */,
        paddingTop: 25,
        height: 0
      }}
    >
      <iframe
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
        src={props.link}
        frameBorder="0"
      />
    </div>
  );
}
