import React from "react";
import Header from "../components/Header.jsx";
import HeaderBottom from "../components/HeaderBottom.jsx";
import ProductDetailsCard from "../components/WomanClothes/ProductDetailsCard.jsx";
import ProductDescription from "../components/WomanClothes/ProductDescription.jsx";

const ProductDetails = () => {
  return (
    <>
      <Header />
      <HeaderBottom />
      <ProductDetailsCard />
      <ProductDescription />
    </>
  );
};

export default ProductDetails;
