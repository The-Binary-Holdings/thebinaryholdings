import React from "react";
import WrapperContent from "../WrapperContent";
import { Image, Link } from "@nextui-org/react";
import {
  LAYOUT_ITEMS,
  SOCIALS,
  CERTIFICATES,
  IBusiness,
} from "@/common/constants";
import GetIcon from "@/common/icons";
import { BUSINESSES } from "@/common/constants";
import { ProviderContext } from "../Provider";
import EmailFormModal from "../EmailFormModal";
import { useRouter } from "next/navigation";

const Footer = () => {
  const { onOpen, setData } = React.useContext(ProviderContext);
  const router = useRouter();

  const handleClick = (data: IBusiness) => {
    setData(data);
    setTimeout(() => {
      onOpen();
    }, 1000);
  };

  return (
    <footer className="w-full pt-16">
      <WrapperContent>
        <div className="w-full md:pt-16 xl:pt-32 flex flex-col border-t border-white/75">
          <div className="flex flex-col xl:flex-row xl:space-x-40 space-y-10 md:space-y-0 w-full text-white">
            <div className="xl:w-1/2">
              {/* <div className="flex flex-col space-y-10 md:w-2/3"> */}
              {/* <h1 className="text-5xl md:text-6xl font-medium">
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
                </span> */}
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
                          href={
                            item.title.toLowerCase() === "business" &&
                            !subItem.name.includes("incubator")
                              ? "#business"
                              : subItem.href
                          }
                          onClick={(e) => {
                            if (item.title.toLowerCase() === "business") {
                              e.preventDefault();
                              const data =
                                BUSINESSES.find(
                                  (business) => business.name === subItem.name
                                ) || BUSINESSES[0];
                              if (subItem.name.includes("incubator")) {
                                router.push("/incubator");
                                return;
                              }
                              const element =
                                document.getElementById("business");
                              element?.scrollIntoView({ behavior: "smooth" });
                              handleClick(data);
                            }
                          }}
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
            <div><Image
              src="/logos/tbh-logo.svg"
              alt="logo"
              width={100}
              height={20}
              radius="none"
            />
            <div className='flex place-self-start text-[#666666] mt-10 text-sm'>
                &copy; {new Date().getFullYear()} The Binary Holdings. All rights reserved.
              </div>
            </div>
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
          {/* <div className="flex w-full overflow-x-scroll md:grid md:grid-cols-4 pb-16 md:pt-16">
            {CERTIFICATES.map((certificate, index) => {
              return (
                <div
                  className="flex flex-row text-white items-center space-x-4"
                  key={index}
                >
                  <Image alt="img" src={certificate.image} removeWrapper/>
                  <span className="flex flex-col">
                    <h1 className="font-medium">{certificate.name}</h1>
                    <p>{certificate.description}</p>
                  </span>
                </div>
              );
            })}
          </div> */}
        </div>
      </WrapperContent>
    </footer>
  );
};

export default Footer;
