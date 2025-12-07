import React from "react";
import Header from "../components/Header.jsx";
import HeaderBottom from "../components/HeaderBottom.jsx";
import CartMain from "../components/Cart/CartMain";
import Footer from "../components/Footer.jsx";

const CartPage = () => {
  return (
    <>
      <Header />
      <HeaderBottom />
      <CartMain />
      <Footer showNewsletter={false} />
    </>
  );
};

export default CartPage;
