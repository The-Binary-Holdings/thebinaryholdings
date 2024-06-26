import React from "react";
import WrapperContent from "../WrapperContent";
import { Image } from "@nextui-org/react";
import VariantsComponent from "../VariantsComponent";
import Marquee from "react-fast-marquee";
import { PARTNERS, BACKERS } from "@/common/constants";

const PartnerSection = () => {
  return (
    
    <section id="partner" className="w-full py-16 md:pt-16 lg:pt-32">
      <WrapperContent className="hidden md:block">
        <div className="w-full bg-partners rounded-3xl bg-no-repeat bg-cover bg-center">
          <div className="bg-black/50 flex flex-col w-full items-center text-center py-40">
            <p className="uppercase text-white text-sm">partners & Backers</p>
            <VariantsComponent
              direction="y"
              startDistance={-100}
              className="mt-8"
            >
              <h1 className="text-highlight text-6xl font-medium">
                Building Utility: Beyond
              </h1>
              <h1 className="text-highlight text-6xl font-medium">
                Transactions, Creating Value:
              </h1>
            </VariantsComponent>
          </div>
        </div>
      </WrapperContent>
      <div className="block md:hidden w-full bg-partners md:rounded-3xl bg-no-repeat bg-cover bg-center">
        <div className="bg-black/30 flex flex-col w-full items-start text-start py-20 px-8">
          <p className="uppercase text-white text-sm">partners</p>
          <VariantsComponent
            direction="y"
            startDistance={-100}
            className="mt-8"
          >
            <h1 className="text-highlight text-5xl font-medium">
              Building Utility: Beyond
            </h1>
            <h1 className="text-highlight text-5xl font-medium">
              Transactions, Creating Value:
            </h1>
          </VariantsComponent>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-6 w-2/3 mx-auto py-16 xl:py-32 gap-7 text-white">
        {BACKERS.map((backer, index) => {
          return (
            <div key={index} className="border border-[#404040] rounded-2xl flex flex-col min-h-full justify-around items-center py-5 px-3 aspect-square space-y-3">
              <Image alt="icon" src={backer.image} className=" max-h-16" radius="none" removeWrapper/>
              <p className="text-xs text-center">{backer.name}</p>
            </div>
          )
        })}
      </div>
      
    </section>
  );
};

export default PartnerSection;
