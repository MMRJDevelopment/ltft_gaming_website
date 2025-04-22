import React from 'react'
import { MdArrowRightAlt } from "react-icons/md";
import '../App.css'
const Button = ({text}) => {
  return (
    <div className="flex gap-2 items-center text-black bg-[#E5CE51] py-[10px] px-5 nav-btn">
            <MdArrowRightAlt />
            <a href="">{text}</a>
          </div>
  )
}

export default Button