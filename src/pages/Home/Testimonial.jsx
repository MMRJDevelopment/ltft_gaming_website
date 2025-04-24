import React from 'react'
import tisbg from "../../assets/tisbg.png";
import semicol from "../../assets/semicol.png";
import ganlo from "../../assets/ganlo.png";
import tisprofile from "../../assets/tisprofile.png";
import { IoMdArrowDropleft } from "react-icons/io";
import { GoTriangleRight } from "react-icons/go";

const Testimonial = () => {
  return (
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
  )
}

export default Testimonial