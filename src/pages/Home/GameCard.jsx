import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import "../../App.css";

const GameCard = ({ cardimg, profileimg }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="w-[263px] h-auto relative py-10 group transition duration-700 ease-in-out"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="w-full bg-cover">
        <img src={cardimg} alt="" />
      </div>
      <div className="w-12 h-12 rounded-full absolute top-23 left-7">
        <img src={profileimg} alt="" />
      </div>

      <div className="inner-curve bg-[#201F22] -mt-2 pt-[34px] px-[14px] pb-5 group/item">
        <div>
          <h2 className="card-name">Late game play(LOL)</h2>
          <a href="" className="profileusers">
            @orvant234432
          </a>
        </div>

        {/* Patch Buttons */}
        {hovered && (
                    <motion.div
                    initial="hidden"
                    animate={hovered ? "visible" : "hidden"}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          delayChildren: 0.2,
                          staggerChildren: 0.15,
                        },
                      },
                    }}
                    className="flex justify-between items-center pt-2"
                  >
                    {["Patch 14.2", "Level 6 Slow Roll", "Easy"].map((text, i) => (
                      <motion.button
                        key={i}
                        className="card-patch"
                        variants={{
                          hidden: { opacity: 0, y: 10 },
                          visible: { opacity: 1, y: 0 },
                        }}
                      >
                        {text}
                      </motion.button>
                    ))}
                  </motion.div>
        )}

        {/* Description Text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={hovered ? { opacity: 1, y: 1 } : { opacity: 10, y: 10 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="card-dis"
        >
          {hovered
            ? "Take your Valorant game to the next level with receiving expert analysis of your gameplay, customized strategies to improve your aiming and mechanics, team coordination and map awareness."
            : "Take your Valorant game to the next level with receiving expert analysis of your gameplay, "}
        </motion.p>

        {/* Action Buttons */}
        {hovered && (
          <motion.div
            animate={hovered && "visible" }
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  delayChildren: 0.6,
                  staggerChildren: 0.2,
                },
              },
            }}
            className="flex justify-between items-center pt-4"
          >
            <motion.button
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              className="canl-btn"
            >
              Cancel
            </motion.button>
            <motion.button
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              className="join-btn"
            >
              Join session
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default GameCard;
