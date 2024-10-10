import React, { use, useEffect, useState } from "react";

const UserConsentModal = () => {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [ls, setLs] = useState<Storage | null>(null);
  const [lc, setLc] = useState<Location | null>(null);

  useEffect(() => {
    setLs(localStorage);
    setLc(location);
  }, []);

  const handleAcceptCookies = () => {
    if (ls) {
      ls.setItem("cookiesAccepted", "true");
      ls.setItem("consentProvided", "true");
      setCookiesAccepted(true);
      setShowModal(false);
    }
  };

  const handleDeclineCookies = () => {
    if (ls) {
      ls.setItem("cookiesAccepted", "false");
      ls.setItem("consentProvided", "true");
      setCookiesAccepted(false);
      setShowModal(false);
    }
  };

  useEffect(() => {
    setShowModal(false);
    if (
      !ls?.getItem("consentProvided") &&
      !lc?.pathname.includes("privacy-policy")
    ) {
      setTimeout(() => setShowModal(true), 2000);
    }
  }, [ls?.getItem("consentProvided"), lc?.pathname]);

  return (
    <div className="max-w-4xl mx-auto p-6 text-white">
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 top-0 left-0">
          <div className="bg-gray-900 w-full max-w-md p-6 rounded-lg shadow-lg min-[320px]:w-11/12">
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
                className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 text-white"
                onClick={handleDeclineCookies}
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserConsentModal;
