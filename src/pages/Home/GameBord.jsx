import React from 'react'

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
import downicons from "../../assets/shape-downicon.png";
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

import { FaChevronRight, FaArrowRightLong } from "react-icons/fa6";
const GameBord = () => {
  return (
    <div className="bg-[#060606] pt-[100px]  ">


    <div className=" container mx-auto flex justify-between items-start pt-[41px]">
      <div className="w-1/3 ">
        <div className="coin-card">
          <div className="flex justify-start items-center gap-2">
            <img src={coin} alt="" />
            <p className="coin-num">1</p>
          </div>
          <div className="coin-box"></div>
        </div>
        <div className="coin-card">
          <div className="flex justify-start items-center gap-2">
            <img src={coin} alt="" />
            <p className="coin-num">2</p>
          </div>
          <div className="coin-box"></div>
        </div>
        <div className="coin-card">
          <div className="flex justify-start items-center gap-2">
            <img src={coin} alt="" />
            <p className="coin-num">3</p>
          </div>
          <div className="coin-box"></div>
        </div>
        <div className="coin-card">
          <div className="flex justify-start items-center gap-2">
            <img src={coin} alt="" />
            <p className="coin-num">4</p>
          </div>
          <div className="coin-box"></div>
        </div>
        <div className="coin-card">
          <div className="flex justify-start items-center gap-2">
            <img src={coin} alt="" />
            <p className="coin-num">5</p>
          </div>
          <div className="coin-box"></div>
        </div>
      </div>
      <div className="w-2/3 border-l-[2px] border-[#292929]">
        <div className="pl-6">
          <div className="flex justify-between items-center">
            <h3 className="team-title">TFT team composition guide list</h3>
            <div className="flex justify-center items-center gap-4">
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
          <div className="flex justify-between items-center pt-8 ">
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
            <div className="flex  justify-center items-center gap-3">
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

          <div className="relative w-full h-[96px] bg-no-repeat bg-center bg-cover  bg-[url('./assets/plyerbg.png')]">
            <div className="absolute h-[96px] w-full bg-linear-to-r from-[#60530E] via-black/80 to-[#090909]/0  " />
            <div className="absolute flex justify-center items-center ">
              <div className="py-4 pl-[18px] pr-8">
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
              <div className="flex justify-center items-baseline gap-4">
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
                <div className=" absolute top-0  right-[-112px]">
                  <img src={downicons} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-b-2xl border-x-2 border-b-2 border-[#5A5A5A]/20">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex justify-start items-center gap-2 pl-[49px] pt-[62px]">
                  <img src={divider} alt="" />
                  <h6 className="game-board-title">Example game Board</h6>
                </div>
                <div className="pl-[41px] pt-4">
                  <img src={gamesBord} alt="" />
                </div>
              </div>
              <div className="flex flex-col justify-start items-start pr-[26px] ">
                <div className="flex justify-start items-start gap-2  pt-[62px]">
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
                <div className="pt-[14px]">
                  <h6 className="ster-tips">Tips</h6>
                  <p className="tipdis">
                    Incantor Emblem should be used on Vex as she will be
                    casting a lot in the front line.
                  </p>
                </div>
              </div>
            </div>
            <div className="pl-[36px] pt-[36px] pr-[34px] pb-[18px]">
              <div>
                <div className="flex justify-start items-cente gap-[6px]">
                  <img src={drive} alt="" />
                  <h4 className="eraly-title">
                    Early Game Leveling / Tempo
                  </h4>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <div className="flex justify-start items-center">
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

          <div className="relative w-full h-[96px] bg-no-repeat bg-center bg-cover  bg-[url('./assets/plyerbg.png')] mt-7">
            <div className="absolute h-[96px] w-full bg-linear-to-r from-[#1C1C1C] via-black/80 to-[#090909]/0  " />
            <div className="absolute flex justify-between items-center ">
              <div className="py-4 pl-[18px] pr-8">
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
              <div className="flex justify-center items-baseline gap-4">
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
              <div className="w-[70px] h-[95px] bg-[#454848] ml-10.5 rounded-bl-[60px] mt-[-08px] ">
                <div className="rigth-icon ">
                  <FaArrowRightLong />
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full h-[96px] bg-no-repeat bg-center bg-cover  bg-[url('./assets/plyerbg.png')] mt-4">
            <div className="absolute h-[96px] w-full bg-linear-to-r from-[#1C1C1C] via-black/80 to-[#090909]/0  " />
            <div className="absolute flex justify-between items-center ">
              <div className="py-4 pl-[18px] pr-8">
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
              <div className="flex justify-center items-baseline gap-4">
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
              <div className="w-[70px] h-[95px] bg-[#454848] ml-10.5 rounded-bl-[60px] mt-[-08px] ">
                <div className="rigth-icon ">
                  <FaArrowRightLong />
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full h-[96px] bg-no-repeat bg-center bg-cover  bg-[url('./assets/plyerbg.png')] mt-4">
            <div className="absolute h-[96px] w-full bg-linear-to-r from-[#1C1C1C] via-black/80 to-[#090909]/0  " />
            <div className="absolute flex justify-between items-center ">
              <div className="py-4 pl-[18px] pr-8">
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
              <div className="flex justify-center items-baseline gap-4">
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
              <div className="w-[70px] h-[95px] bg-[#454848]  rounded-bl-[60px] mt-[-08px] ml-10">
                <div className="rigth-icon ">
                  <FaArrowRightLong />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default GameBord