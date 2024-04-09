import React from "react";
import WrapperContent from "../WrapperContent";
import { Image } from "@nextui-org/react";
import VariantsComponent from "../VariantsComponent";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="w-full flex justify-center md:pt-16 lg:pt-32 xl:pt-64 flex-col items-center relative"
    >
      <div className="inline-table w-0 flex-col items-center text-start md:text-center space-y-20 z-10 translate-y-10">
        <VariantsComponent startDistance={-100}>
          <h1 className="text-highlight flex md:inline-table text-5xl md:text-6xl w-fit md:whitespace-nowrap font-medium">
            Where innovation <br className="hidden md:block xl:hidden"/> meets Opportunity
          </h1>
        </VariantsComponent>
        <div className="flex text-white flex-col md:flex-row md:space-x-3 xl:space-x-0 w-auto text-start justify-between space-y-10 md:space-y-0">
          <VariantsComponent startDistance={100} className="w-full xl:w-2/5">
            <p className="">
            The Binary Holdings strongly emphasises fostering human connections, ensuring that technology enriches, rather than replaces, meaningful interactions.
            </p>
          </VariantsComponent>
          <VariantsComponent startDistance={100} className="w-full xl:w-2/5">
            <p className="">
            We demystify the complexities of Web3 for telecommunications companies, facilitating a smooth and straightforward transition to this new digital frontier.
            </p>
          </VariantsComponent>
        </div>
      </div>
      <Image
        alt="about-image"
        src={"/about-img.jpg"}
        width={100000}
        height={100}
        loading="eager"
        disableSkeleton
        removeWrapper
        className="w-full z-0 object-cover hidden md:block"
      />
      <div className="w-full h-[50vh] block md:hidden bg-about bg-no-repeat bg-cover bg-center">

      </div>
    </section>
  );
};

export default AboutSection;
