import React from "react";
import { FaAngleDown } from "react-icons/fa";
import Button from "../../components/Button";
import CoinCard from "../../components/CoinCard";
import card1 from "../../assets/hero-card1.png";
import card2 from "../../assets/cardcoin.png";
import logo from "../../assets/logo.png";

const NavHero = () => {
  return (
    <div className="relative w-full h-auto bg-cover bg-center bg-[url('./assets/heroimgs.jpg')]">
      <div className="absolute inset-0 hero-bg" />
      <div className="nav-bg ">
        <div className="container mx-auto xl:max-w-[75rem] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-0 ">
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-[60px] xl:py-6 py-4">
              <div>
                <img src={logo} alt="" />
              </div>
              <div className="hidden lg:block">
                <ul className="flex nav-items gap-6 ">
                  <li>
                    <a href="">Board builder</a>
                  </li>
                  <li className="flex gap-2 items-center text-white">
                    <a href="">Guides</a>
                    <FaAngleDown />
                  </li>
                  <li className="flex gap-2 items-center text-white">
                    <a href="">Database</a>
                    <FaAngleDown />
                  </li>
                  <li>
                    <a href="">Coaching</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <Button text={"Improve your game"} />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex justify-between items-center container mx-auto w-full px-4 relative z-10 py-6 ">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div>
              <img src={logo} alt="" />
            </div>
            <div>
              <ul className="flex nav-items gap-6 pt-2">
                <li>
                  <a href="">Board builder</a>
                </li>
                <li className="flex gap-2 items-center text-white">
                  <a href="">Guides</a>
                  <FaAngleDown />
                </li>
                <li className="flex gap-2 items-center text-white">
                  <a href="">Database</a>
                  <FaAngleDown />
                </li>
                <li>
                  <a href="">Coaching</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <Button text={"Improve your game"} />
          </div>
        </div>
      </div> */}

      <div className=" relative z-10 text-white p-5 container mx-auto h-auto w-full xl:max-w-[75rem] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-0  ">
        <div class="herocontent mx-auto xl:w-[808px]">
          <h1 class="hero-title text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[56px]  ">The best place of TFT stats</h1>
          <h6 className="hero-sub text-[16px] pb-2 sm:pb-4 sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] ">Up to date for patch 14.5</h6>
          <p className="hero-para text-sm sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[20px] px-4   ">
            Unlock advanced strategies and climb the ranks with personalized
            coaching, in-depth analysis, your Teamfight Tactics gameplay.
          </p>
          <div className="flex justify-center items-center  pt-[18px] gap-2 flex-wrap">
            <CoinCard src={card1} />
            <CoinCard src={card2} />
            <CoinCard src={card2} />
          </div>
          <div className="flex justify-center items-center pt-[32px] ">
            <Button text={"View comps"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavHero;
