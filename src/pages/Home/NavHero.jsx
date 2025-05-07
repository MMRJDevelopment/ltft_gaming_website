import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaAngleDown } from "react-icons/fa";
import Button from "../../components/Button";
import CoinCard from "../../components/CoinCard";
import card1 from "../../assets/hero-card1.png";
import card2 from "../../assets/cardcoin.png";
import logo from "../../assets/logo.png";
import { RxCross2 } from "react-icons/rx";


const NavHero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="relative w-full h-auto bg-cover bg-center bg-[url('./assets/heroimgs.jpg')]">
      <div className="absolute inset-0 hero-bg" />
      <div className="relative">
        <div className="nav-bg  ">
          <div className="container mx-auto xl:max-w-[75rem] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-0 ">
            <div className="flex justify-between items-center">
              <div className="flex justify-between items-center gap-[60px]  xl:py-6 py-4">
                <div className="flex justify-between items-center flex-row gap-[64vw] sm:gap-[72vw]  lg:gap-10  ">
                <div className="w-14">
                  <img src={logo} alt="" />
                </div>
                  <div className="lg:hidden" onClick={toggleMenu}>
                    <motion.div
                      className="flex flex-col space-y-2 "
                      initial={{ rotate: 0 }}
                      animate={{
                        rotate: isMenuOpen ? 45 : 0,
                        x: isMenuOpen ? 1 : 0, // Add x position adjustment for the middle bar
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Top Bar */}
                      <div className="w-8 h-1 bg-white"></div>

                      {/* Middle Bar */}
                      <motion.div
                        className="w-8 h-1 bg-white"
                        animate={{
                          opacity: isMenuOpen ? 0 : 0,
                          rotate: isMenuOpen ? 45 : 0, // Hide middle bar when open
                        }}
                        transition={{ duration: 0.2 }}
                      ></motion.div>

                      {/* Bottom Bar */}
                      <div className="w-8 h-1 bg-white"></div>
                    </motion.div>
                  </div>
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
              <div className="hidden lg:block" >
                <Button text={"Improve your game"} />
              </div>
            </div>
          </div>
        </div>
        <motion.div
          className={` right-0 w-full  bg-gray-800 text-white lg:hidden z-50 absolute`}
          initial={{ x: "100%" }} // Initially off-screen
          animate={{ x: isMenuOpen ? 0 : "100%" }} // Slide in when menu is open
          transition={{ type: "spring", stiffness: 300, damping: 80 }}
        >
          <ul className="flex flex-col items-center justify-center space-y-6 py-6">
            <li>
              <a href="/" className="text-white text-xl">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="text-white text-xl">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="text-white text-xl">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="text-white text-xl">
                Contact
              </a>
            </li>
          </ul>
          <div className="flex justify-center items-center pt-2 pb-6 ">
            <Button text={"Improve your game"} />
          </div>
        </motion.div>

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

        <div className="relative   text-white p-5 container mx-auto h-auto w-full xl:max-w-[75rem] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-0  ">
          <div class="herocontent mx-auto xl:w-[808px] ">
            <h1 class="hero-title text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[56px]  ">
              The best place of TFT stats
            </h1>
            <h6 className="hero-sub text-[16px] pb-2 sm:pb-4 sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] ">
              Up to date for patch 14.5
            </h6>
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
    </div>
  );
};

export default NavHero;
