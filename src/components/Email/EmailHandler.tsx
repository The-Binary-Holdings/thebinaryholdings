const sendEmail = async (to: string | Array<string>, subject: string, body: string) => {
  const res = await fetch('/api/emails', {
    method: 'POST',
    body: JSON.stringify({
      to,
      subject,
      body,
    }),
  });
  return res;
};

export default sendEmail;
