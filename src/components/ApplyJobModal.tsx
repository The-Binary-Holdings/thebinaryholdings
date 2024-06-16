import { useRef } from "react";
import clsx from "clsx";
import { Field, Form, Formik } from "formik";
import { IoClose } from "react-icons/io5";
import * as Yup from "yup";
import { Modal, ModalBody, ModalContent } from "@nextui-org/react";

import useClickOutside from "@/common/hooks/useClickOutSide";

const INIT_FORM_VALUE = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  linkedinProfile: "",
  website: "",
};

const schema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email().required("Email is required"),
  phoneNumber: Yup.string().required("Phone Number is required"),
  linkedinProfile: Yup.string().required("Linkedin Profile is required"),
  website: Yup.string().required("Website is required"),
});

interface ApplyJobModalProps {
  isOpen: boolean;
  toggleOpen: (val: boolean) => void;
}

const ApplyJobModal = ({ isOpen = false, toggleOpen }: ApplyJobModalProps) => {
  const clickRef = useRef<HTMLDivElement>(null);
  useClickOutside(clickRef, () => toggleOpen(false));

  return (
    <Modal hideCloseButton isOpen={isOpen}>
      <ModalContent className="bg-[#131313] text-white">
        {() => (
          <ModalBody className="py-4 lg:p-4">
            <Formik
              initialValues={INIT_FORM_VALUE}
              validationSchema={schema}
              onSubmit={(val) => console.log(val)}
            >
              {({ errors, touched }) => (
                <Form>
                  <div ref={clickRef}>
                    <div className="text-2xl font-medium flex items-center gap-1 justify-between">
                      <p>Apply For Head of Sales</p>
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
                      <div className="col-span-2 flex items-center justify-center border border-dashed border-white/50 py-8">
                        <div className="text-center">
                          <p className="text-white">
                            Upload Your Resume/CV <span>*</span>
                          </p>
                          <p>(File types: pdf, doc, docx, txt, rtf)</p>
                        </div>
                      </div>
                      <button className="col-span-2 rounded-md bg-white font-semibold w-full text-black py-4">
                        Submit Application
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </ModalBody>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ApplyJobModal;
