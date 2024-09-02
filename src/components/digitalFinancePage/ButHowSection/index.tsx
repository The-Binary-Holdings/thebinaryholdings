"use client";
import React from "react";
import WrapperContent from "@/components/WrapperContent";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  Image,
} from "@nextui-org/react";
import VariantsComponent from "@/components/VariantsComponent";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";
import { FaApple, FaCheckCircle, FaGooglePlay } from "react-icons/fa";

const reasons = [
  "Get upto 3.5% more crypto in hand when buying from the app.",
  "Your crypto, your keys.",
  "Fully open-source code.",
];

const ButHowSection = () => {
  return (
    <section
      id="about"
      className="w-full relative py-20 my-16 bg-[#00FB8A] text-black"
    >
      <WrapperContent>
        <div className="w-full flex sm:space-x-10 flex-col sm:flex-row items-center">
          <div className="w-full sm:w-1/2 relative">
            <Image
              src="/phone.png"
              removeWrapper
              className="w-2/3 sm:w-full lg:w-3/4 xl:w-1/2 mx-auto top-0"
              alt="img"
              draggable={false}
            />

            <div className="w-full h-full absolute top-0 flex justify-center items-center">
              <div className="w-full aspect-square rounded-full bg-white/30"></div>
            </div>
            <div className="w-full h-full absolute top-0 flex justify-center items-center">
              <div className="w-10/12 aspect-square rounded-full bg-white/40"></div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 flex flex-col pe-0 xl:pe-32 font-medium mt-6 sm:mt-0">
            <span className="uppercase text-xs flex items-center space-x-2">
              <GoDotFill /> <p>But how?</p>
            </span>
            <h1 className="text-4xl xl:text-6xl leading-tight capitalize mt-4">
              Plutope’s non-
              <br className="hidden lg:block" />
              custodial Wallet
            </h1>
            <p className="text-sm lg:text-base">
              PlutoPe offers a non-custodial crypto wallet
              <br className="hidden sm:block" /> that offers industry leading
              features while
              <br className="hidden sm:block" /> maintaining 100% self-custody.
            </p>
            <div className="flex flex-col mt-9 space-y-4 text-sm xl:text-base">
              {reasons.map((r, index) => {
                return (
                  <span key={index} className="flex space-x-4">
                    <FaCheckCircle className="text-xl min-w-5" /> <p>{r}</p>
                  </span>
                );
              })}
            </div>
            <div>
              <h1 className="text-xl lg:text-3xl leading-tight capitalize mt-16">
                Supported Chains
              </h1>
              <p className="text-base lg:text-xl mt-2">
                Eth, Bsc, Okx, Bitcoin, Polygon
              </p>
            </div>
            <Dropdown>
              <DropdownTrigger>
                <Button
                  radius="full"
                  className="bg-black w-fit border-2 border-[#5D605F] text-white !px-2 py-7 mt-5"
                >
                  <div className="size-10 flex items-center justify-center rounded-full bg-green">
                    <Image src="/icons/phone.svg" alt="icon" radius="none" />
                  </div>
                  <p className="px-2">Download APP</p>
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownSection title={"Download App"}>
                  <DropdownItem>
                    <Link
                      className="flex space-x-4 items-center text-black"
                      href="https://apps.apple.com/in/app/plutope-crypto-wallet/id6466782831"
                      target="_blank"
                    >
                      <span className="p-2 rounded-full flex items-center justify-center bg-green">
                        <FaApple className="text-2xl" />
                      </span>
                      <p className="uppercase font-medium">apple store</p>
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link
                      className="flex space-x-4 items-center text-black"
                      href="https://play.google.com/store/apps/details?id=com.app.plutope&pli=1"
                      target="_blank"
                    >
                      <span className="p-2 rounded-full flex items-center justify-center bg-green">
                        <FaGooglePlay className="text-2xl" />
                      </span>
                      <p className="uppercase font-medium">google play</p>
                    </Link>
                  </DropdownItem>
                </DropdownSection>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </WrapperContent>
    </section>
  );
};

export default ButHowSection;
