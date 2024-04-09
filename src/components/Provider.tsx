import { BUSINESSES, IBusiness } from "@/common/constants";
import React, { useEffect } from "react";
import { createContext } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";

export const ProviderContext = createContext({
  onOpen: () => {},
  setData: (data: IBusiness) => {},
  data: BUSINESSES[0],
});

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = React.useState<IBusiness>(BUSINESSES[0]);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <ProviderContext.Provider value={{ onOpen, setData, data }}>
      {children}
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
    </ProviderContext.Provider>
  );
};

export default Provider;
