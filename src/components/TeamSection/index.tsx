import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaTwitter, FaDiscord } from "react-icons/fa";

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
  twitterUrl?: string;
  linkedinUrl?: string;
  discordUrl?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  imageUrl,
  twitterUrl,
  linkedinUrl,
}) => {
  return (
    <div className="rounded-lg">
      <div className="relative w-full h-96 mx-auto overflow-hidden rounded-lg">
        <Image
          unoptimized
          src={imageUrl}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        <div className="absolute bottom-0 right-0 p-4 space-x-2">
          {linkedinUrl && (
            <a
              key="linkedIn"
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block p-4 rounded-full text-white bg-black hover:bg-blue-600 transition-colors"
            >
              <FaLinkedinIn />
            </a>
          )}
          {twitterUrl && (
            <a
              key="twitter"
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block p-4 rounded-full text-white bg-black hover:bg-blue-500 transition-colors"
            >
              <FaTwitter />
            </a>
          )}
        </div>
      </div>
      <h3 className="text-2xl md:text-3xl font-bold text-white pt-4">{name}</h3>
      <p className="text-lg md:text-xl pt-2">{role}</p>
    </div>
  );
};

export default TeamMember;
