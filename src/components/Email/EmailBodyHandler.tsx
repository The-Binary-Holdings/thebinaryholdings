import { render } from "@react-email/render";
import CommonTemplate from "./CommonTemplate";
import { Section } from "@react-email/components";
import { Button } from "@nextui-org/react";

const sendOTP = (data: any) => {
  const previewText = `Verify your email address`;
  const body = (
    <>
      Please use the following OTP to verify your email address.<br />
      <div className="mx-auto text-start">
        <div className="p-5 text-center text-3xl font-semibold text-[#00ff85]">
          {data.otp}
        </div>
      </div>
    </>
  );
  return (
    <div>
      {render(
        <CommonTemplate
          name={data.name}
          previewText={previewText}
          body={body}
        />,
        {
          pretty: true,
        }
      )}
    </div>
  );
};

const sendApplicationEmail = (data: any) => {
  const previewText = `Application received`;
  const body = (
    <>
      We have received your application for the position of {data?.job?.title}.
      <br />
      We will review your application and get back to you as soon as possible.
      <br />
      <br />
      We wish you the best of luck on your application.
    </>
  );
  return (
    <div>
      {render(
        <CommonTemplate
          name={data.name}
          previewText={previewText}
          body={body}
        />,
        {
          pretty: true,
        }
      )}
    </div>
  );
};

const sendApplicationReceivedEmail = (data: any) => {
  const previewText = `Application received`;
  const body = (
    <>
      We have received a application for the position of {data?.job?.title}.
      <br />
      <br />
      Name: {data?.name}
      <br />
      Email: {data?.email}
      <br />
      Phone: {data?.mobile}
      <br />
      Website: {data?.website}
      <br />
      LinkedIn: {data?.linkedIn}
      <br />
      <br />
      To view / download profile,{" "}
      <a href={data?.attachment} target="_blank">
        click here
      </a>
      <br />
    </>
  );
  return (
    <div>
      {render(
        <CommonTemplate
          // name={data.name}
          previewText={previewText}
          body={body}
        />,
        {
          pretty: true,
        }
      )}
    </div>
  );
};

const EmailBody = {
  sendOTP,
  sendApplicationEmail,
  sendApplicationReceivedEmail,
};

export default EmailBody;
