"use client";
import React, { useEffect, useState } from "react";
import WrapperContent from "@/components/WrapperContent";
import VariantsComponent from "@/components/VariantsComponent";
import { Link, Image } from "@nextui-org/react";
import PaginationCarousel from "@/components/PaginationCarousel";
import { articlesDAO } from "@/common/DAO/articles.dao";
import BlogPost from "@/components/BlogpostSection";

function splitBlog(arr: any[], chunkSize: number) {
  let result = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }
  return result;
}

const BlogSection = () => { 
  const [articles, setArticles] = useState<Array<any>>([]);
      
  useEffect(() => {
    const getArticles = async () => {
      articlesDAO.getAllAtricles().then(
        (
          articles:
            | {
                id: number;
                created_at: string;
                img: string;
                title: string;
                type: string;
              }[]
            | null
        ) => {
          setArticles(articles || []);
        }
      );
    };
    getArticles();
  }, []);

  return (
    <section className="w-full py-16 md:pt-16 lg:pt-32" id="business">
      <WrapperContent>
        <div className="w-full flex flex-col items-center">
          <div className="w-full flex justify-center items-center">
            <VariantsComponent direction="x" startDistance={-100}>
              <h1 className="text-green text-3xl lg:text-5xl font-semibold leading-snug">
                Read Our Latest Insights
              </h1>
            </VariantsComponent>
            {/* <Link href="#" className="text-white uppercase underline font-medium hidden md:inline-block">view all</Link> */}
          </div>
          <div className="w-full sm:flex mt-8 lg:mt-16 relative hidden">
            <PaginationCarousel numberChildren={Math.ceil(articles.length / 3)}>
              {splitBlog(articles, 3).map((item, index) => {
                return (
                  <div
                    key={index}
                    className=" xl:w-[1280px] w-[580px] sm:w-[640px] md:w-[700px] lg:w-[850px] max-w-full grid grid-cols-3 gap-x-6 pe-4"
                  >
                    {item.map((article, index) => {
                      return (
                        <BlogPost
                          key={index}
                          {...article}
                          isEnableWrap={false}
                        />
                      );
                    })}
                  </div>
                );
              })}
            </PaginationCarousel>
          </div>
          <div className="w-full flex mt-8 lg:mt-16 relative sm:hidden">
            <PaginationCarousel numberChildren={Math.ceil(articles.length / 2)}>
              {splitBlog(articles, 2).map((item, index) => {
                return (
                  <div
                    key={index}
                    className="w-[400px] max-w-full grid grid-cols-2 gap-x-6 pe-4"
                  >
                    {item.map((article, index) => {
                      return <BlogPost key={index} {...article} />;
                    })}
                  </div>
                );
              })}
            </PaginationCarousel>
          </div>
        </div>
      </WrapperContent>
    </section>
  );
};

export default BlogSection;
