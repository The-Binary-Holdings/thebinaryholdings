export interface IProduct{
  name: string;
  description: string;
  logo: string;
  link: string;
}

export const PRODUCTS: IProduct[] = [
  {
    name: "BNRY",
    description: "Integral blockchain features and infrastructure",
    logo: "/logos/BNRY-logo.png",
    link: "#",
  },
  {
    name: "Fando",
    description: "Integral blockchain features and infrastructure",
    logo: "/logos/fando-logo.png",
    link: "#",
  },
  {
    name: "Lost club toys",
    description: "Integral blockchain features and infrastructure",
    logo: "/logos/lostClubToy-logo.png",
    link: "#",
  },
  {
    name: "Twin Matrix",
    description: "Integral blockchain features and infrastructure",
    logo: "/logos/twinMatrix-logo.png",
    link: "#",
  }
]

export interface IPartner{
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
    image: "/logos/fando-logo.png",
  }
]

export interface IBusiness {
  name: string;
  description: string;
  link: string;
  image_url: string;
  logo: string;
}

export const BUSINESSES: IBusiness[] = [
  {
    name: "BNRY Lab",
    description:
      "Web3: Decentralized Finance, NFTs, Blockchain, and Governance — A Case Study in Future of the Internet",
    link: "#",
    image_url: "/BNRYLab-img.png",
    logo: "/BNRYLab-logo.png",
  },
  {
    name: "Fando",
    description:
      "Web3: Decentralized Finance, NFTs, Blockchain, and Governance — A Case Study in Future of the Internet",
    link: "#",
    image_url: "/Fando-img.png",
    logo: "/Fando-logo.png",
  },
  {
    name: "Toy",
    description:
      "Web3: Decentralized Finance, NFTs, Blockchain, and Governance — A Case Study in Future of the Internet",
    link: "#",
    image_url: "/BNRYLab-img.png",
    logo: "/BNRYLab-logo.png",
  },
  {
    name: "Toy",
    description:
      "Web3: Decentralized Finance, NFTs, Blockchain, and Governance — A Case Study in Future of the Internet",
    link: "#",
    image_url: "/BNRYLab-img.png",
    logo: "/BNRYLab-logo.png",
  },
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
}

export interface ILayoutItem {
  title: string;
  subItems: ILayoutSubItem[];
}

export const LAYOUT_ITEMS: ILayoutItem[] = [
  {
    title: "navigation",
    subItems: [
      {
        name: "Home",
        href: "#",
      },
      {
        name: "Articles",
        href: "#",
      },
      {
        name: "Products",
        href: "#",
      },
    ],
  },
  {
    title: "Apps",
    subItems: [
      {
        name: "BNRY",
        href: "#",
      },
      {
        name: "Fando",
        href: "#",
      },
      {
        name: "Lost Club Toys",
        href: "#",
      },
    ],
  },
  {
    title: "Build",
    subItems: [
      {
        name: "Documentation",
        href: "#",
      },
    ],
  },
  {
    title: "about us",
    subItems: [
      {
        name: "Team",
        href: "#",
      },
      {
        name: "Get in touch",
        href: "#",
      },
      {
        name: "Terms of use",
        href: "#",
      },
      {
        name: "Privacy Policy",
        href: "#",
      },
    ],
  },
];

export interface ISocial {
  type: string;
  link: string;
}

export const SOCIALS: ISocial[] = [
  {
    type: "youtube",
    link: "#",
  },
  {
    type: "telegram",
    link: "#",
  },
  {
    type: "tiktok",
    link: "#",
  },
  {
    type: "instagram",
    link: "#",
  },
  {
    type: "discord",
    link: "#",
  },
  {
    type: "twitter",
    link: "#",
  },
  {
    type: "medium",
    link: "#",
  },
];

export interface ICertificate {
  name: string;
  image: string;
  description: string;
}

export const CERTIFICATES: ICertificate[] = [
  {
    name: "Original WEB3",
    image: "/certificate.png",
    description: "Certified",
  },
  {
    name: "Original WEB3",
    image: "/certificate.png",
    description: "Certified",
  },
  {
    name: "Original WEB3",
    image: "/certificate.png",
    description: "Certified",
  },
  {
    name: "Original WEB3",
    image: "/certificate.png",
    description: "Certified",
  },
];