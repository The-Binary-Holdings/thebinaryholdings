import React from "react";
import WrapperContent from "../WrapperContent";
import { Image, Link } from "@nextui-org/react";
import { LAYOUT_ITEMS, SOCIALS, IBusiness } from "@/common/constants";
import GetIcon from "@/common/icons";
import EmailFormModal from "../EmailFormModal";

const Footer = () => {
  return (
    <footer className="w-full pt-16">
      <WrapperContent>
        <div className="w-full md:pt-16 xl:pt-32 flex flex-col border-t border-white/75">
          <div className="flex flex-col xl:flex-row xl:space-x-40 space-y-10 md:space-y-10 w-full text-white">
            <div className="xl:w-1/2">
              <span className="hidden xl:flex flex-col">
                <p className="uppercase text-white/60 text-sm">Contact us</p>
                <Link
                  className="ld:text-3xl text-white cursor-pointer"
                  href="mailto:support@thebinaryholdings.com"
                >
                  support@thebinaryholdings.com
                </Link>
              </span>
              {/* </div> */}
            </div>
            <div className="grid grid-cols-2 grid-rows-2 xl:w-1/2 gap-5 md:gap-10">
              {LAYOUT_ITEMS.map((item, index) => {
                return (
                  <div key={index} className="flex flex-col space-y-5">
                    <h1 className="uppercase text-white/60 text-sm font-normal">
                      {item.title}
                    </h1>
                    {item.subItems.map((subItem, index) => {
                      if (subItem.href == "openModal")
                        return (
                          <EmailFormModal
                            className="cursor-pointer"
                            key={index}
                          >
                            {subItem.name}
                          </EmailFormModal>
                        );
                      return (
                        <a
                          key={index}
                          target={subItem.target || "_self"}
                          href={subItem.href}
                        >
                          {subItem.name}
                        </a>
                      );
                    })}
                  </div>
                );
              })}
            </div>
            <span className="xl:hidden flex flex-col">
              <p className="uppercase text-white/60 text-sm">Contact us</p>
              <Link
                className="text-base lg:text-2xl text-white cursor-pointer"
                href="mailto:support@thebinaryholdings.com"
              >
                support@thebinaryholdings.com
              </Link>
            </span>
          </div>
          <div className="w-full py-16 flex flex-col md:flex-row justify-between items-start md:items-center space-y-10 md:space-y-0">
            <Image
              src="/logos/tbh-logo.svg"
              alt="logo"
              width={100}
              height={20}
              radius="none"
            />
            <span className="flex space-x-5 flex-wrap text-2xl">
              {SOCIALS.map((social, index) => {
                return (
                  <a
                    key={index}
                    href={social.link}
                    className="bg-white p-3 text-xl rounded-full mb-2 text-black"
                  >
                    <GetIcon iconName={social.type} />
                  </a>
                );
              })}
            </span>
          </div>
        </div>
      </WrapperContent>
    </footer>
  );
};

export default Footer;
