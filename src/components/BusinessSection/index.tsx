import React from "react";
import WrapperContent from "../WrapperContent";
import VariantsComponent from "../VariantsComponent";
import Carousel from "../Carousel";
import { BUSINESSES } from "@/common/constants/index";
import BusinessCard from "../BusinessCard";
import { Link } from "@nextui-org/react";

const BusinessSection = () => {
  return (
    <section className="w-full py-16 md:py-32">
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
                  className="text-white bg-black w-[80vw] md:w-[55vw] h-auto md:h-[55vh] hover:border-white transition-border duration-1000 hover:shadow-[0_4px_55px_20px_#AD00FF40] transition-shadow"
                />
              );
            })}
          </Carousel>
          {/* <Link href="#" className="text-white uppercase underline font-medium md:hidden self-center">view all</Link> */}
        </div>
      </WrapperContent>
    </section>
  );
};

export default BusinessSection;
