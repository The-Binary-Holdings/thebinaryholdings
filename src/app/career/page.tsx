import React from "react";

import CareerHero from "@/components/CareerHero";
import CareerJobs from "@/components/CareerJobs";
import Separate from "@/components/Separate";
import WrapperContent from "@/components/WrapperContent";

const CareerPage = () => {
  return (
    <div className="pt-24">
      <WrapperContent>
        <CareerHero />
      </WrapperContent>
      <Separate />
      <CareerJobs />
      <Separate />
      <WrapperContent>
        <div className="w-full h-72 xl:h-[600px] bg-center bg-no-repeat bg-cover rounded-3xl overflow-hidden bg-[url(/career_hero_2.png)]">
          <p className="text-center mt-20 font-medium text-2xl lg:text-4xl xl:text-5xl lg:mt-16 xl:mt-96 text-white">
            Express your interest in <br className="md:hidden" /> being
            considered <br className="hidden md:inline-block" /> for
            <br className="md:hidden" /> upcoming opportunities.
          </p>
          <button className="mx-auto mt-6 col-span-3 lg:col-span-1 flex items-center justify-center py-4 px-10 bg-white text-[#080729] hover:opacity-90 rounded-md font-semibold">
            CONTACT US
          </button>
        </div>
      </WrapperContent>
    </div>
  );
};

export default CareerPage;
