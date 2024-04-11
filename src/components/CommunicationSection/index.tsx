import React from "react";
import WrapperContent from "../WrapperContent";
import VariantsComponent from "../VariantsComponent";
import { Link, Card, CardBody, Image } from "@nextui-org/react";
import { COMMUNICATIONS } from "@/common/constants";
import clsx from "clsx";
import Carousel from "../Carousel";

const CommunicationSection = () => {
  return (
    <section className="w-full py-32">
      <WrapperContent>
        <div className="w-full flex flex-col md:space-y-20">
          <div className="w-full flex justify-between items-center">
            <VariantsComponent direction="x" startDistance={-100}>
              <h1 className="text-highlight text-4xl lg:text-5xl md:text-6xl font-medium">
                Communication
              </h1>
            </VariantsComponent>
            <Link className="text-white cursor-pointer underline-offset-4 hidden md:inline underline self-center">
              VIEW ALL
            </Link>
          </div>
          <div className="md:grid grid-cols-2 w-full gap-4 hidden">
            {COMMUNICATIONS.map((communication, index) => {
              if (index < 4) {
                return (
                  <VariantsComponent
                    key={index}
                    direction="y"
                    startDistance={-100}
                    className={clsx("rounded-2xl")}
                  >
                    <Link
                      href={communication.href}
                      className={clsx(
                        "rounded-2xl cursor-pointer border-2 bg-black border-[#1E1E1E] relative w-full h-full"
                      )}
                    >
                      <Image
                        src={communication.image}
                        alt="img"
                        removeWrapper
                        className="w-full h-full object-cover top-0 left-0 z-0"
                      />
                      <div className="w-full h-full flex flex-col justify-end text-white z-10 p-10 space-y-5 absolute bg-black/50 rounded-2xl">
                        <p className="text-sm uppercase">
                          {communication.date.toUTCString()}
                        </p>
                        <h1 className={clsx("text-5xl font-medium")}>
                          {communication.title}
                        </h1>
                      </div>
                    </Link>
                  </VariantsComponent>
                );
              }
            })}
          </div>
          <Carousel className="md:hidden">
            {COMMUNICATIONS.map((communication, index) => {
              if (index < 4) {
                return (
                  <Link
                    key={index}
                    href={communication.href}
                    className={clsx(
                      "rounded-2xl cursor-pointer border-2 bg-black border-[#1E1E1E] relative w-[80vw] min-h-[70vh] h-full"
                    )}
                  >
                    <Image
                        src={communication.image}
                        alt="img"
                        removeWrapper
                        className="w-full h-full object-cover top-0 left-0 z-0 absolute"
                      />
                    <div className="w-full h-full flex flex-col justify-end text-white z-10 p-10 space-y-5 bg-black/50 rounded-2xl">
                      <p className="text-sm uppercase">
                        {communication.date.toUTCString()}
                      </p>
                      <h1 className={clsx("text-xl font-medium")}>
                        {communication.title}
                      </h1>
                    </div>
                  </Link>
                );
              }
            })}
          </Carousel>
          <Link className="text-white cursor-pointer underline-offset-4 md:hidden underline self-center">
            VIEW ALL
          </Link>
        </div>
      </WrapperContent>
    </section>
  );
};

export default CommunicationSection;
