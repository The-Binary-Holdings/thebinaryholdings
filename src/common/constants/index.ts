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
    name: "Pre-incubator program",
    description: "Accelerating startups with resources and mentorship.",
    link: "/incubators",
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
    name: "pre-incubator program",
    description: "Accelerating startups with resources and mentorship.",
    image_url: "/incubator_and_accelerator.png",
    logo: "/incubator_and_accelerator.png",
    text: "Coming Soon",
    detail:
      "Binary Holdings' Incubator and Accelerator vertical serves as a catalyst for growth and innovation in the startup ecosystem. By providing early-stage companies with the resources, mentorship, and network they need to succeed, this vertical aims to nurture groundbreaking ideas and turn them into scalable businesses. With a focus on disruptive technologies and market-driven solutions, the Incubator and Accelerator program is designed to propel startups to their full potential, fostering a new generation of entrepreneurs who are ready to change the world.",
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
  icon?: string;
  target?: string;
}

export interface ILayoutItem {
  title: string;
  subItems: ILayoutSubItem[];
}

export const LAYOUT_ITEMS: ILayoutItem[] = [
  {
    title: "Business",
    subItems: [
      {
        name: "The Binary Network",
        href: "https://network.thebinaryholdings.com/",
        target: "_blank"
      },
      {
        name: "Digital Finance",
        href: "/digital-finance",
      },
      {
        name: "Pre-incubator program",
        href: "/incubator",
      },
    ],
  },

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
      {
        name: "FAQs",
        href: "/faqs",
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
        name: "Privacy Policy",
        href: "/privacy-policy",
      },
      {
        name: "Terms of use",
        href: "/Terms-and-conditions",
      },
      // {
      //   name: "Get in touch",
      //   href: "openModal",
      // },
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
  subTitle: string;
}

export const SOCIALS: ISocial[] = [
  {
    type: "Telegram",
    link: "https://t.me/tbhofficialchat",
    subTitle: "Join Discussion",
  },
  {
    type: "Twitter",
    link: "https://twitter.com/thebinaryhldgs",
    subTitle: "Read the latest",
  },
  {
    type: "Discord",
    link: "https://discord.gg/wCXJmTBGr2",
    subTitle: "Join Discussion",
  },
  {
    type: "Medium",
    link: "https://www.youtube.com/@TheBinaryHoldings",
    subTitle: "Read update",
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
    name: "Plug and Play",
    image: "/logos/PlugAndPlay-logo.png",
  },
  {
    name: "Dutch Sport Tech Fund",
    image: "/logos/DutchSportTechFund-logo.svg",
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
    name: "OP Labs",
    image: "/logos/OPLab-logo.png",
  },
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
    title: "Create Engaging Social Content",
    description:
      "Develop a consistent strategy for producing high-quality content across various formats.",
  },
  {
    id: 2,
    iconUrl: "/icons/user-star.svg",
    title: "Organize Online And Offline Events",
    description:
      "Foster a vibrant community by hosting regular in-person and online events.",
  },
  {
    id: 3,
    iconUrl: "/icons/people.svg",
    title: "Create Engaging Social Content",
    description:
      "Develop a consistent strategy for producing high-quality content across various formats.",
  },
  {
    id: 4,
    iconUrl: "/icons/group-communication.svg",
    title: "Educate The Community About Web3 And TBH",
    description:
      "Teach and share your in depth knowledge about The Binary Holdings technology to others.",
  },
];

export interface IFaqSectionItem {
  question: string;
  answer: string;
}

export interface IFaqItem {
  section: string;
  items: IFaqSectionItem[];
}

