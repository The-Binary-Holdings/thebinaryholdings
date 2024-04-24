import type { NextPage } from "next";
import Head from "next/head";
import BlogPost from "@/components/BlogpostSection"; // Adjust the import path based on your directory structure

const Team: NextPage = () => {
  // You would fetch these details from an API or have them in some state management
  const blogs = [
    {
      title: "Revolutionizing Reality: A Dive into Twin Matrix Technologies",
      type: "Podcast",
      thumbnail: "/blog-post.png",
      date: "16-04-2024",
    }
  ];

  return (
    <div className="w-full">
      <div className="pt-16 md:px-8">
        <main className="bg-black text-white p-10">
          <section>
            <div className="text-center">                
                <button className="mb-4 rounded-full border-1 border-green-600 text-green-600 px-6 py-2 text-xs">Latest</button>
                <h2 className="text-4xl mb-10">Articles</h2>
            </div>
            <div className="bg-articles-banner w-full h-[600px] bg-no-repeat bg-cover bg-center relative">
                <div className="absolute bottom-0 left-10 md:w-5/6">
                    <h6 className="text-xs opacity-75 mb-4">The Binary Holdings (TBH)</h6>
                    <h2 className="text-4xl mb-8">The Future of Digital Engagement: Exploring the Depths of the TBH Holding Model</h2>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24">
              {blogs.map((blog, index) => (
                <BlogPost key={index} {...blog} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Team;
