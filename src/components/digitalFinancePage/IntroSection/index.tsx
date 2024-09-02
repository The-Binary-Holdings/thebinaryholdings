import React from "react";
import WrapperContent from "@/components/WrapperContent";
import { Image } from "@nextui-org/react";
import VariantsComponent from "@/components/VariantsComponent";
import { BACKERS } from "@/common/constants";
import { GoDotFill } from "react-icons/go";

const IntroSection = () => {
  return (
    <section id="partner" className="w-full">
      <WrapperContent className="relative">
        <div className="flex flex-col items-center">
          <Image
            src="/token-float-2.gif"
            alt="img"
            removeWrapper
            className="absolute left-0 z-0 w-56 xl:w-96 top-2/3 sm:top-1/2"
            draggable={false}
          />
          <Image
            src="/token-float-1.gif"
            alt="img"
            removeWrapper
            className="absolute left-0 z-0 w-56 xl:w-96 top-32 sm:top-10"
            draggable={false}
          />

          <Image
            src="/token-float-3.gif"
            alt="img"
            removeWrapper
            className="absolute right-0 z-0 w-56 xl:w-96 -top-20 sm:top-10"
            draggable={false}
          />
          <div className="pb-16 lg:pb-32 pt-16 relative z-10">
            <span className="uppercase text-green text-xs flex items-center space-x-2 justify-center ">
              <GoDotFill /> <p>We help you with</p>
            </span>
            <h1 className="text-4xl xl:text-6xl text-white font-medium text-center leading-tight capitalize mt-4 relative z-10">
              Making your crypto
              <br /> world more comfortable <br /> and easy
            </h1>
          </div>
          <div className="py-16 lg:py-32 relative z-10">
            <span className="uppercase text-green text-xs flex items-center space-x-2 justify-center">
              <GoDotFill /> <p>But how?</p>
            </span>
            <h1 className="text-4xl xl:text-6xl text-white font-medium text-center leading-tight capitalize mt-4">
              Through our unique
              <br /> wallet & debit card
            </h1>
          </div>
        </div>
      </WrapperContent>
    </section>
  );
};

export default IntroSection;
