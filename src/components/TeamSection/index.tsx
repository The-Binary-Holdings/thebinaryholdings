import { FaLinkedinIn, FaTwitter, FaDiscord } from "react-icons/fa";
import { Image, Link } from "@nextui-org/react";

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
  avatar: string;
  twitterUrl?: string;
  linkedinUrl?: string;
  discordUrl?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  imageUrl,
  avatar,
  twitterUrl,
  linkedinUrl,
}) => {
  return (
    <div className="bg-gradient-to-t from-[#6A6A6A]/10 to-white/10 p-1">
      <div className="w-full bg-gradient-to-t from-[#00FB64]/20 to-[#D9D9D9]/10 py-5 px-3 flex flex-col backdrop-blur-md">
        <Link
          className="w-full h-64 cursor-pointer bg-black group"
          href={linkedinUrl}
          target="_blank"
        >
          <Image
            src="/decor_avatar.png"
            alt="image"
            className="w-full h-full absolute top-0 object-cover object-center "
            removeWrapper
            radius="none"
          />
          <Image
            src={avatar}
            alt="image"
            className="w-full h-full absolute top-0 object-cover object-top opacity-100 group-hover:opacity-0 transition-opacity"
            removeWrapper
            radius="none"
          />
          <Image
            src={imageUrl}
            alt="image"
            className="w-full h-full absolute top-0 object-cover object-top !opacity-0 group-hover:!opacity-100 transition-opacity"
            removeWrapper
            radius="none"
          />
        </Link>
        <h1 className="mt-5 font-medium text-xl">{name}</h1>
        <p className="mt-1 font-light text-xs">{role}</p>
      </div>
    </div>
  );
};

export default TeamMember;
