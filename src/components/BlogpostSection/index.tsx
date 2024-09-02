import { Link } from "@nextui-org/react";
import moment from "moment";
import clsx from "clsx";

interface BlogPostProps {
  img: string;
  title: string;
  created_at: string;
  id: string;
  type: string;
  isEnableWrap?: boolean;
}

const BlogPost: React.FC<BlogPostProps> = ({
  img,
  title,
  created_at,
  type,
  id,
  isEnableWrap,
}) => {
  return (
    <Link href={`/blog?id=${id}`}>
      <div
        className={clsx(
          "rounded-lg self-start",
          isEnableWrap ? "flex lg:block md:block" : "flex flex-col"
        )}
      >
        <div className={clsx("relative", isEnableWrap ? "lg:w-full md:w-full w-36" : "w-full")}>
          <img src={img} alt={title} width="100%" />
        </div>
        <div className="text-white pt-2 flex-1 lg:flex-none md:flex-none pl-2 md:pl-0">
          <p className="text-xs">
            <span className="mr-4">{type}</span>
            <span>{moment(created_at).format("DD-MM-YYYY")}</span>
          </p>
          <p className="lg:text-lg md:text-base text-sm pt-2 text-white line-clamp-2">
            {title}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogPost;
