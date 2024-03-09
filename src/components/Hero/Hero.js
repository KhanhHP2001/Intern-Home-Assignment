import React from "react";

import { hero } from "../../data";
import { FaSearch } from "react-icons/fa";
import { MdInfoOutline } from "react-icons/md";

const Hero = () => {
  const { title, subtitle, buttonSearch } = hero;

  return (
    <section
      className="h-[1000px] w-full bg-hero bg-right bg-cover bg-no-repeat text-white 
    pt-[160px] pb-[254px] relative mb-12 lg:bg-center"
    >
      <div className="container mx-auto text-center">
        {/* title */}
        <h1
          className="text-2x1 mx-auto font-semibold mb-[48px] 
        lg:text-[74px] lg:leading-tight"
        >
          {title}
        </h1>
        <h2 className="mb-[30px] ml-[325px] max-w-[567px] lg:text-xl">
          {subtitle}
        </h2>
        {/* search button */}
        <div className="relative overflow-hidden border-2 border-gray-400 rounded-full px-6 py-2 w-[344px] h-[60px] left-[440px]">
          <input
            type="text"
            placeholder={buttonSearch}
            className="w-full h-full bg-transparent outline-none text-white"
          />

          <button
            className="absolute top-1 right-2 flex items-center justify-center h-[45px] w-12 bg-orange text-white"
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
