import React from "react"
import BackgroundImage from "gatsby-background-image"

const HeroSection = ({ img, heroclass }) => {
  return (
    <BackgroundImage className={heroclass} fluid={img}>
      <h1 className="text-white font-dmsans md:text-center lg:text-5xl md:text-4xl text-3xl px-10 mb-6 mt-20 lg:mb-8 lg:mt-12 tracking-wide leading-tight">
        Organic Coffee & Teas,
        <br />
        100% Carytown Coffee Beans
      </h1>
      <div className="mb-16">
        <h4 className="text-white md:text-center font-thin md:text-lg lg:text-xl text-sm px-10 md:px-20 tracking-wide">
          Connecting with People through Coffee, Food, and Live Music.
        </h4>
      </div>
      <div className="flex space-x-10 md:space-x-12">
        <button className="bg-orange-300 py-2 px-4 text-xs lg:text-sm lg:py-3 lg:px-6 hover:bg-black hover:text-white focus:outline-none transition-all duration-300 ease-linear">
          View Our Menu
        </button>
        <button className="py-2 px-4 text-xs lg:text-sm lg:py-3 lg:px-6 text-white border border-white hover:bg-black hover:border-transparent focus:outline-none transition-all duration-300 ease-linear">
          More About Us
        </button>
      </div>
    </BackgroundImage>
  )
}

export default HeroSection
