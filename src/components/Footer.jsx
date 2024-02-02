import React from "react";
import logo from "/logo.png";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-[#F8F8F8] text-[#0E2368] py-8 sm:py-12 relative xl:top-[28rem] mobile:top-[28rem] lg:top-96 md:top-72">
    <div className="container mx-auto flex flex-wrap gap-8 xl:gap-64 lg:gap-44 items-center">
      {/* Logo Column */}
      <div className="flex items-center">
        <img className="w-32 sm:w-40" src={logo} alt="Footer Logo" />
      </div>

      {/* Contact Us, More, and Social Links Column */}
      <div className="flex mt-6 lg:mt-0 sm:space-x-4 lg:space-x-12 xl:gap-24 gap-12 lg:gap-6 px-6 sm:flex-row flex-col">
        {/* Contact Us Column */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">
            Contact Us
          </h3>
          <div className="text-[#0E2368] sm:w-[217px] flex flex-col gap-2">
            <p className="address">
              Lorem Ipsum Pvt Ltd. 5/1, Magalton Road, Phartosh Gate near YTM
              Market, XYZ-343434
            </p>
            <span className="block">example2020@gmail.com</span>
            <span className="block">(904) 443-0343</span>
          </div>
        </div>

        {/* More Column */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">
            More
          </h3>
          <div className="flex flex-col text-[#0E2368]">
            <a href="#about" className="mb-1">
              About Us
            </a>
            <a href="#products" className="mb-1">
              Products
            </a>
            <a href="#career" className="mb-1">
              Career
            </a>
            <a href="#contactUs" className="mb-1">
              Contact Us
            </a>
          </div>
        </div>

        {/* Social Links Column */}
        <div className="flex flex-col sm:justify-start justify-center sm:items-start items-center sm:gap-0 gap-2">
          <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4 hidden sm:block">
            Social Links
          </h3>
          <p className="text-md sm:text-right text-[#444957] sm:hidden mobilexs:text-center">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
          <div className="flex space-x-2 sm:space-x-4 text-[#0E2368] sm:gap-0 gap-2">
            {/* Increased size of icons */}
            <FaInstagram size={20} />
            <FaTwitter size={20} />
            <FaFacebookF size={20} />
          </div>
        </div>
      </div>
    </div>

    <div className="container text-center mt-4 sm:mt-8 sm:flex hidden lg: mx-auto justify-end md:px-6">
      <p className="text-md  text-[#444957] w-max  relative">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
