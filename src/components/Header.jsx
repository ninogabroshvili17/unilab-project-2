import { useState } from "react";
import React from "react";

import logo from "../assets/icons/logo.svg";
import dropdown from "../assets/icons/dropdown.svg";
import search from "../assets/icons/search.svg";
import instagram from "../assets/icons/instagram.svg";
import facebook from "../assets/icons/facebook.svg";
import telegram from "../assets/icons/telegram.svg";

const categories = [
  "Women",
  "Male",
  "Mother-Child",
  "Home & Furniture",
  "Super market",
  "Cosmetics",
  "Shoe & Bag",
  "Electronic",
  "Sport & Outdoor",
  "Best seller",
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="font-Lato flex justify-between items-center mx-auto max-w-[1260px] h-24 py-3.5 px-5">
      <div className="flex items-center mr-7">
        <img src={logo} alt="logo" className="w-[49px] h-[33px] mr-1.5" />
        <h1 className="text-[32px] font-bold">Luminae</h1>
      </div>

      <div className="w-full max-w-[345px] relative">
        <div className="flex items-center border-2 border-[#D9D9D9] rounder-xl px-3 py-2.5">
          <input
            type="text"
            placeholder="Search Products"
            className="flex-1 outline-none border-none text-sm text placeholer-[#9D9D9D]"
          />

          <button
            onClick={() => setOpen(!open)}
            className="flex items-center text-sm text-[#262626] border-r border-[#D9D9D9] pr-3 mr-3"
          >
            <p>All categories</p>
            <img
              src={dropdown}
              alt="dropdown"
              className={`w-2.5 h-[5px] ml-2 transition-transform ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>

          <button>
            <img src={search} alt="search" className="w-[18px] h-[18px]" />
          </button>
        </div>

        {open && (
          <div className="absolute right-[60px] top-[58px] bg-white border border-gray-200 shadow-lg rounded-lg w-40px z-20">
            {categories.map((category) => (
              <div
                key="category"
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                onClick={() => setOpen(false)}
              >
                {category}
              </div>
            ))}
          </div>
        )}
      </div>

      <nav
        onClick={(e) => {
          if (e.target.tagName === "A") {
            e.preventDefault();
          }
        }}
      >
        <ul className="flex items-center gap-12 text-sm text-[##555555] pl-20">
          <li>
            <a href="/aboutus">About us</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/contactus">Contact us</a>
          </li>
          <li>
            <a href="/help&support">Help & support</a>
          </li>
        </ul>
      </nav>

      <nav
        onClick={(e) => {
          if (e.target.tagName === "IMG") {
            e.preventDefault();
          }
        }}
        className="flex items-center gap-3 ml-20"
      >
        <a href="/instagram">
          <img src={instagram} alt="instagram" />
        </a>
        <a href="/facebook">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="/telegram">
          <img src={telegram} alt="telegram" />
        </a>
      </nav>
    </header>
  );
};

export default Header;
