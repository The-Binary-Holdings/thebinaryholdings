"use client";

import { Suspense, useEffect, useState } from "react";
import { articlesDAO } from "@/common/DAO/articles.dao";
import { useNavigate, useParams } from "react-router-dom";
import { NextPage } from "next";
import { Accordion, AccordionItem, Image } from "@nextui-org/react";
import GradientText from "@/components/GradientText";
import Author from "@/components/AuthorSection";
import { useSearchParams, useRouter } from "next/navigation";

interface ArticleProps {
  id: string;
  img: string;
  title: string;
  desc: string;
  type: string;
  created_at: string;
  addons: Array<{ title: string; desc: string }>;
  author: {
    name: string;
    thumbnail: string;
    role: string;
    socials: {
      telegram: string;
      discord: string;
      twitter: string;
    };
  };
}

const Article: NextPage = () => {
  const [article, setArticle] = useState<ArticleProps>({
    id: '',
    img: '',
    title: '',
    desc: '',
    type: '',
    created_at: '',
    addons: [],
    author: {
      name: '',
      thumbnail: '',
      role: '',
      socials: {
        telegram: '',
        discord: '',
        twitter: ''
      }
    }
  });
  const qParams = useSearchParams();
  const id = qParams.get('id') as string;
  const router = useRouter()
  useEffect(() => {
    const getArticle = async () => {
      if(id) {
        articlesDAO.getArticleById(id).then((article: ArticleProps) => {
          window.scrollTo(0, 0);
          setArticle(article);
        });
      } else {
        router.push('/articles');
      }
    };
    getArticle();
  }, []);

  return (
    <div className="lg:w-5/6 m-auto">
      <div className="pt-16 md:px-8">
        <main className="bg-black text-white p-10">
          {article?.id && <section>
            <div className="text-center">
              <h2 className="lg:text-4xl md:text-2xl sm:text-xl lg:mb-6 mb-2">{article.title}</h2>
            </div>
            <div className="w-full lg:h-[400px] md:h-[300px] sm:h-[200px] bg-no-repeat bg-cover bg-center relative">
              {article?.img && <div className="w-fit mx-auto"><Image src={article?.img} alt="" className="lg:h-[400px] md:h-[300px] sm:h-[200px]" /></div>}
            </div>

            <div className="lg:flex mt-12">
              <div className="lg:w-1/4 px-0 lg:px-6">
                <Author thumbnail={article.author.thumbnail} name={article.author.name} role={article.author.role} pageTitle={article.title} />
              </div>
              <div className="lg:w-3/4 lg:p-0 pt-2">
                <div className="text-sm opacity-75 leading-6">{article.desc}</div>
                {article?.addons?.length && <Accordion className="w-full border-y border-white/10 mt-14" selectionMode="multiple">
                  {article.addons.map((data, index) => {
                    return (
                      <AccordionItem
                        key={index}
                        aria-label={data.title}
                        title={
                          <GradientText className="font-medium lg:text-2xl md:text-xl text-base">
                            {data.title}
                          </GradientText>
                        }
                        className="border-t border-white/10 lg:py-3 md:py-2 py-1"
                        classNames={{
                          title: "text-white text-lg",
                        }}
                        // eslint-disable-next-line react/no-children-prop
                        children={<div className="text-sm opacity-75 leading-6" dangerouslySetInnerHTML={{ __html: data.desc }}></div>}
                      />
                    );
                  })}
                </Accordion>}
              </div>
            </div>
          </section> }
        </main>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Article />
    </Suspense>
  );
};

export default App;
