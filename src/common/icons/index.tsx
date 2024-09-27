import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";

const GetIcon = ({ iconName }: { iconName: string }): React.ReactNode => {
  switch (iconName.toLowerCase()) {
    case "youtube":
      return <FaYoutube className="text-black text-xl" />;
    case "telegram":
      return <FaTelegram className="text-black text-xl" />;
    case "tiktok":
      return <FaTiktok className="text-black text-xl" />;
    case "instagram":
      return <PiInstagramLogoFill className="text-black text-xl" />;
    case "discord":
      return <FaDiscord className="text-black text-xl" />;
    case "twitter":
      return <FaXTwitter className="text-black text-xl" />;
    case "medium":
      return <FaMedium className="text-black text-xl" />;
    default:
      return null;
  }
};

export default GetIcon;
