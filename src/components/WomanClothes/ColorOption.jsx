import React from "react";
import whiteCheck from "../../assets/icons/whiteCheck.svg";
import grayCheck from "../../assets/icons/grayCheck.svg"; // <- import your gray check

const ColorCircle = ({ color, selected, onSelect }) => {
  const isWhite =
    color.toLowerCase() === "#ffffff" || color.toLowerCase() === "white";

  return (
    <div
      onClick={() => onSelect(color)}
      className={`
        relative w-[25px] h-[25px] rounded-full cursor-pointer flex items-center justify-center
        ${isWhite ? "border border-[#D9D9D9] bg-white" : ""}
      `}
      style={{
        backgroundColor: isWhite ? "white" : color,
      }}
    >
      {selected && (
        <img
          src={isWhite ? grayCheck : whiteCheck}
          alt="check"
          className="w-3 h-3 pointer-events-none"
        />
      )}
    </div>
  );
};

export default ColorCircle;
