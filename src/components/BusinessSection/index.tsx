import React from "react";
import WrapperContent from "../WrapperContent";
import VariantsComponent from "../VariantsComponent";
import Carousel from "../Carousel";
import { BUSINESSES } from "@/common/constants/index";
import BusinessCard from "../BusinessCard";
import Marquee from "react-fast-marquee";
import { PARTNERS } from "@/common/constants";
import { Image } from "@nextui-org/react";
const BusinessSection = () => {
  return (
    <section className="w-full py-16 md:pt-16 lg:pt-32" id="business">
      <WrapperContent>
        <div className="w-full flex flex-col">
          <div className="w-full flex justify-between items-center">
            <VariantsComponent direction="x" startDistance={-100}>
              <h1 className="text-highlight text-5xl md:text-6xl font-medium">
                Our Businesses
              </h1>
            </VariantsComponent>
            {/* <Link href="#" className="text-white uppercase underline font-medium hidden md:inline-block">view all</Link> */}
          </div>
          <Carousel>
            {BUSINESSES.map((item, index) => {
              return (
                <BusinessCard
                  key={index}
                  data={item}
                  className="text-white bg-black w-[80vw] md:w-[70vw] lg:w-[65vw] xl:w-[55vw] h-auto xl:min-h-[55vh] hover:border-white transition-border duration-1000 hover:shadow-[0_4px_55px_20px_#AD00FF40] transition-shadow"
                />
              );
            })}
          </Carousel>
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
          {/* <Link href="#" className="text-white uppercase underline font-medium md:hidden self-center">view all</Link> */}
        </div>
      </WrapperContent>
    </section>
  );
};

export default BusinessSection;
