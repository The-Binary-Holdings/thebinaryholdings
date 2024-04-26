import { Image } from "@nextui-org/react";
import Link from "next/link";
import { BiSolidUser } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
import { FaDiscord, FaTelegram } from "react-icons/fa";

interface author {
  name: string;
  thumbnail: string;
  role: string;
  socials: {
    telegram: string;
    discord: string;
    twitter: string
  }
}

const Author: React.FC<author> = ({
  thumbnail,
  name,
  role
}) => {

  return (
    <div>
      {thumbnail ? <Image src={thumbnail} alt="" className="inline-block rounded-full mb-4 size-16" /> :
        <div className="inline-block text-2xl bg-gray-800 rounded-full p-2 mb-4"> <BiSolidUser /> </div>}
      <div className="font-medium text-sm">by {name}</div>
      <div className="text-sm opacity-75 pb-2">{role}</div>
      <div className="border-t border-white/10">
        <div>
          <div className="py-4 text-xs opacity-60">Share</div>
          <div className="flex w-full items-center space-x-4">

            <Link href="#" target="_blank" className="border border-[#363636] bg-[#FFF] rounded-full md:p-2 p-1 md:text-md text-xl text-black"
            >
              <FaTelegram />
            </Link>

            <Link href="#" target="_blank" className="border border-[#363636] bg-[#FFF] rounded-full md:p-2 p-1 md:text-md text-xl text-black"
            >
              <FaDiscord />
            </Link>

            <Link href="#" target="_blank" className="border border-[#363636] bg-[#FFF] rounded-full md:p-2 p-1 md:text-md text-xl text-black"
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
