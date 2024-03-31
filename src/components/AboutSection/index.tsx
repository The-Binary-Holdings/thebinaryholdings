import React from "react";
import WrapperContent from "../WrapperContent";
import Image from "next/image";
import VariantsComponent from "../VariantsComponent";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="w-full bg-about rounded-[4rem] flex justify-center pt-32 flex-col items-center overflow-hidden"
    >
      <div className="inline-table w-0 flex-col items-center text-center space-y-20">
        <VariantsComponent startDistance={-100}>
          <h1 className="text-highlight inline-table text-6xl w-fit whitespace-nowrap">
            Where innovation meets Opportunity
          </h1>
        </VariantsComponent>
        <div className="flex text-white w-auto text-start justify-between">
          <VariantsComponent startDistance={100} className="w-2/5">
            <p className="">
              Highlight the focus on human connection, ensuring technology
              enhances, not replaces, meaningful interactions.
            </p>
          </VariantsComponent>
          <VariantsComponent startDistance={100} className="w-2/5">
            <p className="">
              Explain how TBH simplifies the complexities of Web3 for telco
              companies, making the transition smooth and accessible.
            </p>
          </VariantsComponent>
        </div>
      </div>
      <Image
        alt="about-image"
        src={"/about-transcube.png"}
        width={100000}
        height={100}
        className="w-full"
      />
    </section>
  );
};

export default AboutSection;
