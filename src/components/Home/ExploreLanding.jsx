import React from "react";
import explore1 from "../../assets/images/explore1.svg";
import explore2 from "../../assets/images/explore2.svg";

const ExploreLanding = () => {
  return (
    <div className="font-Lato px-5">
      <div className="max-w-[1440px] mx-auto grid grid-cols-2 pb-[68px] text-white gap-5">
        <div className="grid grid-cols-2">
          <div className="w-full bg-[#BF2E3B] px-5 flex flex-col justify-center">
            <h2 className="text-[36px] font-extrabold mb-4">
              Never-Ending Summer
            </h2>
            <h4 className="text-[28px] mb-[31px]">
              Throwback Shirts & all-day dressed
            </h4>
            <p className="text-[20px] underline cursor-pointer">
              Exlopre all category
            </p>
          </div>
          <img
            src={explore1}
            alt="dress"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="grid grid-cols-2">
          <div className="w-full bg-[#1D5159] px-5 flex flex-col justify-center">
            <h2 className="text-[36px] font-extrabold mb-4">
              The most famous sport brands
            </h2>
            <h4 className="text-[28px] mb-[31px]">Get in gym essentials</h4>
            <p className="text-[20px] underline cursor-pointer">
              Exlopre all category
            </p>
          </div>
          <img
            src={explore2}
            alt="gym"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ExploreLanding;

// i could have taken these epxlore card as seperate components as well 