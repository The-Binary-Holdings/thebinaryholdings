import * as React from "react";
import {
  Body,
  Container,
  Column,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
  Font,
  render,
} from "@react-email/components";

interface VercelInviteUserEmailProps {
  name?: string;
  previewText?: string;
  link?: {
    href: string;
    text: string;
  };
  body?: React.ReactElement;
}

const title = "thebinaryholdings";
const email = "info@thebinaryholdings.com";

export const CommonTemplate = ({
  name,
  previewText,
  link,
  body,
}: VercelInviteUserEmailProps) => {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="IBM Plex Mono"
          fallbackFontFamily="monospace"
          webFont={{
            url: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      {previewText && <Preview>{previewText}</Preview>}
      <Tailwind>
        <Body className="mx-auto my-auto bg-white px-2 font-sans">
          <Container className="mx-auto my-[40px] max-w-[600px] rounded border border-solid border-[#eaeaea] bg-black">
            <Section className="w-[90%] mx-auto flex justify-center items-center px-4 pt-4 pb-6 border-b-1 border-solid border-white/20">
              <Img
                src="/logos/tbh-logo.svg"
                alt=""
                width={110}
                className="object-contain"
              />
            </Section>
            <Text className="mx-auto w-[90%] text-[16px] text-white">
              {name && <strong>Hello {name}</strong>}
            </Text>
            {body && (
              <Text className="mx-auto w-[90%] text-[16px] leading-[24px] text-[#E5E5E5]/75">
                {body}
              </Text>
            )}
            <Text className="mx-auto w-[90%] text-[16px] leading-[24px] text-[#E5E5E5]/75">
              If you didn&apos;t apply / register with us, please ignore this
              email.
              <br />
              <br />
              If you have any questions or need assistance, don&apos;t hesitate
              to contact our support team{" "}
              <a className="text-sm text-[#E5E5E5]/75" href={`mailto:${email}`}>
                {email}
              </a>
              .
            </Text>
            {link && (
              <Section className="mx-auto mt-10 w-[90%] text-start">
                <Link
                  className="cursor-pointer rounded bg-[#00ff85] px-5 py-3 text-center text-[16px] font-semibold text-black no-underline"
                  href={link.href}
                >
                  {link.text}
                </Link>
              </Section>
            )}

            <Section className="mx-auto w-[90%] border-b border-solid border-[#373737]">
              <Row className="w-full py-5 text-[30px] text-white">
                <Column align="left">
                  <a className="text-sm text-[#E5E5E5]/75">{email}</a>
                </Column>
                <Column align="right">
                  <p className="text-sm text-[#E5E5E5]/75">
                    © {new Date().getFullYear()} The Binary Holdings. All rights
                    reserved.
                  </p>
                </Column>
              </Row>
            </Section>
            <Section className="mx-auto w-[90%]">
              <Text className="uppercase text-white/60 my-0 mt-10">
                contact us
              </Text>
              <Text className="text-white text-xl my-0 mb-10">
                Support@thebinaryholdings.com
              </Text>

              <Row>
                <Column align="left">
                  <Img
                    src="https://jfbklxbeuejconomxmqb.supabase.co/storage/v1/object/public/tbhs/tbh-logo.png"
                    alt=""
                    width={110}
                    className="object-contain"
                  />
                </Column>
                <Column align="right" className="flex gap-4 justify-end">
                  <Link
                    href="https://t.me/tbhofficialchat"
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center cursor-pointer hover:opacity-90"
                  >
                    <Img
                      src="https://jfbklxbeuejconomxmqb.supabase.co/storage/v1/object/public/tbhs/telegram.png?t=2024-07-26T13%3A22%3A52.956Z"
                      alt=""
                    />
                  </Link>
                  <Link
                    href="https://discord.com/invite/wCXJmTBGr2"
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center cursor-pointer hover:opacity-90"
                  >
                    <Img
                      src="https://jfbklxbeuejconomxmqb.supabase.co/storage/v1/object/public/tbhs/discord.png?t=2024-07-26T13%3A22%3A56.776Z"
                      alt=""
                    />
                  </Link>
                  <Link
                    href="https://x.com/thebinaryhldgs"
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center cursor-pointer hover:opacity-90"
                  >
                    <Img
                      src="https://jfbklxbeuejconomxmqb.supabase.co/storage/v1/object/public/tbhs/x.png?t=2024-07-26T13%3A23%3A03.516Z"
                      alt=""
                    />
                  </Link>
                </Column>
              </Row>
              <Row className="text-white/80">
                <Column className="text-left">
                  <Text>info@bnrytoken.com</Text>
                </Column>
                <Column className="text-right">
                  <Text>© BNRY Token LLC. All rights reserved.</Text>
                </Column>
              </Row>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default CommonTemplate;
