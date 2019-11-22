import React from "react";
import { css } from "emotion";
// import { colors } from "../Shared/colors";
import { slugify } from "../Shared/utils";
import { colors } from "../Shared/colors";

import { mobile } from "../Shared/mediaQueries";

export function Navbar({ papers }) {
  let clickables = [];

  papers &&
    papers.map(paper => {
      let sections = [];
      paper.sections.map(section => sections.push(section.section));
      let obj = {
        name: paper.paper,
        sections: sections
      };
      clickables.push(obj);
    });

  return (
    <div
      className={css`
        position: -webkit-sticky; /* Safari */
        position: sticky;
        z-index: 10;
        top: 0;
        background-color: ${"black"};
        z-index: 5;
        padding: 30px 0px;
        width: 100%;
        height: 160px;
        ${mobile} {
          height: 120px;
        }
      `}
    >
      <a
        href="/"
        className={css`
          text-decoration: none;
        `}
      >
        <h1
          className={css`
            text-align: center;
            margin: 0;
            font-weight: 900;
            font-size: 2.5rem;
            color: ${"white"};
            font-family: ${"Poppins"};
            ${mobile} {
              font-size: 1.5rem;
            }
          `}
        >
          DAILY BRUIN
          <span
            className={css`
              font-size: 2rem;
              ${mobile} {
                font-size: 1.2rem;
              }
            `}
          >
            {" "}
            x{" "}
          </span>
          DAILY TROJAN
        </h1>
      </a>
      <hr
        className={css`
          color: ${"white"};
          height: 5;
          width: 600px;
          ${mobile} {
            width: 80%;
          }
          margin: 0 auto;
        `}
      />
      <div
        className={css`
          margin-top: 10px;
        `}
      >
        <nav
          className={css`
            display: flex;
            justify-content: center;
            -ms-flex-pack: distribute;
            margin-top: 2px;
            font-size: 18px;
            a {
              color: white;
              text-decoration: none;
              padding: 0em 0.8em;
              &:hover {
                text-decoration: underline;
              }
            }
          `}
        >
          <a href={`/#poll`}>Poll</a>
          <a href={`/#timeline`}>Timeline</a>
          <a href={`/#stories`}>Stories</a>
        </nav>
        {/* {clickables &&
          clickables.map(paper => (
            <nav
              className={css`
                display: flex;
                justify-content: center;
                -ms-flex-pack: distribute;
                margin-top: 2px;
                font-size: 18px;
                a {
                  color: white;
                  text-decoration: none;
                  padding: 0em 0.8em;
                  &:hover {
                    text-decoration: underline;
                  }
                }
                div {
                  color: ${paper.name == "Daily Bruin"
                    ? colors.blue
                    : colors.red};
                  text-decoration: none;
                  padding: 0em 1.2em;
                }
              `}
            >
              <div>{paper.name}:</div>
              {paper.sections.map(section => (
                <a
                  key={section}
                  href={`#${slugify(paper.name + " " + section)}`}
                >
                  {section}
                </a>
              ))}
            </nav>
          ))} */}
      </div>
    </div>
  );
}
