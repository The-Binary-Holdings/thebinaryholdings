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
              <div className="lg:mt-14 grid grid-cols-4 w-full" key={index}>
                <div className="relative px-0 lg:px-6 text-green text-lg lg:text-3xl font-semibold h-full">
                  <span className="sticky top-10">{faq.section}</span>
                </div>
                <div className="lg:p-0 pt-2 col-span-3">
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
                          className="border-t border-white/10 !border-b-0 lg:py-3 md:py-2 py-1"
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
