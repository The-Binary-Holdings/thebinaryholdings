import React from "react";
import WrapperContent from "../../WrapperContent";
import VariantsComponent from "../../VariantsComponent";
import { Link, Image } from "@nextui-org/react";
import { SOCIALS } from "@/common/constants/index";
import GetIcon from "@/common/icons";
import { MdArrowOutward } from "react-icons/md";
import PaginationCarousel from "../../PaginationCarousel";
import path from "path";
import { promises as fs } from "fs";

const CommunitySection = async () => {
  const imageDirectory = path.join(process.cwd(), "/public/TBH");
  const imageFilenames = await fs.readdir(imageDirectory);

  return (
    <section className="w-full py-16 md:pt-16 lg:pt-32" id="business">
      <WrapperContent>
        <div className="w-full flex flex-col items-center">
          <div className="w-full flex justify-center items-center">
            <VariantsComponent direction="x" startDistance={-100}>
              <h1 className="text-highlight text-2xl lg:text-5xl font-semibold leading-snug">
                Join the <b className="text-green font-semibold">#BinaryGang</b>
              </h1>
            </VariantsComponent>
            {/* <Link href="#" className="text-white uppercase underline font-medium hidden md:inline-block">view all</Link> */}
          </div>
          <div className="w-full flex mt-8 lg:mt-16">
            <div className="grid grid-cols-3 gap-x-4">
              <div className="rounded-3xl bg-white/20 text-white pt-10 py-5 px-14 flex flex-col w-full h-fit col-span-3 xl:col-span-1">
                <h1 className=" text-3xl font-bold">join our community</h1>
                <div className="flex flex-col space-y-4 mt-8">
                  {SOCIALS.map((social, i) => {
                    return (
                      <Link
                        key={i}
                        className="flex space-x-4 text-white"
                        href={social.link}
                      >
                        <span className="p-3 rounded-full bg-white">
                          {GetIcon({ iconName: social.type })}
                        </span>
                        <div className="flex flex-col font-semibold ">
                          <h1 className="text-lg">{social.type}</h1>
                          <p className="text-[#929292]">{social.subTitle}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
                <div className="w-full flex justify-end mt-8 text-sm">
                  <Link className="uppercase text-white cursor-pointer">
                    Find more <MdArrowOutward className="text-green text-xl" />
                  </Link>
                </div>
              </div>
              <div className="col-span-3 xl:col-span-2 max-h-max mt-8 xl:mt-0">
                <PaginationCarousel numberChildren={imageFilenames.length}>
                  {imageFilenames.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="w-[250px] h-[180px] sm:w-[500px] sm:h-[400px] flex justify-center overflow-hidden px-4 relative"
                      >
                        <Image
                          key={index}
                          alt="img"
                          src={`/TBH/${item}`}
                          className="h-full w-full border border-white/10"
                          classNames={{ img: "object-contain", }}
                        />
                      </div>
                    );
                  })}
                </PaginationCarousel>
              </div>
            </div>
          </div>
        </div>
      </WrapperContent>
    </section>
  );
};

export default CommunitySection;
