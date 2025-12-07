import React, { useEffect, useState } from "react";
import axios from "axios";
import blackFavorites from "../../assets/icons/blackFavorites.svg";
import star from "../../assets/icons/star.svg";

const WomenProducts = () => {
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    axios
      .get("https://692d8146e5f67cd80a4bc726.mockapi.io/luminae/products")
      .then((res) => {
        const clothes = res.data.filter((item) => item.section === "women");
        setClothes(clothes);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="grid grid-cols-3 gap-5">
      {clothes.map((item) => {
        return (
          <div
            key={item.id}
            className="rounded-xl shadow-[0_0_12px_0_rgba(0,0,0,0.1)]"
          >
            <img src={item.image} alt="top100" className="cursor-pointer" />
            <div className="p-5 flex flex-col gap-3 bg-white">
              <div className="flex justify-between items-center">
                <div>
                  <h6 className="text-sm text-[#262626] font-bold mb-1">
                    {item.brand}
                  </h6>
                  <p className="text-[10px] text-[#555555]">{item.title}</p>
                </div>
                <img
                  src={blackFavorites}
                  alt="heart"
                  className="cursor-pointer w-5 h-[18px]"
                />
              </div>
              <div className="flex items-center">
                {[...Array(4)].map((_, index) => (
                  <img className="h-6 w-6" key={index} src={star} alt="star" />
                ))}
                <span className="text-xs text-[#555555] ml-3">
                  ({item.reviews})
                </span>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-[#FF2E00] text-sm font-extrabold">
                  ${item.price}
                </p>
                <p className="text-[#9D9D9D] text-sm">${item.oldPrice}</p>
                <p className="text-[#FF2E00] text-xs">{item.discount}</p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default WomenProducts;
