import React from "react";

const DiscIcon = ({ disc }) => {
  return (
    <div
      className="disc-icon"
      style={{
        gridArea: `${disc.speed[0]} / ${
          (disc.speed[2] + disc.speed[3]) * 2 + 11
        } / ${disc.speed[0] + 1}  / ${
          (disc.speed[2] + disc.speed[3]) * 2 + 12
        }`,
      }}
    ></div>
  );
};

export default DiscIcon;
