import React from "react";
import Header from "../components/Header.jsx";
import HeaderBottom from "../components/HeaderBottom.jsx";
import NavigationBar from "../components/NavigationBar.jsx";
import HeroBanner from "../components/HeroBanner.jsx";
import FlashSales from "../components/FlashSales.jsx";
import Trending from "../components/Trending.jsx";
import Top100Landing from "../components/Top100Landing.jsx";
import ExploreLanding from "../components/ExploreLanding.jsx";
import Magsafe  from "../components/Magsafe.jsx"; 

const Home = () => {
  return (
    <>
      <Header />
      <HeaderBottom />
      <NavigationBar />
      <HeroBanner />
      <FlashSales />
      <Trending />
      <Top100Landing />
      <ExploreLanding />
      <Magsafe />
    </>
  );
};

export default Home;
