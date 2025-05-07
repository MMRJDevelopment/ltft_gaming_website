import React from "react";
import { Checkbox } from "antd";
import { FaLongArrowAltRight } from "react-icons/fa";
import divider from "../../assets/Vertical-Divider.png";
import coin from "../../assets/coing.png";
import items from "../../assets/items.svg.png";
import relode from "../../assets/reload.png";
import fills from "../../assets/fill.png";
import player1 from "../../assets/player1.png";
import player2 from "../../assets/player2.png";
import player4 from "../../assets/player4.png";
import player5 from "../../assets/player5.png";
import player6 from "../../assets/player6.png";
import player7 from "../../assets/player7.png";
import player8 from "../../assets/player8.png";
import gamesBord from "../../assets/game-bord.png";
import stre1 from "../../assets/stre1.png";
import stre2 from "../../assets/stre2.png";
import stre3 from "../../assets/stre3.png";
import stre4 from "../../assets/stre4.png";
import stre5 from "../../assets/stre5.png";
import drive from "../../assets/Background.png";
import uparow from "../../assets/uparow.png";
import vertical from "../../assets/veridi.png";
import sicon from "../../assets/sicon.png";
import { Select } from "antd";
import Serach from "../../assets/Serach.png";
import Button from "../../components/Button";
import { FaArrowDownLong } from "react-icons/fa6";

import { FaChevronRight, FaArrowRightLong } from "react-icons/fa6";

