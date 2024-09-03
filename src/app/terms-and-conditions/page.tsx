// TermsAndConditionsPage.tsx
import GradientText from "@/components/GradientText";
import Link from "next/link";
import React from "react";

const TermsAndConditionsPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4 w-full lg:w-4/5 lg:p-20">
      <div className="sticky top-0 py-10 border-b border-white/10 bg-black inline-block text-center z-20 col-span-4 w-full text-green text-lg lg:text-3xl font-semibold">
        Terms and Conditions
      </div>
      <p className="mb-10 opacity-75 leading-6 text-white">
        These terms and conditions outline the rules and regulations for the use of The Binary Holdings&apos;s Website.
      </p>
      <GradientText className="font-medium lg:text-2xl md:text-xl text-base">1. Introduction</GradientText>
      <p className="mb-5 ms-6 text-base opacity-75 leading-6 text-white">
        By accessing this website we assume you accept these terms and conditions. Do not continue to use The Binary Holdings if you do not agree to take all of the terms and conditions stated on this page.
      </p>
      <GradientText className="font-medium lg:text-2xl md:text-xl text-base">2. Cookies</GradientText>
      <p className="mb-5 ms-6 text-base opacity-75 leading-6 text-white">
        We employ the use of cookies. By accessing The Binary Holdings, you agreed to use cookies in agreement with The Binary Holdings&apos;s Privacy Policy.
      </p>
      <GradientText className="font-medium lg:text-2xl md:text-xl text-base">3. License</GradientText>
      <p className="mb-5 ms-6 text-base opacity-75 leading-6 text-white">
        Unless otherwise stated, The Binary Holdings and/or its licensors own the intellectual property rights for all material on The Binary Holdings. All intellectual property rights are reserved. You may access this from The Binary Holdings for your own personal use subjected to restrictions set in these terms and conditions.
      </p>
      <GradientText className="font-medium lg:text-2xl md:text-xl text-base">4. User Comments</GradientText>
      <p className="mb-5 ms-6 text-base opacity-75 leading-6 text-white">
        Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. The Binary Holdings does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of The Binary Holdings,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions.
      </p>
      <GradientText className="font-medium lg:text-2xl md:text-xl text-base">5. Hyperlinking to our Content</GradientText>
      <p className="mb-5 ms-6 text-base opacity-75 leading-6 text-white">
        The following organizations may link to our Website without prior written approval: Government agencies; Search engines; News organizations; Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.
      </p>
      <p className="mb-5 ms-6 text-base opacity-75 leading-6 text-white">
        These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party&apos;s site.
      </p>
    </div>
  );
};

export default TermsAndConditionsPage;