import React from "react";
import explore3 from "../assets/images/explore3.svg";
import explore4 from "../assets/images/explore4.svg";

const ExploreLanding = () => {
  return (
    <div className="font-Lato px-5">
      <div className="max-w-[1440px] mx-auto grid grid-cols-2 text-white gap-5">
        <div className="grid grid-cols-2">
          <div className="w-full bg-[#D11FB5] px-5 flex flex-col justify-center">
            <h2 className="text-[36px] font-extrabold mb-4">
              The Pinky Barbie Edition
            </h2>
            <h4 className="text-[28px] mb-[31px]">Lets play dress up</h4>
            <p className="text-[20px] underline cursor-pointer">
              Exlopre all category
            </p>
          </div>
          <img
            src={explore3}
            alt="dress"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="grid grid-cols-2">
          <div className="w-full bg-[#0186C4] px-5 flex flex-col justify-center">
            <h2 className="text-[36px] font-extrabold mb-4">
              Best Sellers Everyone Love
            </h2>
            <h4 className="text-[28px] mb-[31px]">poolside glam include</h4>
            <p className="text-[20px] underline cursor-pointer">
              Exlopre all category
            </p>
          </div>
          <img
            src={explore4}
            alt="gym"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ExploreLanding;
