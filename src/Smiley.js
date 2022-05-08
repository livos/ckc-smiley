import React from "react";
import { arc } from "d3";

console.log(arc);

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 20;
const eyeOffsetX = 90;
const eyeOffsetY = 100;
const eyeRadius = 40;
const mouthWidth = 20;
const mouthRadius = 140;

const mouthArc = arc()
  .innerRadius(mouthRadius)
  .outerRadius(mouthRadius + mouthWidth)
  .startAngle(Math.PI / 2)
  .endAngle((Math.PI * 3) / 2);

const Smiley = () => {
  return (
    <>
      <div>
        <svg width={width} height={height}>
          <g transform={`translate(${centerX}, ${centerY})`}>
            <circle
              r={centerY - strokeWidth / 2}
              fill="yellow"
              stroke="black"
              strokeWidth={strokeWidth}
            ></circle>
            <circle cx={-eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} />
            <circle cx={eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} />
            <path d={mouthArc()} />
          </g>
        </svg>
      </div>
    </>
  );
  console.log(mouthArc());
};

export default Smiley;
