import { useRef, useState } from "react";
import clsx from "clsx";
import { Field, Form, Formik } from "formik";
import { IoClose } from "react-icons/io5";
import * as Yup from "yup";
import { Modal, ModalBody, ModalContent } from "@nextui-org/react";

import useClickOutside from "@/common/hooks/useClickOutSide";
import { Job } from "@/common/DAO/careers.dao";
import { toast } from "react-toastify";

const INIT_FORM_VALUE = {
  name: "",
  email: "",
  phoneNumber: "",
  linkedinProfile: "",
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
  job: Job;
  toggleOpen: (val: boolean) => void;
}

const ApplyJobModal = ({
  isOpen = false,
  toggleOpen,
  job,
}: ApplyJobModalProps) => {
  const clickRef = useRef<HTMLDivElement>(null);
  useClickOutside(clickRef, () => toggleOpen(false));

  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<boolean>(false);

  const clear = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    const element = event.target as HTMLInputElement;
    element.value = '';
    setFile(null);
  };

  const fileSet = (event: React.ChangeEvent<HTMLInputElement>) => {
    const element = event.target as HTMLInputElement;
    const file = event.target.files;
    setFileError(false);
    if(file) {
      const fileExt = file[0].name.split('.').pop();
      if(fileExt === 'pdf' || fileExt === 'doc' || fileExt === 'docx' || fileExt === 'odt') {
        setFile(file[0]);
      } else {
        toast.error('Invalid file type. Please upload pdf, doc, docx, odt files', {
          position: "top-right",
          autoClose: 5000
        });
        element.value = '';
        setFile(null);
        setFileError(true);
      }
    }
  };

  const apply = async (values: any) => {
    if(!file) {
      setFileError(true);
      return;
    }
  }

  return (
    <Modal hideCloseButton isOpen={isOpen}>
      <ModalContent className="bg-[#131313] text-white">
        {() => (
          <ModalBody className="py-4 lg:p-4">
            <Formik
              initialValues={INIT_FORM_VALUE}
              validationSchema={schema}
              onSubmit={apply}
            >
              {({ errors, touched }) => (
                <Form>
                  <div ref={clickRef}>
                    <div className="text-2xl font-medium flex items-center gap-1 justify-between">
                      <p>Apply For {job.title}</p>
                      <IoClose
                        className="text-3xl cursor-pointer"
                        onClick={() => toggleOpen(false)}
                      />
                    </div>
                    <div className="text-white/75 mt-6 gap-x-3 gap-y-5 grid grid-cols-2">
                      <div className="col-span-2">
                        <p>
                          Name
                          <span
                            className={clsx(
                              errors.name &&
                                touched.name &&
                                "text-red-500"
                            )}
                          >
                            *
                          </span>
                        </p>
                        <Field
                          name="name"
                          type="text"
                          autoComplete="off"
                          className={clsx(
                            "w-full mt-2 bg-[#FFFFFF0D] h-10 px-2 outline-none rounded-sm",
                            errors.name &&
                              touched.name &&
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
                        <p>Linkedin Profile URL</p>
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
                        <p>Website, Blog, or Portfolio</p>
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
                      <div className={`col-span-2 flex items-center justify-center border border-dashed border-white/50 py-8 relative ${fileError && '!border-solid !border-red-500'}`}>
                        <div className="text-center">
                          <p className={fileError ? 'text-red-500': 'text-white'}>
                            {file ? file.name : (<>Upload Your Resume <span>*</span></>)}
                          </p>
                          {!file && <p className={fileError ? 'text-red-500': 'text-white'}>(File types: pdf, doc, docx, odt)</p>}
                        </div>
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx,.odt"
                          onClick={clear}
                          onChange={fileSet}
                          className="opacity-0 absolute w-full h-full z-1 cursor-pointer"
                        />
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
