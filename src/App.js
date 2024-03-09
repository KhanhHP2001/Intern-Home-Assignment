import React from "react";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Review from "./components/Review/Review";
import News from "./components/News/News";
import Products from "./components/Products/Products";

// import components

const App = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-white">
      <Header />
      <Hero />
      <News />
      <Products />
      <Features />
      <Review />
      <Footer />
    </div>
  );
};

export default App;
