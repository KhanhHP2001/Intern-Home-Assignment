import React, { useState } from "react";
import { FiShoppingBag, FiChevronDown } from "react-icons/fi";
import { navigation } from "../../data";
import "./Header.css"; // Import CSS file

const Header = () => {
  const [bg, setBg] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [activeNavItem, setActiveNavItem] = useState(null);

  const handleNavClick = (index) => {
    setActiveNavItem(activeNavItem === index ? null : index);
  };

  return (
    <header
      className={`${
        bg ? "bg-primary py-4 lg:py-6" : "bg-none"
      } fixed left-0 w-full py-8 z-10 transition-all duration-200`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a
            href="#"
            className="text-white font-semibold"
            style={{ fontSize: 35 }}
          >
            Panto
          </a>
          <nav>
            <ul className="md:flex md:gap-x-12">
              {navigation.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      className="capitalize text-white flex"
                      onClick={() => handleNavClick(index)}
                    >
                      {item.name}
                      {activeNavItem === index && (
                        <FiChevronDown className="ml-2 mt-1" />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="relative">
            <FiShoppingBag className="text-white text-3xl cursor-pointer" />
            <div
              className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-orange
            text-white rounded-full w-4 h-4 flex items-center justify-center text-xs"
            >
              {cartItemCount}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
