import React from "react";

import masterimg from "../../assets/boostanimi.png";
import downicon from "../../assets/Button.png";

const Welcome = () => {
  return (
    <div className="relative w-full h-auto bg-cover bg-center  bg-[url('../../assets/boostbg.png')] ">
      <div className="bg-black/29">
        <div className="container mx-auto top-0 left-0  flex justify-start items-center">
          <h5 className="tft-title">Welcome to TFTactis pro</h5>
          <h6 className="tft-para">
            Boost your gameplay! Discover expert guides and winning strategies!
          </h6>
        </div>
      </div>
      <div className=" flex justify-between flex-wrap items-center ">
        <div className=" container mx-auto flex justify-start items-start flex-col pt-[32px] w-1/2">
          <h2 className="boost-title">
            <span className="text-[#E5CE51]">Boost</span> your gameplay!
          </h2>
          <p className="boost-para">
            Unlock your potential with our in-depth gaming guides. Learn expert
            strategies tailored to elevate your performance. Dominate every
            match and climb the ranks with confidence!
          </p>
          <div className="flex justify-start items-center pt-[32px] ">
            <Button text={"Explore more guide"} />
          </div>
        </div>
        <div>
          <div className="relative">
            <img src={masterimg} alt="" />
            <div className="absolute  bg-linear-to-r from-[#0B0A19] to-[#595959] bottom-0 right-0 text-amber-50 pl-8 py-8 flex justify-start items-center pr-44 rounded-l-xl">
              <h5 className="master-title">
                Master Team Composition{" "}
                <span className="text-[#E5CE51]">Guides</span>
              </h5>
              <img src={downicon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
