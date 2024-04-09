import React from "react";
import WrapperContent from "../WrapperContent";
import { Button, Image } from "@nextui-org/react";
import VariantsComponent from "../VariantsComponent";

const VisionSection = () => {
  return (
    <section className="w-full text-white md:mt-32 py-16 md:py-32">
      <WrapperContent>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:gap-x-44 gap-y-20">
          <div className="flex flex-col space-y-10 md:p-10 justify-center">
            <VariantsComponent direction="x" startDistance={-100}>
              <p className="text-sm text-[#AD00FF]">VISION</p>
              <h1 className="text-highlight mt-10 md:mt-0 text-5xl md:text-6xl font-medium">
                Bridging Worlds: Seamless Web3 Integration
              </h1>
            </VariantsComponent>
            <VariantsComponent direction="x" startDistance={-100}>
              <p className="">
                The Binary Holdings (TBH) aims to dismantle the existing
                barriers to entry for telecommunication companies looking to
                explore and integrate Web3 functionalities. By providing an
                infrastructure that supports high transaction throughput at
                significantly reduced costs, TBH is not just facilitating a
                smoother transition to Web3 for telcos but is also unlocking a
                myriad of opportunities for innovation, enhanced user activation
                and engagement, enhanced security, and decentralized services.
              </p>
            </VariantsComponent>
            {/* <VariantsComponent direction="x" startDistance={-100}>
              <Button className="w-full md:w-fit px-16 py-8 bg-white font-semibold ">
                Coming Soon
              </Button>
            </VariantsComponent> */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <VariantsComponent
              className="row-span-4 hidden md:block"
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
              <div className="bg-[#00FB8A] p-6 rounded-3xl text-black rounded-ee-none font-medium text-base leading-none uppercase">
                We&apos;re creating a Web3 infrastructure for everyday use.
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
              className="row-span-2 hidden md:block"
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
              <div className="bg-[#402D98] p-6 rounded-3xl text-white rounded-se-none font-medium text-base leading-none uppercase">
                Making earning as simple and natural as sending a text.
              </div>
            </VariantsComponent>
          </div>
        </div>
      </WrapperContent>
    </section>
  );
};

export default VisionSection;
