import React from "react";
import gameBord from "../../assets/gamebord.png";
import divider from "../../assets/Vertical-Divider.png";
const Guide = () => {
  return (
    <div className="bg-[#0F0E12] text-white text-sm h-auto pt-[50px] ">
      <div className="relative w-full h-auto bg-no-repeat bg-center  bg-[url('./assets/guid.png')] container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-0 xl:max-w-[75rem] ">
        <div className="flex justify-center items-center py-[29px] bg-gradient-to-t from-[#111224] via-[#070610]/90 to-[#070610] rounded-xl">
          <h3 className="guide-title">All Set Guide list</h3>
        </div>
      </div>

      <div className="flex justify-between items-start container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-0 xl:max-w-[75rem]gap-5 flex-col">
        <div className="w-1/2 tft-meta">
          <h4 className="tft-meta-title">TFT Meta Comps in Set 12</h4>
          <p className="tft-meta-para">
            Find out the strongest and most reliable meta Teamfight Tactics
            comps and builds the best players have been playing so you can start
            your game with a leg up on the competition. Our team comps are
            curated by Challenger expert. game with a leg up on the competition.
            Our team Challenger expert. game with a leg up on the competition.
            Our team Challenger expert.game with a leg up on the competition.
          </p>
          <h6 className="tft-meta-time">
            Last updated:{" "}
            <span className="tft-meta-time-hours">10 hours ago</span>
          </h6>
        </div>
        <div className="w-1/2 game-board  ">
          <div className="flex justify-between items-center pb-[32px] pt-[23px] pr-[68px] pl-[39px]">
            <div className="flex justify-start items-center gap-2">
              <img src={divider} alt="" />
              <h6 className="game-board-title">Example game Board</h6>
            </div>
            <button className="game-board-btn">Build board</button>
          </div>
          <div className="flex justify-center items-center px-[29px] pb-[25px]">
            <img src={gameBord} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
