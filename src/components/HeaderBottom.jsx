import { useState } from "react";
import React from "react";

import categories from "../assets/icons/categories.svg";
import dropdownWhite from "../assets/icons/dropdownWhite.svg";
import razors from "../assets/icons/razors.svg";
import signIn from "../assets/icons/signIn.svg";
import favorites from "../assets/icons/favorites.svg";
import card from "../assets/icons/card.svg";

const HeaderBottom = () => {
  const [openCourse, setOpenCourse] = useState(false);
  const [openLang, setOpenLang] = useState(false);

  return (
    <header className="bg-[#262626] h-[78px] font-Lato text-[#ffffff] px-5">
      <div className="max-w-[1260px] mx-auto h-full flex items-center align-center justify-between">
        <div className="flex items-center cursor-pointer">
          <img src={categories} alt="categories" />
          <h2 className="text-xl font-bold ml-1">Categories</h2>
        </div>

        <div
          className="flex items-center cursor-pointer"
          onClick={() => setOpenCourse(!openCourse)}
        >
          <p className="text-xs">USD</p>
          <img
            src={dropdownWhite}
            alt="dropdown"
            className={`w-2.5 h-[5px] ml-2 transition-transform ${
              openCourse ? "rotate-180" : ""
            }`}
          />
        </div>

        <div
          className="flex items-center cursor-pointer border-r border-[#7B7B7B] pr-[72px] h-4/5"
          onClick={() => setOpenLang(!openLang)}
        >
          <p className="text-xs">English</p>
          <img
            src={dropdownWhite}
            alt="dropdown"
            className={`w-2.5 h-[5px] ml-2 transition-transform ${
              openLang ? "rotate-180" : ""
            }`}
          />
        </div>

        <div className="flex items-center  border-r border-[#7B7B7B] pr-[72px] h-4/5">
          <img src={razors} alt="razors" />
          <div className="text-xs flex flex-col gap-0.5 ml-2.5">
            <p>Weekly Men's Toiletries Coupons.</p>
            <p className="text-[#C4C4C4]">
              We extend exclusive discounts to our male clientele
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center cursor-pointer">
            <img src={signIn} alt="sign in" />
            <span className="ml-1">Sign In</span>
          </div>
          <div className="flex items-center cursor-pointer">
            <img src={favorites} alt="favorites" />
            <span className="ml-1">Favorites</span>
          </div>
          <div className="flex items-center cursor-pointer">
            <img src={card} alt="card" />
            <span className="ml-1">Card</span>
          </div>

          <div className="bg-[#3DC47E] w-6 h-6 flex items-center justify-center rounded-full">
            3
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderBottom;
