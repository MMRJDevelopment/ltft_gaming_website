import React from 'react'
import viderthem from "../../assets/viderthem.png";
import inconi from "../../assets/inconi.png";
import { FaYoutube } from "react-icons/fa";
const Personalized = () => {
  return (
    <div className="bg-[#060606] pt-10 xl:pt-[108px]">
    <div className=" container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-0 xl:max-w-[75rem] h-auto  flex flex-wrap xl:flex-nowrap justify-between items-center">
      <div>
        <h3 className="tft-title-1 lg:text-[48px] xl:w-[460px] text-2xl ">
          Personalized <span className="text-[#E5CE51]">TFT coaching</span>
        </h3>
        <p className="ptft-para py-4 lg:text-[20px] text-wrap text-[14px] xl:w-[485px] lg-w-full ">
          Transform your gameplay with tailored coaching sessions designed
          specifically for you. Get one-on-one guidance from seasoned TFT
          experts who will analyze your strengths and weaknesses, provide
          actionable insights, and help you refine your strategies.
        </p>
      </div>
      <div className="relative lg:w-full ">
        <div>
          <img src={viderthem} alt="" className='lg:bg-cover lg:w-full' />
        </div>
        <div className="flex justify-center items-center gap-3 absolute top-5 left-6">
          <img src={inconi} alt=""  />
          <h4 className="invideopara lg:text-[18px] ">
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
  )
}

export default Personalized