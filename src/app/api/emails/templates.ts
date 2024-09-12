export const inviteEmail = (name: string, token: string) => {
  return {
    html: `
    <div style="backgroud: #000; padding: 10px">
        <header style="padding:25px 10px; border-bottom: 1px solid #ccc">
            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="logo" />
            <div style="float: right">info@hacknative.com</div>
        </header>
        <h1>Welcome ${name}!</h1>
        <p>Click <a href="${location.origin}/invite/${token}">here</a> to join our platform</p>
    </div>
    `,
  };
};
