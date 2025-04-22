import React from "react";
import { RxCross2 } from "react-icons/rx";
import danger from "../../assets/danger.png";

const Announce = () => {
  return (
    <div className="relative bg-[url('./assets/annous.jpg')] h-[60px] w-full custom-bg-shadow bg-cover no-repeat">
    <div className="container mx-auto w-full px-4 sm:max-w-[40rem] md:max-w-[48rem] lg:max-w-[64rem] xl:max-w-[75rem]">
      <div className="flex justify-between items-center py-4">
        {/* Left section with image and text */}
        <div className="flex items-center gap-[12px] ">
          <img className="danger" src={danger} alt="Danger Icon" />
          <p className="announce-cntent  text-white xl:text-[20px] ">
            Check out Patch 14.12{" "}
            <span className="text-[#E5CE51]">[link: meta snapshot]</span>
          </p>
        </div>

        {/* Right section with cross icon */}
        <div className="croos cursor-pointer">
          <RxCross2 />
        </div>
      </div>
    </div>
  </div>
  );
};

export default Announce;
