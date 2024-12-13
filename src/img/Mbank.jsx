import React from "react";

export default function Mbank() {
  return (
    <>
      <svg
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          y="0.5"
          width="20"
          height="20"
          rx="2"
          fill="url(#pattern0_2033_11269)"
        />
        <defs>
          <pattern
            id="pattern0_2033_11269"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              href="#image0_2033_11269" // изменено с xlink:href на href
              transform="scale(0.00195312)"
            />
          </pattern>
          <image id="image0_2033_11269" width="512" height="512" />
        </defs>
      </svg>
    </>
  );
}
