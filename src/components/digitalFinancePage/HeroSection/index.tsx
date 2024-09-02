"use client";
import React, { useEffect, useState } from "react";
import localFont from "next/font/local";
import WrapperContent from "../../WrapperContent";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  Image,
  Link,
} from "@nextui-org/react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion, useAnimate } from "framer-motion";
import useDetectScroll from "@smakss/react-scroll-direction";
import { IoMdArrowDown } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

const HeroSection = () => {
  const [scope, animate] = useAnimate();

  const onClickSection = (section: string) => {
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="w-full py-32 pb-16 sm:pb-32">
      <WrapperContent>
        <div className="w-full flex flex-col items-center space-y-10">
          <h1 className="font-medium text-3xl sm:text-5xl xl:text-7xl text-white text-center uppercase leading-snug">
            Empowering you with
            <br /> crypto freedom
          </h1>
          <div className="flex flex-row space-x-2">
            <Button
              as={Link}
              radius="full"
              className="bg-green text-[#020202] !px-2 py-7"
              href="https://www.plutope.io/contact-us"
              target="_blank"
            >
              <p className="px-2">Contact Us</p>
              <div className="size-10 flex items-center justify-center rounded-full bg-[#3C3C3C]">
                <MdOutlineArrowOutward className="text-green" />
              </div>
            </Button>

            <Dropdown>
              <DropdownTrigger>
                <Button
                  radius="full"
                  className="bg-transparent border-2 border-[#5D605F] text-white !px-2 py-7"
                >
                  <div className="size-10 flex items-center justify-center rounded-full bg-green">
                    <Image src="/icons/phone.svg" alt="icon" radius="none" />
                  </div>
                  <p className="px-2">Download APP</p>
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
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
          <Image
            src="/CoinAnimationLoopBlack-ezgif.com-video-to-apng-converter.png"
            className="w-full opacity-80"
            removeWrapper
            alt="diagram"
            draggable={false}
          />
          {/* <video
            id="video1"
            className="w-full"
            loop
            autoPlay={true}
            muted
            controls={false}
          >
            <source
              src="./videos/Coin Animation Loop Black.mp4"
              type="video/mp4"
            />
            Your browser does not support HTML video.
          </video> */}
          <div className="w-full flex justify-center relative z-10">
            <motion.span
              ref={scope}
              className="uppercase flex space-x-2 items-center text-xs cursor-pointer text-white"
              onClick={() => onClickSection("about")}
            >
              <IoMdArrowDown className="text-xl" />
              <p>Scroll Down</p>
            </motion.span>
          </div>
        </div>
      </WrapperContent>
    </section>
  );
};

export default HeroSection;
