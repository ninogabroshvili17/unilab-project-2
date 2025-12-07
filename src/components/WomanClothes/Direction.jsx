import React from "react";
import arrowRight from "../../assets/icons/arrowRight.svg";

const Direction = () => {
  return (
    <div className="font-Lato px-5">
      <div className="max-w-[1440px] mx-auto flex items-center gap-2 text-sm text-[#555555] h-24 pt-6">
        <span>Homepage</span>
        <img src={arrowRight} alt="arrow right" className="w-[9px] h-2" />
        <span>Women</span>
        <img src={arrowRight} alt="arrow right" className="w-[9px] h-2" />
        <span>Clothes</span>
      </div>
    </div>
  );
};

export default Direction;

// - i statically wrote direction which i know is not right way to approach it,
// because it should go accordingto the page you click and update not by directly writing it.
