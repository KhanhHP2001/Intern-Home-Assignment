import React from "react";
import { news } from "../../data";
import { HiArrowLongRight } from "react-icons/hi2";
import "./News.css";

const News = () => {
  const { titleNews, newsLetter } = news;

  return (
    <section className="py-8">
      <div className="container mx-auto grid grid-cols-4 gap-8">
        <div className="col-span-4 flex">
          <h2 className="text-4xl font-semibold mt-8 p-4 pr-[125px] whitespace-nowrap">
            Why <span className="block">Choosing Us</span>
          </h2>

          {newsLetter.map((item, index) => (
            <div key={index} className="col-span-1 p-[12px]">
              <h3 className="text-lg font-semibold mb-4 text-xl">
                {item.title}
              </h3>
              <p className="font-light text-sub">{item.subtitle}</p>
              <button className="mt-2 custom-button rounded">
                {item.buttonText}
                <HiArrowLongRight className="ml-2 custom-arrow" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
