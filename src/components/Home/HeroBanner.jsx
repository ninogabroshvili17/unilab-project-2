import React from "react";
import bannerLeftImg from "../../assets/images/bannerLeftImg.svg";
import shopNow from "../../assets/icons/shopNow.svg";

const HeroBanner = () => {
  return (
    // <section className="w-full grid grid-cols-[auto,1fr] h-[460px]">
    //   <img src={bannerLeftImg} alt="girls" className="h-full w-[547px] object-cover" />
    //   <div className="bg-[#4172DC] w-full h-full"></div>
    // </section>

    <section className="font-Lato relative">
      <div className="grid grid-cols-[auto_1fr] h-[460]">
        <img src={bannerLeftImg} alt="girls" className="h-full" />

        <div className="bg-[#6fa4ea] text-[#ffffff] flex flex-col justify-center items-center gap-8">
          <h2 className="text-[32px] font-bold uppercase">
            Kimonos, Caftans & Pareos
          </h2>
          <h3 className="text-[28px] font-medium ">
            Poolside glam included From $4.99
          </h3>
          <button className="bg-[#4172DC] flex px-[66px] py-4 gap-2 items-center rounded-md cursor-pointer">
            <img src={shopNow} alt="shop icon" className="w-6" />
            <span className="text-sm uppercase font-medium">Shop Now</span>
          </button>
        </div>
      </div>

      <div className="w-[228px] absolute top-1/2 -translate-y-1/2 left-[547px] -translate-x-1/2">
        <div className="bg-[#ffffff] text-xl font-bold flex flex-col items-center py-9">
          <p className="text-[#262626]">Summer Essentials</p>
          <p className="text-[#FF2E00]">20% off</p>
        </div>
        <div className="bg-[#262626] text-[#ffffff] py-2.5 text-sm text-center">
          <p>19 Jul-30 Jul</p>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
