"use client";
import React, { useState } from "react";
import { IBusiness } from "@/common/constants";
import {
  Image,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";
import { on } from "events";

const BusinessCard = ({
  data,
  className,
}: {
  data: IBusiness;
  className?: string;
}) => {
  const [isMouseMove, setMouseMove] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div
      onMouseDown={() => {
        setMouseMove(false);
      }}
      onMouseUp={() => {
        if (isMouseMove) {
          setMouseMove(false);
        } else {
          onOpen();
        }
      }}
      onMouseMove={() => {
        setMouseMove(true);
      }}
      className={`${className} grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-5 rounded-2xl border-2 border-[#1E1E1E] select-none`}
    >
      <div className="flex flex-col justify-center col-span-1 md:col-span-2 w-full p-6">
        {/* <span className="w-full justify-end hidden md:flex">
          <Image
            src={data.logo}
            alt={data.name}
            width={100}
            height={100}
            radius="full"
            className="bg-white aspect-square"
          />
        </span> */}
        <div className="flex flex-col space-y-4 md:space-y-8 md:pt-10">
          <h1 className="text-4xl lg:text-5xl font-medium md:font-normal">
            {data.name}
          </h1>
          <p className="text-white/80">{data.description}</p>
        </div>
        {/* <Button className="bg-transparent border-2 border-[#1E1E1E] text-white py-6">
          {data.text}
        </Button> */}
      </div>
      <div
        className={`col-span-1 md:col-span-3 bg-black rounded-2xl rounded-ss-none rounded-se-none md:rounded-se-2xl md:rounded-es-none relative block overflow-hidden`}
      >
        <Image
          src={data.image_url}
          alt={data.name}
          className="block absolute min-h-full min-w-full inset-0 object-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          removeWrapper
          draggable={false}
        />
      </div>
      <Modal
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
      </Modal>
    </div>
  );
};

export default BusinessCard;
