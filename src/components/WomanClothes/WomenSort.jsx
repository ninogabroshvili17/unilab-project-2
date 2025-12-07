import React from "react";
import dropdownGray from "../../assets/icons/dropDownGray.svg";

const WomenSort = () => {
  return (
    <div className="font-Lato px-5 bg-[#E9E9E9] h-[89px]">
      <div className="max-w-[1440px] h-full mx-auto flex justify-between items-center">
        <div className="flex gap-8 items-center">
          <h5 className="text-xl text-[#262626] font-bold">Women</h5>
          <span className="text-[#555555] ">110 items</span>
        </div>
        <button className="flex border p-2.5 gap-2 items-center cursor-pointer rounded border-[#7B7B7B] text-[#7B7B7B] text-sm">
          <span>Sort by order</span>
          <img src={dropdownGray} alt="dropdownGray" />
        </button>
      </div>
    </div>
  );
};

export default WomenSort;
