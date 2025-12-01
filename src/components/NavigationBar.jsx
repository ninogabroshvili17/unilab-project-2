import React from "react";

const navItems = [
  "Woman",
  "Male",
  "Mother-Child",
  "Home & Furniture",
  "Supermarket",
  "Cosmetics",
  "Shoe & Bag",
  "Electronic",
  "Sport & Outdoor",
  "Best seller",
];

const NavigationBar = () => {
  return (
    <nav className="font-Lato h-20 px-5">
      <ul className="max-w-[1440px] mx-auto h-full flex font-Lato text-white text-sm justify-between items-end pb-4">
        {navItems.map((item) => (
          <li key={item} className="cursor-pointer text-sm text-[#555555] ">
            {item}
          </li>
        ))}
        {/* #FF7A00 */}
      </ul>
    </nav>
  );
};

export default NavigationBar;
