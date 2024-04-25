"use client";

import type { NextPage } from "next";
import Head from "next/head";
import BlogPost from "@/components/BlogpostSection"; // Adjust the import path based on your directory structure
import { useEffect, useState } from "react";
import { articlesDAO } from "@/common/DAO/articles.dao";

const Team: NextPage = () => {
  
  
  const [articles, setArticles] = useState<Array<any>>([]);
  useEffect(() => {
    const getArticles = async () => {
      articlesDAO.getAllAtricles().then((articles: Array<any>) => {
        setArticles(articles);      
      });
    };
    getArticles();
  }, []);
  const blogs = [
    {
      title: "Revolutionizing Reality: A Dive into Twin Matrix Technologies",
      type: "Podcast",
      thumbnail: "/blog-post.png",
      date: "16-04-2024",
    }
  ];

  return (
    <div className="w-5/6 m-auto">
      <div className="pt-16 md:px-8">
        <main className="bg-black text-white p-10">
          <section>
            <div className="text-center">                
                <button className="mb-4 rounded-full border-1 border-green-600 text-green-600 px-6 py-2 text-xs">Article</button>
                <h2 className="text-4xl mb-6">The Future of Digital Engagement: Exploring the Depths of the TBH Holding Model</h2>
                <h6 className="text-xs opacity-75 mb-4">The Binary Holdings (TBH)</h6>
            </div>
            <div className="bg-articles-banner w-full h-[400px] bg-no-repeat bg-cover bg-center relative rounded-[100px]">
            </div>
            
            <div className="flex mt-12">
              <div className="w-1/4"></div>
              <div className="w-3/4"></div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Team;
