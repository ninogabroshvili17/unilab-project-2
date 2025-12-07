import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../Productcard.jsx";

const WomenProducts = () => {
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    axios
      .get("https://692d8146e5f67cd80a4bc726.mockapi.io/luminae/products")
      .then((res) => {
        const filtered = res.data.filter((i) => i.section === "women");
        setClothes(filtered);
      });
  }, []);

  return (
    <section className="grid grid-cols-3 gap-5">
      {clothes.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </section>
  );
};

export default WomenProducts;
