import React from "react";

import { features, feature2 } from "../../data";
import { HiArrowLongRight } from "react-icons/hi2";
import "./Features.css";
import Features2Img from "../../assets/img/features-2.png";
import Features3Img from "../../assets/img/features-3.png";
import Features4Img from "../../assets/img/features-4.png";

const Features = () => {
  const { title, subtitle, image, buttonText, text } = features;
  const { image1, image2, image3, title2, subtitle2, text2, buttonText2 } =
    feature2;
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex justify-between items-start pb-[100px] pt-[100px]">
          <div className="image-container">
            <img src={image.type} alt="" className="main-image" />
            <div className="top-rect"></div>
            <div className="right-rect"></div>
          </div>
          <div>
            <div>
              <h2 className="text-orange font-medium" style={{ fontSize: 22 }}>
                {title}
              </h2>
              <h3
                className="font-semibold mb-4 mt-4"
                style={{ fontSize: 56, lineHeight: "1.2" }}
              >
                {subtitle}
              </h3>
              <p style={{ fontSize: 23 }}>{text}</p>
              <button
                className="mt-8 custom-button rounded"
                style={{ fontSize: 20 }}
              >
                {buttonText}
                <HiArrowLongRight className="ml-2 custom-arrow" />
              </button>
            </div>
          </div>
        </div>
        {/* Feature 2 */}
        <div className="flex justify-between mt-[100px] ">
          <div className="mt-20">
            <h2 className="text-orange font-medium" style={{ fontSize: 22 }}>
              {title2}
            </h2>
            <h3
              className="font-semibold mb-4 mt-4"
              style={{ fontSize: 56, lineHeight: "1.2" }}
            >
              {subtitle2}
            </h3>
            <p style={{ fontSize: 23, color: "#1E1E1E" }}>{text2}</p>
            <button
              className="mt-8 custom-button rounded"
              style={{ fontSize: 20 }}
            >
              {buttonText2}
              <HiArrowLongRight className="ml-2 custom-arrow" />
            </button>
          </div>

          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-1 w-[370px] pl-[70px]">
              <div className="image-feature-2 w-[222px] mb-12">
                <img src={Features2Img} alt="Feature 2" />
              </div>
              <div className="image-feature-3 w-[223px]">
                <img src={Features3Img} alt="Feature 3" />
              </div>
            </div>
            <div className="col-span-3">
              <div className="image-feature-4">
                <img src={Features4Img} alt="Feature 4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
