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
    <Link href={`/blog?id=${id}`}>
      <div className="rounded-lg self-start flex lg:block md:block">
        <div className="relative lg:w-full md:w-full w-36">
          <img src={img} alt={title} width="100%" />
        </div>
        <div className="text-white pt-2 flex-1 lg:flex-none md:flex-none pl-2 md:pl-0">
          <p className="text-xs">
            <span className="mr-4">{type}</span><span>{moment(created_at).format('DD-MM-YYYY')}</span>
          </p>
          <p className="lg:text-lg md:text-base text-sm pt-2 text-white line-clamp-2">{title}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogPost;
