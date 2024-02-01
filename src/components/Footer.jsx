import React from "react";
import logo from "../assets/logo.png";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-[#F8F8F8] text-[#0E2368] py-12 relative top-[28rem]">
    <div className="container mx-auto flex flex-wrap gap-64 items-center">
      {/* Logo Column */}
      <div className="flex items-center">
        <img className="w-40" src={logo} alt="Footer Logo" />
      </div>

      {/* Contact Us, More, and Social Links Column */}
      <div className="flex mt-6 md:mt-0 space-x-12 md:ml-12 gap-24">
        {/* Contact Us Column */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <div className="text-[#0E2368] w-[217px] flex flex-col gap-3">
            <p className="address">
              Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
              Market, XYZ-343434
            </p>
            <span className="block">example2020@gmail.com</span>
            <span className="block">(904) 443-0343</span>
          </div>
        </div>

        {/* More Column */}
        <div>
          <h3 className="text-xl font-semibold mb-4">More</h3>
          <div className="flex flex-col text-[#0E2368]">
            <a href="#about" className="mb-2">
              About Us
            </a>
            <a href="#products" className="mb-2">
              Products
            </a>
            <a href="#career" className="mb-2">
              Career
            </a>
            <a href="#contactUs" className="mb-2">
              Contact Us
            </a>
          </div>
        </div>

        {/* Social Links Column */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Social Links</h3>
          <div className="flex space-x-4 text-[#0E2368]">
            {/* Increased size of icons */}
            <FaInstagram size={24} />
            <FaTwitter size={24} />
            <FaFacebookF size={24} />
          </div>
        </div>
      </div>
    </div>

    <div className="container w-max text-center mt-8 relative left-[70rem]">
      <p className="text-sm text-[#444957]">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
