import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Input,
  Textarea,
  Button,
  Spinner,
} from "@nextui-org/react";
import axios from "axios";
import { useForm } from "react-hook-form";

const url = process.env.NEXT_PUBLIC_API_URL;

const EmailFormModal = ({
  className = "",
  isOpen,
  onOpen,
  onOpenChange,
}: {
  className?: string;
  isOpen: boolean;
  onOpen: () => void;
  onOpenChange: () => void;
}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isLoading, setIsLoading] = React.useState(false);
  const [status, setStatus] = React.useState({ status: "", message: "" });

  const onSubmit = async (data: any) => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        `/api/emails`,
        JSON.stringify(data),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setIsLoading(false);
      setStatus(response.data);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  return (
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
        {status.status !== "" ? (
          <p>{status.message}</p>
        ) : (
          (onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-[40px] font-normal w-full items-center">
                Get in touch
              </ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit(onSubmit)} className="w-2/3 flex flex-col space-y-10 self-center mt-10">
                  <span className="grid grid-cols-2 gap-4">
                    <Input
                      type="text"
                      label="Last name"
                      placeholder="Enter your last name here"
                      labelPlacement="outside"
                      {...register("lastName", { required: "Last name is required" })}
                    />
                  </span>
                  <Input
                    type="email"
                    label="Email"
                    placeholder="you@example.com"
                    labelPlacement="outside"
                    {...register("email", { required: "Email is required" })}
                  />
                  <Input
                    type="text"
                    label="Subject"
                    placeholder="Enter subject here"
                    labelPlacement="outside"
                    {...register("subject", { required: "Subject is required" })}
                  />
                  <Textarea
                    label="Description"
                    labelPlacement="outside"
                    placeholder="Enter your message"
                    className="max-w-full !mt-4"
                    {...register("message", { required: "Message is required" })}
                  />
                  <Button
                    className="w-fit px-16 bg-white text-black"
                    type="submit"
                    isLoading={isLoading}
                    spinner={<Spinner />}
                  >
                    Submit
                  </Button>
                </form>
              </ModalBody>
            </>
          )
        )}
      </ModalContent>
    </Modal>
  );
};

export default EmailFormModal;