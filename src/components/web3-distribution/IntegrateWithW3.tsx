import React from "react";

import CareerHero from "@/components/CareerHero";
import CareerJobs from "@/components/CareerJobs";
import Separate from "@/components/Separate";
import WrapperContent from "@/components/WrapperContent";
import { Image, Button } from "@nextui-org/react";
import Link from "next/link";

const IntegrateWithW3 = () => {
  const labelImgClass = 'w-full m-auto opacity-75 pt-20';
  return (
    
    <main  className=" max-w-screen-2xl mx-auto px-4 md:px-16 lg:px-32 flex py-24 lg:py-0 flex-col justify-evenly relative z-20 text-white">
      <div className="grid place-items-center">
        <Image src="./web3-1-1.png" alt="" className={labelImgClass} />
        {/* <Image src="./web3_2.png" alt="" className="w-full -my-40" />
        <Image src="./web3_3.png" alt="" className={labelImgClass} /> */}
        <div className="capitalize mt-10 mb-8 text-center">
          Insert your DApp into Telecommunication Apps and connect with Millions of real users instantly.
        </div>
              <Button
                as={Link}
                href="#"
                target="_blank"
                className="bg-green text-black w-fit font-semibold uppercase mt-5 mb-20"
                radius="sm"
              >
                Ask us how
              </Button>
      </div>
    </main>
  );
};

export default IntegrateWithW3;
