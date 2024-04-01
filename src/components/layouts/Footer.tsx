import React from "react";
import WrapperContent from "../WrapperContent";
import { Button, Input, Image } from "@nextui-org/react";
import { GoArrowRight } from "react-icons/go";
import { LAYOUT_ITEMS, SOCIALS, CERTIFICATES } from "@/common/constants";
import GetIcon from "@/common/icons";

const Footer = () => {
  return (
    <footer className="w-full">
      <WrapperContent>
        <div className="w-full pt-32 border-t-2 flex flex-col">
          <div className="flex flex-row space-x-40 w-full text-white">
            <div className="w-1/2">
              <div className="flex flex-col space-y-10 w-2/3">
                <h1 className="text-6xl font-medium">
                  Subscribe to our newsletter
                </h1>
                <span className="flex space-x-5">
                  <Input
                    type="email"
                    label="Type your e-mail"
                    labelPlacement={"inside"}
                    className="!bg-black h-full"
                  />
                  <Button className="bg-white aspect-square h-14 w-14">
                    <GoArrowRight />
                  </Button>
                </span>
                <span className="flex flex-col pt-20">
                  <p className="uppercase text-white/60 text-sm">
                    Feel free to contact us
                  </p>
                  <h2 className="text-3xl">Marketing@thebinaryholdings.com</h2>
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 w-1/2 gap-10">
              {LAYOUT_ITEMS.map((item, index) => {
                return (
                  <div key={index} className="flex flex-col space-y-5">
                    <h1 className="uppercase text-white/60 text-sm font-normal">
                      {item.title}
                    </h1>
                    {item.subItems.map((subItem, index) => {
                      return (
                        <a key={index} href={subItem.href}>
                          {subItem.name}
                        </a>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full py-16 flex justify-between items-center">
            <Image
              src="/logos/tbh-logo.svg"
              alt="logo"
              width={100}
              height={20}
              radius="none"
            />
            <span className="flex space-x-10 text-2xl">
              {SOCIALS.map((social, index) => {
                return (
                  <a key={index} href={social.link} className="bg-white p-3 rounded-full">
                    <GetIcon iconName={social.type} />
                  </a>
                );
              })}
            </span>
          </div>
          <div className="grid grid-cols-4 py-16">
            {CERTIFICATES.map((certificate, index) => {
              return (
                <div className="flex text-white items-center space-x-4" key={index}>
                  <Image alt="img" src={certificate.image}/>
                  <span className="flex flex-col">
                    <h1 className="font-medium">{certificate.name}</h1>
                    <p>{certificate.description}</p>
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </WrapperContent>
    </footer>
  );
};

export default Footer;
