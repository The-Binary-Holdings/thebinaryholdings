export interface IProduct {
  name: string;
  description: string;
  link: string;
  logo?: string;
  target?: string;
}

export const PRODUCTS: IProduct[] = [
  {
    name: "The Binary Network",
    description:
      "Building a blockchain ecosystem for seamless collaboration and innovation.",
    link: "http://bnrytoken.com/",
  },
  {
    name: "Digital Social",
    description:
      "Elevating online interactions with cutting-edge social platforms.",
    link: "/digital-social",
  },
  {
    name: "Digital Enterprise",
    description: "Driving business growth through digital innovation.",
    link: "digital-enterprise",
  },
  {
    name: "Digital Finance",
    description: "Streamlining finance with secure, digital-first solutions.",
    link: "#",
  },
  {
    name: "Incubator and Accelerator",
    description: " Accelerating startups with resources and mentorship.",
    link: "#",
  },
  // {
  //   name: "BNRY",
  //   description: "Integral blockchain features and infrastructure",
  //   logo: "/logos/BNRY-logo.png",
  //   link: "#",
  // },
  // {
  //   name: "Fando",
  //   description: "Integral blockchain features and infrastructure",
  //   logo: "/logos/fando-logo.png",
  //   link: "https://fando.ai",
  // },
  // {
  //   name: "Lost club toys",
  //   description: "Integral blockchain features and infrastructure",
  //   logo: "/logos/lostClubToy-logo.png",
  //   link: "https://lostclubtoys.com/",
  // },
  // {
  //   name: "Twin Matrix",
  //   description: "Integral blockchain features and infrastructure",
  //   logo: "/logos/twinMatrix-logo.png",
  //   link: "https://www.twinmatrix.net/",
  // }
];

export const PRODUCTS2: IProduct[] = [
  {
    name: "$BNRY",
    description: "Unleashing Decentralized Possibilities",
    logo: "/logos/BNRY-logo.png",
    link: "https://www.bnrytoken.com",
    target: "_blank",
  },
];

export interface IPartner {
  name: string;
  image: string;
}

export const PARTNERS: IPartner[] = [
  {
    name: "tmt",
    image: "/logos/tmt-logo.png",
  },
  {
    name: "scorex",
    image: "/logos/scorex-logo.png",
  },
  {
    name: "millfniabank",
    image: "/logos/millfniabank-logo.png",
  },
  {
    name: "plugg",
    image: "/logos/plugg-logo.png",
  },
  {
    name: "fando",
    image: "/fando-01.svg",
  },
];

export interface IBusiness {
  name: string;
  description: string;
  // link: string;
  image_url: string;
  logo: string;
  text: string;
  detail: string;
}

