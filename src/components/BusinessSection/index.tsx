import React from "react";
import WrapperContent from "../WrapperContent";
import VariantsComponent from "../VariantsComponent";
import Carousel from "../Carousel";
import { BUSINESSES } from "@/common/constants/index";
import BusinessCard from "../BusinessCard";

const BusinessSection = () => {
  return (
    <section className="w-full py-32">
      <WrapperContent>
        <div className="w-full flex flex-col space-y-20">
          <div className="w-full flex justify-between">
            <VariantsComponent direction="x" startDistance={-100}>
              <h1 className="text-highlight text-6xl font-medium">
                Our Businesses
              </h1>
            </VariantsComponent>
            <p className="text-white">see all</p>
          </div>
          <Carousel>
            {BUSINESSES.map((item, index) => {
              return (
                <BusinessCard
                  key={index}
                  data={item}
                  className="text-white bg-black w-[60vw] hover:border-white transition-border duration-1000 hover:shadow-[0_4px_55px_20px_#AD00FF40] transition-shadow"
                />
              );
            })}
          </Carousel>
        </div>
      </WrapperContent>
    </section>
  );
};

export default BusinessSection;
