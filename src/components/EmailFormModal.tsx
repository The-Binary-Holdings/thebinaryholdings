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
} from "@nextui-org/react";
import axios from "axios";

const EmailFormModal = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [form, setForm] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleSubmit = async () => {
    if(!form.firstName || !form.lastName || !form.email || !form.subject || !form.message) return setErrorMessage("Please fill all fields");
    const data = {
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      subject: form.subject,
      message: form.message,
    };
    try {
      const response = await axios.post(
        "https://www.thebinaryholdings.com/api/send",
        data
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
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
                      onChange={(e) => {
                        setForm({ ...form, firstName: e.target.value });
                      }}
                    />
                    <Input
                      type="text"
                      label="Last name"
                      placeholder="Enter your last name here"
                      labelPlacement="outside"
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
                    onChange={(e) => {
                      setForm({ ...form, email: e.target.value });
                    }}
                  />
                  <Input
                    type="text"
                    label="Subject"
                    placeholder="Enter subject here"
                    labelPlacement="outside"
                    onChange={(e) => {
                      setForm({ ...form, subject: e.target.value });
                    }}
                  />
                  <Textarea
                    label="Description"
                    labelPlacement="outside"
                    placeholder="Enter your message"
                    className="max-w-full !mt-4"
                    onChange={(e) => {
                      setForm({ ...form, message: e.target.value });
                    }}
                  />
                  <Button className="w-fit px-16 bg-white text-black" onClick={handleSubmit}>
                    Submit
                  </Button>
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
