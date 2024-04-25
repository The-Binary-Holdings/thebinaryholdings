"use client";

import type { NextPage } from "next";
import Head from "next/head";
import BlogPost from "@/components/BlogpostSection"; // Adjust the import path based on your directory structure
import { useEffect, useState } from "react";
import { articlesDAO } from '@/common/DAO/articles.dao';

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
              {articles.map((article, index) => (
                <BlogPost key={index} {...article} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Team;
