// PrivacyPage.tsx

import GradientText from "@/components/GradientText";
import Link from "next/link";
import React from "react";

const HubPrivacyPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4 w-full lg:w-4/5 lg:p-20">
      <div className="sticky top-0 py-10 border-b border-white/10 bg-black inline-block text-center z-20 col-span-4 w-full text-green text-lg lg:text-3xl font-semibold">
      The Binary Hub Privacy Policy

      </div>
      <p className="mb-10 opacity-75 leading-6 text-white">
        Your privacy is important to us. It is our policy to respect your
        privacy regarding any information we may collect from you across our
        website, The Binary holdings, and other sites we own and operate.
      </p>
      <GradientText className="font-medium lg:text-2xl md:text-xl text-base">1. Information we collect</GradientText>
      <p className="mb-5 ms-6 text-base opacity-75 leading-6 text-white">
        We only collect information about you if we have a reason to do so — for
        example, to provide our services, to communicate with you, or to make
        our services better.
      </p>
      <GradientText className="font-medium lg:text-2xl md:text-xl text-base">2. How we use information</GradientText>
      <p className="mb-5 ms-6 text-base opacity-75 leading-6 text-white">
        We use the information we collect in various ways, including to provide,
        operate, and maintain our website, improve, personalize, and expand our
        website, understand and analyze how you use our website, develop new
        products, services, features, and functionality, communicate with you,
        either directly or through one of our partners, including for customer
        service, to provide you with updates and other information relating to
        the website, and for marketing and promotional purposes.
      </p>
      <GradientText className="font-medium lg:text-2xl md:text-xl text-base">3. Sharing of information</GradientText>
      <p className="mb-5 ms-6 text-base opacity-75 leading-6 text-white">
        We do not share your personal information publicly or with
        third-parties, except when required to by law.
      </p>
      <GradientText className="font-medium lg:text-2xl md:text-xl text-base">4. Security</GradientText>
      <p className="mb-5 ms-6 text-base opacity-75 leading-6 text-white">
        We take reasonable measures to protect your personal information from
        loss, theft, misuse, and unauthorized access, disclosure, alteration,
        and destruction.
      </p>
      <GradientText className="font-medium lg:text-2xl md:text-xl text-base">5. Contact us</GradientText>
      <p className="mb-5 ms-6 text-base opacity-75 leading-6 text-white">
        If you have any questions about our privacy policy, please contact us at &nbsp; 
        <Link
                  className="ld:text-3xl text-white cursor-pointer"
                  href="mailto:support@thebinaryholdings.com"
                >
                  support@thebinaryholdings.com
                </Link>.
      </p>
    </div>
  );
};

export default HubPrivacyPage;
