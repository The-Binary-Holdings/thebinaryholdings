"use client";
import WrapperContent from "@/components/WrapperContent";
import React from "react";
import { Accordion, AccordionItem, Image } from "@nextui-org/react";
import { FAQ_ITEMS } from "@/common/constants";
import GradientText from "@/components/GradientText";
import htmlDecode from "@/utils/htmlDecode";
import parse from "html-react-parser";

const FAQ = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-no-repeat font-light">
      {/* hero section */}
      <section className="w-full mt-16" id="hero">
        <WrapperContent className=" max-w-screen-xl py-8 lg:py-16 mx-auto">
          <Image alt="icon" src="/FAQ-banner.png" />
        </WrapperContent>
      </section>
      <section className="w-full" id="hero">
        <WrapperContent className=" max-w-screen-xl py-16 mx-auto">
          {FAQ_ITEMS.map((faq, index) => {
            return (
              <div
                className="lg:mt-18 grid grid-cols-4 w-full relative"
                key={index}
              >
                {/* <div className="absolute top-0 left-0 col-span-4 w-full text-green text-lg lg:text-3xl font-semibold h-full z-0">
                </div> */}
                <span className="sticky top-0 py-10 border-b border-white/10 bg-black inline-block text-center z-20 col-span-4 w-full text-green text-lg lg:text-3xl font-semibold">
                  {faq.section}
                </span>
                <div className="lg:p-0 pt-2 col-span-4 relative z-10">
                  <Accordion className="w-full !mt-0" selectionMode="multiple">
                    {faq.items.map((data, index) => {
                      return (
                        <AccordionItem
                          key={index}
                          aria-label={data.question}
                          title={
                            <GradientText className="font-medium lg:text-2xl md:text-xl text-base">
                              {data.question}
                            </GradientText>
                          }
                          className="border-t border-white/10 first:border-t-0 !border-b-0 lg:py-3 md:py-2 py-1"
                          classNames={{
                            title: "text-white text-lg",
                          }}
                          // eslint-disable-next-line react/no-children-prop
                          children={
                            <div className="text-sm opacity-75 leading-6 text-white">
                              {parse(data.answer)}
                            </div>
                          }
                        />
                      );
                    })}
                  </Accordion>
                </div>
              </div>
            );
          })}
        </WrapperContent>
      </section>
    </main>
  );
};

export default FAQ;
