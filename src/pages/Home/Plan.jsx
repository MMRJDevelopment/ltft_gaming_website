import React from "react";
import planicon from "../../assets/plan.png";
import Check from "../../assets/Check.png";

const Plan = () => {
  return (
    <div className="bg-[#060606]  xl:pt-[100px] ">
      <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-0 xl:max-w-[75rem] ">
        <div>
          <h2 className="plan-title xl:text-[48px] text-4xl">
            Choose the Perfect{" "}
            <span className="text-[#fCD23E]">Plan for You</span>
          </h2>
          <p className="plan-subpara xl:text-[20px] text-base text-center ">
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
        <div className="flex justify-center xl:justify-between  items-start flex-wrap container mx-auto pt-[32px] gap-y-4 md:gap-x-10 xl:gap-x-0 ">
          <div className="card-bordercontiner xl:w-[386.889px] w-[330px]">
            <div className="card-border xl:w-[384.889px] w-[324px] ">
              <div className="card-bg xl:w-[361.02px] w-[306px] flex justify-between flex-col">
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
                  <button className="plan-cardbtn xl:px-[108.406px] py-2 px-10">
                    Take the plane
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card-bordercontiner xl:w-[386.889px] w-[330px] ">
            <div className="card-border  xl:w-[384.889px] w-[324px] ">
              <div className="card-bg xl:w-[361.02px] w-[306px] flex justify-between flex-col">
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
                  <button className="plan-cardbtn xl:px-[108.406px] py-2 px-10">
                    Take the plane
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card-bordercontiner xl:w-[386.889px] w-[330px]">
            <div className="card-border  xl:w-[384.889px] w-[324px] ">
              <div className="card-bg xl:w-[361.02px] w-[306px] flex justify-between flex-col">
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
                  <button className="plan-cardbtn xl:px-[108.406px] py-2 px-10">
                    Take the plane
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
