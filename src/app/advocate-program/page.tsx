"use client";
import WrapperContent from "@/components/WrapperContent";
import React from "react";
import { Image, Button } from "@nextui-org/react";
import { ADVOCATE_BENEFITS, ROLES } from "@/common/constants";
import { IoIosArrowRoundForward } from "react-icons/io";
import VariantsComponent from "@/components/VariantsComponent";
import dynamic from "next/dynamic";
import Carousel from "@/components/Carousel";

const AdvocateProgram = () => {
  const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
    ssr: false,
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-no-repeat font-light">
      {/* hero section */}
      <section className="w-full mt-16" id="hero">
        <WrapperContent className=" max-w-screen-lg py-16 mx-auto border-b border-white/75">
          <div className="flex flex-col md:items-center justify-center space-y-8 md:space-y-16">
            <div>
              <Image
                src="./advocate-banner.png"
                alt="banner"
                radius="none"
                width={1000}
                height={300}
                className="hidden md:block"
              />
              <Image
                src="./advocate-banner-mobile.png"
                alt="banner"
                radius="none"
                className="md:hidden"
              />
            </div>
            <VariantsComponent direction="y" startDistance={-100}>
              <h1 className="text-3xl md:text-5xl font-medium md:text-center text-white">
                Join the Binary Club
              </h1>
            </VariantsComponent>
            <VariantsComponent direction="y" startDistance={-100} delay={0.1}>
              <p className="md:text-center text-white/75">
                Binary advocates are passionate leaders who champion Binary
                technologies.
                <br />
                <br /> At The Binary Holdings we are changing the
                telecommunications industry by offering low-cost and efficient
                Web3 infrastructure services essential for adoption and growth.
              </p>
            </VariantsComponent>
            <VariantsComponent direction="y" startDistance={-100} delay={0.2}>
              <Button
                className="w-full md:w-fit uppercase bg-white text-[#080729] px-8 py-6 font-semibold"
                radius="md"
              >
                Join The Advocate Program{" "}
              </Button>
            </VariantsComponent>
            <div className="flex flex-col pt-16 md:pt-0 md:flex-row items-center justify-around w-full space-y-16 md:space-y-0">
              {ADVOCATE_BENEFITS.map((benefit, index) => {
                return (
                  <VariantsComponent
                    key={benefit.id}
                    direction="x"
                    startDistance={-50}
                    delay={index * 0.2}
                  >
                    <div className="flex flex-col text-white justify-center items-center w-44 text-center space-y-4">
                      <Image
                        src={benefit.iconUrl}
                        alt="icon"
                        className=" h-14"
                      />
                      <p>{benefit.title}</p>
                    </div>
                  </VariantsComponent>
                );
              })}
            </div>
          </div>
        </WrapperContent>
      </section>
      <section className="w-full" id="roles">
        <WrapperContent className=" max-w-screen-lg pt-16 pb-0 md:pb-16 mx-auto lg:!px-0">
          <div className="flex flex-col space-y-8">
            <VariantsComponent direction="x" startDistance={-100}>
              <h1 className="text-3xl md:text-5xl font-medium  text-white">
                Your role as an Advocate
              </h1>
            </VariantsComponent>
            <VariantsComponent direction="x" startDistance={-100} delay={0.1}>
              <p className=" text-white/75">
                There are plenty of ways you can get involved and grow the
                community.
              </p>
            </VariantsComponent>
            <div>
              <div className="hidden md:grid grid-cols-2 w-full gap-8 mt-16">
                {ROLES.map((role, index) => {
                  return (
                    <VariantsComponent
                      key={role.id}
                      direction="x"
                      startDistance={index % 2 == 0 ? -100 : 100}
                      delay={0.1}
                    >
                      <div className="flex flex-col space-y-6 px-10 py-14 h-full rounded-lg text-white bg-white/10">
                        <Image
                          src={role.iconUrl}
                          alt="icon"
                          className=" h-14"
                        />
                        <h1 className="text-3xl font-medium">{role.title}</h1>
                        <p>{role.description}</p>
                      </div>
                    </VariantsComponent>
                  );
                })}
              </div>
              <Carousel className="block md:hidden">
                {ROLES.map((role, index) => {
                  return (
                    <VariantsComponent
                      key={role.id}
                      direction="y"
                      startDistance={100}
                    >
                      <div className="flex select-none flex-col space-y-6 w-[80vw] h-full px-10 py-14 rounded-lg text-white bg-white/10">
                        <Image
                          src={role.iconUrl}
                          alt="icon"
                          className=" h-14"
                        />
                        <h1 className="text-3xl font-medium">{role.title}</h1>
                        <p>{role.description}</p>
                      </div>
                    </VariantsComponent>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </WrapperContent>
      </section>
      <section className="w-full" id="data">
        <WrapperContent className=" max-w-screen-lg pt-8 md:py-16 mx-auto lg:!px-0">
          <div className="flex flex-col md:flex-row justify-around space-y-12 md:space-y-0">
            <div className="flex flex-col items-center">
              <div className="text-5xl font-medium  text-white flex">
                <AnimatedNumbers
                  includeComma
                  transitions={(index) => ({
                    type: "spring",
                    duration: index + 0.3,
                  })}
                  animateToNumber={3000}
                />
                <p>+</p>
              </div>
              <p className=" text-white/75 uppercase">FOLLOWERS ON TWITTER</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-5xl font-medium  text-white flex">
                <AnimatedNumbers
                  includeComma
                  transitions={(index) => ({
                    type: "spring",
                    duration: index + 0.3,
                  })}
                  animateToNumber={3000}
                />
                <p>+</p>
              </div>
              <p className=" text-white/75 uppercase">MEMBERS ON DISCORD</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-5xl font-medium  text-white flex">
                <AnimatedNumbers
                  includeComma
                  transitions={(index) => ({
                    type: "spring",
                    duration: index + 0.9,
                  })}
                  animateToNumber={39000}
                />
                <p>+</p>
              </div>
              <p className=" text-white/75 uppercase">FOLLOWERS ON TELEGRAM</p>
            </div>
          </div>
        </WrapperContent>
      </section>
      <section
        className="w-full py-16 md:py-20 mt-16 bg-advocate-backdrop bg-no-repeat bg-cover bg-right-bottom relative"
        id="information"
      >
        <VariantsComponent direction="y" startDistance={100}>
          <div className="flex flex-col items-center p-5 md:p-20 mx-auto w-[80vw] md:w-[50vw] rounded-3xl bg-white/10 backdrop-blur-lg text-white text-center space-y-4 md:space-y-6 text-xl font-medium">
            <h1 className="text-sm md:text-3xl font-bold">Submit your Application</h1>
            <p className="text-sm md:text-base">Don&apos;t miss your chance to become a BInary Advocate!</p>
            <p className="text-sm md:text-base">
              Applications are open - bring your skills and join our growing
              community now!
            </p>
            <Button className="bg-white/35 text-white rounded-full w-fit px-8 py-6 text-sm md:text-xl">
              Apply now
              <IoIosArrowRoundForward className="text-5xl" />
            </Button>
          </div>
        </VariantsComponent>
      </section>
    </main>
  );
};

export default AdvocateProgram;
