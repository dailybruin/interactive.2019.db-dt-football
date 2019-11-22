import * as React from "react";
import { css } from "emotion";
import Image from "../Image";
import Magnifier from "react-magnifier";
import { mobile } from "../Shared/mediaQueries";

/** A footer to go at the bottom of every page. */
export class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fetch_data: null };
  }
  componentDidMount() {
    fetch(
      "https://kerckhoff.dailybruin.com/api/packages/flatpages/interactive.2019.db-dt-football/"
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          fetch_data: data.data["data.aml"]
        });
      });
  }

  render() {
    const renderedContent =
      this.state.fetch_data &&
      this.state.fetch_data.article.map((content, i) => {
        switch (content.type) {
          case "text":
            const text = content;
            if (i == 0) {
              return (
                <p
                  className={css`
                    font-style: italic;
                  `}
                  key={i}
                  dangerouslySetInnerHTML={{
                    __html: text.value
                  }}
                />
              );
            }
            return (
              <p
                key={i}
                dangerouslySetInnerHTML={{
                  __html: text.value
                }}
              />
            );
          case "image":
            const image = JSON.parse(content.value);
            return <Image key={i} {...image} />;
          case "line":
            return <hr />;
          case "subheading":
            return (
              <h3
                key={i}
                dangerouslySetInnerHTML={{
                  __html: content.value.text
                }}
              />
            );
          default:
            if (
              this.props.customTypeComponentMapping &&
              Object.keys(this.props.customTypeComponentMapping).includes(
                content.type
              )
            ) {
              const Component = this.props.customTypeComponentMapping[
                content.type
              ];
              const data = JSON.parse(content.value);
              return <Component key={i} {...data} />;
            }
            break;
        }
      });

    return (
      <>
        <div
          className={css`
            padding: 0 30%;
            background-image: url("https://i.imgur.com/rrrzmbj.jpg");
            ${mobile} {
              padding: 0;
            }
          `}
        >
          <Magnifier
            src="https://i.imgur.com/SxFdp3Y.jpg"
            width={"100%"}
            mgShape="square"
            zoomFactor={1.5}
            mgWidth={300}
            mgHeight={300}
          />
        </div>

        <div
          className={css`
            padding: 40px 15%;
            padding-bottom: 10px;
            ${mobile} {
              padding: 10px;
            }
          `}
        >
          <div
            className={css`
              font-size: 40px;
              font-weight: bold;
            `}
          >
            Crosstown Crossover: The 2019 All-Los Angeles Team
          </div>
          <div
            className={css`
              font-size: 20px;
            `}
          >
            By Sam Connon and Aiden Berg
          </div>
        </div>

        <article
          className={css`
            margin-left: auto;
            margin-right: auto;
            max-width: 620px;
            padding: 1rem;
            font-size: 18px;
            ${mobile} {
              font-size: 16px;
            }
            ${this.props.style};
          `}
        >
          {renderedContent}
        </article>
      </>
    );
  }
}
