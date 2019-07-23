import React from "react";

const CenterGuide = () => {
  return (
    <div className="center">
      <div className="center__line center__line--one-quarter center__line--horizontal"></div>
      <div className="center__line center__line--one-quarter center__line--vertical"></div>
      <div className="center__line center__line--half center__line--horizontal"></div>
      <div className="center__line center__line--half center__line--vertical"></div>
      <div className="center__line center__line--three-quarter center__line--horizontal"></div>
      <div className="center__line center__line--three-quarter center__line--vertical"></div>
    </div>
  );
}

export default CenterGuide;
