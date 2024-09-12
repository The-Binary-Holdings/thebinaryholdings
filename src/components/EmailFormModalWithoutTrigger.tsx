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
import { useForm } from "react-hook-form";
import { getInTouchDAO } from "@/common/DAO/getInTouch.dao";
import toast, { Toaster } from "react-hot-toast";

const EmailFormModal = ({
  isOpen,
  onClose,
  onOpenChange,
}: {
  className?: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onOpenChange: () => void;
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = async (data: any) => {
    const checkEmail = await getInTouchDAO.checkEmail(data.email);
    if(!checkEmail?.length) {
      try {
        setIsLoading(true);
  
        const senderDetails = `Firstname: ${data?.firstName}<br>Lastname:${data?.lastName}<br>Email:${data.email}<br>Subject:${data.subject}<br>Message:${data.message}`;
  
        const response = await fetch("/api/emails", {
          method: "POST",
          body: JSON.stringify({
            to: "siva@thebinaryholdings.com",
            subject: data.subject,
            body: `A new message received: <br> ${senderDetails}`,
          }),
        });
        const track_id = await response.json();
        data.track_id = track_id?.id;
        await getInTouchDAO.newGetInTouch(data);
        setIsLoading(false);
        toast.success("Message sent successfully");
        setTimeout(() => {
          onClose();
          reset();
        }, 2000);
      } catch (error) {
        toast.error("Failed to send message");
        setIsLoading(false);
        console.error(error);
      }

    } else {
      toast.error("A request is already sent with this email");
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
        <ModalHeader className="flex flex-col gap-1 text-[40px] font-normal w-full items-center">
          Get in touch
        </ModalHeader>
        <ModalBody>
          <form
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
            className="w-2/3 flex flex-col space-y-10 self-center mt-10"
          >
            <span className="grid grid-cols-2 gap-4">
              <Input
                type="text"
                label="First name"
                placeholder="Enter your First name here"
                labelPlacement="outside"
                classNames={{label: errors.firstName ? "!text-red-500" : ""}}
                {...register("firstName", {
                  required: "First name is required",
                })}
              />
              <Input
                type="text"
                label="Last name"
                placeholder="Enter your last name here"
                labelPlacement="outside"
                classNames={{label: errors.lastName ? "!text-red-500" : ""}}
                {...register("lastName", {
                  required: "Last name is required",
                })}
              />
            </span>
            <Input
              type="email"
              label="Email"
              placeholder="you@example.com"
              labelPlacement="outside"
                classNames={{label: errors.email ? "!text-red-500" : ""}}
              {...register("email", { required: "Email is required" })}
            />
            <Input
              type="text"
              label="Subject"
              placeholder="Enter subject here"
              labelPlacement="outside"
                classNames={{label: errors.subject ? "!text-red-500" : ""}}
              {...register("subject", {
                required: "Subject is required",
              })}
            />
            <Textarea
              label="Description"
              labelPlacement="outside"
              placeholder="Enter your message"
              className="max-w-full !mt-4"
                classNames={{label: errors.message ? "!text-red-500" : ""}}
              {...register("message", {
                required: "Message is required",
              })}
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
      </ModalContent>
      <Toaster />
    </Modal>
  );
};

export default EmailFormModal;
