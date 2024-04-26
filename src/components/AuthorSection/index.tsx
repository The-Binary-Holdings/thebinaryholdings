import { Image } from "@nextui-org/react";
import Link from "next/link";
import { BiSolidUser } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
import { FaDiscord, FaTelegram } from "react-icons/fa";
import {isMobile} from 'react-device-detect';

interface author {
  name: string;
  thumbnail: string;
  role: string;
  pageTitle: string;
}

const Author: React.FC<author> = ({
  thumbnail,
  name,
  role,
  pageTitle
}) => {

  return (
    <div className="flex lg:block lg:justify-normal justify-between relative">
      <div className="lg:block flex items-center self-start">
        <div className="block">
          {thumbnail ? <Image src={thumbnail} alt="" className="inline-block rounded-full mb-4 size-[48px] md:size-16" /> :
            <div className="inline-block text-2xl bg-gray-800 rounded-full p-2 mb-4"> <BiSolidUser /> </div>}
        </div>
        <div className="lg:block lg:pl-0 pl-4">
          <div className="font-medium text-sm sm:text-xs">by {name}</div>
          <div className="text-sm opacity-75 pb-2">{role}</div>
        </div>
      </div>
      <div className="md:border-0 flex lg:border-t lg:border-white/10">
        <div className="lg:block flex items-center">
          <div className="py-4 text-xs opacity-60 lg:block hidden">Share</div>
          <div className="flex w-full items-center space-x-4">

            <Link href={`https://telegram.me/share/url?url=${location.href}&text=${pageTitle}`} target="_blank" className="border border-[#363636] bg-[#FFF] rounded-full md:p-2 p-1 md:text-md text-xl text-black"
            >
              <FaTelegram />
            </Link>

            {/* <Link href="#" target="_blank" className="border border-[#363636] bg-[#FFF] rounded-full md:p-2 p-1 md:text-md text-xl text-black"
            >
              <FaDiscord />
            </Link> */}

            <Link href={`https://twitter.com/intent/tweet?url=${location.href}&text=${pageTitle}`} target="_blank" className="border border-[#363636] bg-[#FFF] rounded-full md:p-2 p-1 md:text-md text-xl text-black"
            >
              <BsTwitterX />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Author;
