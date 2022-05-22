import { NextPage } from "next";
import * as React from "react";
import { PipeBodyProps } from "./types";
import Color from "color";

const PipeBody: NextPage<PipeBodyProps> = ({ accent }) => {
  const MAIN_COLOR: Color = Color(accent);
  const SECONDARY_COLOR: Color = Color(accent).lighten(0.1);
  const TERTIARY_COLOR: Color = Color(accent).lighten(1);

  return (
    <svg width={50} height={68} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 13H0v30h30V13H18z"
        fill={TERTIARY_COLOR.toString()}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 43H0v12h30V43H6z"
        fill={SECONDARY_COLOR.toString()}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 55h30v13H0V55zM0 0h30v6H0V0z"
        fill={MAIN_COLOR.toString()}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 6h30v7H0V6z"
        fill={SECONDARY_COLOR.toString()}
      />
    </svg>
  );
};

export default PipeBody;
