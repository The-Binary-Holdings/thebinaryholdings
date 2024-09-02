import React from "react";
import WrapperContent from "@/components/WrapperContent";
import { Button, Image } from "@nextui-org/react";
import VariantsComponent from "@/components/VariantsComponent";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section id="about" className="w-full relative text-white py-16">
      <WrapperContent>
        <div className="w-full flex flex-col">
          <div className="w-full py-10 xl:py-0 bg-[#151515] relative flex flex-col-reverse sm:flex-row px-4 sm:px-16 items-center justify-between before:absolute before:size-[6px] before:-top-1 before:-left-1 before:bg-green before:rounded-full after:absolute after:size-[6px] after:-top-1 after:-right-1 after:bg-green after:rounded-full">
            <div className="absolute w-full h-full top-0 left-0 before:absolute before:size-[6px] before:-bottom-1 before:-left-1 before:bg-green before:rounded-full after:absolute after:size-[6px] after:-bottom-1 after:-right-1 after:bg-green after:rounded-full"></div>
            <div className="flex flex-col space-y-6 w-full sm:w-1/2 px-6">
              <h1 className="text-green text-3xl lg:text-5xl font-semibold leading-snug">
                <b className="text-highlight font-semibold">Who Are</b>
                <br /> The Binary Holdings?
              </h1>
              <p className=" text-balance text-sm lg:text-base">
                The Binary Holdings (TBH) builds web3 infrastructure for
                telecommunication service providers and banks in emerging
                markets, serving over 169 million users. TBH&apos;s
                cost-effective, scalable solutions and the $BNRY utility token
                drive the adoption of tokenized and web3 services.
              </p>
            </div>
            <Image
              src="./about-1.gif"
              alt="gif"
              className="w-3/5 lg:w-2/5"
              removeWrapper
              draggable={false}
            />
          </div>

          <div className="w-full flex flex-col sm:flex-row p-16 items-center">
            <Image
              src="./about-2.gif"
              alt="gif"
              className="w-3/5 lg:w-2/5"
              radius="none"
              removeWrapper
              draggable={false}
            />
            <div className="flex flex-col space-y-6 w-full sm:w-1/2 px-4 sm:px-6 sm:ps-8 lg:ps-16 mt-4 sm:mt-0">
              <h1 className="text-green text-3xl lg:text-5xl font-semibold leading-snug">
                <b className="text-highlight font-semibold">What Is</b>
                <br className="hidden lg:block" /> The Binary Network?
              </h1>
              <p className=" text-balance text-sm lg:text-base">
                The Binary Network, our native Layer 2, connects web3 to over 169
                million telco users. Powered by the $BNRY gas token, it enables
                seamless web3 interactions directly within telcommunication and
                banking. Built on Optimism&apos;s OP Stack, it guarantees speed,
                scalability, and developer-friendly EVM compatibility.
              </p>
              <Button
                as={Link}
                href="/blog?id=18"
                className="bg-green w-fit font-semibold text-black"
              >
                Retroactive Airdrop Now Live!
              </Button>
            </div>
          </div>

          <div className="w-full bg-[#151515] py-10 xl:py-0 relative flex flex-col-reverse sm:flex-row px-4 sm:px-16 items-center justify-between before:absolute before:size-[6px] before:-top-1 before:-left-1 before:bg-green before:rounded-full after:absolute after:size-[6px] after:-top-1 after:-right-1 after:bg-green after:rounded-full">
            <div className="absolute w-full h-full top-0 left-0 before:absolute before:size-[6px] before:-bottom-1 before:-left-1 before:bg-green before:rounded-full after:absolute after:size-[6px] after:-bottom-1 after:-right-1 after:bg-green after:rounded-full"></div>
            <div className="flex flex-col space-y-6 w-full sm:w-1/2 px-6">
              <h1 className="text-green text-3xl lg:text-5xl font-semibold leading-snug">
                <b className="text-highlight font-semibold">The $BNRY</b> Token
              </h1>
              <p className=" text-balance text-sm lg:text-base">
                The $BNRY token is the native gas token of The Binary Network.
                It is also the primary reward currency distributed to users of
                telecommunication service providers whenever they interact with
                a dApp inside the telco ecosystem. The $BNRY token can be used
                to trade, stake, and as a loyalty point within telecommunication
                ecosystems to purchase goods, or pay for utility bills.
              </p>
              <Button
                as={Link}
                href="https://www.mexc.com/exchange/BNRY_USDT"
              target="_blank"
                className="bg-green w-fit font-semibold text-black"
              >
                Buy $BNRY
              </Button>
            </div>
            <Image
              src="./about-3.gif"
              alt="gif"
              className="w-3/5 sm:w-2/5 my-4"
              removeWrapper
              draggable={false}
            />
          </div>
        </div>
      </WrapperContent>
    </section>
  );
};

export default AboutSection;
