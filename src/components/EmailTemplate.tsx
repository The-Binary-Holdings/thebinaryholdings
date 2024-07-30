"use client";
import {
  Button,
  Container,
  Heading,
  Row,
  Section,
  Tailwind,
  Text,
  Column,
  Img,
  Link,
} from "@react-email/components";
import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  message: string;
}

const EmailTemplate = (payload: EmailTemplateProps) => {
  return (
    <Tailwind>
      <Container className="mx-auto">
        <Section className="flex justify-center items-center px-4 pt-4 pb-6 border-b-1 border-solid border-white/20">
          <Img
            src="/logos/tbh-logo.svg"
            alt=""
            width={110}
            className="object-contain"
          />
        </Section>

        <Heading className="mt-6 text-center text-3xl leading-[48px] capitalize">
          Invitation to judge Phoenix <br /> BINARY Token - 27 May’24
        </Heading>

        <Section className="block px-4 border-b-1 border-solid border-white/20 pb-20">
          <Text className="font-medium">Mr, David</Text>
          <Text className="text-white/75 text-[14px]">
            We are delighted to invite you to serve as a judge at DeFi Dev Dive
            Hackathon.
            <br />
            <br />
            Your expertise in Blockchain would be invaluable at DeFi Dev Dive
            Hackathon, which aims to Identify and incentivize new talent in
            blockchain space. As a judge, you will evaluate participants, and
            provide feedback.
            <br />
            <br />
            Please confirm your participation By Clicking “Accept Invitation”.
            Should you have any questions, feel free to contact Us.
            <br />
            <br />
            We look forward to your positive response and thank you for
            considering our invitation.
          </Text>

          <Button className="cursor-pointer select-none hover:opacity-90 mt-4 text-xl bg-white text-black px-10 py-4 rounded-md">
            Accept Invitation
          </Button>
        </Section>

        <Section className="px-4">
          <Text className="uppercase text-white/60 my-0 mt-10">contact us</Text>
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
    </Tailwind>
  );
};

export default EmailTemplate;
