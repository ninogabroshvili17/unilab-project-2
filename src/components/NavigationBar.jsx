// src/components/NavigationBar.jsx
import React, { useState } from "react";
import { megaMenu } from "../data/megaMenuData";
import WomanMegaMenu from "./WomanMegaMenu";

const navItems = [
  "Woman",
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

const NavigationBar = () => {
  const [activeItem, setActiveItem] = useState(null); // "Woman" | null

  return (
    <nav
      className="font-Lato h-20 px-5 bg-white relative"
      onMouseLeave={() => setActiveItem(null)}
    >
      <ul className="max-w-[1440px] mx-auto h-full flex text-sm justify-between items-end pb-4">
        {navItems.map((item) => (
          <li
            key={item}
            className={`cursor-pointer text-sm text-[#555555] pb-2 
              ${activeItem === item ? "text-[#FF7A00]" : ""}`}
            onMouseEnter={() => {
              if (item === "Woman") {
                setActiveItem("Woman");
              } else {
                setActiveItem(null);
              }
            }}
          >
            {item}
          </li>
        ))}
      </ul>

      {/* DROPDOWN: only render when Woman is active */}
      {activeItem === "Woman" && (
        <div className="absolute left-1/12 top-full w-full z-20">
          <WomanMegaMenu data={megaMenu.Woman} />
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
