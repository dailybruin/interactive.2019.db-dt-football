import React from "react";
import { css } from "emotion";

const Video = () => (
  <video
    autoPlay={true}
    loop={true}
    muted={true}
    playsInline={true}
    className={css`
      position: fixed;
      z-index: 1001;
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      object-position: center;
      object-fit: cover;
      animation-name: fade-out;
      animation-delay: 3.8s;
      animation-duration: 1s;
      animation-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
      animation-fill-mode: forwards;
      will-change: opacity;
      :after {
        content: "\A";
        position: absolute;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        opacity: 0;
        background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 0.4) 95% 100%
        );
        animation-name: fade-in;
        animation-delay: 3.8s;
        animation-duration: 5s;
        animation-fill-mode: forwards;
        will-change: opacity;
      }
    `}
  >
    <source src={require("./cover.mp4")} type="video/mp4" />
  </video>
);

export default Video;
