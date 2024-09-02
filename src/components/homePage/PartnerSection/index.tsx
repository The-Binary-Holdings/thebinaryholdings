import React from "react";
import WrapperContent from "@/components/WrapperContent";
import { Image } from "@nextui-org/react";
import VariantsComponent from "@/components/VariantsComponent";
import { BACKERS } from "@/common/constants";

const PartnerSection = () => {
  return (
    <section id="partner" className="w-full">
      <WrapperContent className="relative">
        <div className="flex flex-col w-full items-center text-center relative z-0 pt-24 sm:pt-64 lg:pt-80">
          <Image
            alt="img"
            src="./partner-bg.png"
            removeWrapper
            className="absolute top-0 w-5/6 left-0 right-0 -z-10 mx-auto shadow-inner shadow-black"
          />
          <VariantsComponent
            direction="y"
            startDistance={-100}
            className="sm:mt-4 lg:mt-8"
          >
            <h1 className="text-highlight text-3xl lg:text-5xl font-semibold relative z-10">
              Partners & Backers
            </h1>
          </VariantsComponent>
        </div>
      </WrapperContent>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 w-2/3 mx-auto py-10 lg:py-20 gap-7 text-white">
        {BACKERS.map((backer, index) => {
          return (
            <div
              key={index}
              className="border border-[#404040] rounded-2xl flex flex-col min-h-full justify-around items-center py-5 px-3 aspect-square space-y-3 relative z-10"
            >
              <Image
                alt="icon"
                src={backer.image}
                className=" max-h-16"
                radius="none"
                removeWrapper
              />
              <p className="text-xs text-center">{backer.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PartnerSection;