export const BUSINESSES: IBusiness[] = [
  {
    name: "The Binary Network",
    description:
      "Building a blockchain ecosystem for seamless collaboration and innovation.",
    image_url: "/BNRYLab-img.png",
    logo: "/logos/BNRY-blacklogo.png",
    text: "Coming Soon",
    detail:
      "At its core, The Binary Network is Binary Holdings’ initiative to weave a fabric of connectivity across all its verticals, creating a synergistic ecosystem that amplifies the impact of each. This network serves as a collaborative platform where ideas, resources, and opportunities intersect, facilitating innovation and growth. Through The Binary Network, members can access a wealth of knowledge, partnerships, and technologies, driving forward the vision of Binary Holdings by leveraging the collective strength of its diverse verticals.",
  },
  {
    name: "Digital Social",
    description:
      "Elevating online interactions with cutting-edge social platforms.",
    image_url: "/Fando-img.png",
    logo: "/logos/fando-blacklogo.png",
    text: "Explore More",
    detail:
      "At the heart of Binary Holdings, the Digital Social vertical aims to redefine how we connect, share, and engage within digital spaces. This initiative is dedicated to building platforms and tools that foster meaningful interactions, prioritize user privacy, and create inclusive communities. By leveraging cutting-edge technology, Digital Social envisions a world where digital interactions are as rich and rewarding as face-to-face connections, empowering users to form deeper relationships and engage with content that truly matters to them.",
  },
  {
    name: "Digital Finance",
    description: "Streamlining finance with secure, digital-first solutions.",
    image_url: "/digital_finance.png",
    logo: "/digital_finance.png",
    text: "Coming Soon",
    detail:
      "The Digital Finance vertical of Binary Holdings is committed to transforming the financial landscape through technology. With a focus on accessibility, security, and innovation, this vertical seeks to democratize financial services, making them available to everyone, everywhere. Whether it's through blockchain technology, digital banking solutions, or fintech innovations, Digital Finance is dedicated to creating a more inclusive financial ecosystem that empowers individuals and businesses to manage, grow, and secure their financial futures with confidence.",
  },
  {
    name: "Digital Enterprise",
    description: "Driving business growth through digital innovation.",
    image_url: "/digital_enterprise.png",
    logo: "/digital_enterprise.png",
    text: "Coming Soon",
    detail:
      "Binary Holdings' Digital Enterprise vertical focuses on revolutionizing how businesses operate, compete, and grow in the digital age. By providing innovative solutions that streamline operations, enhance productivity, and drive digital transformation, this vertical aims to be the cornerstone of future enterprises. From advanced analytics and AI-driven insights to customizable digital platforms, Digital Enterprise equips businesses of all sizes with the tools they need to thrive in an ever-evolving market landscape.",
  },
  {
    name: "Incubator and Accelerator",
    description: "Accelerating startups with resources and mentorship.",
    image_url: "/incubator_and_accelerator.png",
    logo: "/incubator_and_accelerator.png",
    text: "Coming Soon",
    detail:
      "Binary Holdings' Incubator and Accelerator vertical serves as a catalyst for growth and innovation in the startup ecosystem. By providing early-stage companies with the resources, mentorship, and network they need to succeed, this vertical aims to nurture groundbreaking ideas and turn them into scalable businesses. With a focus on disruptive technologies and market-driven solutions, the Incubator and Accelerator program is designed to propel startups to their full potential, fostering a new generation of entrepreneurs who are ready to change the world.",
  },

  // {
  //   name: "BNRY Token",
  //   description:
  //     "Discover the BNRY Token: The First Telco Token Revolutionizing the Journey from Web2 to Web3!",
  //   link: "https://bnrytoken.com",
  //
  // },
  // {
  //   name: "Fando",
  //   description:
  //     "The Ultimate Web3 Loyalty and Entertainment App, Crafted for Effortless Web3 Rewards!",
  //   link: "https://fando.ai",
  // image_url: "/Fando-img.png",
  // logo: "/logos/fando-blacklogo.png",
  // },
  // {
  //   name: "The lost club toys",
  //   description:
  //     "Discover the Teddy Sticker, Your Key to Move2Earn - A Sticker That Transforms into an Investment!",
  //   link: "https://lostclubtoys.com/",
  //   image_url: "/toyClub-img.png",
  //   logo: "/logos/lostClubToy-blacklogo.png",
  // },
];

export interface IService {
  name: string;
  description: string;
  img: string;
}

export const SERVICES: IService[] = [
  {
    name: "service",
    description:
      "We realize and promote your product ideas. Covering a full range of services.",
    img: "/service1-img.png",
  },
  {
    name: "service",
    description:
      "We realize and promote your product ideas. Covering a full range of services.",
    img: "/service2-img.png",
  },
  {
    name: "service",
    description:
      "We realize and promote your product ideas. Covering a full range of services.",
    img: "/service3-img.png",
  },
  {
    name: "service",
    description:
      "We realize and promote your product ideas. Covering a full range of services.",
    img: "/service4-img.png",
  },
  {
    name: "service",
    description:
      "We realize and promote your product ideas. Covering a full range of services.",
    img: "/service1-img.png",
  },
  {
    name: "service",
    description:
      "We realize and promote your product ideas. Covering a full range of services.",
    img: "/service2-img.png",
  },
];

export interface ICommunication {
  title: string;
  date: Date;
  href: string;
  image: string;
}

