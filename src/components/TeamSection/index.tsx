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
    <div className="p-6 border border-gray-700 rounded-lg text-center space-y-4">
      <div className="w-32 h-32 mx-auto">
        {/* Image should be wrapped with div or span to avoid div inside p error */}
        <Image
          src={imageUrl}
          alt={name}
          width={128}
          height={128}
          className="rounded-full"
        />
      </div>
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-gray-400">{role}</p>
      <div className="flex justify-center space-x-4">
        {linkedinUrl && (
          <a
            key="linkedIn"
            href={linkedinUrl}
            rel="noopener noreferrer"
            className="p-2 rounded-full text-white bg-black"
          >
            <FaLinkedinIn />
          </a>
        )}
        {twitterUrl && (
          <a
            key="twitter"
            href={twitterUrl}
            rel="noopener noreferrer"
            className="p-2 rounded-full text-white bg-black"
          >
            <FaTwitter />
          </a>
        )}
      </div>
    </div>
  );
};

export default TeamMember;
