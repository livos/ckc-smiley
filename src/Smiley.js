import React from "react";

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 20;
const eyeOffsetX = 90;
const eyeOffsetY = 100;
const eyeRadius = 40;

const Smiley = () => {
  return (
    <>
      <div>
        <svg width={width} height={height}>
          <circle
            cx={centerX}
            cy={centerY}
            r={centerY - strokeWidth / 2}
            fill="yellow"
            stroke="black"
            strokeWidth={strokeWidth}
          ></circle>
          <circle
            cx={centerX - eyeOffsetX}
            cy={centerY - eyeOffsetY}
            r={eyeRadius}
          />
          <circle
            cx={centerX + eyeOffsetX}
            cy={centerY - eyeOffsetY}
            r={eyeRadius}
          />
        </svg>
      </div>
    </>
  );
};

export default Smiley;