export const FAQ_ITEMS: IFaqItem[] = [
  {
    section: "THE BINARY HOLDINGS",
    items: [
      {
        question: "What is The Binary Holdings?",
        answer: `<div>
                <p>The Binary Holdings is Web3 infrastructure platform for Telecommunication and Banks in emerging economies across Southeast Asia, Africa, South Asia and Latam with over 40m users currently.</p>
                <br/><p>The Binary Holdings integrates into these legacy industries via our Layer2, The Binary Network - a Web2.5 (bridge between Web2 and Web3). Upon which, various decentralised applications (dApps) can be built and put directly in front of the users of telco and banking apps.</p>
                <br/><p>In essence, The Binary Holdings becomes the middleware or a backend for telcos and banks, that allows them to leverage our extensive ecosystem. This enables these legacy industries to enhance their services, streamline operations, and provide additional value to their customers through The Binary Holdings infrastructure, effectively embedding our ecosystem into their own service offerings.</p>
                </div>`,
      },
      {
        question: "What does The Binary Holdings do?",
        answer: `<div>
                <p>The Binary Holdings provides Web3 infrastructure designed to help large ecosystems like telecommunications companies and banks to enhance user engagement, retention, activation, and Average Revenue Per User (ARPU).By integrating its Layer2 platform, The Binary Network, with these legacy industries, it enables them to incorporate decentralised applications for their existing user base.</p>
                </div>`,
      },
      {
        question: "How many products are under The Binary Holdings?",
        answer: `<span>
                  <p>Under The Binary Holdings, there are currently several key products:</p><br/>
                  <ul class="list-disc px-10">
                    <li><b class="font-bold">The Binary Network</b>: Our Layer2 blockchain built on the Optimism stack, serving as a bridge on which dApps are built. The Binary Network plugs directly into telco apps and presents dApps to a user base of millions. It is also over which all $BNRY earn, spend, and transfers take place.</li>
                    <li><b class="font-bold">Fando</b>: An Engage/Watch2Earn platform, similar to TikTok, focused on sports and e-sports content.</li>
                  </ul>
                  <br/>
                  <p>Our portfolio companies include:</p><br/>
                  <ul class="list-disc px-10">
                    <li><b class="font-bold">Lost Club Toys</b>: An Animoca-backed NFT collection with products such as digital stickers, a Move2Earn platform, merchandise, stuffed toys, fashion accessories, and a Pokémon Go-styled AR game. These tools enhance user activation and engagement for our partners.</li>
                    <li><b class="font-bold">TwinMatrix</b>: A high-tech digital twin software company specializing in spatial digital twins and location-based digitalization. Our robust backend systems and intuitive interfaces integrate seamlessly with existing IoT data sources, streamlining operations and enabling data-informed decision-making for businesses worldwide.</li>
                  </ul>
                </span>`,
      },
      {
        question: "Whom do The Binary Holdings Products Serve?",
        answer: `<div>
                <p>The Binary Holdings products are built for banks and telco companies to increase user retention, engagement, activation and ARPU. Our Layer2, The Binary Network, is built for developers looking to build and integrate decentralised products to be used by the end users of telco and banking apps. We're a B2B infrastructure provider.</p>
                </div>`,
      },
      {
        question: "Who are our users and clients?",
        answer: `<div>
                <p>Our infrastructure primarily targets B2B firms seeking to enhance user engagement and retention through the decentralized applications (dApps) we integrate. By bridging these dApps over to telecom and banking sectors, we empower businesses to enrich their service offerings and customer interactions.</p>
                <br/>
                <p>In the future, as our ecosystem grows, we aim to foster a B2G (Business-to-Government) approach, leveraging our technology to collaborate with governmental entities and further enhance public services and engagement.</p>
                </div>`,
      },
      {
        question: "Who are our competitors?",
        answer: `<div>
                <p>None - we lead this space</p>
                </div>`,
      },
      {
        question:
          "How will The Binary Holdings grow our user base from 43 million to 1 billion?",
        answer: `<div>
                <p>The Binary Holdings plans to grow our user base from 43 million to 1 billion users by forming strategic partnerships with major telecommunications companies and banks. Each partnership significantly increases the user base in our ecosystem. By 2025, our goal is to be integrated with telecom providers in 17-20 countries across Latin America, Africa, the Middle East, Southeast Asia, and South Asia, thereby rapidly expanding our reach and user adoption in these regions.</p>
                </div>`,
      },
      {
        question: "What is the vision and mission of The Binary Holdings?",
        answer: `<span>
                  <ul class="list-disc px-10">
                    <li>Vision - Our vision is to create a comprehensive and integrated platform that combines social, digital payments, and a wide range of services and products to enhance everyday life, making it a central hub for personal, social, and business activities.</li>
                    <li>Mission - Empowering the unempowered by providing access to a suite of decentralised products that reward usage and engagement.</li>
                  </ul>
                </span>`,
      },
      {
        question: "Who forms The Binary Holdings' Team?",
        answer: `<div>
                <p>The founders and team members of The Binary Holdings come from diverse backgrounds. To learn more about each member and their unique expertise, please visit our team page: <a class="underline" href="https://www.thebinaryholdings.com/team" target="_blank">https://www.thebinaryholdings.com/team</a></p>
                </div>`,
      },
      {
        question: "Are there any whitepapers or technical documents available?",
        answer: `<div>
                <p>Yes, The Binary Holdings has a public documentation site where you can access whitepapers and technical documents. Visit: <a class="underline" href="https://docs.thebinaryholdings.com/" target="_blank">https://docs.thebinaryholdings.com/</a></p>
                </div>`,
      },
    ],
  },
  {
    section: "THE BINARY NETWORK",
    items: [
      {
        question: "What is The Binary Network?",
        answer: `<div>
                <p>The Binary Network is a Layer2 solution built by The Binary Holdings on the Optimism stack. It acts as a bridge between Web2 and Web3, integrating directly into telecommunications and banking applications. This integration allows for the development and deployment of various decentralized applications (dApps), which are currently used by over 40 million users.</p>
                </div>`,
      },
      {
        question: "What network is The Binary Network built on?",
        answer: `<div>
                <p>The Binary Network is built on the Optimism tech stack.</p>
                </div>`,
      },
      {
        question:
          "Why is The Binary Network Built on Optimism's OP Tech Stack?",
        answer: `<div>
                <p>The Binary Network is built on the Optimism (OP) tech stack to effectively serve both users and dApp developers with a scalable blockchain solution. The OP stack, known for its EVM compatibility, allows seamless integration with telecom providers and handles large-scale transactions while remaining developer-friendly. Optimism, being the most mature solution for optimistic rollups, aligns closely with Ethereum's values and ecosystem. This alignment ensures that The Binary Network can leverage Ethereum's larger ecosystem, making it the ideal choice for scalability, ease of dApp integration, and future growth.</p>
                </div>`,
      },
      {
        question:
          "How can I build on The Binary Network and why should I choose it to build dApps?",
        answer: `<div>
                <p>To start building on The Binary Network, refer to our comprehensive guide: <a class="underline" href="https://docs.thebinaryholdings.com/" target="_blank">Get Started Here.</a> </p>
                <br/>
                <p>Choosing The Binary Network offers unique advantages:</p>
                <br/>
                <ul class="list-disc px-10">
                  <li><b class="font-bold">Massive User Base</b>: As the only Layer 2 solution with 40 million users, your dApps will have instant access to a vast audience, unmatched by any other Layer 2 solution.</li>
                  <li><b class="font-bold">Seamless Integration</b>: Our network supports easy and efficient deployment of dApps, providing a scalable and developer-friendly environment.</li>
                </ul>
                <br/>
                <p>By building on The Binary Network, you tap into a robust infrastructure and a ready-made user base, maximising your dApp's potential for success.</p>
                </div>`,
      },
      {
        question: "What Is The Binary Network's Chain ID/RPC?",
        answer: `<div>
                <p>For detailed information about The Binary Network's Chain ID and RPC, please visit our <a class="underline" href="https://docs.thebinaryholdings.com/developers-corner/network-details" target="_blank">https://docs.thebinaryholdings.com/developers-corner/network-details</a></p>
                </div>`,
      },
      {
        question: "Can dApps on Binary Network interact with others?",
        answer: `<div>
                <p>Yes, dApps that are natively deployed on The Binary Network can interact with dApps in the Optimism Superchain, including Base, Frax, and Mode, as well as within the broader Ethereum ecosystem. This interoperability enhances the functionality and reach of dApps built on The Binary Network.</p>
                </div>`,
      },
      {
        question: "Is there an airdrop?",
        answer: `<div>
                <p>Yes, there is an ongoing retroactive airdrop program. To participate, please visit:  [zealy link] Additionally, we are planning to introduce developer-focused airdrops to further support and incentivize contributions on our network. Join our Discord here for more details and updates: <a class="underline" href="https://discord.com/invite/BYqBmRm73g" target="_blank">https://discord.com/invite/BYqBmRm73g</a></p>
                </div>`,
      },
      {
        question: "How reliable is the network?",
        answer: `<span>
                  <p>The reliability of The Binary Network is anchored in its use of the Optimism tech stack, which employs optimistic rollup technology to enhance scalability and transaction efficiency.</p>
                  <br/>
                  <p>Transactions from Layer 1 (L1) to Layer 2 (L2) on The Binary Network typically take up to 3 minutes, showcasing its capability to swiftly process and confirm operations.</p>
                  <br/> 
                  <p>However, when moving from Layer 2 back to Layer 1 (L2 to L1), the finality process involves waiting for approximately 7 days due to Ethereum's confirmation requirements.</p>
                  </span>`,
      },
      {
        question:
          "Are there helpful guides for developers to get started within The Binary Network?",
        answer: `<div>
                <p>The testnet is live, so feel free to explore and experiment on the network. Comprehensive guides will be available soon as the team is actively working on them. In the meantime, join our Discord community for support and updates.</p>
                </div>`,
      },
      {
        question:
          "Are there any language-specific guidelines or recommendations?",
        answer: `<div>
                <p>To develop smart contracts on The Binary Network, use Solidity. For best practices and standards, we recommend referencing resources from OpenZeppelin: <a class="underline" href="https://www.openzeppelin.com//" target="_blank">https://www.openzeppelin.com/</a></p>
                <br/>
                <p>This ensures your smart contracts are secure, efficient, and aligned with industry standards.</p>
                </div>`,
      },
      {
        question: "How do we bridge to The Binary Network?",
        answer: `<div>
                <p>To bridge to The Binary Network, visit <a class="underline" href="bridge.thebinaryholdings.com" target="_blank">bridge.thebinaryholdings.com</a>. This platform will guide you through the process of transferring assets between different blockchain networks and The Binary Network.</p>
                </div>`,
      },
      {
        question: "How can I get test tokens to start development?",
        answer: `<div>
                <p>Head over to <a class="underline" href="faucet.sepolia.thebinaryholdings.com" target="_blank">faucet.sepolia.thebinaryholdings.com</a> to obtain your $TBNRY tokens for development.</p>
                </div>`,
      },
      {
        question:
          "Are there any notable successful dApps already on the network?",
        answer: `<div>
                <p>Yes, to validate our thesis, we integrated <b class="font-bold">Fando</b>, an Engage/Watch2Earn platform similar to TikTok, focused on sports and esports content, with telecom apps.</p>
                <br/>
                <p>By deploying The Binary Network solution with two major telecom providers in Southeast Asia, we now support 43.6 million users, with 3.34 million daily active users, who spend an average of 13.87 minutes within our ecosystem. This demonstrates significant value and engagement. To know more, visit: <a class="underline" href="https://www.fando.ai/" target="_blank">https://www.fando.ai/</a></p>
                </div>`,
      },
      {
        question:
          "How does Binary Network compare to other Layer 2 solutions in terms of speed and efficiency?",
        answer: `<div>
                <p>The Binary Network, built on the Optimism tech stack, shares similar characteristics with other Layer 2 solutions regarding speed, fees, and efficiency. Leveraging Optimism's mature and reliable technology, The Binary Network ensures high transaction throughput and low fees, making it competitive with other leading Layer 2 solutions. This allows for seamless and efficient dApp integration, providing a robust environment for developers and users alike.</p>
                </div>`,
      },
      {
        question:
          "How easy is it to integrate with third-party services and APIs?",
        answer: `<div>
                <p>Integration with third-party services and APIs is straightforward as long as the third party supports The Binary Network. For more information and assistance, join our Discord community, where our team is available to help you directly: <a class="underline" href="https://discord.com/invite/BYqBmRm73g" target="_blank">https://discord.com/invite/BYqBmRm73g</a></p>
                </div>`,
      },
    ],
  },
  {
    section: "$BNRY TOKEN",
    items: [
      {
        question: "Where can I get the $BNRY token?",
        answer: `<div>
                <p>The $BNRY token is currently listed on MEXC. We will soon be listing the token on various decentralized exchanges (DEXs) and centralised exchanges (CEXs). Follow our Twitter: <a class="underline" href="https://twitter.com/TheBinaryHoldings" target="_blank">https://twitter.com/TheBinaryHoldings</a> to stay updated on announcements.</p>
                </div>`,
      },
      {
        question: "What are the key features and benefits of $BNRY?",
        answer: `<div>
                <p>The $BNRY token offers several key features and benefits:</p>
                <br/>
                <ol class="block px-10">
                  <li>1.  Utility Token: $BNRY serves as a gas token for transactions on The Binary Network.</li>
                  <li>2. Earn and Spend: Telecom users can earn $BNRY by engaging with decentralised applications (dApps) on the network.</li>
                  <li>3. Loyalty Program: $BNRY functions like loyalty points, allowing users to redeem tokens for internet packages, phone minutes, and other items within the telecom ecosystem.</li>
                  <li>4. Integration: Facilitates seamless integration of Web3 capabilities into existing telco and banking apps, enhancing user engagement and retention.</li>
                </ol>
                <br/>
                <p>These features make $BNRY a versatile and valuable token within The Binary Holdings ecosystem.</p>
                </div>`,
      },
      {
        question: "What is the maximum supply?",
        answer: `<div>
                <p>The maximum supply of $BNRY tokens is 10 billion. The token is deflationary, meaning that burning events may be conducted to reduce the supply over time.</p>
                </div>`,
      },
      {
        question:
          "What security measures are in place to protect the token and its holders?",
        answer: `<div>
                  <p>TBH collaborates with reputable entities such as Thirdweb, Optimism, and Zeeve to ensure that all smart contracts used are rigorously audited and adhere to industry standards. This partnership helps to safeguard the token and protect the interests of its holders against potential vulnerabilities and risks.</p>
                </div>`,
      },
      {
        question: "What wallets support $BNRY? What exchanges is it listed on?",
        answer: `<div>
                  <p>$BNRY token is supported by any EVM-based wallet. It is currently listed on MEXC exchange.</p>
                </div>`,
      },
      {
        question: "Are there any whitepapers or technical documents available?",
        answer: `<div>
                <p>For whitepapers and technical documentation, please visit The Binary Holdings</p>
                <p>Documentation: <a class="underline" href="https://docs.thebinaryholdings.com/ " target="_blank">https://docs.thebinaryholdings.com/ </a></p>
                </div>`,
      },
      {
        question: "How can $BNRY be used in the real world?",
        answer: `<div>
                  <p>The $BNRY token is designed for utility. Tokens earned through engagements with dApps on the Binary Network can be used in place of fiat for payments, such as for data packets, internet packages, and phone minutes. Our vision extends to enabling everyday transactions, allowing people to eventually use $BNRY for purchasing tangible goods like food and shopping items in the real world.</p>
                </div>`,
      },
      {
        question: "Are The Binary Network’s smart contracts audited?",
        answer: `<span>
                  <p>Yes, The Binary Network utilizes smart contracts developed by the Thirdweb and Zeeve teams, both of which have undergone auditing processes to ensure security and reliability.</p>
                </span>`,
      },
      {
        question: "Can I earn rewards by staking?",
        answer: `<div>
                <p>Yes, you can earn $BNRY points by staking. For detailed information, visit Staking $BNRY: <a class="underline" href="https://docs.thebinaryholdings.com/usdbnry/usdbnry-points/staking-usdbnry/" target="_blank">https://docs.thebinaryholdings.com/usdbnry/usdbnry-points/staking-usdbnry</a></p>
                <br/>
                <p>This page provides comprehensive guidance on how to participate in staking and earn rewards within The Binary Holdings ecosystem.</p>
                </div>`,
      },
    ],
  },
];

