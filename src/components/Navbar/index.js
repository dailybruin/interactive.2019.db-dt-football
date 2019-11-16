import React from "react";
import { css } from "emotion";
// import { colors } from "../Shared/colors";

// export function Navbar() {
//   return (
//     <div
//       className={css`
//         background-color: white;
//         margin-bottom: 1.2em;
//       `}
//     >
//       navbar
//     </div>
//   );
// }

export function Navbar({ colorswitch, sections }) {
  return (
    <div
      className={css`
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        background-color: ${"black"};
        padding-bottom: 10px;
        z-index: 5;
      `}
    >
      {/* <h4
        className={css`
          text-transform: uppercase;
          margin: 0px;
          margin-bottom: -12px;
          margin-top: 6px;
          font-family: ${"Poppins"};
          font-style: normal;
          font-weight: 800;
          font-size: 40px;
          line-height: 60px;
          color: ${"white"};
          align-items: center;
          text-align: center;
        `}
      >
        The Daily Bruin x The Daily Trojan
      </h4> */}
      <h1
        className={css`
          display: flex;
          font-weight: 900;
          text-transform: uppercase;
          font-size: 2.1rem;
          margin-top: 6px;

          color: ${"white"};
          align-items: center;
          justify-content: center;
          /* text-align: center; */
          font-family: ${"Poppins"};
          width: 584px;
        `}
      >
        Daily Bruin x Daily Trojan
      </h1>
      <hr
        className={css`
          color: ${"white"};
          height: 5;
        `}
      />
      <nav
        className={css`
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          -ms-flex-pack: distribute;

          a {
            color: ${"white"};
            font-weight: bold;
            padding-right: 0.8em;
          }
        `}
      >
        <a href="#map">Memories</a>
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
