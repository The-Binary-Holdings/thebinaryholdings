import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { Field, Form, Formik } from "formik";
import { IoClose } from "react-icons/io5";
import * as Yup from "yup";
import { Button, Modal, ModalBody, ModalContent } from "@nextui-org/react";
import { FaRegTimesCircle } from "react-icons/fa";

import useClickOutside from "@/common/hooks/useClickOutSide";
import { careersDAO, Job } from "@/common/DAO/careers.dao";
import { Application, applicationDAO } from "@/common/DAO/applications.dao";

const INIT_FORM_VALUE = {
  name: "",
  email: "",
  mobile: "",
  linkedIn: "",
  website: "",
};

const schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email().required("Email is required"),
  phoneNumber: Yup.string().required("Phone Number is required"),
  linkedinProfile: Yup.string(),
  website: Yup.string(),
});

interface ApplyJobModalProps {
  isOpen: boolean;
  toggleOpen: (val: boolean) => void;
  job: Job | null;
}

const allowedTypes = [
  "application/pdf",
  // Add more supported types as needed
];

const ApplyJobModal = ({
  isOpen = false,
  toggleOpen,
  job,
}: ApplyJobModalProps) => {
  const clickRef = useRef<HTMLDivElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState<boolean | null>(true);
  useClickOutside(clickRef, () => toggleOpen(false));

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile && allowedTypes.includes(selectedFile.type)) {
      setFile(selectedFile);
    } else {
      alert("Invalid file type. Only pdf are allowed.");
    }
  };

  useEffect(() => {
    if (isOpen) setUploadSuccess(null);
  }, [isOpen]);

  const handleSubmit = async (val: typeof INIT_FORM_VALUE) => {
    if (!file) return;
    setIsLoading(true);

    const res = await careersDAO.uploadProfile(file);
    const attachmentLink = res?.path || "";

    const app: Application = {
      email: val.email,
      job_id: job?.id || 0,
      attachment: attachmentLink,
      name: val.firstName + " " + val.lastName,
      mobile: val.phoneNumber,
      linkedIn: val.linkedinProfile,
      website: val.website,
    };

    const result = await applicationDAO.addApplication(app);
    if (result) {
      setUploadSuccess(true);
    } else {
      setUploadSuccess(false);
    }
    setIsLoading(false);
  };

  return (
    <Modal hideCloseButton isOpen={isOpen}>
      <ModalContent className="bg-[#131313] text-white">
        {() => (
          <ModalBody className="py-4 lg:p-4">
            {uploadSuccess === null && (
              <Formik
                initialValues={INIT_FORM_VALUE}
                validationSchema={schema}
                onSubmit={handleSubmit}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div ref={clickRef}>
                      <div className="text-2xl font-medium flex items-center gap-1 justify-between">
                        <p>Apply For {job?.title}</p>
                        <IoClose
                          className="text-3xl cursor-pointer"
                          onClick={() => toggleOpen(false)}
                        />
                      </div>
                      <div className="text-white/75 mt-6 gap-x-3 gap-y-5 grid grid-cols-2">
                        <div>
                          <p>
                            First Name
                            <span
                              className={clsx(
                                errors.firstName &&
                                  touched.firstName &&
                                  "text-red-500"
                              )}
                            >
                              *
                            </span>
                          </p>
                          <Field
                            name="firstName"
                            type="text"
                            autoComplete="off"
                            className={clsx(
                              "w-full mt-2 bg-[#FFFFFF0D] h-10 px-2 outline-none rounded-sm",
                              errors.firstName &&
                                touched.firstName &&
                                "border border-red-500"
                            )}
                          />
                        </div>
                        <div>
                          <p>
                            Last Name
                            <span
                              className={clsx(
                                errors.lastName &&
                                  touched.lastName &&
                                  "text-red-500"
                              )}
                            >
                              *
                            </span>
                          </p>
                          <Field
                            name="lastName"
                            type="text"
                            autoComplete="off"
                            className={clsx(
                              "w-full mt-2 bg-[#FFFFFF0D] h-10 px-2 outline-none rounded-sm",
                              errors.lastName &&
                                touched.lastName &&
                                "border border-red-500"
                            )}
                          />
                        </div>
                        <div>
                          <p>
                            Email
                            <span
                              className={clsx(
                                errors.email && touched.email && "text-red-500"
                              )}
                            >
                              *
                            </span>
                          </p>
                          <Field
                            name="email"
                            type="text"
                            autoComplete="off"
                            className={clsx(
                              "w-full mt-2 bg-[#FFFFFF0D] h-10 px-2 outline-none rounded-sm",
                              errors.email &&
                                touched.email &&
                                "border border-red-500"
                            )}
                          />
                        </div>
                        <div>
                          <p>
                            Phone Number
                            <span
                              className={clsx(
                                errors.phoneNumber &&
                                  touched.phoneNumber &&
                                  "text-red-500"
                              )}
                            >
                              *
                            </span>
                          </p>
                          <Field
                            name="phoneNumber"
                            type="text"
                            autoComplete="off"
                            className={clsx(
                              "w-full mt-2 bg-[#FFFFFF0D] h-10 px-2 outline-none rounded-sm",
                              errors.phoneNumber &&
                                touched.phoneNumber &&
                                "border border-red-500"
                            )}
                          />
                        </div>
                        <div className="col-span-2">
                          <p>
                            Please enter your Linkedin Profile URL
                            <span
                              className={clsx(
                                errors.linkedinProfile &&
                                  touched.linkedinProfile &&
                                  "text-red-500"
                              )}
                            >
                              *
                            </span>
                          </p>
                          <Field
                            name="linkedinProfile"
                            type="text"
                            autoComplete="off"
                            className={clsx(
                              "w-full mt-2 bg-[#FFFFFF0D] h-10 px-2 outline-none rounded-sm",
                              errors.linkedinProfile &&
                                touched.linkedinProfile &&
                                "border border-red-500"
                            )}
                          />
                        </div>
                        <div className="col-span-2">
                          <p>
                            Website, Blog, or Portfolio
                            <span
                              className={clsx(
                                errors.website &&
                                  touched.website &&
                                  "text-red-500"
                              )}
                            >
                              *
                            </span>
                          </p>
                          <Field
                            name="website"
                            type="text"
                            autoComplete="off"
                            className={clsx(
                              "w-full mt-2 bg-[#FFFFFF0D] h-10 px-2 outline-none rounded-sm",
                              errors.website &&
                                touched.website &&
                                "border border-red-500"
                            )}
                          />
                        </div>

                        {file ? (
                          <div className="col-span-2 flex">
                            <p className=" items-center">
                              File Selected: {file.name}
                              <button
                                className="ms-2"
                                onClick={() => {
                                  setFile(null);
                                }}
                              >
                                <FaRegTimesCircle />
                              </button>
                            </p>
                          </div>
                        ) : (
                          <label className="col-span-2 flex items-center justify-center border border-dashed border-white/50 py-8 cursor-pointer">
                            <div className="text-center">
                              <p className="text-white">
                                Upload Your Resume/CV <span>*</span>
                              </p>
                              <p>(File types: pdf, doc, docx, txt, rtf)</p>
                            </div>
                            <input
                              id="dropzone-file"
                              type="file"
                              className="hidden"
                              required
                              onChange={handleFileChange}
                            />
                          </label>
                        )}

                        <Button
                          type="submit"
                          isLoading={isLoading}
                          className={clsx(
                            "col-span-2 rounded-md bg-white font-semibold w-full text-black py-4"
                          )}
                        >
                          Submit Application
                        </Button>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            )}

            {uploadSuccess !== null &&
              (uploadSuccess ? (
                <div className="w-full flex flex-col items-center justify-between">
                  <div className="text-2xl font-medium flex gap-1 justify-end w-full px-4">
                    <IoClose
                      className="text-3xl cursor-pointer"
                      onClick={() => toggleOpen(false)}
                    />
                  </div>
                  <p className="py-10">Upload your profile successfully!</p>
                </div>
              ) : (
                <div className="w-full flex flex-col items-center justify-between">
                  <div className="text-2xl font-medium flex gap-1 justify-end w-full px-4">
                    <IoClose
                      className="text-3xl cursor-pointer"
                      onClick={() => toggleOpen(false)}
                    />
                  </div>
                  <p className="py-10">
                    Failed to upload your profile. Please try again.
                  </p>
                </div>
              ))}
          </ModalBody>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ApplyJobModal;
