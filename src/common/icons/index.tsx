import React from 'react'
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";

const GetIcon = ({iconName} : {iconName : string}) : React.ReactNode => {
    switch(iconName){
        case 'youtube': return <FaYoutube />
        case 'telegram': return <FaTelegram />
        case 'tiktok': return <FaTiktok />
        case 'instagram': return <PiInstagramLogoFill />
        case 'discord': return <FaDiscord />
        case 'twitter': return <FaXTwitter />
        case 'medium': return <FaMedium />
        default: return null
    }
}

export default GetIcon
