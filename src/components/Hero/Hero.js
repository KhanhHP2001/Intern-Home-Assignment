import React from "react";
import { FaSearch } from "react-icons/fa";
import { hero } from "../../data";

const Hero = () => {
  const { title, subtitle, buttonSearch } = hero;

  return (
    <section className="bg-hero bg-right bg-cover bg-no-repeat text-white pt-8 lg:pt-40 pb-20 lg:pb-96 relative mb-12">
      <div className="container mx-auto text-center">
        {/* title */}
        <h1 className=" mx-auto font-semibold mb-4 lg:text-7xl lg:leading-tight">
          {title}
        </h1>
        <h2 className="mb-5 lg:mb-9 max-w-md mx-auto lg:text-lg ">
          {subtitle}
        </h2>
        {/* search button */}
        <div className="relative overflow-hidden border-2 border-gray-400 rounded-full px-6 py-2 w-64 lg:w-80 lg:h-16 mx-auto">
          <input
            type="text"
            placeholder={buttonSearch}
            className="w-full h-full bg-transparent outline-none text-white"
          />
          <button
            className="absolute top-1 right-2 flex items-center justify-center h-10 lg:h-12 w-12 bg-orange text-white rounded-full"
            style={{ borderRadius: "50%" }}
          >
            <FaSearch />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
