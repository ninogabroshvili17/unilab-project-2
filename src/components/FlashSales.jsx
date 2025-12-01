import React, { useState, useEffect } from "react";
import axios from "axios";
// import React from "react";
import arrowRight from "../assets/icons/arrowRight.svg";
import star from "../assets/icons/star.svg";

const FlashSales = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://692d8146e5f67cd80a4bc726.mockapi.io/luminae/products")
      .then((res) => {
        const flashItems = res.data.filter(
          (item) => item.section === "flash-sale"
        );
        setProducts(flashItems);
      })
      .catch((err) => console.log(err));
  }, []);

  const getTimeLeft = (endTime) => {
    const end = new Date(endTime);
    const now = new Date();
    const diff = end - now;

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    return { hours, mins, secs };
  };

  return (
    <section className="font-Lato px-5">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-between pt-[84px] pb-12 ">
          <h2 className="font-medium text-[28px]">Flash Sales</h2>
          <p className="flex items-center text-xs gap-1.5 cursor-pointer">
            View all
            <img src={arrowRight} alt="arrow right" className="w-[3px] h-1.5" />
          </p>
        </div>

        <div className="grid grid-cols-4 gap-5 pb-[68px]">
          {products.map((item) => {
            const timeLeft = getTimeLeft(item.endTime);
            return (
              <div
                key={item.id}
                className="py-4 px-[29px] flex flex-col items-center cursor-pointer rounded-xl shadow-[0_0_12px_0_rgba(0,0,0,0.1)]"
              >
                <h4 className="text-[#9D9D9D] font-extrabold mb-[5px]">
                  Deal of the Day
                </h4>

                {/* timer */}
                <div className="flex items-center gap-3 mb-[17px]">
                  <div className="text-center">
                    <p className="font-bold text-lg">{timeLeft.hours}</p>
                    <p className="text-xs">hour</p>
                  </div>
                  :
                  <div className="text-center">
                    <p className="font-bold text-lg">{timeLeft.mins}</p>
                    <p className="text-xs">min</p>
                  </div>
                  :
                  <div className="text-center">
                    <p className="font-bold text-lg">{timeLeft.secs}</p>
                    <p className="text-xs">sec</p>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 items-center ">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-36 object-contain mb-8 max-h-[162px] max-w-[300px]"
                  />
                  <div className="flex flex-col gap-1.5">
                    <h2 className="text-[#262626] font-extrabold">
                      {item.brand}
                    </h2>
                    <p className="text-[#555555] text-xs">{item.title}</p>

                    <div className="flex">
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <span className="ml-1">({item.reviews})</span>
                    </div>

                    <div className="flex gap-4 items-center">
                      <p className="text-[#FF2E00] text-sm font-bold">
                        ${item.price}
                      </p>
                      <p className="text-[#555555] text-xs">${item.oldPrice}</p>
                      <p className="text-[8px] bg-[#FF2E00] py-[3px] px-[4.5px] text-[#ffffff] font-semibold">
                        {item.discount}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FlashSales;