export const COMMUNICATIONS: ICommunication[] = [
  {
    title: "We deliver integral blockchain features and infrastructure",
    date: new Date(),
    href: "#",
    image:
      "https://s3-alpha-sig.figma.com/img/3b0e/a012/34a8b789ea79d6a3a8e299678b40a96f?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=laHfS4g6RqqPZDX0TrlZBFOQpUy2CSF7X28NkN02Tmz4o78W2HWuarVTuvtO~9RY6khsEAGoxSXaur3a~skkl0Y9CwMenFZVtIj5jY2~9Zcdt~ThL-gWkmUXVMg9BIiMpTJty2CsIGSdg5gzu49cQ8ofrYlBk8xfShpsoUA8eDMq8cjfSR9Hmx6CNhRV8zKT1KggBBcY7sNwvZrkgG2ZpCn0RmEe5Zr8OlsTbRd5JiDEkFtaid-hCZ18rFTMINBXr6zW47HWmOATRO-H0FSfsN7VlLhF~0y5c1Tt6PIf-QExvTErOZ38JzRMDYE2TIs0gjLYX2h6iEptn536X1artQ__",
  },
  {
    title: "We deliver integral blockchain features and infrastructure",
    date: new Date(),
    href: "#",
    image:
      "https://s3-alpha-sig.figma.com/img/9629/e31b/8ba6f21a7cd4da35cf4e58ecbd69e0bb?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LZBlwhWtjQEiQGJ~Df6FvnWP-4GBgG8bCCKQOmotl-PN0T-mEu57wPpoKNERnovmwBhxHe1yLdbRFNEkRdVbmEi4y5aX6Dt8gP0pi2KQannv6un6t-F0a2XYmSQui8Uk63nxfL77sU1-Ajmwg1jpe-qS2Wx-shtaJyKxeAt8nnGg6OtBcOJF6oP8AXaGCRiqj3z3ZBQF8-4zhnUPiU7C7gydovzMhwjF2ocUX5aoQ7if-F~q9pVu0WuEAckMAgumV2WLsUHjQum3wAc-d4FBU-~aCGAsn1BxGOX9rXv82c48wVG3ogTVGOTEz351dtZf2If7nXx9g2rqQjxOImr4Gw__",
  },
  {
    title: "We deliver integral blockchain features and infrastructure",
    date: new Date(),
    href: "#",
    image:
      "https://s3-alpha-sig.figma.com/img/842a/3dba/d561c0b3c2e986da9a9af2ab4dbe5f24?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RyKE~mB3~g0exKC-N8vg~sT-bUle8~fPMb7PPBqygg-ZZntsmOmECqf8VcevV7U5lJSaU~NEpPTdcNO1rukFDKr5UTdvLYYZxKU6ni4CnpqZiGEaeKBL5p2cJtONAnQCZCtSMnEB7IdvQ6zlhywe6f67cVk~~BzX3hpFDfuzDpp5cyMmY1LMkZbzErnC2660xPcxd3F9XDydR-BInjDsnSOxxJe8YIKl5OguQkW4lEtmNFFPEun4JiUVzyU7ydoWqYpBPWYiypcF5wh5M~8fqdTlju-p8-fCKn4QjPTqrlm4QSG3VCbOcX2D1WKkS7Px2mBJMYZ8MXf8DBCWl6zhoA__",
  },
  {
    title: "We deliver integral blockchain features and infrastructure",
    date: new Date(),
    href: "#",
    image:
      "https://s3-alpha-sig.figma.com/img/842a/3dba/d561c0b3c2e986da9a9af2ab4dbe5f24?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RyKE~mB3~g0exKC-N8vg~sT-bUle8~fPMb7PPBqygg-ZZntsmOmECqf8VcevV7U5lJSaU~NEpPTdcNO1rukFDKr5UTdvLYYZxKU6ni4CnpqZiGEaeKBL5p2cJtONAnQCZCtSMnEB7IdvQ6zlhywe6f67cVk~~BzX3hpFDfuzDpp5cyMmY1LMkZbzErnC2660xPcxd3F9XDydR-BInjDsnSOxxJe8YIKl5OguQkW4lEtmNFFPEun4JiUVzyU7ydoWqYpBPWYiypcF5wh5M~8fqdTlju-p8-fCKn4QjPTqrlm4QSG3VCbOcX2D1WKkS7Px2mBJMYZ8MXf8DBCWl6zhoA__",
  },
];

//footer

export interface ILayoutSubItem {
  name: string;
  href: string;
  icon?: string;
  target?: string;
}

export interface ILayoutItem {
  title: string;
  subItems: ILayoutSubItem[];
}

export const LAYOUT_ITEMS: ILayoutItem[] = [
  // {
  //   title: "navigation",
  //   subItems: [
  //     {
  //       name: "Home",
  //       href: "/",
  //     },
  //     {
  //       name: "Articles",
  //       href: "#",
  //     },
  //     {
  //       name: "Products",
  //       href: "#",
  //     },
  //   ],
  // },
  {
    title: "Business",
    subItems: [
      {
        name: "The Binary Network",
        href: "#",
      },
      {
        name: "Digital Social",
        href: "/digital-social",
      },

      {
        name: "Digital Enterprise",
        href: "digital-enterprise",
      },
      {
        name: "Digital Finance",
        href: "#",
      },
      {
        name: "Incubator and Accelerator",
        href: "#",
      },
    ],
  },
  // {
  //   title: "Products",
  //   subItems: [
  //     {
  //       name: "$BNRY Portal",
  //       href: "https://www.bnrytoken.com/",
  //       target: "_blank",
  //     },
  //   ],
  // },
  {
    title: "Learn",
    subItems: [
      {
        name: "Blog",
        href: "/blogs",
      },
      {
        name: "Documentation",
        href: "https://docs.thebinaryholdings.com",
      },
    ],
  },
  {
    title: "about us",
    subItems: [
      {
        name: "Team",
        href: "/team",
      },
      {
        name: "Advocate Program",
        href: "/advocate-program",
      },
      {
        name: "Get in touch",
        href: "openModal",
      },
      // {
      //   name: "Terms of use",
      //   href: "#",
      // },
      // {
      //   name: "Privacy Policy",
      //   href: "#",
      // },
    ],
  },
];

