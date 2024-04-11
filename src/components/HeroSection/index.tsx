"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import localFont from "next/font/local";
import WrapperContent from "../WrapperContent";
import ParallaxText from "../ParallaxText";
import { FaDiscord, FaRegClock, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { LuUsers } from "react-icons/lu";
import { TbCalendarUser } from "react-icons/tb";
import { TbUserCheck } from "react-icons/tb";
import { RxClock } from "react-icons/rx";
import { motion } from "framer-motion";

const monumentExtended = localFont({
  src: [
    {
      path: "../../../public/fonts/monumentextended-freeforpersonaluse/MonumentExtended-FreeForPersonalUse/MonumentExtended-Regular.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/monumentextended-freeforpersonaluse/MonumentExtended-FreeForPersonalUse/MonumentExtended-Ultrabold.otf",
      weight: "700",
      style: "bold",
    },
  ],
});

const flipVariants = {
  flipped: {
    rotateX: 360,
    duration: 1
  },
  unflipped: {
    rotateX: 0,
    duration: 1
  },
};

const HeroSection = () => {
  const [isFlipped, setIsFlipped] = useState([false, false, false, false]);

  useEffect(() => {
    function getRandomInterval(min: number, max: number) {
      // Ensure min is less than or equal to max
      min = Math.min(min, max);
      max = Math.max(min, max);

      // Generate a random number between min (inclusive) and max (exclusive)
      const randomTime = Math.floor(Math.random() * (max - min)) + min;

      return randomTime;
    }

    const interval1 = setInterval(() => {
      setIsFlipped(prev => [true, prev[1], prev[2], prev[3]]);
      setTimeout(() => setIsFlipped(prev => [false, prev[1], prev[2], prev[3]]), getRandomInterval(15000, 50000));
    }, getRandomInterval(3000, 5000));

    const interval2 = setInterval(() => {
      setIsFlipped(prev => [prev[0], true, prev[2], prev[3]]);
      setTimeout(() => setIsFlipped(prev => [prev[0], false, prev[2], prev[3]]), getRandomInterval(15000, 50000));
    }, getRandomInterval(3000, 5000));

    const interval3 = setInterval(() => {
      setIsFlipped(prev => [prev[0], prev[1], true, prev[3]]);
      setTimeout(() => setIsFlipped(prev => [prev[0], prev[1], false, prev[3]]), getRandomInterval(15000, 50000));
    }, getRandomInterval(3000, 5000));

    const interval4 = setInterval(() => {
      setIsFlipped(prev => [prev[0], prev[1], prev[2], true]);
      setTimeout(() => setIsFlipped(prev => [prev[0], prev[1], prev[2], false]), getRandomInterval(15000, 50000));
    }, getRandomInterval(3000, 5000));

    return () => {
      clearInterval(interval1)
      clearInterval(interval2)
      clearInterval(interval3)
      clearInterval(interval4)
    };
  }, []);

  return (
    <section
      id="hero"
      className="w-full bg-heros-bg-mobile md:bg-heros-bg-tablet lg:bg-heros-bg bg-no-repeat bg-cover bg-center relative"
    >
      {/* <Image src="/gate.svg" alt='image' width={100} height={100} className='fixed w-full bg-cover'/> */}
      <WrapperContent className="flex h-screen flex-col justify-evenly overflow-hidden z-20 md:z-0 bg-black/50 md:bg-transparent relative md:static">
        <div
          className={`mt-20 hidden sm:flex flex-col md:text-[3.5rem] xl:text-[4.5rem] md:z-20 xl:z-0 font-normal leading-none w-full text-highlight ${monumentExtended.className} translate-y-[200px]`}
        >
          <ParallaxText distance={200}>
            <h1 className="tracking-tight">SEAMLESSLY</h1>
            <h1 className="tracking-tight">CONNECT</h1>
          </ParallaxText>
        </div>
        <div
          className={`flex sm:hidden flex-col text-6xl font-bold leading-none w-full text-highlight`}
        >
          <div className="mt-20 lg:mt-0 text-5xl">
            <h1 className="tracking-tight">SEAMLESSLY</h1>
            <h1 className="tracking-tight">CONNECT</h1>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between items-end font-medium">
          <div className="flex flex-col items-center md:self-start md:items-start md:w-2/5 text-white space-y-10 z-20 order-2 md:order-1 mt-10 md:mt-0">
            <p className="text-center md:text-left">
              The Binary Holdings seamlessly guides telecommunication companies
              through their transition from Web2 to Web3, prioritising a
              human-first approach.
            </p>
            {/* <div className="flex items-center">
              <div className="px-6 py-4 bg-white text-black font-medium uppercase rounded-md shadow-md flex items-center">
                <span className="pr-6">Join the community</span>
                <a
                  key="twitter"
                  href="https://twitter.com/thebinaryhldgs"
                  className="bg-white p-3 text-xl rounded-full text-black flex items-center justify-center"
                >
                  <FaXTwitter className="text-black" />
                </a>
                <a
                  key="telegram"
                  href="https://t.me/tbhofficialchat"
                  className="bg-white p-3 text-xl rounded-full text-black flex items-center justify-center"
                >
                  <FaTelegram className="text-black" />
                </a>

                <a
                  key="discord"
                  href="https://discord.gg/wCXJmTBGr2"
                  className="bg-white p-3 text-xl rounded-full text-black flex items-center justify-center"
                >
                  <FaDiscord className="text-black" />
                </a>
              </div>
            </div> */}
          </div>
          <div
            className={`hidden sm:flex md:text-[3.5rem] xl:text-[4.5rem] md:z-20 xl:z-0 text-end font-normal order-2 leading-none text-highlight flex-col items-end -translate-y-[200px] ${monumentExtended.className}`}
          >
            <ParallaxText distance={-200}>
              <h1 className="tracking-tight">SECURELY</h1>
              <h1 className="tracking-tight">TRANSFORM</h1>
            </ParallaxText>
          </div>
          <div
            className={`mt-20 lg:mt-0 flex sm:hidden text-5xl font-bold order-1 md:order-2 leading-none text-highlight flex-col items-end`}
          >
            <h1 className="tracking-tight">SECURELY</h1>
            <h1 className="tracking-tight">TRANSFORM</h1>
          </div>
        </div>
      </WrapperContent>

      <WrapperContent className="z-30 relative bg-black/50 md:bg-transparent">
        <div className="text-white w-full flex flex-col-reverse items-center lg:flex-row justify-between lg:items-end">
          <div className="flex flex-row flex-wrap md:flex-nowrap mt-10 md:mt-5">
            <div className="flex flex-col mt-5 w-1/2 md:w-fit border-e-1 border-white/20 ps-8 md:pe-8">
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
              <h3 className="text-3xl font-medium pt-4 whitespace-normal">
                18.5 B
              </h3>
              <p className="text-sm text-[#DCDCDC]">Total Users</p>
            </div>
            <div className="flex flex-col w-1/2 mt-5 md:w-fit border-e-0 md:border-e-1 border-white/20 px-8">
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
              <h3 className="text-3xl font-medium pt-4 whitespace-normal">
                38.16 M
              </h3>
              <p className="text-sm text-[#DCDCDC]">Monthly Active Users</p>
            </div>
            <div className="flex flex-col w-1/2 mt-5 md:w-fit border-e-1 border-white/20 px-8">
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
              <h3 className="text-3xl font-medium pt-4 whitespace-normal">
                3.34 M
              </h3>
              <p className="text-sm text-[#DCDCDC]">Daily Active Users</p>
            </div>
            <div className="flex flex-col w-1/2 mt-5 md:w-fit border-white/20 ps-8">
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
              <h3 className="text-3xl font-medium pt-4 whitespace-normal">
                13.84 Mins
              </h3>
              <p className="text-sm text-[#DCDCDC]">
                Avg. time spent across apps
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-white/75">Join Our Community</p>
            <span className="flex space-x-3 pt-3">
              <a
                href="https://twitter.com/thebinaryhldgs"
                className="bg-white p-3 text-xl rounded-full text-black flex items-center justify-center w-fit cursor-pointer"
              >
                <FaXTwitter className="text-black" />
              </a>
              <a
                key="telegram"
                href="https://t.me/tbhofficialchat"
                className="bg-white p-3 text-xl rounded-full text-black flex items-center justify-center w-fit"
              >
                <FaTelegram className="text-black" />
              </a>

              <a
                key="discord"
                href="https://discord.gg/wCXJmTBGr2"
                className="bg-white p-3 text-xl rounded-full text-black flex items-center justify-center w-fit"
              >
                <FaDiscord className="text-black" />
              </a>
            </span>
          </div>
        </div>
      </WrapperContent>
      <div className="w-full bg-heros-gate bg-no-repeat bg-cover h-full bg-center absolute z-0 md:z-10 top-0 flex items-end">
        <Image
          src="/hero-shadow.png"
          alt="image"
          width={100}
          height={100}
          className="w-full h-1/2"
          draggable={false}
        />
      </div>
    </section>
  );
};

export default HeroSection;
