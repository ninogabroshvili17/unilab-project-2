// src/components/ProductCard.jsx
import { useState } from "react";
import star from "../assets/icons/star.svg";
import emptyStar from "../assets/icons/emptyStar.svg";
import blackFavorites from "../assets/icons/blackFavorites.svg";
import redFavorites from "../assets/icons/redFavorites.svg";

const ProductCard = ({ item }) => {
  const [favorite, setFavorite] = useState(false);

  return (
    <div className="rounded-xl shadow-[0_0_12px_0_rgba(0,0,0,0.1)] bg-white">
      {/* IMAGE */}
      <img
        src={item.image}
        alt={item.title}
        className="cursor-pointer rounded-t-xl"
      />

      <div className="p-5 flex flex-col gap-3">
        {/* TOP ROW */}
        <div className="flex justify-between items-center">
          <div>
            <h6 className="text-sm text-[#262626] font-bold mb-1">
              {item.brand}
            </h6>
            <p className="text-[10px] text-[#555555]">{item.title}</p>
          </div>

          {/* HEART */}
          <img
            src={favorite ? redFavorites : blackFavorites}
            onClick={() => setFavorite(!favorite)}
            alt="favorite"
            className="cursor-pointer w-5 h-[18px]"
          />
        </div>

        {/* RATING */}
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((num) => (
            <img
              key={num}
              src={num <= item.rating ? star : emptyStar}
              alt="star"
              className="w-6 h-6"
            />
          ))}

          <span className="text-xs text-[#555555] ml-3">
            ({item.reviews})
          </span>
        </div>

        {/* PRICE */}
        <div className="flex items-center gap-3">
          <p className="text-[#FF2E00] text-sm font-extrabold">
            ${item.price}
          </p>
          <p className="text-[#9D9D9D] line-through text-sm">
            ${item.oldPrice}
          </p>
          <p className="text-[#FF2E00] text-xs">{item.discount}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
