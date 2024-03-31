import React from "react";
import WrapperContent from "../WrapperContent";
import { Button, Image } from "@nextui-org/react";

const VisionSection = () => {
  return (
    <section className="w-full h-screen text-white">
      <WrapperContent>
        <div className="w-full grid grid-cols-2 gap-x-44">
          <div className="flex flex-col space-y-20 p-20 justify-center">
            <h1 className="text-highlight text-6xl">
              Bridging Worlds with Ease and Security
            </h1>
            <p className="text-lg">
              Highlight the focus on human connection, ensuring technology
              enhances, not replaces, meaningful interactions.
            </p>
            <Button className="w-fit px-20 py-8 bg-white">
              CLICK TO EXPLORE
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="row-span-4">
              <Image
                src="/vision-1.png"
                alt="vision-image"
                removeWrapper
                className="h-full"
              />
            </div>
            <div className="bg-[#00FB8A] row-span-1 p-6 rounded-3xl text-black rounded-ee-none">
              SHOWCASE TBH&apos;S EXPERTISE IN FACILITATING SECURE AND
              USER-FRIENDLY MIGRATION FROM WEB2 TO WEB3.
            </div>
            <div className="row-span-4">
              <Image
                src="/vision-2.png"
                alt="vision-image"
                removeWrapper
                className="h-full"
              />
            </div>
            <div className="row-span-2">
              <Image
                src="/vision-3.png"
                alt="vision-image"
                removeWrapper
                className="h-full"
              />
            </div>
            <div className="bg-[#402D98] row-span-1 p-6 rounded-3xl text-white rounded-se-none">
              EMPHASIZE THE COMMITMENT TO PROVIDING CONTINUOUS SUPPORT
              THROUGHOUT THE JOURNEY.
            </div>
          </div>
        </div>
      </WrapperContent>
    </section>
  );
};

export default VisionSection;
