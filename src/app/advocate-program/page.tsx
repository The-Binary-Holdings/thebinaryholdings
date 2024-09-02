"use client";
import WrapperContent from "@/components/WrapperContent";
import React from "react";
import { Image, Button } from "@nextui-org/react";
import { ADVOCATE_BENEFITS, ROLES } from "@/common/constants";
import { IoIosArrowRoundForward } from "react-icons/io";
import VariantsComponent from "@/components/VariantsComponent";
import dynamic from "next/dynamic";
import Carousel from "@/components/Carousel";
import Link from "next/link";

const AdvocateProgram = () => {
  const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
    ssr: false,
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-no-repeat font-light">
      {/* hero section */}
      <section className="w-full mt-20 bg-[#0c0c0c]" id="hero">
        <div className="flex flex-col md:items-center justify-center ">
          <div className="w-full bg-ad_hero_bg bg-cover bg-no-repeat relative z-10">
            <div className="flex flex-col items-center w-1/2 mx-auto pt-8">
              <Image
                src="./BNRY.png"
                alt="banner"
                radius="none"
                className="hidden md:block"
                draggable={false}
              />
              <h1 className="text-white uppercase mt-10 font-bold text-xl xl:text-4xl tracking-[0.7rem] xl:tracking-[1.3rem] translate-y-5 z-10 relative">
                ADVOCATE PROGRAM
              </h1>
              <Image
                src="./advocate-banner.png"
                alt="banner"
                radius="none"
                className="hidden md:block relative z-0"
              />
              <h1 className="text-[#EBEABA] uppercase font-bold text-xl xl:text-4xl tracking-[.5rem] xl:tracking-[1rem] -translate-y-3 lg:-translate-y-5 z-10 relative">
                Join the Binary Club
              </h1>
            </div>
          </div>
          <div className="w-full flex flex-col items-center space-y-16 relative">
            <Image
              src="/advocate_hero_bg_2.png"
              alt="bg"
              removeWrapper
              className="absolute w-full z-0 bottom-0"
            />
            <VariantsComponent direction="y" startDistance={-100} delay={0.1}>
              <p className="md:text-center text-white font-semibold text-lg lg:text-2xl p-5">
                Binary advocates are passionate leaders who champion Binary
                technologies.
              </p>
            </VariantsComponent>
            <VariantsComponent direction="y" startDistance={-100} delay={0.1}>
              <p className="md:text-center text-white text-lg lg:text-2xl font-light p-5">
                At The Binary Holdings we are changing the telecommunications
                industry by offering low cost and efficient Web3 infrastructure services essential for
                adoption and growth.
              </p>
            </VariantsComponent>
            <VariantsComponent direction="y" startDistance={-100} delay={0.2}>
              <Button
                className="w-full md:w-fit uppercase bg-[#00FB8A] text-black px-8 py-6 font-semibold"
                radius="md"
                as={Link}
                target="_blank"
                href="mailto:darpan@thebinaryholdings.com"
                rel="noreferrer"
              >
                Join The Advocate Program{" "}
              </Button>
            </VariantsComponent>
          </div>
          <div className="w-full px-32">
            <div className="w-full relative before:size-5 before:bg-green before:rounded-full before:absolute before:left-0 before:z-20 before:-top-3 after:size-5 after:bg-green after:rounded-full after:absolute after:right-0 after:z-20 after:-top-3">
              <hr className="w-full border-[#828280] border-t-2" />
            </div>
          </div>
          <div className="flex flex-col relative py-32 md:flex-row items-center justify-around w-full space-y-16 md:space-y-0 px-16 lg:px-36">
            <Image
              src="/advocate_hero_bg_3.png"
              alt="bg"
              removeWrapper
              className="absolute w-full z-0 top-0"
            />
            {ADVOCATE_BENEFITS.map((benefit, index) => {
              return (
                <VariantsComponent
                  key={benefit.id}
                  direction="x"
                  startDistance={-50}
                  delay={index * 0.2}
                >
                  <div className="flex flex-col relative z-10 backdrop-blur-sm bg-[#D9D9D9]/10 rounded-2xl py-6 sm:w-32 md:w-52 xl:w-72 text-white justify-center items-center text-center space-y-4">
                    <Image
                      src={benefit.iconUrl}
                      alt="icon"
                      className="h-12 xl:h-28"
                    />
                    <p className="text-[#EBEABA] text-lg xl:text-3xl">
                      {benefit.title}
                    </p>
                  </div>
                </VariantsComponent>
              );
            })}
          </div>
          <div className="w-full px-32">
            <div className="w-full relative before:size-5 before:bg-green before:rounded-full before:absolute before:left-0 before:z-20 before:-top-3 after:size-5 after:bg-green after:rounded-full after:absolute after:right-0 after:z-20 after:-top-3">
              <hr className="w-full border-[#828280] border-t-2" />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full relative z-0" id="roles">
        <div className="flex flex-col">
          <WrapperContent className="w-full max-w-screen-lg pt-16 pb-0 xl:!px-0 lg:px-32 space-y-8">
            <VariantsComponent direction="x" startDistance={-100}>
              <h1 className="text-3xl lg:text-5xl font-extralight text-[#EBEABA]">
                Your role as an{" "}
                <b className="text-green font-extrabold italic">Advocate</b>
              </h1>
            </VariantsComponent>
            <VariantsComponent direction="x" startDistance={-100} delay={0.1}>
              <p className=" text-white text-base lg:text-2xl">
                There are plenty of ways you can get involved and grow the
                community.
              </p>
            </VariantsComponent>
          </WrapperContent>
          <div>
            <div className="w-full relative">
              <Image
                src="/advocate_role_bg_1.png"
                alt="bg"
                className=" h-full absolute left-0 z-0"
                removeWrapper
              />
              <Image
                src="/advocate_role_bg_2.png"
                alt="bg"
                className=" h-full absolute right-0 z-0"
                removeWrapper
              />
              <WrapperContent className=" max-w-screen-lg mx-auto xl:!px-0 lg:px-32">
                <div className="hidden md:grid grid-cols-2 w-full gap-10 mt-16 relative">
                  {ROLES.map((role, index) => {
                    return (
                      <VariantsComponent
                        key={role.id}
                        direction="x"
                        startDistance={index % 2 == 0 ? -100 : 100}
                        delay={0.1}
                      >
                        <div className="flex flex-col space-y-6 py-6 lg:py-14 h-full rounded-lg text-white ">
                          <Image
                            src={role.iconUrl}
                            alt="icon"
                            className=" h-16 lg:h-32"
                          />
                          <h1 className="text-xl lg:text-3xl font-bold text-[#EBEABA] w-5/6">
                            {role.title}
                          </h1>
                          <p className="text-base lg:text-xl">
                            {role.description}
                          </p>
                        </div>
                      </VariantsComponent>
                    );
                  })}
                </div>
              </WrapperContent>
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
                      <Image src={role.iconUrl} alt="icon" className=" h-14" />
                      <h1 className="text-3xl font-medium">{role.title}</h1>
                      <p>{role.description}</p>
                    </div>
                  </VariantsComponent>
                );
              })}
            </Carousel>
          </div>
        </div>
      </section>
      <section className="w-full lg:px-32 xl:px-0" id="data">
        <WrapperContent className=" max-w-screen-lg pt-8 md:py-16 mx-auto lg:!px-0">
          <div className="flex flex-col md:flex-row justify-between space-y-12 md:space-y-0">
            <div className="flex flex-col items-center">
              <div className="text-5xl font-medium  text-green flex">
                <AnimatedNumbers
                  includeComma
                  transitions={(index) => ({
                    type: "spring",
                    duration: index + 0.3,
                  })}
                  animateToNumber={73000}
                />
                <p>+</p>
              </div>
              <p className=" text-white/75 uppercase">FOLLOWERS ON TWITTER</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-5xl font-medium  text-green flex">
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
              <div className="text-5xl font-medium  text-green flex">
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
        className="w-full py-16 lg:py-20 relative lg:px-32 xl:px-0"
        id="information"
      >
        <Image
          src="/advocate_decor.png"
          alt="decor"
          removeWrapper
          className="absolute -bottom-20 right-0 w-1/3 z-0"
        />
        <WrapperContent className="w-full max-w-screen-lg pt-16 pb-0 lg:!px-0 space-y-8 relative z-10">
          <VariantsComponent direction="y" startDistance={100}>
            <div className="flex flex-col border-2 border-white p-10 lg:p-20 mx-auto w-full rounded-3xl bg-gradient-to-r from-[#00FF66]/20 to-[#636363]/20 backdrop-blur-sm text-white text-xl font-medium">
              <h1 className="text-xl lg:text-4xl font-semibold text-[#EBEABA] uppercase">
                Submit your Application
              </h1>
              <p className="text-base lg:text-2xl mt-10 font-light">
                Don&apos;t miss your chance to become a BInary Advocate!
              </p>
              <p className="text-base lg:text-2xl !mt-1 font-light">
                Applications are open - bring your skills and join our growing
                <br />
                community now!
              </p>
              <Button
                className="bg-[#EBEABA] text-black font-semibold uppercase rounded-xl w-fit px-4 lg:px-8 py-6 text-sm lg:text-2xl mt-5"
                as={Link}
                target="_blank"
                href="mailto:darpan@thebinaryholdings.com"
                rel="noreferrer"
              >
                Apply now
              </Button>
            </div>
          </VariantsComponent>
        </WrapperContent>
      </section>
    </main>
  );
};

export default AdvocateProgram;
