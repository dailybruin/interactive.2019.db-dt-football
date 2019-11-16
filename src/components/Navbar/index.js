import React from "react";
import { css } from "emotion";
// import { colors } from "../Shared/colors";

export function Navbar({ colorswitch, sections }) {
  return (
    <div
      className={css`
        position: -webkit-sticky; /* Safari */
        position: sticky;
        top: 0;
        background-color: ${"black"};
        z-index: 5;
        padding: 30px 0px;
        width: 100%;
        justify-content: center;
      `}
    >
      <h1
        className={css`
          margin: 0;
          display: flex;
          font-weight: 900;
          text-transform: uppercase;
          font-size: 2.5rem;
          color: ${"white"};
          justify-content: center;
          font-family: ${"Poppins"};
        `}
      >
        Daily Bruin x Daily Trojan
      </h1>
      <hr
        className={css`
          color: ${"white"};
          height: 5;
          width: 600px;
          margin: 0 auto;
        `}
      />
      <nav
        className={css`
          display: flex;
          justify-content: center;
          -ms-flex-pack: distribute;
          font-size: 20px;
          a {
            color: ${"white"};
            text-decoration: none;
            padding: 0.4em 1.2em;
            &:hover {
              text-decoration: underline;
            }
          }
        `}
      >
        {sections &&
          sections.map(section => (
            <a key={section} href={`#${section}`}>
              {section}
            </a>
          ))}
      </nav>
    </div>
  );
}
