import React from "react";
import WrapperContent from "../WrapperContent";
import VariantsComponent from "../VariantsComponent";
import { Link, Card, CardBody, Image } from "@nextui-org/react";
import { COMMUNICATIONS } from "@/common/constants";
import clsx from "clsx"

const classNames : String[] = [
  "col-span-2 row-span-4",
  "col-span-2 row-span-2 h-[70vh]",
  "col-span-1 row-span-2",
  "col-span-1 row-span-2",
]

const CommunicationSection = () => {
  return (
    <section className="w-full py-32">
      <WrapperContent>
        <div className="w-full flex flex-col space-y-20">
          <div className="w-full flex justify-between items-center">
            <VariantsComponent direction="x" startDistance={-100}>
              <h1 className="text-highlight text-6xl font-medium">Communication</h1>
            </VariantsComponent>
            <Link className="text-white cursor-pointer underline-offset-4">
              VIEW ALL
            </Link>
          </div>
          <div className="grid grid-cols-4 grid-rows-4 w-full gap-4">
            {COMMUNICATIONS.map((communication, index) => {
              if(index < 4){
                return (
                  <VariantsComponent key={index} direction="y" startDistance={-100} className={clsx(classNames[index], "rounded-2xl")}>
                    <Link href={communication.href} className={clsx("rounded-2xl cursor-pointer border-2 bg-black border-[#1E1E1E] relative w-full h-full")}>
                        <Image src={communication.image} alt="img" removeWrapper className="w-full h-full object-cover absolute top-0 left-0 z-0"/>
                        <div className="w-full h-full flex flex-col justify-end text-white z-10 p-10 space-y-5">
                          <p className="text-sm uppercase">{communication.date.toUTCString()}</p>
                          <h1 className={clsx(index < 2 ? "text-5xl" : "text-2xl")}>{communication.title}</h1>
                        </div>
                    </Link>
                  </VariantsComponent>
                )
              }
            })}
          </div>
        </div>
      </WrapperContent>
    </section>
  );
};

export default CommunicationSection;
