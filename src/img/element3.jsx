import React from "react";

export default function Element3({ pages }) {
  return (
    <>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.3333 7.09996V3.31663C18.3333 2.14163 17.8 1.66663 16.475 1.66663H13.1083C11.7833 1.66663 11.25 2.14163 11.25 3.31663V7.09163C11.25 8.27496 11.7833 8.74163 13.1083 8.74163H16.475C17.8 8.74996 18.3333 8.27496 18.3333 7.09996Z"
          stroke={pages === "home" ? "#000" : "white"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.3333 16.475V13.1083C18.3333 11.7833 17.8 11.25 16.475 11.25H13.1083C11.7833 11.25 11.25 11.7833 11.25 13.1083V16.475C11.25 17.8 11.7833 18.3333 13.1083 18.3333H16.475C17.8 18.3333 18.3333 17.8 18.3333 16.475Z"
          stroke={pages === "home" ? "#000" : "white"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.74999 7.09996V3.31663C8.74999 2.14163 8.21666 1.66663 6.89166 1.66663H3.52499C2.19999 1.66663 1.66666 2.14163 1.66666 3.31663V7.09163C1.66666 8.27496 2.19999 8.74163 3.52499 8.74163H6.89166C8.21666 8.74996 8.74999 8.27496 8.74999 7.09996Z"
          stroke={pages === "home" ? "#000" : "white"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.74999 16.475V13.1083C8.74999 11.7833 8.21666 11.25 6.89166 11.25H3.52499C2.19999 11.25 1.66666 11.7833 1.66666 13.1083V16.475C1.66666 17.8 2.19999 18.3333 3.52499 18.3333H6.89166C8.21666 18.3333 8.74999 17.8 8.74999 16.475Z"
          stroke={pages === "home" ? "#000" : "white"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
}
