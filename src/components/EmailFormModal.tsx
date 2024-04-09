import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Input,
  Textarea,
  Button
} from "@nextui-org/react";

const EmailFormModal = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div>
      <span onClick={onOpen} className={className}>
        {children}
      </span>
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
              <ModalHeader className="flex flex-col gap-1 text-[40px] font-normal w-full items-center">
                Get in touch
              </ModalHeader>
              <ModalBody>
                <div className="w-2/3 flex flex-col space-y-10 self-center mt-10">
                  <span className="grid grid-cols-2 gap-4">
                    <Input
                      type="text"
                      label="First name"
                      placeholder="Enter your first name here"
                      labelPlacement="outside"
                    />
                    <Input
                      type="text"
                      label="Last name"
                      placeholder="Enter your last name here"
                      labelPlacement="outside"
                    />
                  </span>
                  <Input
                    type="email"
                    label="Email"
                    placeholder="you@example.com"
                    labelPlacement="outside"
                  />
                  <Input
                    type="text"
                    label="Subject"
                    placeholder="Enter subject here"
                    labelPlacement="outside"
                  />
                  <Textarea
                    label="Description"
                    labelPlacement="outside"
                    placeholder="Enter your message"
                    className="max-w-full !mt-4"
                  />
                  <Button className="w-fit px-16 bg-white text-black">Submit</Button>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default EmailFormModal;
