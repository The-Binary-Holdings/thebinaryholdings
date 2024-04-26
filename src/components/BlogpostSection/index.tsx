import { Link } from "@nextui-org/react";
import moment from "moment";
import Image from "next/image";
import { useNavigate } from "react-router-dom";

interface BlogPostProps {
  img: string;
  title: string;
  created_at: string;
  id: string;
  type: string;
}

const BlogPost: React.FC<BlogPostProps> = ({
  img,
  title,
  created_at,
  type,
  id
}) => {


  return (
    <Link href={`/article?id=${id}`}>
      <div className="rounded-lg">
        <div className="relative w-full h-72 mx-auto overflow-hidden rounded-lg">
          <Image
            unoptimized
            src={img}
            alt={title}
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>
        <p className="text-xs text-white pt-2">
          <span className="mr-4">{type}</span><span>{moment(created_at).format('DD-MM-YYYY')}</span>
        </p>
        <p className="text-lg md:text-xl pt-2 text-white">{title}</p>
      </div>
      </Link>
  );
};

export default BlogPost;
