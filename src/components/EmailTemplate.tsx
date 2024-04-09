import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  message: string;
}

const EmailTemplate = (payload: EmailTemplateProps) => {
  return (
    <div>
      <h1>Hello , I&apos;m {payload.firstName} {payload.lastName}</h1>
      <p>{payload.message}</p>
    </div>
  );
};

export default EmailTemplate;
