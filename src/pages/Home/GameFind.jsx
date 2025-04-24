import React from 'react'
import cardimg from "../../assets/cardimg.png";
import profileimg from "../../assets/profileimg.png";
import Button from "../../components/Button";

import { IoIosSearch } from "react-icons/io";
import GameCard from './GameCard';
const GameFind = () => {
  return (
     <div className="bg-[#060606]">
            <div className=" container mx-auto pt-[56px] ">
              <div className="flex justify-between items-center flex-wrap ">
                <h2 className="find-game">Find your game</h2>
                <div className="flex gap-3">
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
              <div className="flex justify-between items-start pt-[32px]">
                <GameCard cardimg={cardimg} profileimg={profileimg} />
                <GameCard cardimg={cardimg} profileimg={profileimg} />
                <GameCard cardimg={cardimg} profileimg={profileimg} />
                <GameCard cardimg={cardimg} profileimg={profileimg} />
              </div>
              <div className="flex justify-between items-start pt-[32px]">
                <GameCard cardimg={cardimg} profileimg={profileimg} />
                <GameCard cardimg={cardimg} profileimg={profileimg} />
                <GameCard cardimg={cardimg} profileimg={profileimg} />
                <GameCard cardimg={cardimg} profileimg={profileimg} />
              </div>
            </div>
          </div>
  )
}

export default GameFind