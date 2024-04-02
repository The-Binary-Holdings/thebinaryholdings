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
          className={`hidden sm:flex flex-col text-[4.5rem] font-normal leading-none w-full text-highlight ${monumentExtended.className} translate-y-[1000px]`}
        >
          <ParallaxText distance={1000}>
            <h1 className="tracking-tight">SEAMLESSLY</h1>
            <h1 className="tracking-tight">CONNECT</h1>
          </ParallaxText>
        </div>
        <div
          className={`flex sm:hidden flex-col text-6xl font-bold leading-none w-full text-highlight`}
        >
          <h1 className="tracking-tight">SEAMLESSLY</h1>
          <h1 className="tracking-tight">CONNECT</h1>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between items-end font-medium">
          <div className="flex flex-col items-center md:items-start md:w-2/5 text-white space-y-10 z-20 order-2 md:order-1 mt-10 md:mt-0">
            <p className="text-center md:text-left">The Binary Holdings seamlessly guides telecommunication companies through their transition from Web2 to Web3, prioritising a human-first approach.</p>
            <Button className="px-10 py-6 w-fit font-medium uppercase">Join the community</Button>
          </div>
          <div
            className={`hidden sm:flex text-[4.5rem] text-end font-normal order-2 leading-none text-highlight flex-col items-end -translate-y-[1000px] ${monumentExtended.className}`}
          >
            <ParallaxText distance={-1000}>
              <h1 className="tracking-tight">SECURELY</h1>
              <h1 className="tracking-tight">TRANSFORM</h1>
            </ParallaxText>
          </div>
          <div
            className={`flex sm:hidden text-6xl font-bold order-1 md:order-2 leading-none text-highlight flex-col items-end`}
          >
            <h1 className="tracking-tight">SECURELY</h1>
            <h1 className="tracking-tight">TRANSFORM</h1>
          </div>
        </div>
      </WrapperContent>
      <div className="w-full bg-heros-gate bg-no-repeat bg-cover h-full bg-center absolute z-0 md:z-10 top-0 flex items-end" >
        <Image src="/hero-shadow.png" alt='image' width={100} height={100} className="w-full h-1/2"/>
      </div>
    </section>
  );
};

export default HeroSection;
