import { render } from '@react-email/render';
import CommonTemplate from './CommonTemplate';

const sendOTP = (data: any) => {
  const previewText = `Verify your email address`;
  const body = (
    <>
      Dear {data?.name},<br /><br />

        Below is the otp for your email verification.<br />
        <p>{data.otp}</p><br />

        Warm Regards,<br />
        Team The Binary Holdings
      <br />
    </>
  );
  return (
    <div>
      {render(<CommonTemplate name={data.name} previewText={previewText} body={body} />, {
        pretty: true,
      })}
    </div>
  );
};

const sendApplicationEmail = (data: any) => {
  const previewText = `Application received`;
  const body = (
    <>
      We have received your application for the position of {data?.job?.position}.<br /><br />

      We will review your application and get back to you as soon as possible.<br /><br />

      Warm Regards,<br />
      Team The Binary Holdings
      <br />
      <br />
      We wish you the best of luck on your application.
    </>
  );
  return (
    <div>
      {render(<CommonTemplate name={data.name} previewText={previewText} body={body} />, {
        pretty: true,
      })}
    </div>
  );
}

const sendApplicationReceivedEmail = (data: any) => {
  const previewText = `Application received`;
  const body = (
    <>
      We have received a application for the position of {data?.job?.position}.<br /><br />
      
      Name: {data?.name}<br />
      Email: {data?.email}<br />
      Phone: {data?.mobile}<br />
      Website: {data?.website}<br />
      LinkedIn: {data?.linkedIn}<br /><br/>
      To view / download profile, <a href={data?.attachment} target='_blank'>click here</a><br/><br/>

      Warm Regards,<br />
      Team The Binary Holdings
      <br />
      <br />
      We wish you the best of luck on your application.
    </>
  );
  return (
    <div>
      {render(<CommonTemplate name={data.name} previewText={previewText} body={body} />, {
        pretty: true,
      })}
    </div>
  );
}

const EmailBody = {
  sendOTP,
  sendApplicationEmail,
  sendApplicationReceivedEmail,
};

export default EmailBody;
