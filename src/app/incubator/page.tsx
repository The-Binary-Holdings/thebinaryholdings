"use client";
import WrapperContent from "@/components/WrapperContent";
import React from "react";
import { Image, Button } from "@nextui-org/react";
import {
  INCUBATOR_WORKS,
  INCUBATOR_BENEFITS,
  WHY_INCUBATOR,
} from "@/common/constants";
import { IoIosArrowRoundForward } from "react-icons/io";
import VariantsComponent from "@/components/VariantsComponent";
import dynamic from "next/dynamic";
import Link from "next/link";
import ParallaxText from "@/components/ParallaxText";
import localFont from "next/font/local";
import clsx from "clsx";

const monumentExtended = localFont({
  src: [
    {
      path: "../../../public/fonts/monumentextended-freeforpersonaluse/MonumentExtended-FreeForPersonalUse/MonumentExtended-Regular.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/monumentextended-freeforpersonaluse/MonumentExtended-FreeForPersonalUse/MonumentExtended-Ultrabold.otf",
      weight: "700",
      style: "bold",
    },
  ],
});

const Incubator = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-no-repeat font-light">
      {/* hero section */}
      <section
        id="hero"
        className="w-full relative h-screen flex flex-col items-center bg-black/50 md:bg-transparent py-16 space-y-4"
      >
        <div>
          <Image
            src="logos/tbh-logo.svg"
            alt="image"
            width={200}
            height={200}
            radius="none"
            className="hidden md:block"
          />
          <Image
            src="logos/tbh-logo.svg"
            alt="image"
            width={100}
            height={100}
            radius="none"
            className="md:hidden"
          />
        </div>
        <WrapperContent className="h-full flex justify-center relative max-w-screen-2xl">
          <div className="flex flex-col h-full w-full overflow-hidden z-20 md:z-0 relative md:static bg-black/20">
            <div
              className={`mt-20 hidden sm:flex flex-col md:text-[3.5rem] xl:text-[4.5rem] md:z-20 xl:z-0 font-normal leading-none w-full text-highlight ${monumentExtended.className} translate-y-[200px]`}
            >
              <ParallaxText distance={200}>
                <h1 className="tracking-tight">BINARY&apos;S</h1>
                <h1 className="tracking-tight">STARTUP</h1>
              </ParallaxText>
            </div>
            <div
              className={`flex sm:hidden flex-col text-6xl leading-none w-full text-highlight ${monumentExtended.className}`}
            >
              <div className="mt-20 lg:mt-0 text-5xl">
                <h1 className="tracking-tight">BINARY&apos;S</h1>
                <h1 className="tracking-tight">STARTUP</h1>
              </div>
            </div>
            <div className="w-full flex flex-col md:flex-row font-medium md:justify-end">
              <div
                className={`hidden sm:flex md:text-[3.5rem] xl:text-[4.5rem] md:z-20 xl:z-0 text-end font-normal order-2 leading-none text-highlight flex-col items-end -translate-y-[200px] ${monumentExtended.className}`}
              >
                <ParallaxText distance={-200}>
                  <h1 className="tracking-tight">TAKEOFF</h1>
                  <h1 className="tracking-tight text-white text-base">
                    A Web3 Pre-Incubator Program
                  </h1>
                </ParallaxText>
              </div>
              <div
                className={`mt-20 lg:mt-0 flex sm:hidden text-5xl order-1 md:order-2 leading-none text-highlight flex-col items-end ${monumentExtended.className}`}
              >
                <h1 className="tracking-tight">TAKEOFF</h1>
                <h1 className="tracking-tight text-white text-base">
                  A Web3 Pre-Incubator Program
                </h1>
              </div>
            </div>
          </div>
          <Image
            src="spaceship.png"
            alt="img"
            className="h-full bg-center absolute z-0 md:z-10 bottom-0 object-cover"
            removeWrapper
          />
        </WrapperContent>
        <div className="flex flex-col items-center space-y-4">
          <p className="text-white italic font-medium text-base md:text-xl text-center">
            Empowering Blockchain Innovators with Capital, Mentorship and Growth
            Opportunities
          </p>
          <Button
            className="uppercase bg-green px-14 py-6 text-black w-fit text-xl"
            as={Link}
            target="_blank"
            href="mailto:darpan@thebinaryholdings.com"
            rel="noreferrer"
          >
            APPLY NOW
          </Button>
        </div>
      </section>

      {/* =============================== */}
      <section className="w-full py-8 md:py-16" id="about">
        <WrapperContent className=" max-w-screen-2xl mx-auto flex flex-col items-center space-y-8 text-center">
          <VariantsComponent direction="y" startDistance={100}>
            <h1 className=" text-3xl md:text-5xl text-highlight font-medium">
              About
            </h1>
          </VariantsComponent>
          <VariantsComponent direction="y" startDistance={100} delay={0.1}>
            <p className="text-white text-base md:text-xl">
              Binary&apos;s Startup Takeoff is a pre-incubator program designed
              specifically for web3 startups aiming to revolutionize the
              blockchain space with real world usage. Positioned uniquely
              between traditional incubators and accelerators, Binary&apos;s
              Startup Takeoff offers an unparalleled blend of working capital,
              marketing acumen, distribution access, and unit economics
              optimization.
            </p>
          </VariantsComponent>
        </WrapperContent>
      </section>

      {/* =============================== */}
      <section className="w-full py-8 md:py-16" id="whyChoose">
        <WrapperContent className=" max-w-screen-2xl mx-auto flex flex-col space-y-8">
          <VariantsComponent direction="x" startDistance={-100}>
            <h1 className=" text-3xl md:text-5xl text-highlight font-medium leading-normal">
              Why Choose Binary&apos;s Startup Takeoff?{" "}
            </h1>
          </VariantsComponent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WHY_INCUBATOR.map((item, index) => {
              return (
                <VariantsComponent
                  key={index}
                  direction="y"
                  startDistance={100}
                  delay={0.1 * index}
                  className="h-full"
                >
                  <div className="rounded-3xl border border-white h-full">
                    <Image src={item.image} alt="img" radius="none" />
                    <div className="p-14 flex flex-col space-y-4 items-center text-white text-center">
                      <h1 className="font-bold">{item.title}</h1>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </VariantsComponent>
              );
            })}
          </div>
        </WrapperContent>
      </section>

      <section className="w-full py-8 md:py-16" id="roles">
        <WrapperContent className=" max-w-screen-2xl pb-0 mx-auto">
          <div className="flex flex-col space-y-8">
            <VariantsComponent direction="x" startDistance={-100}>
              <h1 className=" text-3xl md:text-5xl text-highlight font-medium leading-normal">
                Tackling Web3 Challenges
                <br /> with Binary&apos;s Startup Takeoff
              </h1>
            </VariantsComponent>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-x-8 gap-y-6">
              {INCUBATOR_BENEFITS.map((role, index) => {
                return (
                  <VariantsComponent
                    key={role.id}
                    direction="x"
                    startDistance={index % 2 == 0 ? -100 : 100}
                    delay={0.1}
                  >
                    <div className="flex px-10 py-14 h-full rounded-3xl text-white bg-[#402D98] items-center space-x-4">
                      <div className="w-2/3 space-y-2">
                        <h1 className="text-2xl text-green font-semibold">
                          {role.title}
                        </h1>
                        <p className="text-base">{role.description}</p>
                      </div>
                      <Image
                        src={role.iconUrl}
                        alt="icon"
                        className="w-1/3"
                        removeWrapper
                      />
                    </div>
                  </VariantsComponent>
                );
              })}
            </div>
          </div>
        </WrapperContent>
      </section>

      <section className="w-full py-8 md:py-16" id="works">
        <WrapperContent className=" max-w-screen-2xl pb-0 mx-auto">
          <div className="flex flex-col space-y-8 items-center">
            <VariantsComponent direction="x" startDistance={-100}>
              <h1 className=" text-3xl md:text-5xl text-highlight font-medium leading-normal">
                How it Works
              </h1>
            </VariantsComponent>
            <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-x-8 gap-y-2 md:gap-y-6">
              {INCUBATOR_WORKS.map((role, index) => {
                return (
                  <VariantsComponent
                    key={role.id}
                    direction="y"
                    startDistance={100}
                    delay={0.1 * index}
                  >
                    <div className="flex flex-col items-center py-14 h-full text-white text-center ">
                      <p className="text-[#8D7DFF]">STEP {index + 1}</p>
                      <div
                        className={clsx(
                          " flex flex-col items-center px-10 h-full",
                          index !== 0 && "border-t-0 md:border-s border-white"
                        )}
                      >
                        <Image
                          src={role.iconUrl}
                          alt="icon"
                          className="h-40 mt-8"
                          removeWrapper
                        />
                        <div className="space-y-2 mt-16">
                          <h1 className="text-xl font-semibold">
                            {role.title}
                          </h1>
                          <p className="text-base">{role.description}</p>
                        </div>
                      </div>
                    </div>
                  </VariantsComponent>
                );
              })}
            </div>
          </div>
        </WrapperContent>
      </section>

      <section className="w-full py-8 md:py-16" id="roles">
        <WrapperContent className=" max-w-screen-2xl pb-0 mx-auto">
          <div className="flex flex-col space-y-8 items-center">
            <VariantsComponent direction="x" startDistance={-100}>
              <h1 className=" text-3xl md:text-5xl text-highlight font-medium leading-normal">
                Binary Startup Takeoff Terms
              </h1>
            </VariantsComponent>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-x-8 gap-y-6 text-center">
              <VariantsComponent direction="y" startDistance={-100} delay={0.1}>
                <div className="flex flex-col px-10 py-8 h-full rounded-3xl text-white bg-[#402D98] items-center space-x-4">
                  <div className="space-y-2">
                    <h1 className="text-2xl text-green font-semibold">
                      Equity Stake
                    </h1>
                    <p className="text-base">
                      The Binary Holdings takes a 5%stake in your project should
                      you choose to participate in the program. This ensure we
                      have skin in the game, and can help you grow in good
                      faith.
                    </p>
                  </div>
                </div>
              </VariantsComponent>
              <VariantsComponent direction="y" startDistance={-100} delay={0.1}>
                <div className="flex flex-col px-10 py-8 h-full rounded-3xl text-white bg-[#402D98] items-center space-x-4">
                  <div className="space-y-2">
                    <h1 className="text-2xl text-green font-semibold">
                      Network Fees
                    </h1>
                    <p className="text-base">
                      To access our userbase of 40 million, your project is
                      deployed on The Binary Network. Since we also cover all
                      marketing and CAC costs, we charge a fee of $4,000/month
                      to keep your project running on our network.
                    </p>
                  </div>
                </div>
              </VariantsComponent>
            </div>
          </div>
        </WrapperContent>
      </section>

      <section className="w-full py-8 md:py-16" id="information">
        <WrapperContent className=" max-w-screen-2xl pb-0 mx-auto">
          <VariantsComponent direction="y" startDistance={100}>
            <div className="w-full flex flex-col md:flex-row p-6 md:p-10 rounded-3xl bg-gradient-to-r from-[#402D98] to-black border border-white">
              <div className="flex flex-col text-white items-center md:items-start justify-center space-y-4 md:space-y-6 w-full text-center md:text-start">
                <h1 className=" text-2xl md:text-5xl text-highlight font-medium leading-normal xl:whitespace-nowrap">
                  Ready to Ignite Your Startup Journey?
                </h1>
                <p className="text-lg md:text-base">
                  Join a community of innovators and disruptors.
                  <br /> Apply now to start your journey and turn your vision
                  into reality.
                </p>
                <Button
                  className="uppercase bg-green px-14 py-6 text-black w-fit text-xl"
                  as={Link}
                  target="_blank"
                  rel="noreferrer"
                  href="mailto:darpan@thebinaryholdings.com"
                >
                  APPLY NOW
                </Button>
              </div>
              <Image
                src="/icons/3D-rings.png"
                alt="imgs"
                className="w-full md:w-5/12"
                removeWrapper
              />
            </div>
          </VariantsComponent>
        </WrapperContent>
      </section>
    </main>
  );
};

export default Incubator;