export const WHY_INCUBATOR = [
  {
    title: "Access 40 Million Users",
    description:
      "Plug into The Binary Network and put your dApp directly in front of 40 million telco users - scale like no project has ever before.",
    image: "/why1.png",
  },
  {
    title: "Equity Stake*",
    description:
      "We invest in your vision, becoming a strategic partner committed to your success. Our equity stake signifies a shared commitment towards a thriving web3 project.",
    image: "/why2.png",
  },
  {
    title: "Working Capital",
    description:
      "Got an idea that works - but worried about runway? We take that burden off your shoulders by becoming your source for working capital in the long-run.",
    image: "/why3.png",
  },
  {
    title: "Dedicated Workspace",
    description:
      "Work in our Bangkok office, leverage our team of experts, and join other founders to build a community that supports you to the world's end.",
    image: "/why4.png",
  },
  {
    title: "Unit Economics Optimization",
    description:
      "Receive guidance on optimizing your unit economics to ensure profitability and sustainable growth.",
    image: "/why5.png",
  },
  {
    title: "Focused Approach",
    description:
      "We specialize in the critical phase between ideation and execution, offering tailored support to meet your needs.",
    image: "/why6.png",
  },
];

export interface IIncubatorBenefit {
  id: number;
  iconUrl: string;
  title: string;
  description: string;
}

