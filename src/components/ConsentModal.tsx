import React, { useEffect, useState } from "react";

const UserConsentModal = () => {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleAcceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    localStorage.setItem("consentProvided", "true");
    setCookiesAccepted(true);
    setShowModal(false);
  };

  const handleDeclineCookies = () => {
    localStorage.setItem("cookiesAccepted", "false");
    localStorage.setItem("consentProvided", "true");
    setCookiesAccepted(false);
    setShowModal(false);
  };

  useEffect(() => {
    if (!localStorage.getItem("consentProvided")) {
      setShowModal(true);
    }
  }, [localStorage.getItem("consentProvided")]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-900 w-full max-w-md p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-4">
              User Consent for Data Collection and Cookies
            </h2>
            <div className="text-sm mb-4">
              We use cookies to improve your experience on our site. By
              continuing to use our site, you accept our use of cookies. You can
              choose to accept or decline the use of non-essential cookies.
            </div>
            <div className="text-sm mb-4">
              <a href="/privacy-policy" className="underline">
                Learn More
              </a>
            </div>
            <div className="mt-4 flex justify-end space-x-4">
              <button
                className="bg-green text-black px-4 py-2 rounded hover:bg-green-600"
                onClick={handleAcceptCookies}
              >
                Accept
              </button>
              <button
                className="bg-red-500 text-black px-4 py-2 rounded hover:bg-red-600"
                onClick={handleDeclineCookies}
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main User Consent Content */}
      <section>
        <h1 className="text-3xl font-bold mb-4">
          User Consent for Data Collection and Cookies
        </h1>
        <p className="mb-4">
          At <strong>Your Company Name</strong>, we are committed to protecting
          your privacy and ensuring that your personal information is handled in
          a safe and responsible manner. This User Consent Policy outlines how
          we collect, use, and store information when you visit our website and
          the rights you have over your personal data.
        </p>

        <h2 className="text-xl font-semibold mb-2">
          1. What Information We Collect
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Personal Information</strong>: Information that identifies
            you as an individual, such as your name, email address, phone
            number, etc.
          </li>
          <li>
            <strong>Usage Data</strong>: Information about your interactions
            with our website, such as your IP address, browser type, pages
            viewed, time spent on our site, and other analytical data.
          </li>
          <li>
            <strong>Cookies</strong>: We use cookies to enhance your experience
            on our website. These are small text files placed on your device
            that help us track usage patterns, customize content, and ensure
            website functionality.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside mb-4">
          <li>To provide and improve our website and services.</li>
          <li>To personalize your experience by remembering your preferences.</li>
          <li>To analyze how our site is used and measure its performance.</li>
          <li>To communicate with you, such as sending newsletters or responding to inquiries.</li>
          <li>To comply with legal obligations.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">3. How We Obtain Consent</h2>
        <p className="mb-4">
          By using our website, you consent to:
          <ul className="list-disc list-inside">
            <li>The collection of data as outlined in this policy.</li>
            <li>The use of cookies, as described in our Cookie Policy.</li>
          </ul>
          You will be presented with a consent modal when you first visit our
          website, allowing you to:
          <ul className="list-disc list-inside">
            <li>Accept or decline non-essential cookies.</li>
            <li>Modify your cookie preferences at any time.</li>
          </ul>
        </p>

        <h2 className="text-xl font-semibold mb-2">4. Your Rights</h2>
        <p className="mb-4">
          You have the following rights regarding your personal data:
          <ul className="list-disc list-inside">
            <li><strong>Right to Access</strong>: You can request a copy of the data we hold about you.</li>
            <li><strong>Right to Rectification</strong>: You can request corrections to inaccurate or incomplete data.</li>
            <li><strong>Right to Erasure</strong>: You can request the deletion of your personal data under certain conditions.</li>
            <li><strong>Right to Object</strong>: You can object to the processing of your personal data for certain purposes.</li>
            <li><strong>Right to Withdraw Consent</strong>: You can withdraw your consent to data processing at any time.</li>
          </ul>
        </p>

        <h2 className="text-xl font-semibold mb-2">5. How to Manage Cookies</h2>
        <p className="mb-4">
          You can manage your cookie preferences through your browser settings
          or by using the cookie management tool available on our website.
          Disabling cookies may affect your user experience and limit certain
          functionalities of the website.
        </p>

        <h2 className="text-xl font-semibold mb-2">6. Changes to this Consent Policy</h2>
        <p className="mb-4">
          We reserve the right to update or modify this User Consent Policy at
          any time. We will notify you of any significant changes by updating
          the date at the top of this policy.
        </p>

        <h2 className="text-xl font-semibold mb-2">7. Contact Information</h2>
        <p className="mb-4">
          If you have any questions or concerns about this policy, please
          contact us at:
        </p>
        <p>
          <strong>Your Company Name</strong> <br />
          Your Company Address <br />
          Your Company Email <br />
          Your Company Phone Number
        </p>
      </section>
    </div>
  );
};

export default UserConsentModal;
