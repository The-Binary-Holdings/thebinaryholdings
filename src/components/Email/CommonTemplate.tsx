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
            <Section className="mx-auto mt-10 w-[90%] border-b border-white/20">
              <Img
                src="https://jfbklxbeuejconomxmqb.supabase.co/storage/v1/object/public/tbhs/tbh-logo.png"
                alt=""
                width={110}
                className="object-contain -translate-x-3 pb-5 mx-auto"
              />
            </Section>
            <Section className="mx-auto w-[90%] text-start">
              <Text className="text-[16px] text-white">
                {name && <strong>Hello {name}</strong>}
              </Text>
            </Section>
            {body && (
              <Section className="mx-auto w-[90%] text-start">
                <Text className="text-[16px] leading-[24px] text-[#E5E5E5]/75">
                  {body}
                </Text>
              </Section>
            )}
            <Section className="mx-auto w-[90%] text-start">
              <Text className="text-[16px] leading-[24px] text-[#E5E5E5]/75">
                If you didn&apos;t apply / register with us, please ignore this
                email.
                <br />
                <br />
                If you have any questions or need assistance, don&apos;t
                hesitate to contact our support team{" "}
                <a
                  className="text-sm text-[#E5E5E5]/75"
                  href={`mailto:${email}`}
                >
                  {email}
                </a>
                .
              </Text>
            </Section>
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

            <Section className="mx-auto w-[90%] border-t border-white/20">
              <Text className="uppercase text-white/60 my-0 mt-10">
                contact us
              </Text>
              <Text className="text-white text-xl my-0 mb-10">
                <a className="text-lg text-white" href={`mailto:${email}`}>
                  Support@thebinaryholdings.com
                </a>
              </Text>

              <Row className="mx-auto my-10 w-1/3">
                <Column align="center">
                  <Link
                    className="flex h-10 w-10 items-center justify-center rounded-full border-[0.5px] border-solid border-[#363636] bg-[#0D0D0D] p-0 text-black"
                    href="https://t.me/tbhofficialchat"
                  >
                    <Img
                      className="m-auto"
                      alt="icon"
                      width={25}
                      height={25}
                      src="https://egtpqjrkoujopcgwhkha.supabase.co/storage/v1/object/public/RakDAO/icons/4375108_logo_telegram_icon.png"
                    />
                  </Link>
                </Column>
                <Column align="center">
                  <Link
                    className="flex h-10 w-10 items-center justify-center rounded-full border-[0.5px] border-solid border-[#363636] bg-[#0D0D0D] p-0 text-black"
                    href="https://twitter.com/thebinaryhldgs"
                  >
                    <Img
                      alt="icon"
                      width={20}
                      height={20}
                      src="https://egtpqjrkoujopcgwhkha.supabase.co/storage/v1/object/public/RakDAO/icons/11244080_x_twitter_elon_musk_twitter_new_logo_icon.png"
                      className="m-auto"
                    />
                  </Link>
                </Column>
                <Column align="center">
                  <Link
                    className="flex h-10 w-10 items-center justify-center rounded-full border-[0.5px] border-solid border-[#363636] bg-[#0D0D0D] p-0 text-black"
                    href="https://discord.gg/wCXJmTBGr2"
                  >
                    <Img
                      alt="icon"
                      width={25}
                      height={25}
                      src="https://egtpqjrkoujopcgwhkha.supabase.co/storage/v1/object/public/RakDAO/icons/8666257_discord_icon.png"
                      className="m-auto"
                    />
                  </Link>
                </Column>
              </Row>

              <Row className="w-full text-[10px] text-white">
                <Column align="left" className="pb-5">
                  <a className="text-xs text-[#E5E5E5]/75">{email}</a>
                </Column>
                <Column align="right" className="pb-5">
                  <p className="text-xs text-[#E5E5E5]/75">
                    ©{new Date().getFullYear()} The Binary Holdings. All rights
                    reserved.
                  </p>
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
