import React from "react";
import Image from "next/image";
import localFont from "next/font/local";
import WrapperContent from "../WrapperContent";
import { Button } from "@nextui-org/react";
import ParallaxText from "../ParallaxText";

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
    <section id="hero" className="h-screen w-full bg-heros-bg bg-no-repeat bg-cover bg-center relative">
      {/* <Image src="/gate.svg" alt='image' width={100} height={100} className='fixed w-full bg-cover'/> */}
      <WrapperContent className="flex flex-col justify-evenly overflow-hidden h-full z-20 md:z-0 bg-black/50 md:bg-transparent relative md:static">
        <div
          className={`hidden sm:flex flex-col text-[5rem] font-normal leading-none w-full text-highlight ${monumentExtended.className} translate-y-[400px]`}
        >
          <ParallaxText distance={400}>
            <h1>SEAMLESSLY</h1>
            <h1>CONNECT</h1>
          </ParallaxText>
        </div>
        <div
          className={`flex sm:hidden flex-col text-6xl font-bold leading-none w-full text-highlight`}
        >
          <h1>SEAMLESSLY</h1>
          <h1>CONNECT</h1>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between items-end">
          <div className="flex flex-col items-center md:items-start md:w-1/4 text-white space-y-10 z-20 order-2 md:order-1 mt-10 md:mt-0">
            <p className="text-center md:text-left">The Binary Holdings empowers telecommunication companies to bridge the gap from Web2 to Web3 with a human-centric approach.</p>
            <Button className="px-12 py-6 w-fit">CLICK TO EXPLORE</Button>
          </div>
          <div
            className={`hidden sm:flex text-[5rem] font-normal order-2 leading-none text-highlight flex-col items-end -translate-y-[400px] ${monumentExtended.className}`}
          >
            <ParallaxText distance={-400}>
              <h1>SECURELY</h1>
              <h1>TRANSFORM</h1>
            </ParallaxText>
          </div>
          <div
            className={`flex sm:hidden text-6xl font-bold order-1 md:order-2 leading-none text-highlight flex-col items-end`}
          >
            <h1>SECURELY</h1>
            <h1>TRANSFORM</h1>
          </div>
        </div>
      </WrapperContent>
      <div className="w-full bg-heros-gate bg-cover h-full bg-center absolute z-0 md:z-10 top-0 flex items-end" >
        <Image src="/hero-shadow.png" alt='image' width={100} height={100} className="w-full"/>
      </div>
    </section>
  );
};

export default HeroSection;
