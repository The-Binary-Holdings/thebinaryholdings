import { HeaderItem } from "./../../@types/index";
export const headerItem: HeaderItem[] = [
  {
    title: "Home",
    type: "button",
    href: "/",
    subHeaderItems: [],
  },
  // {
  //   title: "Airdrop",
  //   type: "button",
  //   href: "/",
  //   subHeaderItems: [],
  // },
  {
    title: "Ecosystem",
    type: "dropdown",
    href: null,
    subHeaderItems: [
      {
        title: "The Binary Network",
        href: "https://network.thebinaryholdings.com",
        isBlank: true
      },
      // {
      //   title: "Digital Social",
      //   href: "/digital-social",
      // },
      {
        title: "Digital Finance",
        href: "/digital-finance",
        isBlank: false
      },
      // {
      //   title: "Digital Enterprise",
      //   href: "/digital-enterprise",
      // },
    ],
  },
  {
    title: "The Binary Network",
    type: "dropdown",
    href: null,
    subHeaderItems: [
      {
        title: "Docs",
        href: "https://docs.thebinaryholdings.com",
        isBlank: true
      },
      {
        title: "$BNRY token",
        href: "https://www.bnrytoken.com/",
        isBlank: true
      },
      {
        title: "Ecosystem Partners",
        href: "https://network.thebinaryholdings.com/#botbn",
        isBlank: true
      },
    ],
  },
  {
    title: "Build",
    type: "dropdown",
    href: null,
    subHeaderItems: [
      {
        title: "Pre-Incubator Program",
        href: "/incubator",
        isBlank: false
      },
      {
        title: "Ambassador",
        href: "/advocate-program",
        isBlank: false
      },
    ],
  },
  // {
  //   title: "Community",
  //   type: "dropdown",
  //   href: null,
  //   subHeaderItems: [
  //     {
  //       title: "Twitter",
  //       href: "https://twitter.com/thebinaryhldgs",
  //     },
  //     {
  //       title: "Telegram",
  //       href: "https://t.me/tbhofficialchat",
  //     },
  //     {
  //       title: "Discord",
  //       href: "https://discord.com/invite/wCXJmTBGr2",
  //     },
  //   ],
  // },
  {
    title: "About Us",
    type: "dropdown",
    href: null,
    subHeaderItems: [
      // {
      //   title: "About Us",
      //   href: "",
      // },
      {
        title: "Team",
        href: "/team",
        isBlank: false
      },
      {
        title: "Get In Touch",
        href: "",
        isBlank: false
      },
    ],
  },
  {
    title: "Learn",
    type: "dropdown",
    href: null,
    subHeaderItems: [
      {
        title: "Blog",
        href: "/blogs",
        isBlank: false
      },
      // {
      //   title: "PR & Comms",
      //   href: "",
      // },
      {
        title: "FAQs",
        href: "/faqs",
        isBlank: false
      },
    ],
  },
];
