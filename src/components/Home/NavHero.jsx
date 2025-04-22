import React from "react";
import { FaAngleDown } from "react-icons/fa";
import Button from "../../components/Button";
import CoinCard from "../../components/CoinCard";
import card1 from "../../assets/hero-card1.png";
import card2 from "../../assets/cardcoin.png";
import logo from "../../assets/logo.png";

const NavHero = () => {
  return (
    <div className="relative w-full h-auto bg-cover bg-center  bg-[url('./assets/heroimgs.jpg')] ">
        <div className="nav-bg absolute inset-0 h-[90px] "></div>
        <div className="absolute inset-0 hero-bg"></div>
        <div className="flex justify-between items-center  container mx-auto w-full px-4 sm:max-w-[40rem] md:max-w-[48rem] lg:max-w-[64rem] xl:max-w-[75rem]  relative z-10 py-6">
          <div className="flex justify-between content-center gap-[60px] ">
            <div>
              <img src={logo} alt="" />
            </div>
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
          <Button text={"Improve your game"} />
        </div>

        <div className=" relative z-10 text-white p-10 container mx-auto h-auto w-full  ">
          <div class="herocontent mx-auto xl:w-[808px]">
            <h1 class="hero-title">The best place of TFT stats</h1>
            <h6 className="hero-sub">Up to date for patch 14.5</h6>
            <p className="hero-para">
              Unlock advanced strategies and climb the ranks with personalized
              coaching, in-depth analysis, your Teamfight Tactics gameplay.
            </p>
            <div className="flex justify-center items-center px-[112px] pt-[18px] gap-2">
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
