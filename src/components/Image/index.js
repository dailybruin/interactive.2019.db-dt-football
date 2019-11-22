import * as React from "react";
import { css } from "emotion";

export default function Image(style, url, alt, caption, credit) {
  if (!alt) {
    throw new Error("Image requires a meaningful `alt` value.");
  }
  return (
    <figure className={style}>
      <img
        className={css`
          width: 100%;
          margin-bottom: 0;
        `}
        src={url}
        alt={alt}
      />
      <figcaption>
        {props.caption} ({credit})
      </figcaption>
    </figure>
  );
}
