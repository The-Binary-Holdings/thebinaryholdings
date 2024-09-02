"use client";
import React, { useState } from "react";
import WrapperContent from "@/components/WrapperContent";
import VariantsComponent from "@/components/VariantsComponent";
import { Link, Image, Button } from "@nextui-org/react";
import PaginationCarousel from "@/components/PaginationCarousel";
import { GoDotFill } from "react-icons/go";
import { MdOutlineArrowOutward } from "react-icons/md";

const keyFeatures = [
  {
    title: "WORLDWIDE ACCESSIBILITY",
    description:
      "Top up your card with crypto and spend anywhere in the world.",
  },
  {
    title: "FRICTIONLESS",
    description: "The user pays in crypto and the merchant gets paid in fiat.",
  },
  {
    title: "REWARDS",
    description: "Upto 3.5% crypto back on every transaction.",
  },
  {
    title: "SECURE",
    description:
      "Crypto transactions are secured by industry leading encryptions by BitGo.",
  },
  {
    title: "COST-EFFECTIVE",
    description: "Upto 3x lower fees on international transactions.",
  },
];

const KeyFeaturesSection = () => {
  return (
    <section className="w-full py-16 md:pt-16 lg:pt-32" id="business">
      <WrapperContent>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          {keyFeatures.map((item, i) => {
            if (i !== 1)
              return (
                <div
                  key={i}
                  className="text-white bg-gradient-to-t from-green/30 to-white/10 rounded-2xl p-4 xl:p-8 flex flex-col space-y-5 xl:space-y-16"
                >
                  <div className="w-1/3 aspect-square rounded-xl">
                    <Image
                      src={`ft-${i + 1}.gif`}
                      alt="img"
                      removeWrapper
                      className="w-fullF"
                    />
                  </div>
                  <span>
                    <h1 className="font-medium text-lg xl:text-2xl">
                      {item.title}
                    </h1>
                    <p className="text-sm xl:text-base">{item.description}</p>
                  </span>
                </div>
              );
            else
              return (
                <>
                  <div className="w-full h-full flex flex-col text-green items-center justify-center">
                    <div className="flex flex-col ">
                      <span className="uppercase text-xs flex items-center space-x-2">
                        <GoDotFill /> <p>card features</p>
                      </span>
                      <h1 className="text-4xl xl:text-6xl leading-tight capitalize mt-4">
                        KEY
                        <br /> FEATURES
                      </h1>
                      <Button
                        as={Link}
                        radius="full"
                        className="bg-green text-black !px-2 py-7 mt-4 w-fit"
                        href="https://www.plutope.io/debit-cards"
                        target="_blank"
                      >
                        <p className="px-2">Explorer More</p>
                        <div className="size-10 flex items-center justify-center rounded-full bg-[#3C3C3C]">
                          <MdOutlineArrowOutward className="text-green" />
                        </div>
                      </Button>
                    </div>
                  </div>
                  <div
                    key={i}
                    className="text-white bg-gradient-to-t from-green/30 to-white/10 rounded-2xl p-4 xl:p-8 flex flex-col space-y-5 xl:space-y-16"
                  >
                    <div className="w-1/3 aspect-square rounded-xl">
                      <Image
                        src={`ft-${i + 1}.gif`}
                        alt="img"
                        removeWrapper
                        className="w-fullF"
                      />
                    </div>
                    <span>
                      <h1 className="font-medium text-lg xl:text-2xl">
                        {item.title}
                      </h1>
                      <p className="text-sm xl:text-base">{item.description}</p>
                    </span>
                  </div>
                </>
              );
          })}
        </div>
      </WrapperContent>
    </section>
  );
};

export default KeyFeaturesSection;
