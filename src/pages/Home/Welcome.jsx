import React from "react";
import masterimg from "../../assets/boostanimi.png";
import downicon from "../../assets/Button.png";
import Button from "../../components/Button";

const Welcome = () => {
  return (
    <div className="relative w-full h-auto bg-cover bg-center  bg-[url('./assets/boostbg.png')] ">
      <div className="bg-black/29">
        <div className=" flex justify-start items-start flex-wrap xl:gap-[124px] container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-0 xl:max-w-[75rem] py-5 xl:pl-[63px]">
          <h5 className="tft-title text-xl sm:text-[24px] lg:text-[28px]   ">
            Welcome to TFTactis pro
          </h5>
          <h6 className="tft-para text-sm sm:text-[18px] lg:text-[20px] pt-2 ">
            Boost your gameplay! Discover expert guides and winning strategies!
          </h6>
        </div>
      </div>
      <div >
        <div className=" container mx-auto xl:pt-[293px] lg:pt-[180px] pt-10 lg:pb-[160px] xl:pb-[220px] pb-[120vw] md:pb-160 sm:pb-170 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-0 xl:max-w-[75rem] ">
          <h2 className="boost-title text-3xl lg:text-[36px]  ">
            <span className="text-[#E5CE51]">Boost</span> your gameplay!
          </h2>
          <p className="boost-para text-sm sm:text-[18px] xl:text-[20px]/8 lg:w-[40vw] pt-4">
            Unlock your potential with our in-depth gaming guides. Learn expert
            strategies tailored to elevate your performance. Dominate every
            match and climb the ranks with confidence!
          </p>
          <div className="flex justify-start items-center pt-[32px] ">
            <Button text={"Explore more guide"} />
          </div>
        </div>

        <div className="relative">
          <div className="absolute right-0 bottom-0">
            <div className="lg:w-[40vw]">
              <img src={masterimg} alt="" />
            </div>
            <div className=" bg-linear-to-r from-[#0B0A19] to-[#595959] absolute bottom-0 right-0 w-full sm:w-auto xl:w-[38vw]  xl:pl-8 px-4 pr-10 pl-8  gap-4 py-[7vw] sm:py-10 lg:py-6  xl:py-8 flex justify-start items-center xl:pr-44 rounded-l-xl">
              <h5 className="master-title xl:w-[276px]  sm:text-[28px] text-[20px]">
                Master Team Composition{" "}
                <span className="text-[#E5CE51]">Guides</span>
              </h5>
              <div className="w-10  lg:w-auto lg:h-auto ">
                <img src={downicon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
