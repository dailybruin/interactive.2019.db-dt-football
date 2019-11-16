import React from "react";
import Bar from "../Bar/Bar";
import { css } from "emotion";

const temp_data = [
  {
    Question: "What school do you go to?",
    Num: 1,
    LA_Yes: 100,
    LA_No: 80,
    SC_Yes: 70,
    SC_No: 30
  },
  {
    Question: "What school do you go to?",
    SC_Yes: 100,
    Num: 2,
    SC_No: 80,
    LA_Yes: 70,
    LA_No: 30
  }
];

class BarGraph extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const rows = temp_data.map(temp_data => (
      <div
        className={css`
          display: flex;
          margin: 10px;
        `}
      >
        <Bar
          numResponses={temp_data.LA_No + temp_data.LA_Yes}
          numYes={temp_data.LA_Yes}
          isUCLA="true"
        />
        <span
          className={css`
            margin-left: 10px;
            margin-right: 10px;
          `}
        >
          {temp_data.Num}
        </span>
        <Bar
          numResponses={temp_data.SC_No + temp_data.SC_Yes}
          numYes={temp_data.SC_Yes}
          isUCLA="false"
        />
      </div>
    ));
    return (
      <div
        className={css`
          width: 70%;
          margin: auto;
        `}
      >
        {rows}
      </div>
    );
  }
}
export default BarGraph;
