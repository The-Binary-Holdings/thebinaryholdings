import { useRef, useState } from "react";
import clsx from "clsx";
import { Field, Form, Formik } from "formik";
import { IoClose } from "react-icons/io5";
import * as Yup from "yup";
import { Modal, ModalBody, ModalContent } from "@nextui-org/react";

import useClickOutside from "@/common/hooks/useClickOutSide";
import { careersDAO, Job } from "@/common/DAO/careers.dao";
import { toast, Toaster } from "react-hot-toast";
import { JobServices } from "@/app/services/jobs.service";
import { PiSpinnerGapBold } from "react-icons/pi";
import VerifyOTP from "./verify-otp";

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
  mobile: Yup.string().required("Phone Number is required"),
  linkedIn: Yup.string().url(),
  website: Yup.string().url(),
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
  // useClickOutside(clickRef, () => toggleOpen(false));

  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<boolean>(false);
  const [showVerify, setShowVerify] = useState<boolean>(false);
  const [formValues, setFormValues] = useState<any>(null);

  const [loading, setLoading] = useState<boolean>(false);

  const clear = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    const element = event.target as HTMLInputElement;
    element.value = "";
    setFile(null);
  };

  const fileSet = (event: React.ChangeEvent<HTMLInputElement>) => {
    const element = event.target as HTMLInputElement;
    const file = event.target.files;
    setFileError(false);
    if (file) {
      const fileExt = file[0].name.split(".").pop();
      if (
        fileExt === "pdf" ||
        fileExt === "doc" ||
        fileExt === "docx" ||
        fileExt === "odt"
      ) {
        setFile(file[0]);
      } else {
        toast.error(
          "Invalid file type. Please upload pdf, doc, docx, odt files",
          { id: "file-error" }
        );
        element.value = "";
        setFile(null);
        setFileError(true);
      }
    }
  };

  const validate = async (values: any) => {
    if (!file) {
      setFileError(true);
      return;
    }
  };

  const apply = async (values: any) => {
    setLoading(true);
    const check = await JobServices.checkIsApplied(values.email, job.id);
    if (check?.length) {
      toast.error("You have already applied for this job", { id: "job-apply" });
      setLoading(false);
    } else {
      setLoading(true);
      const checkOTP = await JobServices.checkOTP(values.email, job.id);
      if(checkOTP?.length) {
        setLoading(false);
        toast.error("OTP already sent to your email", { id: "job-apply" });
      } else {
        setLoading(true);
        const res = await JobServices.sendOTP(values.email, job.id);
        if(res) {
          setFormValues(values);
          setShowVerify(true);
          setLoading(false);
          toast.success("OTP sent to your email", { id: "job-apply" });
        }
      }
    }
  };

  const confirmApply = async (values: any) => {
    if (file) {
      const uploadProfile: any = await careersDAO.uploadProfile(file);
      const application = values;
      application.attachment = uploadProfile.path;
      application.job_id = job.id;
      const res = await JobServices.newApplication(application);
      if (res) {
        toast.success("Application submitted successfully", {
          id: "job-apply",
        });
        setTimeout(() => {
          setLoading(false);
          toggleOpen(false);
        }, 3000);
      } else {
        setLoading(false);
        toast.error("Failed to submit application. Please try again", {
          id: "job-apply",
        });
      }
    }

  }

  const toastOptions = { duration: 5000 };

  const Loader = () => (
    <div className="absolute top-0 left-0 w-full h-full bg-gray-950/[.7] z-50">
      <div className="flex h-screen">
        <div className="m-auto">
          <PiSpinnerGapBold className="animate-spin m-auto text-3xl text-zinc-400" />
          <div className="text-sm mt-2 text-zinc-400">Processing</div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Modal
        hideCloseButton={true}
        isOpen={isOpen}
        isDismissable={false}
        isKeyboardDismissDisabled={false}
      >
        <ModalContent className="bg-[#131313] text-white relative">
          {() => (
            <ModalBody className="py-4 lg:p-4">
              {loading && <Loader />}
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
                                errors.name && touched.name && "text-red-500"
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
                                errors.mobile &&
                                  touched.mobile &&
                                  "text-red-500"
                              )}
                            >
                              *
                            </span>
                          </p>
                          <Field
                            name="mobile"
                            type="text"
                            autoComplete="off"
                            className={clsx(
                              "w-full mt-2 bg-[#FFFFFF0D] h-10 px-2 outline-none rounded-sm",
                              errors.mobile &&
                                touched.mobile &&
                                "border border-red-500"
                            )}
                          />
                        </div>
                        <div className="col-span-2">
                          <p>Linkedin Profile URL</p>
                          <Field
                            name="linkedIn"
                            type="text"
                            autoComplete="off"
                            className={clsx(
                              "w-full mt-2 bg-[#FFFFFF0D] h-10 px-2 outline-none rounded-sm",
                              errors.linkedIn &&
                                touched.linkedIn &&
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
                        <div
                          className={`col-span-2 flex items-center justify-center border border-dashed border-white/50 py-8 relative ${
                            fileError && "!border-solid !border-red-500"
                          }`}
                        >
                          <div className="text-center">
                            <p
                              className={
                                fileError ? "text-red-500" : "text-white"
                              }
                            >
                              {file ? (
                                file.name
                              ) : (
                                <>
                                  Upload Your Resume <span>*</span>
                                </>
                              )}
                            </p>
                            {!file && (
                              <p
                                className={
                                  fileError ? "text-red-500" : "text-white"
                                }
                              >
                                (File types: pdf, doc, docx, odt)
                              </p>
                            )}
                          </div>
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx,.odt"
                            onClick={clear}
                            onChange={fileSet}
                            className="opacity-0 absolute w-full h-full z-1 cursor-pointer"
                          />
                        </div>
                        <button
                          onClick={validate}
                          className="col-span-2 rounded-md bg-white font-semibold w-full text-black py-4"
                        >
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
      <Toaster position="top-right" toastOptions={toastOptions} />
      {showVerify && <VerifyOTP email={formValues.email} job_id={job.id} isOpen={true} toggleOpen={(isValid: boolean) => {
        setShowVerify(false);
        setLoading(false);
        if(isValid) {
          confirmApply(formValues);
        } else {
          toast.error("Failed to verify email", { id: "job-apply" });
        }
      }} />}
    </>
  );
};

export default ApplyJobModal;
