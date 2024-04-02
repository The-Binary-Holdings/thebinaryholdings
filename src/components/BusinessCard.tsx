import React from "react";
import { IBusiness } from "@/common/constants";
import { Image, Button } from "@nextui-org/react";

const BusinessCard = ({
  data,
  className,
}: {
  data: IBusiness;
  className?: string;
}) => {
  return (
    <div
      className={`${className} grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-5 rounded-2xl border-2 border-[#1E1E1E] select-none`}
    >
      <div className="flex flex-col justify-between col-span-1 md:col-span-2 w-full p-6">
        <span className="w-full justify-end hidden md:flex">
          <Image
            src={data.logo}
            alt={data.name}
            width={100}
            height={100}
            radius="full"
            className="bg-white aspect-square"
          />
        </span>
        <div className="flex flex-col space-y-4 md:space-y-8 md:pt-10">
          <h1 className="text-4xl md:text-5xl font-medium md:font-normal">{data.name}</h1>
          <p className="text-white/80">{data.description}</p>
        </div>
        <Button className="bg-transparent border-2 border-[#1E1E1E] text-white py-6">
          LEARN MORE
        </Button>
      </div>
      <div className={`col-span-1 md:col-span-3 bg-black rounded-2xl rounded-ss-none rounded-se-none md:rounded-se-2xl md:rounded-es-none relative block overflow-hidden`}> 
        <Image src={data.image_url} alt={data.name} className="block absolute min-h-full min-w-full inset-0 object-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" removeWrapper draggable={false}/>
      </div>
    </div>
  );
};

export default BusinessCard;
