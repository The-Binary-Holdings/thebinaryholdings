import React, {use, useContext} from "react";
import { IBusiness, PRODUCTS, PRODUCTS2 } from "@/common/constants";
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

const ProductTab = () => {
  const { onOpen, setData } = useContext(ProviderContext);

  const handleClick = (data: IBusiness) => {
    setData(data);
    setTimeout(() => {
      onOpen();
    }, 1000);
  };

  return (
    <div className="w-full h-full grid grid-cols-1 md:gap-3 xl:gap-4">
      {PRODUCTS2.map((product, index) => {
        return (
          <VariantsComponent key={index} className="w-full cursor-pointer" delay={index + 1 * 0.1}>
            <Link
              className="flex lg:flex-col items-start text-white w-full content-start mb-0 sm:mb-2"
              href={product.link}
              target={product.target || "_self"}
            >
              <Image src={product.logo} alt="logo" className='border w-1/5 p-5 mr-2 mb-2' removeWrapper radius='lg'/>
              <div className="lg:px-2 lg:pl-0 lg:pt-2">
                <h1 className="flex font-medium text-xl md:text-2xl lg:text-3xl w-full">{product.name}</h1>
                <p className="flex text-sm lg:text-base">{product.description}</p>
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

export default ProductTab;
