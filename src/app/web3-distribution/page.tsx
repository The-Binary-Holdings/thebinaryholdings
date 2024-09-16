"use client";

import React from "react";
import IntegrateWithW3 from "@/components/web3-distribution/IntegrateWithW3";
import KeyNumbers from "@/components/KeyNumbers";
import VisionSection from "@/components/homePage/VisionSection";
import AboutSection from "@/components/homePage/AboutSection";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const Web3Distribution = () => {
  return (
    <>
        
      <IntegrateWithW3 />
      <KeyNumbers />
      <AboutSection hide={true} />
      <VisionSection hide={true} />
      <div className="grid grid-cols-1 place-items-center">
        
      <Button
                as={Link}
                href="#"
                target="_blank"
                className="bg-green text-black w-fit font-semibold uppercase mt-5 capitalize"
                radius="sm"
              >
                expose your project to millions
              </Button>
      </div>
    </>
  );
};

export default Web3Distribution;
