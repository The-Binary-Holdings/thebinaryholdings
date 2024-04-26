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
    <div className="w-5/6 m-auto">
      <div className="pt-16 md:px-8">
        <main className="bg-black text-white p-10">
          {article?.id && <section>
            <div className="text-center">
              <button className="mb-4 rounded-full border-1 border-green-600 text-green-600 px-6 py-2 text-xs">{article.type}</button>
              <h2 className="text-4xl mb-6">{article.title}</h2>
              <h6 className="text-xs opacity-75 mb-4">The Binary Holdings (TBH)</h6>
            </div>
            <div className="w-full h-[400px] bg-no-repeat bg-cover bg-center relative rounded-[100px]">
              {article?.img && <div className="w-fit mx-auto"><Image src={article?.img} alt="" className="h-[400px]" /></div>}
            </div>

            <div className="flex mt-12">
              <div className="w-1/4 px-6">
                <Author thumbnail={article.author.thumbnail} name={article.author.name} role={article.author.role} socials={article.author.socials} />
              </div>
              <div className="w-3/4">
                <div className="text-sm opacity-75 leading-6">{article.desc}</div>
                {article?.addons?.length && <Accordion className="w-full border-y border-white/10 mt-14" selectionMode="multiple">
                  {article.addons.map((data, index) => {
                    return (
                      <AccordionItem
                        key={index}
                        aria-label={data.title}
                        title={
                          <GradientText className="font-medium text-2xl">
                            {data.title}
                          </GradientText>
                        }
                        className="border-t border-white/10 py-3"
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
