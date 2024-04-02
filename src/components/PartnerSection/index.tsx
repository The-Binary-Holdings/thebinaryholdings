import React from "react";
import WrapperContent from "../WrapperContent";
import { Image } from "@nextui-org/react";
import VariantsComponent from "../VariantsComponent";
import Marquee from "react-fast-marquee";
import { PARTNERS } from "@/common/constants";

const PartnerSection = () => {
  return (
    <section id="partner" className="w-full py-16 md:py-32">
      <WrapperContent className="hidden md:block">
        <div className="w-full bg-partners rounded-3xl bg-no-repeat bg-cover bg-center">
          <div className="bg-black/50 flex flex-col w-full items-center text-center py-40">
            <p className="uppercase text-white text-sm">partners</p>
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
      <Marquee
        className="w-full mt-10 grid grid-cols-5 border-y-2 border-white overflow-y-hidden"
        autoFill
      >
        {PARTNERS.map((partner, index) => (
          <div key={index} className="flex justify-center p-16">
            <Image
              src={partner.image}
              alt="partner-logo"
              removeWrapper
              className="w-full h-[60px]"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default PartnerSection;
