import React from "react";
import WrapperContent from "@/components/WrapperContent";
import { Button, Image } from "@nextui-org/react";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";

const ElevateSection = () => {
  return (
    <section className="w-full text-white py-16">
      <div className="grid grid-cols-3">
        <Image
          src="/pluto_img.png"
          alt="img"
          removeWrapper
          className="w-full"
          radius="none"
        />
        <div className="flex flex-col justify-center">
          <span className="uppercase text-green text-xs flex items-center space-x-2 justify-center">
            <GoDotFill /> <p>elevate more</p>
          </span>
          <h1 className="text-base ms:text-4xl xl:text-6xl text-white font-medium text-center leading-tight capitalize mt-4">
            Let’s Elevate <br /> it further
          </h1>
        </div>
        <Image
          src="/visa_img.png"
          alt="img"
          removeWrapper
          className="w-full"
          radius="none"
        />
      </div>
      <div className="w-full mt-16 lg:mt-32 flex justify-center">
        <Image
          src="/pluto_visa_img.png"
          alt="img"
          removeWrapper
          radius="none"
          className=" w-3/4 sm:w-1/3"
        />
      </div>
    </section>
  );
};

export default ElevateSection;
