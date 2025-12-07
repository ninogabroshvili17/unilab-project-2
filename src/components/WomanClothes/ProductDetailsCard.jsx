import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Direction from "./Direction";
import like from "../../assets/icons/like.svg";
import basket from "../../assets/icons/basket.svg";
import dropdown from "../../assets/icons/dropDownBlack.svg";
import Minus from "../../assets/icons/Minus.svg";
import Plus from "../../assets/icons/Plus.svg";
import add from "../../assets/icons/add.svg";

const ProductDetailsCard = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    axios
      .get(`https://692d8146e5f67cd80a4bc726.mockapi.io/luminae/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) return <p className="p-10">Loading...</p>;

  return (
    <>
      <Direction brand={product.brand} />

      <div className="font-Lato px-5">
        <div className="max-w-[1440px] mx-auto grid grid-cols-[630px_1fr] gap-[60px] pb-10">
          <img
            src={product.image}
            alt={product.title}
            className="rounded-xl h-[661px] w-[630px] object-cover"
          />

          {/* info*/}
          <div className="py-[58px]">
            <div className="flex justify-between mb-8 items-center">
              <div>
                <h1 className="text-[22px] font-extrabold text-[#262626] mb-2 uppercase">
                  {product.title}
                </h1>
                <p className="text-[20px] font-medium text-[#262626]">
                  ${product.price}
                </p>
              </div>
              <img src={like} alt="like" className="cursor-pointer w-10 h-10" />
            </div>

            {/* size*/}
            <div className="mb-5 grid grid-cols-[63px_1fr] gap-4">
              <p className="text-[#262626]">Size</p>
              <div className="flex flex-col">
                <div className="flex gap-3 text-[#9D9D9D] text-sm font-bold">
                  {["XS", "S", "M", "L", "XL"].map((s) => (
                    <span
                      key={s}
                      className="px-4 py-2 border border-[#C4C4C4] rounded text-sm cursor-pointer hover:text-[#555555] hover:border-[#7B7B7B]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-[#FF7A00] mt-2 cursor-pointer">
                  Size guideline
                </p>
              </div>
            </div>

            {/* COLOR */}
            <div className="mb-5 grid grid-cols-[63px_1fr] gap-4">
              <p className="text-[#262626]">Color</p>
              <div className="flex gap-3 items-center">
                {["#434343", "#00A95D", "#A2D2FC", "#FF7A00"].map((c) => (
                  <span
                    key={c}
                    className="w-[13px] h-[13px] rounded-full cursor-pointer"
                    style={{ backgroundColor: c }}
                  ></span>
                ))}
              </div>
            </div>

            {/* SHIPPING */}
            <div className="mb-5 grid grid-cols-[63px_1fr] gap-4 items-center">
              <p className=" text-[#262626]">Shipping</p>
              <div>
                <p className="text-sm text-[#262626] font-medium flex items-center gap-1">
                  Free Shipping to Victoria territory
                  <img
                    src={dropdown}
                    alt="dropdown"
                    className="w-[9px] h-[5px]"
                  />
                </p>
                <p className="text-xs text-[#9D9D9D]">
                  Delivery Time: 14-17 days
                </p>
              </div>
            </div>

            {/* QUANTITY */}
            <div className="mb-8 grid grid-cols-[63px_1fr] gap-4 items-center">
              <p className="text-[#262626]">Quantity</p>

              <div className="flex items-center gap-4">
                <div className="flex items-center border border-[#C4C4C4] rounded px-3 py-2 gap-4">
                  <button
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                    className="text-xl text-[#C4C4C4] cursor-pointer w-5 h-5"
                  >
                    <img src={Minus} alt="Minus" />
                  </button>

                  <span>{quantity}</span>

                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-xl text-[#C4C4C4] cursor-pointer w-5 h-5"
                  >
                    <img src={Plus} alt="Plus" />
                  </button>
                </div>

                <p className="text-sm font-bold text-[#555555]">
                  50 available / 104 sold
                </p>
              </div>
            </div>

            {/* PRICE BOX */}
            <div className="mb-8 bg-[#E9E9E9] rounded px-6 py-3 h-[91px]">
              <p className="font-extrabold text-[18px] border-b border-[#C4C4C4] pb-2">
                ${(product.price * quantity).toFixed(2)}
              </p>

              <div className="mt-2 flex items-center gap-[5px]">
                <img src={add} alt="add" />
                <p className="text-xs text-[#555] font-bold leading-4">
                  Add shipping insurance for $9
                  <span className="text-[10px]">
                    (declared value only if package gets lost, stolen or
                    damaged.)
                  </span>
                </p>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="grid grid-cols-2 gap-5">
              <button className="bg-[#4172DC] text-white text-sm font-medium text-center py-[18px] h-14 rounded-md cursor-pointer">
                SHOP NOW
              </button>

              <button className="flex items-center justify-center text-[#555555] gap-2 px-10 py-3 h-14 border border-[#434343] rounded-md cursor-pointer">
                <img src={basket} alt="basket" className="w-5" />
                ADD TO BASKET
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsCard;
