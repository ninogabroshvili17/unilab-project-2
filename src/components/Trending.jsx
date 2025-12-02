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
        <div className="max-w-[1440px] mx-auto grid grid-cols-3">
          {trending.map((item) => {
            return (
              <div key={item.id}>
                <img src={item.image} alt="trending" />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Trending;
