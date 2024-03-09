import React, { useState } from "react";
import { products } from "../../data";
import { HiMiniArrowLongRight, HiMiniArrowLongLeft } from "react-icons/hi2";

import { IoMdAddCircle } from "react-icons/io";
import "./Product.css";

const Products = () => {
  const { title, pages } = products;
  const [selectedType, setSelectedType] = useState("Chair");
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleTypeChange = (type) => {
    setSelectedType(type);
    setCurrentIndex(0);
  };
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pages.productList.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pages.productList.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-8 bg-grey-3">
      <div>
        <h2 className="text-4xl font-semibold mb-4 flex justify-center">
          {title}
        </h2>
        {/* Filter */}
        <div className="flex justify-center mb-20">
          <div className="button-container">
            <button
              className={`button ${selectedType === "Chair" ? "active" : ""}`}
              onClick={() => handleTypeChange("Chair")}
            >
              <div className="button-inner">Chair</div>
            </button>
            <button
              className={`button ${selectedType === "Beds" ? "active" : ""}`}
              onClick={() => handleTypeChange("Beds")}
            >
              <div className="button-inner">Beds</div>
            </button>
            <button
              className={`button ${selectedType === "Sofa" ? "active" : ""}`}
              onClick={() => handleTypeChange("Sofa")}
            >
              <div className="button-inner">Sofa</div>
            </button>
            <button
              className={`button ${selectedType === "Lamp" ? "active" : ""}`}
              onClick={() => handleTypeChange("Lamp")}
            >
              <div className="button-inner">Lamp</div>
            </button>
          </div>
        </div>

        {/* Product List */}
        <div className="col-span-4 flex p-4 justify-evenly mt-10">
          {/* Previous Button */}
          <button className="arrow-button ml-4" onClick={handlePrev}>
            <HiMiniArrowLongLeft className="arrow-icon" />
          </button>
          {pages.productList.map((product, idx) => (
            <div className="product-box col-span-1 pt-20" key={idx}>
              <>
                <div className="product-image">
                  <img src={product.image.type} alt={product.name} />
                </div>

                <div className="product-details">
                  <p style={{ fontSize: 19.8 }}>{product.type}</p>
                  <h3 style={{ fontSize: 23 }}>{product.name}</h3>
                  <div
                    className="star-ratings-product"
                    style={{ color: "#F6B76F" }}
                  >
                    {Array.from({ length: product.votes }).map((_, index) => (
                      <span key={index}>★</span>
                    ))}
                    {Array.from({ length: 5 - product.votes }).map(
                      (_, index) => (
                        <span key={index}>☆</span>
                      )
                    )}
                  </div>
                </div>

                <div className="product-footer">
                  <p style={{ fontSize: 20 }}>${product.price}</p>
                  <button>
                    <IoMdAddCircle style={{ fontSize: 60 }} />
                  </button>
                </div>
              </>
            </div>
          ))}

          {/* Next Button */}
          <button className="arrow-button mr-4" onClick={handleNext}>
            <HiMiniArrowLongRight className="arrow-icon" />
          </button>
        </div>
        {/* Previous and Next Buttons */}

        {/* View All Button */}
        <div className="flex justify-center">
          <button className="mt-2 custom-button-view">
            View All
            <HiMiniArrowLongRight className="ml-2 custom-arrow-view" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