export const INCUBATOR_BENEFITS: IIncubatorBenefit[] = [
  {
    id: 1,
    iconUrl: "/icons/3D-community.png",
    title: "Accessing Capital",
    description:
      "Securing funding in the early stages can be challenging, especially for web3 projects that require significant upfront investment for development and deployment. Binary’s Startup Takeoff provides the necessary working capital to power your ideas from the start.",
  },
  {
    id: 2,
    iconUrl: "/icons/3D-target.png",
    title: "Accelerator and Incubator Programs Dilemma",
    description:
      "Many accelerator and incubator programs are not tailored to the unique needs of web3 startups. We offer specific and crypto-native expertise, and network connections necessary for your success.",
  },
  {
    id: 3,
    iconUrl: "/icons/3D-laptop.png",
    title: "Scaling and Distribution",
    description:
      "Reaching a broad audience and scaling effectively are common hurdles, requiring robust marketing strategies and distribution networks. Binary’s Startup Takeoff connects you with established distribution networks, accelerating your project’s entry and growth in the market.",
  },
  {
    id: 4,
    iconUrl: "/icons/3D-hands.png",
    title: "Building Trust and Credibility",
    description:
      "Establishing trust in the decentralized world of web3 can be daunting, but our team of seasoned professionals  and partners offers your project the needed trust and credibility.",
  },
];

