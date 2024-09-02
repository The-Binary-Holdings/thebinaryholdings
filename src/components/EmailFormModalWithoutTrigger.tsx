import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Input,
  Textarea,
  Button,
  Spinner,
} from "@nextui-org/react";
import axios from "axios";

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
  const [form, setForm] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [status, setStatus] = React.useState({ status: "", message: "" });

  const handleSubmit = async () => {
    setErrorMessage("");
    if (
      form.firstName == "" ||
      form.lastName == "" ||
      form.email == "" ||
      form.subject == "" ||
      form.message == ""
    ) {
      setErrorMessage("Please fill all fields");
      return;
    }
    const data = {
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      subject: form.subject,
      message: form.message,
    };
    try {
      setIsLoading(true);
      const response = await axios.post(
        `/api/send`,
        JSON.stringify(data),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setIsLoading(false);
      console.log(response);
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
                <div className="w-2/3 flex flex-col space-y-10 self-center mt-10">
                  <span className="grid grid-cols-2 gap-4">
                    <Input
                      type="text"
                      label="First name"
                      placeholder="Enter your first name here"
                      labelPlacement="outside"
                      errorMessage={errorMessage}
                      onChange={(e) => {
                        setForm({ ...form, firstName: e.target.value });
                      }}
                    />
                    <Input
                      type="text"
                      label="Last name"
                      placeholder="Enter your last name here"
                      labelPlacement="outside"
                      errorMessage={errorMessage}
                      onChange={(e) => {
                        setForm({ ...form, lastName: e.target.value });
                      }}
                    />
                  </span>
                  <Input
                    type="email"
                    label="Email"
                    placeholder="you@example.com"
                    labelPlacement="outside"
                    errorMessage={errorMessage}
                    onChange={(e) => {
                      setForm({ ...form, email: e.target.value });
                    }}
                  />
                  <Input
                    type="text"
                    label="Subject"
                    placeholder="Enter subject here"
                    labelPlacement="outside"
                    errorMessage={errorMessage}
                    onChange={(e) => {
                      setForm({ ...form, subject: e.target.value });
                    }}
                  />
                  <Textarea
                    label="Description"
                    labelPlacement="outside"
                    placeholder="Enter your message"
                    className="max-w-full !mt-4"
                    errorMessage={errorMessage}
                    onChange={(e) => {
                      setForm({ ...form, message: e.target.value });
                    }}
                  />
                  <Button
                    className="w-fit px-16 bg-white text-black"
                    onClick={handleSubmit}
                    isLoading={isLoading}
                    spinner={<Spinner />}
                  >
                    Submit
                  </Button>
                </div>
              </ModalBody>
            </>
          )
        )}
      </ModalContent>
    </Modal>
  );
};

export default EmailFormModal;
