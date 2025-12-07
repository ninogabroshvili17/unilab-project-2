import React from "react";
import Header from "../components/Header.jsx";
import HeaderBottom from "../components/HeaderBottom.jsx";
import Direction from "../components/WomanClothes/Direction.jsx";
import WomenSort from "../components/WomanClothes/WomenSort.jsx";
import WomenClothesMain from "../components/WomanClothes/WomenClothesMain.jsx";
import Footer from "../components/Footer.jsx";

const WomenClothes = () => {
  return (
    <>
      <Header />
      <HeaderBottom />
      <Direction />
      <WomenSort />
      <WomenClothesMain />
      <Footer showNewsletter={false} />
    </>
  );
};

export default WomenClothes;
