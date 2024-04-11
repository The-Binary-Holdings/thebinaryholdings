import React from "react";
import Image from "next/image";
import localFont from "next/font/local";
import WrapperContent from "../WrapperContent";
import ParallaxText from "../ParallaxText";
import { FaDiscord, FaRegClock, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiGroupFill } from "react-icons/ri";
import { PiChalkboardTeacherFill } from "react-icons/pi";
import { FaUserCheck } from "react-icons/fa";

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

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="pt-20 h-[calc(100vh-80px)] w-full bg-heros-bg-mobile md:bg-heros-bg-tablet lg:bg-heros-bg bg-no-repeat bg-cover bg-center relative"
    >
      {/* <Image src="/gate.svg" alt='image' width={100} height={100} className='fixed w-full bg-cover'/> */}
      <WrapperContent className="flex flex-col justify-between h-full z-20 md:z-0 bg-black/50 md:bg-transparent relative md:static">
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
        <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-end font-medium">
          <div className="flex flex-col items-center md:items-start md:w-2/5 text-white space-y-10 z-20 mt-10 md:mt-0">
            <p className="text-center lg:text-left lg:-translate-y-20 xl:-translate-y-36 text-sm lg:text-base px-6 md:px-0">
              The Binary Holdings empowers telecommunication
              <br className="hidden xl:block" /> companies to bridge the gap
              from Web2 to Web3
              <br className="hidden xl:block" /> with a human-centric approach.
            </p>
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

        <div className="z-20 mt-10 md:mt-0">
          <div className="flex lg:flex-row flex-col-reverse gap-y-16 justify-between items-end">
            <div className="col-span-2 md:col-span-1 grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10">
              <div>
                <div className="text-black rounded-full h-12 w-12 bg-[#00fb8a] flex justify-center items-center">
                  <RiGroupFill />
                </div>
                <p className="mt-6 2xl:text-4xl xl:text-3xl lg:text-2xl font-semibold lg:whitespace-nowrap">
                  43.6 M
                </p>
                <p className="opacity-80 text-base">Total users</p>
              </div>
              <div>
                <div className="text-black rounded-full h-12 w-12 bg-[#00fb8a] flex justify-center items-center">
                  <PiChalkboardTeacherFill />
                </div>
                <p className="mt-6 2xl:text-4xl xl:text-3xl lg:text-2xl font-semibold lg:whitespace-nowrap">
                  38.61 M
                </p>
                <p className="opacity-80 text-base">Monthly active users</p>
              </div>
              <div>
                <div className="text-black rounded-full h-12 w-12 bg-[#00fb8a] flex justify-center items-center">
                  <FaUserCheck />
                </div>
                <p className="mt-6 2xl:text-4xl xl:text-3xl lg:text-2xl font-semibold lg:whitespace-nowrap">
                  3.34 M
                </p>
                <p className="opacity-80 text-base">Daily active users</p>
              </div>
              <div>
                <div className="text-black rounded-full h-12 w-12 bg-[#00fb8a] flex justify-center items-center">
                  <FaRegClock />
                </div>
                <p className="mt-6 2xl:text-4xl xl:text-3xl lg:text-2xl font-semibold lg:whitespace-nowrap">
                  13.87 mins
                </p>
                <p className="opacity-80 text-base">
                  Avg time spent across apps
                </p>
              </div>
            </div>
            <div className="col-span-2 md:col-span-1 flex justify-center lg:justify-end w-full">
              <div>
                <p>Join our Communication</p>
                <div className="text-black flex justify-center lg:justify-end mt-4 gap-x-4 text-2xl">
                  <div className="bg-white rounded-full h-12 w-12 flex justify-center items-center">
                    <FaXTwitter />
                  </div>
                  <div className="bg-white rounded-full h-12 w-12 flex justify-center items-center">
                    <FaTelegramPlane />
                  </div>
                  <div className="bg-white rounded-full h-12 w-12 flex justify-center items-center">
                    <FaDiscord />
                  </div>
                </div>
              </div>
            </div>
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
        />
      </div>
    </section>
  );
};

export default HeroSection;
