import React from "react";
import { FaYoutube } from "react-icons/fa";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGooglePlusG,
  FaPinterestP,
  FaRss,
} from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
  


const Footer = () => {
  return (
    <div className="bg-[#0F0E12] text-white text-sm h-[540px]  ">
    <div className="px-6 py-12 container mx-auto ">
      <div className=" mt-[50px] flex flex-col md:flex-row justify-between items-start md:items-center border-b border-[#444B74] h-[0.962px] w-[1186.493px] pb-8"></div>
      <div className=" mt-[200px] flex flex-col md:flex-row justify-between items-start md:items-center border-b border-[#444B74] h-[0.962px] w-[1186.493px] pb-8">
        <div className="mb-6 md:mb-0">
          <img
            src="/Logo LIFT.png"
            alt="Logo"
            className="h-12 w-auto mt-[-100px] "
          />
        </div>

        <div className="text-gray-300 space-y-2 ">
          <div className="flex items-center gap-2 mt-[-120px]">
            <span>
              <IoIosCall />
            </span>
            <span>(123) 456-7890001254</span>
          </div>
          <div className="flex items-center gap-2">
            <span>
              <FaLocationDot />
            </span>
            <span>
              345 Faulconer Drive, Suite 4 - Charlottesville, CA, 12345
            </span>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <p className="text-gray-400 whitespace-nowrap">Social Media</p>
            <div className="flex space-x-4 text-white text-xl">
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaLinkedinIn />
              </a>
              <a href="#">
                <FaYoutube />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaGooglePlusG />
              </a>
              <a href="#">
                <FaPinterestP />
              </a>
              <a href="#">
                <FaRss />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex flex-wrap gap-4 text-gray-400">
          <a href="#">About Us</a>
          <a href="#">Guides</a>
          <a href="#">Board Builder</a>
          <a href="#">Database</a>
          <a href="#">Coaching</a>
        </div>
        <p>Copyright © 2018 • tdfcifdfoeidf</p>
      </div>

      <div className="text-center text-gray-600 mt-8"></div>
    </div>
  </div>
  );
};

export default Footer;
