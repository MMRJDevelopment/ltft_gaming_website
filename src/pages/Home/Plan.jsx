import React from 'react'
import planicon from "../../assets/plan.png";
import Check from "../../assets/Check.png";

const Plan = () => {
  return (
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
  )
}

export default Plan;