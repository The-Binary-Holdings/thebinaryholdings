import React, { useState } from "react";

import WrapperContent from "@/components/WrapperContent";

import { motion } from "framer-motion";
import { LuUsers } from "react-icons/lu";
import { TbCalendarUser, TbUserCheck } from "react-icons/tb";
import { RxClock } from "react-icons/rx";
import { IoEyeOutline } from "react-icons/io5";
import { RiFilePaperLine } from "react-icons/ri";

const KeyNumbers = () => {

    const flipVariants = {
        flipped: {
          rotateX: 360,
          duration: 1,
        },
        unflipped: {
          rotateX: 0,
          duration: 1,
        },
      };
      const [isFlipped, setIsFlipped] = useState([
        false,
        false,
        false,
        false,
        false,
        false,
      ]);

  return (
    <WrapperContent className="z-30 relative bg-black/50 md:bg-transparent">
      <div className="text-white w-full flex flex-col items-center lg:flex-row py-5 lg:py-10">
        <h1 className="text-green text-3xl xl:text-5xl font-semibold">
          Key
          <br className="hidden lg:block" /> Numbers
        </h1>
        <div className="flex flex-row flex-wrap md:flex-nowrap w-full justify-end mt-10 lg:mt-0">
          <div className="flex flex-col w-1/2 md:w-fit border-e-1 border-white/20 ps-4 md:pe-4">
            <motion.div
              initial={{
                rotateX: 0,
              }}
              variants={flipVariants}
              animate={isFlipped[0] ? "flipped" : "unflipped"}
              className="rounded-full p-4 w-fit text-black bg-[#00FB8A]"
            >
              <LuUsers />
            </motion.div>
            <h3 className="text-xl xl:text-3xl font-bold pt-4 whitespace-normal">
              169.05 M
            </h3>
            <p className="text-sm text-[#DCDCDC]">Total Users</p>
          </div>
          <div className="flex flex-col w-1/2 md:w-fit border-e-0 md:border-e-1 border-white/20 px-4">
            <motion.div
              initial={{
                rotateX: 0,
              }}
              variants={flipVariants}
              animate={isFlipped[1] ? "flipped" : "unflipped"}
              className="rounded-full p-4 w-fit text-black bg-[#00FB8A]"
            >
              <TbCalendarUser />
            </motion.div>
            <h3 className="text-xl xl:text-3xl font-bold pt-4 whitespace-normal">
              143.87 M
            </h3>
            <p className="text-sm text-[#DCDCDC]">Monthly Active Users</p>
          </div>
          <div className="flex flex-col w-1/2 md:w-fit border-e-1 border-white/20 px-4 mt-4 sm:mt-0">
            <motion.div
              initial={{
                rotateX: 0,
              }}
              variants={flipVariants}
              animate={isFlipped[2] ? "flipped" : "unflipped"}
              className="rounded-full p-4 w-fit text-black bg-[#00FB8A]"
            >
              <TbUserCheck />
            </motion.div>
            <h3 className="text-xl xl:text-3xl font-bold pt-4 whitespace-normal">
              11.32 M
            </h3>
            <p className="text-sm text-[#DCDCDC]">Daily Active Users</p>
          </div>
          <div className="flex flex-col w-1/2 md:w-fit border-e-0 md:border-e-1 border-white/20 px-4 mt-4 sm:mt-0">
            <motion.div
              initial={{
                rotateX: 0,
              }}
              variants={flipVariants}
              animate={isFlipped[3] ? "flipped" : "unflipped"}
              className="rounded-full p-4 w-fit text-black bg-[#00FB8A]"
            >
              <RxClock />
            </motion.div>
            <h3 className="text-xl xl:text-3xl font-bold pt-4 whitespace-normal">
              13.03 Mins
            </h3>
            <p className="text-sm text-[#DCDCDC]">
              Avg. time spent across apps
            </p>
          </div>
          <div className="flex flex-col w-1/2 md:w-fit border-e-1 border-white/20 px-4 mt-4 sm:mt-0">
            <motion.div
              initial={{
                rotateX: 0,
              }}
              variants={flipVariants}
              animate={isFlipped[4] ? "flipped" : "unflipped"}
              className="rounded-full p-4 w-fit text-black bg-[#00FB8A]"
            >
              <IoEyeOutline />
            </motion.div>
            <h3 className="text-xl xl:text-3xl font-bold pt-4 whitespace-normal">
              309.81 B
            </h3>
            <p className="text-sm text-[#DCDCDC]">Impressions</p>
          </div>
          <div className="flex flex-col w-1/2 md:w-fit px-4 mt-4 sm:mt-0">
            <motion.div
              initial={{
                rotateX: 0,
              }}
              variants={flipVariants}
              animate={isFlipped[5] ? "flipped" : "unflipped"}
              className="rounded-full p-4 w-fit text-black bg-[#00FB8A]"
            >
              <RiFilePaperLine />
            </motion.div>
            <h3 className="text-xl xl:text-3xl font-bold pt-4 whitespace-normal">
              8.51 B
            </h3>
            <p className="text-sm text-[#DCDCDC]">Engagement</p>
          </div>
        </div>
      </div>
    </WrapperContent>
  );
};

export default KeyNumbers;
