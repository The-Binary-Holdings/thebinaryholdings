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
      className={`${className} h-full grid grid-cols-3 rounded-2xl border-2 border-[#1E1E1E] select-none`}
    >
      <div className="flex flex-col w-full p-6 space-y-20">
        <span className="w-full flex justify-end">
          <Image
            src={data.logo}
            alt={data.name}
            width={50}
            height={50}
            className="rounded-full"
          />
        </span>
        <div className="flex flex-col space-y-8 pt-10">
          <h1 className="text-5xl">{data.name}</h1>
          <p>{data.description}</p>
        </div>
        <Button className="bg-transparent border-2 border-[#1E1E1E] text-white">
          LEARN MORE
        </Button>
      </div>
      <div className={`col-span-2 bg-black rounded-2xl rounded-ss-none rounded-es-none h-auto relative block overflow-hidden`}> 
        <Image src={data.image_url} alt={data.name} className="block absolute min-h-full min-w-full inset-0 object-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" removeWrapper draggable={false}/>
      </div>
    </div>
  );
};

export default BusinessCard;
