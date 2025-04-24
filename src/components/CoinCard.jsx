import React from 'react'
import profile from "../assets/profileicons.jpg";

import coin from "../assets/coin.png";
const CoinCard = ({src,alt}) => {
  return (
    <div>
    <div className="relative">
      <div>
        <img src={src} alt={alt} />
      </div>
      <div className="bg-linear-0 from-black to-black/0 absolute bottom-0 left-0  right-0 h-[80%] p-10 pl-[12px] rounded-b-[16px]">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2">
            <img src={profile} alt="" />
          </div>
          <p className="card-protext">Shapeshifter</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2">
            <img src={profile} alt="" />
          </div>
          <p className="card-protext">Ravenous</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2">
            <img src={profile} alt="" />
          </div>
          <p className="card-protext">Ravenous</p>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 left-0  bg-[#111127] py-1.5 border-[1px] border-[#636EA8]/66 rounded-b-[16px]">
        <div className="flex justify-between items-center px-[9px] ">
          <h6 className="card-title">Xerath</h6>
          <div>
            <div className="flex gap-1">
              <img src={coin} alt="" />
              <h6 className="card-reting">5</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CoinCard