export const INCUBATOR_WORKS: IIncubatorBenefit[] = [
  {
    id: 1,
    iconUrl: "/icons/3D-checker.png",
    title: "Application",
    description: "Submit your innovative idea directly to our team",
  },
  {
    id: 2,
    iconUrl: "/icons/3D-research.png",
    title: "Selection",
    description:
      "Our panel of experts reviews applications, selecting promising startups based on their potential impact, innovation, and feasibility.",
  },
  {
    id: 3,
    iconUrl: "/icons/3D-spaceship.png",
    title: "Ignition",
    description: "Binary's Startup Takeoff accepted applications",
  },
];

export const INCUBATOR_PARTNER_LOGOS = [
  "/logos/Batal Gaming.png",
  "/logos/BNRYMart.png",
  "/logos/Enkrypted.png",
  "/logos/fando.png",
  "/logos/FNZ GLOBAL.png",
  "/logos/Go2spin.png",
  "/logos/lostclub toys-04.png",
  "/logos/reelify 2-12.png",
  "/logos/tmt.png",
  "/logos/uplay2.png",
  "/logos/WizzQuiz.png",
];

export const TELECOMMUNICATION_PARTNER_LOGOS = [
  "/logos/globe.png",
  "/logos/ATOM.webp",
  "logos/celcomdigi.png",
  "/logos/indosat.svg",
];

export interface BuyOption {
  label: string;
  href: string;
}

export const BUY_OPTIONS: Array<BuyOption> = [{
  label: 'Buy on MEXC',
  href: 'https://www.mexc.com/exchange/BNRY_USDT',
},{
  label: 'Buy on BingX',
  href: 'https://bingx.com/en/spot/BNRYUSDT',
}, {
  label: 'Buy on Coinstore',
  href:"https://www.coinstore.com/spot/BNRYUSDT"
}]
