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
  role,
  socials
}) => {

  return (
    <div>

      <div className="inline-block text-2xl bg-gray-800 rounded-full p-2 mb-4">
        {thumbnail ? <Image src={thumbnail} alt="" /> : <BiSolidUser />}</div>
      <div className="font-medium text-sm">by {name}</div>
      <div className="text-sm opacity-75 pb-2">{role}</div>
      <div className="border-t border-white/10">
        {socials && <div>
          <div className="py-4 text-xs opacity-60">Share</div>
          <div className="flex w-full items-center space-x-4">

            {socials?.telegram && <Link href={socials.telegram} target="_blank" className="border border-[#363636] bg-[#FFF] rounded-full md:p-2 p-1 md:text-md text-xl text-black"
            >
              <FaTelegram />
            </Link>}

            {socials?.discord && <Link href={socials.discord} target="_blank" className="border border-[#363636] bg-[#FFF] rounded-full md:p-2 p-1 md:text-md text-xl text-black"
            >
              <FaDiscord />
            </Link>}

            {socials?.twitter && <Link href={socials.twitter} target="_blank" className="border border-[#363636] bg-[#FFF] rounded-full md:p-2 p-1 md:text-md text-xl text-black"
            >
              <BsTwitterX />
            </Link>}
          </div>
        </div>}
      </div>
    </div>
  );
};

export default Author;
