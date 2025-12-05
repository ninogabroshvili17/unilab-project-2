import React from "react";
import slideLeft from "../assets/icons/slideLeft.svg";
import slideright from "../assets/icons/slideright.svg";
import phones from "../assets/images/phones.svg";

const Magsafe = () => {
  return (
    <div className="font-Lato px-5 bg-[#F7DDD0] h-[221px] mb-[68px]">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <img src={slideLeft} alt="arrow left" className="cursor-pointer" />
        <section className="flex items-center">
          <div className="max-w-[493px] mr-[70px]">
            <h4 className="text-2xl text-[#465D6B] font-bold uppercase mb-4">
              MagSafe
            </h4>
            <p className="text-[#555555] text-xl font-medium">
              Snap on a magnetic case, wallet, or both. And get faster wireless
              charging.
            </p>
          </div>
          <img src={phones} alt="phones" className="w-[493px] h-[221px]" />
        </section>
        <img src={slideright} alt="arrow left" className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Magsafe;
