import React from "react";
import WrapperContent from "../../WrapperContent";
import VariantsComponent from "../../VariantsComponent";
import { Link, Image, Button } from "@nextui-org/react";
import { SOCIALS } from "@/common/constants/index";
import GetIcon from "@/common/icons";
import { MdArrowOutward, MdOutlineArrowOutward } from "react-icons/md";
import PaginationCarousel from "../../PaginationCarousel";
import path from "path";
import { promises as fs } from "fs";
import { GoDotFill } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const CardSection = async () => {
  const imageDirectory = path.join(process.cwd(), "/public/TBH");
  const imageFilenames = await fs.readdir(imageDirectory);

  return (
    <section className="w-full py-16 md:pt-16 lg:pt-32" id="business">
      <WrapperContent>
        <div className="bg-green text-black px-10 lg:px-24 py-14 lg:py-20 rounded-3xl w-full flex flex-col-reverse sm:flex-row">
          <div className="w-full sm:w-1/2 flex flex-col font-medium justify-center">
            <span className="uppercase  text-xs flex items-center space-x-2">
              <GoDotFill /> <p>Featured Cards</p>
            </span>
            <h1 className="text-4xl xl:text-6xl leading-tight capitalize mt-4">
              Crypto <br />
              Debit Cards
            </h1>
            <p className="text-base xl:text-xl">
              Spend your crypto with just a tap. Accepted
              <br /> everywhere where Visa is welcomed.
            </p>
            <div className="flex space-x-4 mt-4">
              <Button
                variant="bordered"
                className="border border-black text-lg font-medium"
                startContent={<FcGoogle />}
              >
                Pay
              </Button>
              <Button
                variant="bordered"
                className="border border-black text-lg font-medium"
                startContent={<FaApple />}
              >
                Pay
              </Button>
            </div>
            <Button
              as={Link}
              radius="full"
              className="bg-black text-white !px-2 py-7 mt-4 w-fit"
              href="https://www.plutope.io/debit-cards"
              target="_blank"
            >
              <p className="px-2">Explorer More</p>
              <div className="size-10 flex items-center justify-center rounded-full bg-[#3C3C3C]">
                <MdOutlineArrowOutward className="text-green" />
              </div>
            </Button>
          </div>
          <div className="w-full sm:w-1/2 flex items-center">
            <Image
              src="/card_stacked.png"
              alt="img"
              className="w-full"
              removeWrapper
            />
          </div>
        </div>
      </WrapperContent>
    </section>
  );
};

export default CardSection;