const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};
const GameBord = () => {
  return (
    <div className="bg-[#060606] lg:pt-10 pt-5  ">
      <div className=" container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-0 xl:max-w-[75rem]  flex flex-col justify-between items-start lg:flex-row xl:pt-[41px] ">
        <div className="lg:w-1/3 w-full ">
          <div className="coin-card w-full ">
            <div className="flex justify-start items-center gap-2">
              <img src={coin} alt="" />
              <p className="coin-num">1</p>
            </div>
            <div>
              <Checkbox className="coin-box" onChange={onChange}></Checkbox>
            </div>
          </div>
          <div className="coin-card">
            <div className="flex justify-start items-center gap-2">
              <img src={coin} alt="" />
              <p className="coin-num">2</p>
            </div>
            <div>
              <Checkbox className="coin-box" onChange={onChange}></Checkbox>
            </div>
          </div>
          <div className="coin-card">
            <div className="flex justify-start items-center gap-2">
              <img src={coin} alt="" />
              <p className="coin-num">3</p>
            </div>
            <div>
              <Checkbox className="coin-box" onChange={onChange}></Checkbox>
            </div>
          </div>
          <div className="coin-card">
            <div className="flex justify-start items-center gap-2">
              <img src={coin} alt="" />
              <p className="coin-num">4</p>
            </div>
            <div>
              <Checkbox className="coin-box" onChange={onChange}></Checkbox>
            </div>
          </div>
          <div className="coin-card">
            <div className="flex justify-start items-center gap-2">
              <img src={coin} alt="" />
              <p className="coin-num">5</p>
            </div>
            <div>
              <Checkbox className="coin-box" onChange={onChange}></Checkbox>
            </div>
          </div>
        </div>
        <div className="lg:w-2/3  lg:border-l-[2px] w-full pt-8  border-[#292929]">
          <div className="lg:pl-6 pt-4 ">
            <div className="flex lg:justify-between flex-wrap  items-center">
              <h3 className="team-title">TFT team composition guide list</h3>
              <div className="flex justify-center items-center gap-4 pt-6">
                <Select
                  className="custom-select gap-2! "
                  dropdownClassName="custom-select-dropdown"
                  placeholder="Traits"
                  style={{ flex: 1 }}
                  options={[
                    { value: "hfgck", label: "cgdk" },
                    { value: "cghy", label: "ugcy" },
                    { value: "imingghe", label: "minghe" },
                  ]}
                />
                <Button text={"Create comp"} />
              </div>
            </div>
            <div className="flex lg:justify-between flex-wrap items-center pt-8 gap-y-4 gap-4 ">
              <div>
                <Select
                  className="custom-select"
                  dropdownClassName="custom-select-dropdown"
                  placeholder="Traits"
                  style={{ flex: 1 }}
                  options={[
                    { value: "jack", label: "Jack" },
                    { value: "lucy", label: "Lucy" },
                    { value: "Yiminghe", label: "yiminghe" },
                  ]}
                />
              </div>
              <div className="flex flex-wrap lg:justify-center items-center lg:gap-3 gap-y-4 gap-x-4">
                <div className="relative">
                  <img
                    src={Serach}
                    alt=""
                    className=" absolute top-2.5 left-2"
                  />
                  <input
                    className="serarc-g"
                    type="text"
                    placeholder="Search......"
                  />
                </div>
                <div className="itesm-game">
                  <img src={items} alt="" />
                  <p>Items</p>
                </div>
                <div className="a-zall">
                  <p>A - Z</p>
                </div>
                <div className="relode">
                  <img src={relode} alt="" />
                </div>
              </div>
            </div>
            <div className="border-[#5A5A5A]/42 border-t-[1px]  mt-5 mb-6 " />

            <div className="relative w-full xl:h-[96px] h-[280px] sm:h-[190px]  bg-no-repeat bg-center bg-cover  bg-[url('./assets/plyerbg.png')]">
              <div className="absolute xl:h-[96px] h-[280px] sm:h-[190px] w-full bg-linear-to-r from-[#60530E] via-black/80 to-[#090909]/0  " />
              <div className="absolute flex justify-between flex-wrap items-center xl:gap-6 ">
                <div className="py-4 pl-[18px] ">
                  <div className="flex justify-start items-center gap-[6px]">
                    <h4 className="mul-title">Multistrikers</h4>
                    <div>
                      <img src={fills} alt="" />
                    </div>
                  </div>
                  <div className="flex justify-start items-center gap-[7px] pt-6">
                    <div className="mul-time">
                      <p>14.15</p>
                    </div>
                    <div className="mul-level">
                      <p>Level 6 Slow Roll</p>
                    </div>
                    <div className="mul-level">
                      <p>Easy</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center flex-wrap items-baseline sm:px-4 xl:px-0 gap-3">
                  <div className="player">
                    <img src={player1} alt="" />
                    <p>Jaxer</p>
                  </div>{" "}
                  <div className="player">
                    <img src={player2} alt="" />
                    <p>Kassadin</p>
                  </div>
                  <div className="player pt-4">
                    <img src={player4} alt="" />
                    <p>Kalista</p>
                  </div>
                  <div className="player pt-4">
                    <img src={player5} alt="" />
                    <p>Camille</p>
                  </div>
                  <div className="player pt-4">
                    <img src={player6} alt="" />
                    <p>Akali</p>
                  </div>
                  <div className="player pt-4">
                    <img src={player6} alt="" />
                    <p>Hecarim</p>
                  </div>
                  <div className="player pt-4">
                    <img src={player7} alt="" />
                    <p>Hecarim</p>
                  </div>
                  <div className="player pt-4">
                    <img src={player8} alt="" />
                    <p>Hecarim</p>
                  </div>
                </div>
                <div className="w-[72px] h-[96px] flex bg-[#B5B5B5]/22  justify-center items-start  rounded-bl-full absolute xl:relative top-0  right-0     ">
                  <div className="w-[32px] h-[32px] bg-[#B5B5B5] rounded-full mt-5 flex justify-center items-center text-[#151515]">
                    <FaArrowDownLong />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-b-2xl border-x-2 border-b-2 border-[#5A5A5A]/20">
              <div className="flex justify-between flex-wrap sm:flex-nowrap items-start">
                <div>
                  <div className="flex justify-start items-center gap-2 xl:pl-[49px] pl-4 xl:pt-[62px] pt-8">
                    <img src={divider} alt="" />
                    <h6 className="game-board-title">Example game Board</h6>
                  </div>
                  <div className="xl:pl-[41px] pt-4 pl-4">
                    <img src={gamesBord} alt="" />
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start xl:pr-[26px] pl-4 ">
                  <div className="flex justify-start items-start gap-2  xl:pt-[62px] pt-10">
                    <img src={divider} alt="" />
                    <h6 className="game-board-title">Early game stretegy</h6>
                  </div>
                  <div className="flex gap-4 justify-start items-center pt-[15px] ">
                    <div className="flex justify-center items-center flex-col">
                      <img src={stre1} alt="" />
                      <p className="stre-name">Elise</p>
                    </div>
                    <div className="flex justify-center items-center flex-col">
                      <img src={stre2} alt="" />
                      <p className="stre-name">Ziggs</p>
                    </div>
                    <div className="flex justify-center items-center flex-col">
                      <img src={stre3} alt="" />
                      <p className="stre-name">Jayce</p>
                    </div>
                    <div className="flex justify-center items-center flex-col">
                      <img src={stre4} alt="" />
                      <p className="stre-name">Syndra</p>
                    </div>
                    <div className="flex justify-center items-center flex-col">
                      <img src={stre5} alt="" />
                      <p className="stre-name">Mordek…</p>
                    </div>
                  </div>
                  <div className="pt-[14px] ">
                    <h6 className="ster-tips">Tips</h6>
                    <p className="tipdis">
                      Incantor Emblem should be used on Vex as she will be
                      casting a lot in the front line.
                    </p>
                  </div>
                </div>
              </div>
              <div className="xl:pl-[36px] pl-4 pt-4 xl:pt-[36px] pr-[34px] pb-[18px]">
                <div>
                  <div className="flex justify-start items-cente gap-[6px]">
                    <img src={drive} alt="" />
                    <h4 className="eraly-title">Early Game Leveling / Tempo</h4>
                  </div>
                  <div className="flex justify-between flex-wrap items-center gap-2">
                    <div className="flex justify-start items-center flex-wrap gap-2 xl:gap-0">
                      <div>
                        <div className="leveling-box flex px-2.5 py-2 gap-2 mt-[10px]">
                          <div className="flex justify-center items-center gap-1">
                            <img src={uparow} alt="" />
                            <p className="upcount">4</p>
                          </div>
                          <div>
                            <p className="count-para">2-1</p>
                            <p className="count-sub">stage</p>
                          </div>
                          <div>
                            <img src={vertical} alt="" />
                          </div>
                          <div>
                            <p className="count-para">0</p>
                            <p className="count-sub">gold</p>
                          </div>
                        </div>
                      </div>
                      <FaChevronRight className="text-white pt-1.5" />
                      <div>
                        <div className="leveling-box flex px-2.5 py-2 gap-2 mt-[10px]">
                          <div className="flex justify-center items-center gap-1">
                            <img src={uparow} alt="" />
                            <p className="upcount">6</p>
                          </div>
                          <div>
                            <p className="count-para">3-2</p>
                            <p className="count-sub">stage</p>
                          </div>
                          <div>
                            <img src={vertical} alt="" />
                          </div>
                          <div>
                            <p className="count-para">40+</p>
                            <p className="count-sub">gold</p>
                          </div>
                        </div>
                      </div>
                      <FaChevronRight className="text-white pt-1.5" />
                      <div>
                        <div className="leveling-box flex px-2.5 py-2 gap-2 mt-[10px]">
                          <div className="flex justify-center items-center gap-1">
                            <img src={uparow} alt="" />
                            <p className="upcount">4</p>
                          </div>
                          <div>
                            <p className="count-para">2-1</p>
                            <p className="count-sub">stage</p>
                          </div>
                          <div>
                            <img src={vertical} alt="" />
                          </div>
                          <div>
                            <p className="count-para">0</p>
                            <p className="count-sub">gold</p>
                          </div>
                        </div>
                      </div>
                      <FaChevronRight className="text-white pt-1.5" />
                      <div>
                        <div className="leveling-box flex px-2.5 py-2 gap-2 mt-[10px]">
                          <div className="flex justify-center items-center gap-1">
                            <img src={uparow} alt="" />
                            <p className="upcount">6</p>
                          </div>
                          <div>
                            <p className="count-para">3-2</p>
                            <p className="count-sub">stage</p>
                          </div>
                          <div>
                            <img src={vertical} alt="" />
                          </div>
                          <div>
                            <p className="count-para">40+</p>
                            <p className="count-sub">gold</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end items-center gap-2 pt-2">
                      <div>
                        <button className="game-bord">Open guide</button>
                      </div>
                      <div>
                        <button className="game-bord">Open in builder</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="relative w-full xl:h-[96px] h-[280px] sm:h-[190px]  bg-no-repeat bg-center bg-cover  bg-[url('./assets/plyerbg.png')] mt-7 mb-4">
              <div className="absolute xl:h-[96px] h-[280px] sm:h-[190px] w-full bg-linear-to-r from-[#1C1C1C] via-black/80 to-[#090909]/0  " />
              <div className="absolute flex justify-between flex-wrap items-center xl:gap-6 ">
                <div className="py-4 pl-[18px] ">
                  <div className="flex justify-start items-center gap-[6px]">
                    <h4 className="mul-title">Multistrikers</h4>
                    <div className="flex justify-center items-center  gap-2">
                      <img src={sicon} alt="" />
                      <FaArrowRightLong className="text-[#969696] text-[10px]" />
                    </div>
                  </div>
                  <div className="flex justify-start items-center gap-[7px] pt-6">
                    <div className="mul-time">
                      <p>14.15</p>
                    </div>
                    <div className="mul-level">
                      <p>Level 6 Slow Roll</p>
                    </div>
                    <div className="mul-level">
                      <p>Easy</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center flex-wrap items-baseline sm:px-4 xl:px-0 gap-3">
                  <div className="player">
                    <img src={player1} alt="" />
                    <p>Jaxer</p>
                  </div>{" "}
                  <div className="player">
                    <img src={player2} alt="" />
                    <p>Kassadin</p>
                  </div>
                  <div className="player pt-4">
                    <img src={player4} alt="" />
                    <p>Kalista</p>
                  </div>
                  <div className="player pt-4">
                    <img src={player5} alt="" />
                    <p>Camille</p>
                  </div>
                  <div className="player pt-4">
                    <img src={player6} alt="" />
                    <p>Akali</p>
                  </div>
                  <div className="player pt-4">
                    <img src={player6} alt="" />
                    <p>Hecarim</p>
                  </div>
                  <div className="player pt-4">
                    <img src={player7} alt="" />
                    <p>Hecarim</p>
                  </div>
                  <div className="player pt-4">
                    <img src={player8} alt="" />
                    <p>Hecarim</p>
                  </div>
                </div>
                <div className="w-[72px] h-[96px] flex bg-[#454848]  justify-center items-start  rounded-bl-full absolute xl:relative top-0  right-0     ">
                  <div className="w-[32px] h-[32px] bg-[#F2BF43] rounded-full mt-5 flex justify-center items-center text-[#151515]">
                  <FaLongArrowAltRight />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative w-full xl:h-[96px] h-[280px] sm:h-[190px]  bg-no-repeat bg-center bg-cover  bg-[url('./assets/plyerbg.png')] mt-7 mb-4">
              <div className="absolute xl:h-[96px] h-[280px] sm:h-[190px] w-full bg-linear-to-r from-[#1C1C1C] via-black/80 to-[#090909]/0  " />
              <div className="absolute flex justify-between flex-wrap items-center xl:gap-6 ">
                <div className="py-4 pl-[18px] ">
                  <div className="flex justify-start items-center gap-[6px]">
                    <h4 className="mul-title">Multistrikers</h4>
                    <div className="flex justify-center items-center  gap-2">
                      <img src={sicon} alt="" />
                      <FaArrowRightLong className="text-[#969696] text-[10px]" />
                    </div>
                  </div>
                  <div className="flex justify-start items-center gap-[7px] pt-6">
                    <div className="mul-time">
                      <p>14.15</p>
                    </div>
                    <div className="mul-level">
                      <p>Level 6 Slow Roll</p>
                    </div>
                    <div className="mul-level">
                      <p>Easy</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center flex-wrap items-baseline sm:px-4 xl:px-0 gap-3">
                  <div className="player">
                    <img src={player1} alt="" />
                    <p>Jaxer</p>
                  </div>{" "}
                  <div className="player">
                    <img src={player2} alt="" />
                    <p>Kassadin</p>
                  </div>
                  <div className="player pt-4">
                    <img src={player4} alt="" />
                    <p>Kalista</p>
                  </div>
                  <div className="player pt-4">
                    <img src={player5} alt="" />
                    <p>Camille</p>
                  </div>
                  <div className="player pt-4">
                    <img src={player6} alt="" />
                    <p>Akali</p>
                  </div>
                  <div className="player pt-4">
                    <img src={player6} alt="" />
                    <p>Hecarim</p>
                  </div>
                  <div className="player pt-4">
                    <img src={player7} alt="" />
                    <p>Hecarim</p>
                  </div>
                  <div className="player pt-4">
                    <img src={player8} alt="" />
                    <p>Hecarim</p>
                  </div>
                </div>
                <div className="w-[72px] h-[96px] flex bg-[#454848]  justify-center items-start  rounded-bl-full absolute xl:relative top-0  right-0     ">
                  <div className="w-[32px] h-[32px] bg-[#F2BF43] rounded-full mt-5 flex justify-center items-center text-[#151515]">
                  <FaLongArrowAltRight />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative w-full xl:h-[96px] h-[280px] sm:h-[190px]  bg-no-repeat bg-center bg-cover  bg-[url('./assets/plyerbg.png')] mt-7 mb-4">
              <div className="absolute xl:h-[96px] h-[280px] sm:h-[190px] w-full bg-linear-to-r from-[#1C1C1C] via-black/80 to-[#090909]/0  " />
              <div className="absolute flex justify-between flex-wrap items-center xl:gap-6 ">
                <div className="py-4 pl-[18px] ">
                  <div className="flex justify-start items-center gap-[6px]">
                    <h4 className="mul-title">Multistrikers</h4>
                    <div className="flex justify-center items-center  gap-2">
                      <img src={sicon} alt="" />
                      <FaArrowRightLong className="text-[#969696] text-[10px]" />
                    </div>
                  </div>
                  <div className="flex justify-start items-center gap-[7px] pt-6">
                    <div className="mul-time">
                      <p>14.15</p>
                    </div>
                    <div className="mul-level">
                      <p>Level 6 Slow Roll</p>
                    </div>
                    <div className="mul-level">
                      <p>Easy</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center flex-wrap items-baseline sm:px-4 xl:px-0 gap-3">
                  <div className="player">
                    <img src={player1} alt="" />
                    <p>Jaxer</p>
                  </div>{" "}
                  <div className="player">
                    <img src={player2} alt="" />
                    <p>Kassadin</p>
                  </div>
                  <div className="player pt-4">
                    <img src={player4} alt="" />
                    <p>Kalista</p>
                  </div>
                  <div className="player pt-4">
                    <img src={player5} alt="" />
                    <p>Camille</p>
                  </div>
                  <div className="player pt-4">
                    <img src={player6} alt="" />
                    <p>Akali</p>
                  </div>
                  <div className="player pt-4">
                    <img src={player6} alt="" />
                    <p>Hecarim</p>
                  </div>
                  <div className="player pt-4">
                    <img src={player7} alt="" />
                    <p>Hecarim</p>
                  </div>
                  <div className="player pt-4">
                    <img src={player8} alt="" />
                    <p>Hecarim</p>
                  </div>
                </div>
                <div className="w-[72px] h-[96px] flex bg-[#454848]  justify-center items-start  rounded-bl-full absolute xl:relative top-0  right-0     ">
                  <div className="w-[32px] h-[32px] bg-[#F2BF43] rounded-full mt-5 flex justify-center items-center text-[#151515]">
                  <FaLongArrowAltRight />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default GameBord;
