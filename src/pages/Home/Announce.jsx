import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import danger from "../../assets/danger.png";
import { s } from "framer-motion/client";

const Announce = () => {

  return (
    <div>
      <div className="relative bg-[url('./assets/annous.jpg')] h-[60px] custom-bg-shadow bg-cover no-repeat">
        <div className="container mx-auto xl:max-w-[75rem]  px-4 sm:px-8 md:px-12 lg:px-16 xl:px-0 ">
          <div className="flex justify-between items-center py-4 gap-4">
            <div className="flex items-center gap-2 xl:gap-3 ">
              <img className="danger" src={danger} alt="Danger Icon" />
              <p className="announce-cntent  text-white  text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl">
                Check out Patch 14.12{" "}
                <span className="text-[#E5CE51] hover:underline underline-offset-4 ">
                  [link: meta snapshot]
                </span>
              </p>
            </div>

            <div className="croos cursor-pointer">
              <RxCross2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announce;
