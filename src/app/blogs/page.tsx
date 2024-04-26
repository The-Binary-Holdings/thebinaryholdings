"use client";

import BlogPost from "@/components/BlogpostSection";
import { useEffect, useState } from "react";
import { articlesDAO } from '@/common/DAO/articles.dao';

const ArticlesHome = () => {

  const [articles, setArticles] = useState<Array<any>>([]);
  useEffect(() => {
    const getArticles = async () => {
      articlesDAO.getAllAtricles().then((articles: { id: number; created_at: string; img: string; title: string; type: string }[] | null) => {
        window.scrollTo(0, 0);
        setArticles(articles || []);      
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
                <h2 className="text-4xl md:text-3xl sm:text-xl mb-10">Blog</h2>
            </div>
            <div className="w-full bg-no-repeat bg-cover bg-center relative">
              <img src="articles-banner.svg" alt="" />
                <div className="absolute bottom-0 left-10 md:w-5/6">
                    <h6 className="text-xs opacity-75 mb-4">The Binary Holdings (TBH)</h6>
                    <h2 className="mb-8 lg:text-4xl md:text-2xl sm:text-xl">The Future of Digital Engagement: Exploring the Depths of the TBH Holding Model</h2>
                </div>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:mt-20 md:mt-14 sm:mt-8 content-start">
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

export default ArticlesHome;
