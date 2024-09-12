import { useState } from "react";

const ConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleAcceptAll = () => {
    // Logic to handle full acceptance
    console.log("User accepted all.");
    setIsVisible(false);
  };

  const handleDecline = () => {
    // Logic to handle declining
    console.log("User declined.");
    setIsVisible(false);
  };

  const handleCustomize = () => {
    // Logic to show customization options
    console.log("User wants to customize settings.");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-semibold">User Consent Notice</h2>
          <p className="mt-2 text-sm">
            We use cookies, device information, and geolocation to improve your experience, personalize content, and analyze traffic. You can manage your preferences in our privacy settings. For more details, read our{" "}
            <a href="/privacy-policy" className="underline">
              Privacy Policy
            </a>.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-2 mt-4 md:mt-0">
          <button
            onClick={handleAcceptAll}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          >
            Accept All
          </button>
          <button
            onClick={handleCustomize}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Customize Settings
          </button>
          <button
            onClick={handleDecline}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsentBanner;
