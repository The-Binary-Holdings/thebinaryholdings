import React, {use, useContext} from "react";
import { IBusiness, PRODUCTS } from "@/common/constants";
import VariantsComponent from "@/components/VariantsComponent";
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
import { BUSINESSES } from "@/common/constants";
import { ProviderContext } from "@/components/Provider";

const BusinessTab = () => {
  const { onOpen, setData } = useContext(ProviderContext);

  const handleClick = (data: IBusiness) => {
    setData(data);
    setTimeout(() => {
      onOpen();
    }, 1000);
  };

  return (
    <div className="w-full h-full grid xl:grid-cols-3 md:gap-3 xl:gap-10">
      {PRODUCTS.map((product, index) => {
        return (
          <VariantsComponent key={index} className="w-full cursor-pointer" delay={(index +1) * 0.1}>
            <Link
              className="flex flex-col items-start text-white w-full space-y-3"
              onClick={(e) => {
                e.preventDefault();
                  const data =
                    BUSINESSES.find(
                      (business) => business.name === product.name
                    ) || BUSINESSES[0];
                  const element = document.getElementById("business");
                  const buttonCloseMenu = document.getElementById("menu-toggle");
                  buttonCloseMenu?.click();
                  setTimeout(() => {
                    element?.scrollIntoView({ behavior: "smooth" });
                    handleClick(data);
                  }, 300);
              }}
            >
              {/* <Image src={product.logo} alt="logo" className='border w-2/3 aspect-square object-contain p-5' removeWrapper radius='lg'/> */}
              <div className="space-y-3">
                <h1 className="font-medium text-3xl">{product.name}</h1>
                <p>{product.description}</p>
              </div>
            </Link>
          </VariantsComponent>
        );
      })}
      {/* <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="dark bg-[#060011] text-white p-5 md:p-14"
        radius="none"
        size="5xl"
        classNames={{
          closeButton: "md:top-8 md:right-8 text-lg",
        }}
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-3xl font-normal">
                {data.name}
              </ModalHeader>
              <ModalBody>
                <p className="text-[#DCDCDC] tracking-wide text-start">
                  {data.detail}
                </p>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal> */}
    </div>
  );
};

export default BusinessTab;
