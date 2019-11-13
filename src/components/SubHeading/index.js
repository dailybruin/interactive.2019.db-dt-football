import React from "react";
import { css } from "emotion";
import { colors } from "../Shared/colors";

export function SubHeading({text}) {
    return (
        <div
            className={css`
                margin-bottom: 1.2em;
            `}
        >
            {text}
        </div>
    );
}
