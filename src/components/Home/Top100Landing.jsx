import axios from "axios";
import React, { useEffect, useState } from "react";
import arrowRight from "../../assets/icons/arrowRight.svg";
import ProductCard from "../Productcard.jsx";

const Top100Landing = () => {
  const [top100, setTop100] = useState([]);

  useEffect(() => {
    axios
      .get("https://692d8146e5f67cd80a4bc726.mockapi.io/luminae/products")
      .then((res) => {
        const filtered = res.data.filter((item) => item.section === "top100");
        setTop100(filtered);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="font-Lato px-5 py-[68px]">
      <div className="max-w-[1440px] mx-auto">
        {/* HEADER */}
        <div className="flex justify-between mb-12">
          <h2 className="font-medium text-[28px]">Top100</h2>
          <span className="flex gap-1.5 items-center cursor-pointer">
            View all
            <img src={arrowRight} alt="arrow right" />
          </span>
        </div>

        {/* GRID */}
        <section className="grid grid-cols-4 gap-5">
          {top100.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </section>
      </div>
    </section>
  );
};

export default Top100Landing;
