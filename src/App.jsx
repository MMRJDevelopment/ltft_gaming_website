
import "./App.css";
import { RxCross2 } from "react-icons/rx";
import { FaAngleDown } from "react-icons/fa6";
import CoinCard from "./components/coinCard";
import Button from "./components/Button";
import masterimg from "./assets/boostanimi.png";
import downicon from "./assets/Button.png";
import gameBord from "./assets/gamebord.png";
import divider from "./assets/Vertical-Divider.png";
import coin from "./assets/coing.png";
import { Select } from "antd";
import Serach from "./assets/Serach.png";
import items from "./assets/items.svg.png";
import relode from "./assets/reload.png";
import fills from "./assets/fill.png";
import player1 from "./assets/player1.png";
import player2 from "./assets/player2.png";
import player4 from "./assets/player4.png";
import player5 from "./assets/player5.png";
import player6 from "./assets/player6.png";
import player7 from "./assets/player7.png";
import player8 from "./assets/player8.png";
import downicons from "./assets/shape-downicon.png";
import gamesBord from "./assets/game-bord.png";
import stre1 from "./assets/stre1.png";
import stre2 from "./assets/stre2.png";
import stre3 from "./assets/stre3.png";
import stre4 from "./assets/stre4.png";
import stre5 from "./assets/stre5.png";
import drive from "./assets/Background.png";
import uparow from "./assets/uparow.png";
import vertical from "./assets/veridi.png";
import sicon from "./assets/sicon.png";
import { FaChevronRight, FaArrowRightLong } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import viderthem from "./assets/viderthem.png";
import inconi from "./assets/inconi.png";
import { FaYoutube } from "react-icons/fa";
import cardimg from "./assets/cardimg.png";
import profileimg from "./assets/profileimg.png";
import GameCard from "./components/Home/GameCard";
import planicon from "./assets/plan.png";
import Check from "./assets/Check.png";
import tisbg from "./assets/tisbg.png";
import semicol from "./assets/semicol.png";
import ganlo from "./assets/ganlo.png";
import tisprofile from "./assets/tisprofile.png";
import { IoMdArrowDropleft } from "react-icons/io";
import { GoTriangleRight } from "react-icons/go";

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
import Announce from "./components/Home/Announce";
import NavHero from "./components/Home/NavHero";
import Welcome from "./components/Home/Welcome";

