"use client";
import React, { useEffect, useState } from "react";
import WrapperContent from "../../WrapperContent";
import { LuUsers } from "react-icons/lu";
import { TbCalendarUser } from "react-icons/tb";
import { TbUserCheck } from "react-icons/tb";
import { RxClock } from "react-icons/rx";
import { motion, useAnimate } from "framer-motion";
import { Button, Image } from "@nextui-org/react";
import { IoMdArrowDown } from "react-icons/io";
import useDetectScroll from "@smakss/react-scroll-direction";
import Link from "next/link";
import { RiFilePaperLine } from "react-icons/ri";
import { IoEyeOutline } from "react-icons/io5";
import KeyNumbers from "@/components/KeyNumbers";

const flipVariants = {
  flipped: {
    rotateX: 360,
    duration: 1,
  },
  unflipped: {
    rotateX: 0,
    duration: 1,
  },
};

const HeroSection = () => {
  const { scrollPosition } = useDetectScroll();
  const [isHidden, setIsHidden] = React.useState(false);
  const [scope, animate] = useAnimate();
  const [isFlipped, setIsFlipped] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    function getRandomInterval(min: number, max: number) {
      // Ensure min is less than or equal to max
      min = Math.min(min, max);
      max = Math.max(min, max);

      // Generate a random number between min (inclusive) and max (exclusive)
      const randomTime = Math.floor(Math.random() * (max - min)) + min;

      return randomTime;
    }

    const interval1 = setInterval(() => {
      setIsFlipped((prev) => [
        true,
        prev[1],
        prev[2],
        prev[3],
        prev[4],
        prev[5],
      ]);
      setTimeout(
        () =>
          setIsFlipped((prev) => [
            false,
            prev[1],
            prev[2],
            prev[3],
            prev[4],
            prev[5],
          ]),
        getRandomInterval(15000, 50000)
      );
    }, getRandomInterval(3000, 5000));

    const interval2 = setInterval(() => {
      setIsFlipped((prev) => [
        prev[0],
        true,
        prev[2],
        prev[3],
        prev[4],
        prev[5],
      ]);
      setTimeout(
        () =>
          setIsFlipped((prev) => [
            prev[0],
            false,
            prev[2],
            prev[3],
            prev[4],
            prev[5],
          ]),
        getRandomInterval(15000, 50000)
      );
    }, getRandomInterval(3000, 5000));

    const interval3 = setInterval(() => {
      setIsFlipped((prev) => [
        prev[0],
        prev[1],
        true,
        prev[3],
        prev[4],
        prev[5],
      ]);
      setTimeout(
        () =>
          setIsFlipped((prev) => [
            prev[0],
            prev[1],
            false,
            prev[3],
            prev[4],
            prev[5],
          ]),
        getRandomInterval(15000, 50000)
      );
    }, getRandomInterval(3000, 5000));

    const interval4 = setInterval(() => {
      setIsFlipped((prev) => [
        prev[0],
        prev[1],
        prev[2],
        true,
        prev[4],
        prev[5],
      ]);
      setTimeout(
        () =>
          setIsFlipped((prev) => [
            prev[0],
            prev[1],
            prev[2],
            false,
            prev[4],
            prev[5],
          ]),
        getRandomInterval(15000, 50000)
      );
    }, getRandomInterval(3000, 5000));

    const interval5 = setInterval(() => {
      setIsFlipped((prev) => [
        prev[0],
        prev[1],
        prev[2],
        true,
        prev[4],
        prev[5],
      ]);
      setTimeout(
        () =>
          setIsFlipped((prev) => [
            prev[0],
            prev[1],
            prev[2],
            false,
            prev[4],
            prev[5],
          ]),
        getRandomInterval(15000, 50000)
      );
    }, getRandomInterval(3000, 5000));

    const interval6 = setInterval(() => {
      setIsFlipped((prev) => [
        prev[0],
        prev[1],
        prev[2],
        prev[3],
        prev[4],
        true,
      ]);
      setTimeout(
        () =>
          setIsFlipped((prev) => [
            prev[0],
            prev[1],
            prev[2],
            prev[3],
            prev[4],
            false,
          ]),
        getRandomInterval(15000, 50000)
      );
    }, getRandomInterval(3000, 5000));

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
      clearInterval(interval4);
      clearInterval(interval5);
      clearInterval(interval6);
    };
  }, []);

  const onClickSection = (section: string) => {
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const startAnimation = React.useCallback(() => {
    animate(
      scope.current,
      { y: 0, opacity: 1 },
      { duration: 0.5, type: "spring", bounce: 0.4 }
    );
  }, [animate, scope]);

  const stopAnimation = React.useCallback(() => {
    animate(
      scope.current,
      { y: 200, opacity: 0 },
      { duration: 0.8, type: "spring", bounce: 0.4 }
    );
  }, [animate, scope]);

  useEffect(() => {
    if (scrollPosition.top == 0) {
      startAnimation();
      setIsHidden(false);
    }

    if (scrollPosition.top > 0 && !isHidden) {
      stopAnimation();
      setIsHidden(true);
    }
  }, [isHidden, scrollPosition, startAnimation, stopAnimation]);
  return (
    <section id="hero" className="w-full ">
      <div className="before:opacity-20 before:absolute before:w-full before:h-full before:bg-heros-bg before:bg-no-repeat before:bg-cover before:bg-center relative before:z-10">
        <WrapperContent className="flex lg:h-screen py-24 lg:py-0 flex-col justify-evenly relative z-20 text-white">
          <div className="flex flex-col h-full">
            <div className="flex flex-col w-3/4 xl:w-1/4 space-y-6 h-full justify-center pt-10 lg:pt-20">
              <h1 className="text-green text-4xl lg:text-6xl font-semibold">
                <b className="text-highlight font-semibold">Onboarding</b> The
                Next Billion To Web3
              </h1>
              <p className="text-sm leading-relaxed">
                We build web3 infrastructure that integrates into
                telecommunication and banking apps to increase user engagement,
                retention, and ARPU - while rewarding users for their
                engagement.
              </p>
              <Button
                as={Link}
                href="https://network.thebinaryholdings.com/"
                target="_blank"
                className="bg-green text-black w-fit font-semibold"
                radius="sm"
              >
                Try Out The Binary Sepolia Tesnet
              </Button>
            </div>
            <div className="w-full flex justify-end py-6 relative z-40">
              <motion.span
                ref={scope}
                className="uppercase flex space-x-2 items-center text-xs cursor-pointer"
                onClick={() => onClickSection("about")}
              >
                <IoMdArrowDown className="text-xl" />
                <p>Scroll Down</p>
              </motion.span>
            </div>
          </div>
        </WrapperContent>
        <Image
          className="absolute object-cover sm:object-contain h-full z-0 top-0 bottom-0 sm:right-32 opacity-10 xl:opacity-100"
          src="./hero-img.png"
          alt="img"
          removeWrapper
        />
      </div>

      <KeyNumbers />
    </section>
  );
};

export default HeroSection;
