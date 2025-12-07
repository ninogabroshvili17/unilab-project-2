import React from "react";
import Header from "../components/Header.jsx";
import HeaderBottom from "../components/HeaderBottom.jsx";
import NavigationBar from "../components/Home/NavigationBar.jsx";
import HeroBanner from "../components/Home/HeroBanner.jsx";
import FlashSales from "../components/Home/FlashSales.jsx";
import Trending from "../components/Home/Trending.jsx";
import Top100Landing from "../components/Home/Top100Landing.jsx";
import ExploreLanding from "../components/Home/ExploreLanding.jsx";
import Magsafe from "../components/Home/Magsafe.jsx";
import ExploreLandingPt2 from "../components/Home/ExploreLandingPt2.jsx";
import Footer from "../components/Footer.jsx";

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
      <ExploreLandingPt2 />
      <Footer />
    </>
  );
};

export default Home;
