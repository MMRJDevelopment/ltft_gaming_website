import React from "react";
import cardimg from "../../assets/cardimg.png";
import profileimg from "../../assets/profileimg.png";
import Button from "../../components/Button";

import { IoIosSearch } from "react-icons/io";
import GameCard from "./GameCard";
const GameFind = () => {
  return (
    <div className="bg-[#060606]">
      <div className=" container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-0 xl:max-w-[75rem] pt-[56px] ">
        <div className="flex justify-between items-center flex-wrap ">
          <h2 className="find-game">Find your game</h2>
          <div className="flex gap-3 flex-wrap mt-2">
            <div className=" relative">
              <input
                className="search "
                type="text"
                placeholder="Search desired game..."
              />
              <IoIosSearch className="text-white absolute top-4 right-4" />
            </div>
            <div>
              <Button text={"See all coach"} />
            </div>
          </div>
        </div>
        <div className="flex justify-center xl:justify-between items-center pt-[32px] transition duration-700 ease-in-out flex-wrap sm:gap-8 ">
          <div className="py-[80px] hover:py-0 transition duration-700 ease-in-out">
            <GameCard cardimg={cardimg} profileimg={profileimg} />
          </div>
          <div className="py-[80px] hover:py-0 transition duration-700 ease-in-out">
            <GameCard cardimg={cardimg} profileimg={profileimg} />
          </div>
          <div className="py-[80px] hover:py-0 transition duration-700 ease-in-out">
            <GameCard cardimg={cardimg} profileimg={profileimg} />
          </div>
          <div className="py-[80px] hover:py-0 transition duration-700 ease-in-out  ">
            <GameCard cardimg={cardimg} profileimg={profileimg} />
          </div>

          <div className="py-[80px] hover:py-0">
            <GameCard cardimg={cardimg} profileimg={profileimg} />
          </div>
          <div className="py-[80px] hover:py-0">
            <GameCard cardimg={cardimg} profileimg={profileimg} />
          </div>
          <div className="py-[80px] hover:py-0">
            <GameCard cardimg={cardimg} profileimg={profileimg} />
          </div>
          <div className="py-[80px] hover:py-0">
            <GameCard cardimg={cardimg} profileimg={profileimg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameFind;
