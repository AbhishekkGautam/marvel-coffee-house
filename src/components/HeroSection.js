import React from "react";
import BackgroundImage from "gatsby-background-image";
import { Link } from "gatsby";
const HeroSection = ({ img, heroclass }) => {
  return (
    <BackgroundImage className={heroclass} fluid={img} fadeIn="soft">
      <h1 className="text-white font-poppins text-center lg:text-5xl text-4xl px-4 md:px-10 mb-6 mt-20 lg:mb-8 lg:mt-12 tracking-wide leading-tight">
        Organic Coffee & Teas,
        <br className="hidden md:inline-block" /> 100% Carytown Coffee Beans
      </h1>
      <div className="mb-16">
        <h1 className="text-white text-center font-light lg:text-xl text-lg px-6 md:px-20 tracking-wider">
          Connecting with People through Coffee, Food, and Live Music.
        </h1>
      </div>
      <div className="flex space-x-10 md:space-x-12">
        <Link to="/menu">
          <button
            className="bg-orange-300 py-3 px-5 text-sm lg:py-3 lg:px-6 hover:bg-black hover:text-white focus:outline-none transition-all duration-300 ease-linear"
            aria-label="View Our Menu"
          >
            View Our Menu
          </button>
        </Link>
        <Link to="/about">
          <button
            className="py-3 px-5 text-sm lg:py-3 lg:px-6 text-white border border-white hover:bg-black hover:border-transparent focus:outline-none transition-all duration-300 ease-linear"
            aria-label="More About Us"
          >
            More About Us
          </button>
        </Link>
      </div>
    </BackgroundImage>
  );
};

export default HeroSection;
