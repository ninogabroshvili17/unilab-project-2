import React from "react";
import Filter from "./Filter.jsx";

const WomenClothesMain = () => {
  return (
    <div className="font-Lato px-5">
      <section className="max-w-[1440px] mx-auto grid grid-cols-[263px_1fr]">
        <div className="bg-red-300">
          <Filter />
        </div>
        <div className="bg-blue-300">Right (fills rest)</div>
      </section>
    </div>
  );
};

export default WomenClothesMain;
