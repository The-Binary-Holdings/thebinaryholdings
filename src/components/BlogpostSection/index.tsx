import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaTwitter, FaDiscord } from "react-icons/fa";

interface BlogPostProps {
  thumbnail: string;
  title: string;
  date: string;
  type?: string;
}

const BlogPost: React.FC<BlogPostProps> = ({
  thumbnail,
  title,
  date,
  type,
}) => {
  return (
    <div className="rounded-lg">
      <div className="relative w-full h-72 mx-auto overflow-hidden rounded-lg">
        <Image
          unoptimized
          src={thumbnail}
          alt={title}
          layout="fill"
          objectFit="contain"
          className="rounded-lg"
        />
      </div>
      <p className="text-xs text-white pt-2">
      <span className="mr-4">{type}</span><span>{date}</span>
      </p>
      <p className="text-lg md:text-xl pt-2">{title}</p>
    </div>
  );
};

export default BlogPost;
