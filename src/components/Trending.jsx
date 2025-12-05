import axios from "axios";
import React, { useState, useEffect } from "react";

const Trending = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    axios
      .get("https://692d8146e5f67cd80a4bc726.mockapi.io/luminae/products")
      .then((res) => {
        const trending = res.data.filter((item) => item.section === "trending");
        setTrending(trending);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <section className="font-Lato px-5">
        <div className="max-w-[1440px] mx-auto grid grid-cols-3 pb-20 gap-5">
          {trending.map((item) => {
            return (
              <div className="rounded-lg overflow-hidden" key={item.id}>
                <img
                  className="cursor-pointer"
                  src={item.image}
                  alt="trending"
                />
                <div className="bg-[#262626] text-white flex justify-between items-center px-5 py-4.5">
                  <div>
                    <h5 className="pb-[13px] font-bold cursor-pointer">
                      {item.title}
                    </h5>
                    <p className="text-sm text-[#C4C4C4] cursor-pointer">
                      {item.brand}
                    </p>
                  </div>
                  <button className="border border-white px-6 py-3 rounded-lg cursor-pointer">
                    ${item.price} Shop Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Trending;
