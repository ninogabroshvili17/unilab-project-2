import React from "react";
import Header from "../components/Header.jsx";
import HeaderBottom from "../components/HeaderBottom.jsx";
import NavigationBar from "../components/NavigationBar.jsx";
import HeroBanner from "../components/HeroBanner.jsx";

const Home = () => {
  return (
    <>
      <Header />
      <HeaderBottom />
      <NavigationBar />
      <HeroBanner />
    </>
  );
};

export default Home;
