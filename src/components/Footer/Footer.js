import React from "react";

import { footer } from "../../data";

const Footer = () => {
  return (
    <footer className="section bg-grey-3 text-black">
      <div className="container mx-auto flex flex-col md:flex-row">
        {/* Logo */}
        <div className="w-[350px] mb-4 md:mb-0">
          <a href="#" className="font-semibold" style={{ fontSize: 30 }}>
            Panto
          </a>
          <p className="mt-2">{footer.subtitle}</p>
        </div>

        {/* Services */}
        <div className="w-[180px] md:ml-[180px] md:mr-4">
          <h4 className="text-orange" style={{ fontSize: 18 }}>
            Services
          </h4>
          <ul>
            {footer.services.map((service, index) => (
              <li key={index} className="flex pt-2">
                {service.subtitle}
              </li>
            ))}
          </ul>
        </div>

        {/* Furniture */}
        <div className="w-[180px] md:ml-[180px]">
          <h4 className="text-orange" style={{ fontSize: 18 }}>
            Furniture
          </h4>
          <ul>
            {footer.furniture.map((item, index) => (
              <li key={index} className="flex pt-2">
                {item.subtitle}
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div className="md:ml-[180px]">
          <h4 className="text-orange" style={{ fontSize: 18 }}>
            Follow Us
          </h4>
          <div>
            {footer.social.map((item, index) => (
              <div key={index} className="flex pt-2">
                <a href={item.href} style={{ fontSize: 25, paddingRight: 5 }}>
                  {item.icon}
                </a>
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto flex justify-between mt-4">
        <div className="pt-20">
          <p>Copyright &copy; 2021.</p>
        </div>
        <div className="pt-20">
          <a href="#">Terms & Conditions</a>
          <span className="mx-2">|</span>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
