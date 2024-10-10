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

const schema = Yup.object().shape({
  otp: Yup.string().length(6),
});

const INIT_FORM_VALUE = {
    otp: "",
    };


interface VerifyOTPProps {
  email: string;
  job_id: number;
  isOpen: boolean;
  toggleOpen: (val: boolean) => void;
}

const VerifyOTP = ({ email, toggleOpen, job_id, isOpen }: VerifyOTPProps) => {
  const clickRef = useRef<HTMLDivElement>(null);

  const [loading, setLoading] = useState<boolean>(false);

  const toastOptions = { duration: 5000, id: "verify-otp" };

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

  const confirm = async (values: any) => {
    if(values?.otp && String(values.otp)?.length === 6) {
      setLoading(true);
      const data: any = await JobServices.verifyOTP(email, job_id, values.otp);
      if(data?.length) {
        setLoading(false);
        toast.success("Email verified successfully", toastOptions);
        await JobServices.clearOTP(email, job_id);
        toggleOpen(true);
      } else {
        setLoading(false);
        toast.error("Invalid OTP", toastOptions);
      }
    }
  }

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
                onSubmit={v => {
                  confirm(v);
                }}
              >
                {({ submitForm, isValid, errors }) => (
                  <Form>
                    <div ref={clickRef}>
                      <div className="text-2xl font-medium flex items-center gap-1 justify-between">
                        <p>Verify your email</p>
                        <IoClose
                          className="text-3xl cursor-pointer"
                          onClick={() => toggleOpen(false)}
                        />
                      </div>
                      <div className="text-white/75 mt-6 gap-x-3 gap-y-5 grid grid-cols-2">
                        <div className="col-span-2">
                            An OTP is sent to {email}. Please enter the OTP to verify your email.
                        </div>
                        <div className="col-span-2">
                          <p>
                            OTP
                            <span
                              className={clsx(
                                errors.otp && "text-red-500"
                              )}
                            >
                              *
                            </span>
                          </p>
                          <Field
                            name="otp"
                            type="number"
                            maxLength={6}
                            autoComplete="off"
                            className={clsx(
                              "w-full mt-2 bg-[#FFFFFF0D] h-10 px-2 outline-none rounded-sm",
                              errors.otp &&
                                "border border-red-500"
                            )}
                          />
                        </div>
                        <button
                          disabled={!isValid}
                          type='submit'
                          className="col-span-2 rounded-md bg-white font-semibold w-full text-black py-4"
                        >
                          Verify
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
    </>
  );
};

export default VerifyOTP;
