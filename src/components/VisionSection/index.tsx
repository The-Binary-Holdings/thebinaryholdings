import React from "react";
import WrapperContent from "../WrapperContent";
import { Button, Image } from "@nextui-org/react";
import VariantsComponent from "../VariantsComponent";

const VisionSection = () => {
  return (
    <section className="w-full text-white mt-32 py-32">
      <WrapperContent>
        <div className="w-full grid grid-cols-2 gap-x-44">
          <div className="flex flex-col space-y-20 p-20 justify-center">
            <VariantsComponent direction="x" startDistance={-100}>
              <p className="text-sm text-[#AD00FF]">VISION</p>
              <h1 className="text-highlight text-6xl font-medium">
                Bridging Worlds with Ease and Security
              </h1>
            </VariantsComponent>
            <VariantsComponent direction="x" startDistance={-100}>
              <p className="text-lg">
                Highlight the focus on human connection, ensuring technology
                enhances, not replaces, meaningful interactions.
              </p>
            </VariantsComponent>
            <VariantsComponent direction="x" startDistance={-100}>
              <Button className="w-fit px-16 py-8 bg-white font-semibold ">
                CLICK TO EXPLORE
              </Button>
            </VariantsComponent>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <VariantsComponent
              className="row-span-4"
              startDistance={-100}
              delay={0.5}
            >
              <Image
                src="/vision-1.png"
                alt="vision-image"
                removeWrapper
                className="h-full w-full object-cover"
              />
            </VariantsComponent>
            <VariantsComponent className="row-span-1" startDistance={-100}>
              <div className="bg-[#00FB8A] p-6 rounded-3xl text-black rounded-ee-none font-medium">
                SHOWCASE TBH&apos;S EXPERTISE IN FACILITATING SECURE AND
                USER-FRIENDLY MIGRATION FROM WEB2 TO WEB3.
              </div>
            </VariantsComponent>
            <VariantsComponent className="row-span-4" startDistance={-100}>
              <Image
                src="/vision-2.png"
                alt="vision-image"
                removeWrapper
                className="h-full w-full object-cover"
              />
            </VariantsComponent>
            <VariantsComponent
              className="row-span-2"
              startDistance={-100}
              delay={0.5}
            >
              <Image
                src="/vision-3.png"
                alt="vision-image"
                removeWrapper
                className="h-full w-full object-cover"
              />
            </VariantsComponent>
            <VariantsComponent className="row-span-1" startDistance={-100}>
              <div className="bg-[#402D98] p-6 rounded-3xl text-white rounded-se-none font-medium">
                EMPHASIZE THE COMMITMENT TO PROVIDING CONTINUOUS SUPPORT
                THROUGHOUT THE JOURNEY.
              </div>
            </VariantsComponent>
          </div>
        </div>
      </WrapperContent>
    </section>
  );
};

export default VisionSection;
