import React from "react";
import Filter from "./Filter.jsx";
import WomenProducts from "./WomenProducts.jsx";

const WomenClothesMain = () => {
  return (
    <div className="font-Lato px-5 pt-[53px]">
      <section className="max-w-[1440px] mx-auto grid grid-cols-[263px_1fr]">
        <div className="bg-red-300">
          <Filter />
        </div>
        <div className="bg-blue-300 pt-[27px] pl-[88px] pb-[75px]">
          <WomenProducts />
        </div>
      </section>
    </div>
  );
};

export default WomenClothesMain;
