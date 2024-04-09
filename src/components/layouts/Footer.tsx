import React from "react";
import WrapperContent from "../WrapperContent";
import {
  Button,
  Input,
  Image,
  Link,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";
import { LAYOUT_ITEMS, SOCIALS, CERTIFICATES, IBusiness } from "@/common/constants";
import GetIcon from "@/common/icons";
import { BUSINESSES } from "@/common/constants";
import { ProviderContext } from "../Provider";

const Footer = () => {
  const { onOpen, setData } = React.useContext(ProviderContext);

  const handleClick = (data : IBusiness) => {
    setData(data);
    setTimeout(() => {
      onOpen();
    }, 1000)
  }

  return (
    <footer className="w-full">
      <WrapperContent>
        <div className="w-full md:pt-16 xl:pt-32 flex flex-col">
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
                  className="text-3xl text-white cursor-pointer"
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
                      return (
                        <a
                          key={index}
                          href={
                            item.title.toLowerCase() === "business"
                              ? "#business"
                              : subItem.href
                          }
                          onClick={(e) => {
                            if (item.title.toLowerCase() === "business") {
                              e.preventDefault();
                              const data = BUSINESSES.find((business) => business.name === subItem.name) || BUSINESSES[0];
                              const element = document.getElementById("business");
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
                className="text-2xl text-white cursor-pointer"
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
            <span className="flex md:space-x-10 flex-wrap text-2xl">
              {SOCIALS.map((social, index) => {
                return (
                  <a
                    key={index}
                    href={social.link}
                    className="bg-white p-3 text-xl rounded-full me-2 mb-2 text-black"
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
