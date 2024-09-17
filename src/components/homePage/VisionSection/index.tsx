import React from "react";
import WrapperContent from "@/components/WrapperContent";
import { Button, Image } from "@nextui-org/react";
import Link from "next/link";

const VisionSection = (props?: {hide?: boolean}) => {
  return (
    <section className="w-full text-white py-16">
      <WrapperContent>
        <div className="flex flex-col items-center space-y-16">
          <h1 className="text-green text-3xl lg:text-5xl font-semibold leading-snug">
            Bringing Web3{" "}
            <b className="text-highlight font-semibold">To The Masses</b>
          </h1>
          <Image
            src="/diagram.gif"
            className="w-full border-3 border-white rounded-3xl border-dashed"
            removeWrapper
            alt="diagram"
          />
          {!props?.hide && <div className="w-full py-10 border-b border-[#8E7CFF] relative">
            <Image
              src="./radio.gif"
              alt="img"
              removeWrapper
              className="sm:h-full absolute right-0 -bottom-8 z-0"
              radius="none"
            />
            <div className="w-full sm:w-1/2 flex flex-col space-y-6 relative z-10">
              <h1 className="text-green text-3xl lg:text-5xl font-semibold leading-snug">
                Looking To Build on Binary?
              </h1>
              <h2 className="text-start text-lg lg:text-3xl font-semibold">
                The Binary Startup Takeoff is a pre-incubator program providing
                web3 projects/startups with capital, mentorship, and growth
                opportunities.
              </h2>
              <Button
                className="w-fit bg-green text-black underline font-semibold translate-y-16"
                radius="sm"
                as={Link}
                href="/incubator"
              >
                Apply Now
              </Button>
            </div>
          </div>}
          {!props?.hide && <div className="w-full py-10 border-b border-[#8E7CFF] relative flex">
            <div className="sm:w-1/2 flex flex-col space-y-6 relative z-10">
              <h1 className="text-green text-3xl lg:text-5xl font-semibold leading-snug">
                The Binary
                <br /> Ecosystem:{" "}
                <b className="text-highlight font-semibold">PlutoPe</b>
              </h1>
              <h2 className="text-start text-lg lg:text-3xl font-semibold">
                Learn more about the largest non-custodial wallet in crypto.
              </h2>
              <Button
                className="w-fit bg-green text-black underline font-semibold translate-y-16"
                radius="sm"
                as={Link}
                href="/digital-finance"
              >
                Digital Finance
              </Button>
            </div>
            <div className="flex w-1/2 justify-center">
              <Image
                src="./ecosystem.png"
                alt="img"
                removeWrapper
                className="w-full object-contain sm:w-2/3 lg:w-1/2"
                radius="none"
              />
            </div>
          </div>}
        </div>
      </WrapperContent>
    </section>
  );
};

export default VisionSection;