function App() {
  return (
    <>
      <Announce />

      <NavHero />

      <div className="relative w-full h-auto bg-cover bg-center  bg-[url('./assets/boostbg.png')] ">
        <div className="bg-black/29">
          <div className="container mx-auto top-0 left-0  flex justify-start items-center">
            <h5 className="tft-title">Welcome to TFTactis pro</h5>
            <h6 className="tft-para">
              Boost your gameplay! Discover expert guides and winning
              strategies!
            </h6>
          </div>
        </div>
        <div className=" flex justify-between flex-wrap items-center ">
          <div className=" container mx-auto flex justify-start items-start flex-col pt-[32px] w-1/2">
            <h2 className="boost-title">
              <span className="text-[#E5CE51]">Boost</span> your gameplay!
            </h2>
            <p className="boost-para">
              Unlock your potential with our in-depth gaming guides. Learn
              expert strategies tailored to elevate your performance. Dominate
              every match and climb the ranks with confidence!
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


      <div className="bg-[#060606] pt-[100px]  ">
        <div className="relative w-full h-auto bg-no-repeat bg-center  bg-[url('./assets/guid.png')] container mx-auto ">
          <div className="flex justify-center items-center py-[29px] bg-gradient-to-t from-[#111224] via-[#070610]/90 to-[#070610] rounded-xl">
            <h3 className="guide-title">All Set Guide list</h3>
          </div>
        </div>

        <div className="flex justify-between items-start container mx-auto gap-5">
          <div className="w-1/2 tft-meta">
            <h4 className="tft-meta-title">TFT Meta Comps in Set 12</h4>
            <p className="tft-meta-para">
              Find out the strongest and most reliable meta Teamfight Tactics
              comps and builds the best players have been playing so you can
              start your game with a leg up on the competition. Our team comps
              are curated by Challenger expert. game with a leg up on the
              competition. Our team Challenger expert. game with a leg up on the
              competition. Our team Challenger expert.game with a leg up on the
              competition.
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

      <div className="bg-[#060606] pt-[108px]">
        <div className=" container mx-auto flex justify-between items-center">
          <div>
            <h3 className="tft-title-1">
              Personalized <span className="text-[#E5CE51]">TFT coaching</span>
            </h3>
            <p className="ptft-para">
              Transform your gameplay with tailored coaching sessions designed
              specifically for you. Get one-on-one guidance from seasoned TFT
              experts who will analyze your strengths and weaknesses, provide
              actionable insights, and help you refine your strategies.
            </p>
          </div>
          <div className="relative">
            <div>
              <img src={viderthem} alt="" />
            </div>
            <div className="flex justify-center items-center gap-3 absolute top-5 left-6">
              <img src={inconi} alt="" />
              <h4 className="invideopara">
                Incantor Emblem should be used on Vex as she will be casting{" "}
              </h4>
            </div>
            <div className=" border-[#9A9CCC]/71 h-[100px] w-[100px] border-2 border-dashed rounded-full absolute top-[35%] right-[40%] flex justify-center items-center">
              <div className="flex justify-center items-center gap-2 w-20 h-20 bg-[#ABACCA]/29 rounded-full ">
                <div className="text-[#FF0000] text-5xl">
                  <FaYoutube />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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

      <div className="bg-[#060606] pt-[100px]">
        <div>
          <h2 className="plan-title">
            Choose the Perfect{" "}
            <span className="text-[#fCD23E]">Plan for You</span>
          </h2>
          <p className="plan-subpara">
            {" "}
            Explore our packages designed to help you dominate the game, whether
            you're a beginner or a seasoned player
          </p>
          <div>
            <p className="plan-offer">
              Annual pricing <span>(save 20%)</span>
            </p>
          </div>
        </div>
        <div className="flex justify-between items-start container mx-auto pt-[32px]">
          <div className="card-border ">
            <div className="card-bg flex justify-between flex-col">
              <div className="flex justify-center items-center flex-col">
                <div className="pt-[14px]">
                  <img src={planicon} alt="" />
                </div>
                <p className="plan-text pt-3 pb-5">Basic plan</p>
                <h5 className="cost-plan">$40/mth</h5>
                <p className="cost-para pt-2">
                  Advanced features + unlimited users.
                </p>
              </div>
              <div className="flex justify-center items-start flex-col ">
                <div className="flex gap-3 pt-4 px-4">
                  <img src={Check} alt="" />
                  <h5 className="card-service">Advanced custom fields</h5>
                </div>
                <div className="flex gap-3 pt-4 px-4">
                  <img src={Check} alt="" />
                  <h5 className="card-service">Audit log and data history</h5>
                </div>
                <div className="flex gap-3 pt-4 px-4">
                  <img src={Check} alt="" />
                  <h5 className="card-service">Unlimited individual users</h5>
                </div>
              </div>
              <div className="flex justify-center items-center pt-8 pb-10">
                <button className="plan-cardbtn">Take the plane</button>
              </div>
            </div>
          </div>
          <div className="card-border ">
            <div className="card-bg flex justify-between flex-col">
              <div className="flex justify-center items-center flex-col">
                <div className="pt-[14px]">
                  <img src={planicon} alt="" />
                </div>
                <p className="plan-text pt-3 pb-5">Basic plan</p>
                <h5 className="cost-plan">$40/mth</h5>
                <p className="cost-para pt-2">
                  Advanced features + unlimited users.
                </p>
              </div>
              <div className="flex justify-center items-start flex-col ">
                <div className="flex gap-3 pt-4 px-4">
                  <img src={Check} alt="" />
                  <h5 className="card-service">Advanced custom fields</h5>
                </div>
                <div className="flex gap-3 pt-4 px-4">
                  <img src={Check} alt="" />
                  <h5 className="card-service">Audit log and data history</h5>
                </div>
                <div className="flex gap-3 pt-4 px-4">
                  <img src={Check} alt="" />
                  <h5 className="card-service">Unlimited individual users</h5>
                </div>
                <div className="flex gap-3 pt-4 px-4">
                  <img src={Check} alt="" />
                  <h5 className="card-service">Unlimited individual data</h5>
                </div>
              </div>
              <div className="flex justify-center items-center pt-8 pb-10">
                <button className="plan-cardbtn">Take the plane</button>
              </div>
            </div>
          </div>
          <div className="card-border ">
            <div className="card-bg flex justify-between flex-col">
              <div className="flex justify-center items-center flex-col">
                <div className="pt-[14px]">
                  <img src={planicon} alt="" />
                </div>
                <p className="plan-text pt-3 pb-5">Basic plan</p>
                <h5 className="cost-plan">$40/mth</h5>
                <p className="cost-para pt-2">
                  Advanced features + unlimited users.
                </p>
              </div>
              <div className="flex justify-center items-start flex-col ">
                <div className="flex gap-3 pt-4 px-4">
                  <img src={Check} alt="" />
                  <h5 className="card-service">Advanced custom fields</h5>
                </div>
                <div className="flex gap-3 pt-4 px-4">
                  <img src={Check} alt="" />
                  <h5 className="card-service">Audit log and data history</h5>
                </div>
                <div className="flex gap-3 pt-4 px-4">
                  <img src={Check} alt="" />
                  <h5 className="card-service">Unlimited individual users</h5>
                </div>
                <div className="flex gap-3 pt-4 px-4">
                  <img src={Check} alt="" />
                  <h5 className="card-service">Unlimited individual data</h5>
                </div>
                <div className="flex gap-3 pt-4 px-4">
                  <img src={Check} alt="" />
                  <h5 className="card-service">
                    Personalised+priotity service
                  </h5>
                </div>
              </div>
              <div className="flex justify-center items-center pt-8 pb-10">
                <button className="plan-cardbtn">Take the plane</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#060606] py-[120px]">
        <div className="container mx-auto h-auto   ">
          <div className="bg-no-repeat bg-center bg-cover relative">
            <img src={tisbg} alt="" />
            <div className="tiscontebg absolute top-[32px] left-[28px] ">
              <div className="flex justify-center items-center gap-[68px] py-11">
                <div>
                  <div>
                    <img src={tisprofile} alt="" />
                  </div>
                  <div className="flex justify-center items-center val-paly">
                    <img src={ganlo} alt="" />
                    <p className="vat-tis">Valorant player</p>
                  </div>
                  <h4 className="tis-profile">Orvant( Best plane)</h4>
                  <a href="" className="tis-user">
                    @orvant234432
                  </a>
                  <p className="tis-pra">
                    This is Orvant, a valorant player. I was connected with this
                    community since last 2 years. I have 3 strong team and
                    several collection of hero.{" "}
                  </p>
                  <button className="tis-btn mt-6">View profile</button>
                </div>
                <div>
                  <img src={semicol} alt="" />
                  <p className="tis-para">
                    Coaching with Devid Rayna was a game-changer for me! Their
                    tips on strategy and aiming really made a difference. I’m
                    winning more matches and having a blast playing Valorant.
                    Plus, the one-on-one sessions were super helpful and
                    personalized. Highly recommend if you want to up your game!”
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center gap-3 absolute bottom-5 left-[50%] translate-x-[-50%]">
              <div className="next-btn border-[#D8D8D8]/18 hover:bg-[#FCD23E] border-[1.85px] flex justify-center items-center text-[#D0D0D0]/79 hover:text-[#000000] transition duration-300 ease-in-out ">
                <IoMdArrowDropleft className=" text-5xl" />
              </div>
              <div className="next-btn border-[#D8D8D8]/18 hover:bg-[#FCD23E] border-[1.85px] flex justify-center items-center text-[#D0D0D0]/79 hover:text-[#000000] transition duration-300 ease-in-out ">
                <GoTriangleRight className=" text-5xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-[#0F0E12] text-white text-sm h-[540px]  ">
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
      </footer>
    </>
  );
}

export default App;