export interface ISocial {
  type: string;
  link: string;
}

export const SOCIALS: ISocial[] = [
  {
    type: "twitter",
    link: "https://twitter.com/thebinaryhldgs",
  },
  {
    type: "telegram",
    link: "https://t.me/tbhofficialchat",
  },
  {
    type: "discord",
    link: "https://discord.gg/wCXJmTBGr2",
  },
  {
    type: "youtube",
    link: "https://www.youtube.com/@TheBinaryHoldings",
  },
];

export const BACKERS = [
  {
    name: "IBC",
    image: "/logos/IBC-logo.png",
  },
  {
    name: "Mana Partners",
    image: "/logos/ManaPartners-logo.png",
  },
  {
    name: "SOSV",
    image: "/logos/SOSV-logo.png",
  },
  {
    name: "Plug and Play",
    image: "/logos/PlugAndPlay-logo.png",
  },
  {
    name: "Dutch Sport Tech Fund",
    image: "/logos/DutchSportTechFund-logo.png",
  },
  {
    name: "Miti Ventures",
    image: "/logos/MitiVentures-logo.png",
  },
  {
    name: "DIFC Innovation Hub",
    image: "/logos/DIFCInnovationHub-logo.png",
  },
  {
    name: "Point Carbon Zero",
    image: "/logos/PointCarbonZero-logo.png",
  },
  {
    name: "Luna Capital",
    image: "/logos/LunaCapital-logo.png",
  },
  {
    name: "Orbit Startups",
    image: "/logos/OrbitStartups-logo.png",
  },
  {
    name: "Private Office of His Highness Sheikh Hamdan Bin Mohammed Al Nahyan",
    image: "/logos/PrivateOffice-logo.png",
  },
  {
    name: "Hustle Fund",
    image: "/logos/HustleFund-logo.png",
  },
  {
    name: "A3S Group",
    image: "/logos/a3s_group.png",
  },
  {
    name: "Binance Labs",
    image: "/logos/BinanceLabs-logo.png",
  },
];

export interface ICertificate {
  name: string;
  image: string;
  description: string;
}

export const CERTIFICATES: ICertificate[] = [
  // {
  //   name: "Original WEB3",
  //   image: "/certificate.png",
  //   description: "Certified",
  // },
  // {
  //   name: "Original WEB3",
  //   image: "/certificate.png",
  //   description: "Certified",
  // },
  // {
  //   name: "Original WEB3",
  //   image: "/certificate.png",
  //   description: "Certified",
  // },
  // {
  //   name: "Original WEB3",
  //   image: "/certificate.png",
  //   description: "Certified",
  // },
];

export interface IAdvocateBenefit {
  id: number;
  iconUrl: string;
  title: string;
}

export const ADVOCATE_BENEFITS: IAdvocateBenefit[] = [
  {
    id: 1,
    iconUrl: "/icons/group.svg",
    title: "Early Access to Innovations",
  },
  {
    id: 2,
    iconUrl: "/icons/communicate.svg",
    title: "Partner up with Industry Experts",
  },
  {
    id: 3,
    iconUrl: "/icons/earn.svg",
    title: "Rewarding Incentive Programs",
  },
];

export interface IRole {
  id: number;
  iconUrl: string;
  title: string;
  description: string;
}

export const ROLES: IRole[] = [
  {
    id: 1,
    iconUrl: "/icons/doc.svg",
    title: "Create engaging social content",
    description:
      "Develop a consistent strategy for producing high-quality content across various formats.",
  },
  {
    id: 2,
    iconUrl: "/icons/user-star.svg",
    title: "Organize online and offline events",
    description:
      "Foster a vibrant community by hosting regular in-person and online events",
  },
  {
    id: 3,
    iconUrl: "/icons/people.svg",
    title: "Build and join our ecosystem",
    description:
      "Foster a vibrant community by hosting regular in-person and online events",
  },
  {
    id: 4,
    iconUrl: "/icons/group-communication.svg",
    title: "Educate the community about Web3 and TBH",
    description:
      "Teach and share your in depth knowledge about The Binary Holdings technology to others",
  },
];