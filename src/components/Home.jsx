import React from 'react'
import { useEffect } from "react";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";
import Section1 from "./Section1/Section1";
import HowItWorks from "./HowItWorks/HowItWorks";
import Gifting from "./Gifting/Gifting";
import PremiumGifts from "./PremiumGifts/PremiumGifts";
import AppStore from "./AppStore/AppStore";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import NavigateToTop from "./NavigateToTop/NavigateToTop";
import Loader from "./Loader/Loader";


function Home() {
        
  return (
    <>
    {/* <Loader /> */}
      <Navbar />
      <Hero />
      <Section1 />
      <HowItWorks />
      <Gifting />
      <PremiumGifts />
      <AppStore />
      <Blog />
      <Contact />
      <NavigateToTop/>
      <Footer />
    </>
  )
}

export default Home