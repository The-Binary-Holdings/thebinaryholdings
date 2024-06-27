import React from "react";
import WrapperContent from "@/components/WrapperContent";
import { motion } from "framer-motion";
import localFont from "next/font/local";
import { LAYOUT_ITEMS } from "@/common/constants";
import ItemTab from "./ItemTab";
import BusinessTab from "./BusinessTab";
import ProductTab from "./ProductTab";

const monumentExtended = localFont({
  src: [
    {
      path: "../../../../public/fonts/monumentextended-freeforpersonaluse/MonumentExtended-FreeForPersonalUse/MonumentExtended-Regular.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../../public/fonts/monumentextended-freeforpersonaluse/MonumentExtended-FreeForPersonalUse/MonumentExtended-Ultrabold.otf",
      weight: "700",
      style: "bold",
    },
  ],
});

let tabs = [
  {
    id: "BUSINESS",
    label: "BUSINESS",
    tab: <BusinessTab />,
  },
  // {
  //   id: "PRODUCTS",
  //   label: "PRODUCTS",
  //   tab: <ProductTab />,
  // },
  {
    id: "LEARN",
    label: "LEARN",
    tab: <ItemTab items={LAYOUT_ITEMS[1]} />,
  },
  {
    id: "ABOUT US",
    label: "About us",
    tab: <ItemTab items={LAYOUT_ITEMS[2]} />,
  },
  // {
  //   id: "CAREERS",
  //   label: "Careers",
  //   tab: <ItemTab items={LAYOUT_ITEMS[3]} />,
  // },
  // {
  //   id: "BNRYLAB",
  //   label: "BNRY LAB",
  //   tab: <ItemTab items={LAYOUT_ITEMS[0]} />,
  // },
];

const NavbarMenuContent = () => {
  let [activeTab, setActiveTab] = React.useState(tabs[0].id);
  return (
    <div className="w-full h-full text-white hidden md:block">
      <WrapperContent className="h-full py-16 lg:px-16 md:px-8 sm:px-4">
        <div className="w-full h-full flex">
          <div className="w-1/2 border-e h-full md:pe-8 lg:pe-16 xl:pe-32">
            {/* tabs */}
            <div className="grid grid-cols-1 h-full">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`${
                    activeTab === tab.id ? "" : "hover:text-white/60"
                  } relative px-3 py-1.5 md:text-3xl lg:text-5xl xl:text-6xl font-medium text-white cursor-pointer transition focus-visible:outline-2 uppercase flex items-center last:border-b-0 border-b ${
                    monumentExtended.className
                  }`}
                  style={{
                    WebkitTapHighlightColor: "transparent",
                  }}
                >
                  <span className="h-fit relative w-full">
                    {activeTab === tab.id && (
                      <motion.span
                        layoutId="bubble"
                        className="absolute inset-0 z-10 bg-white mix-blend-difference h-full w-full"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                    {tab.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-1/2 border-s h-full md:ps-8 lg:ps-16 xl:ps-32">
            {tabs.find((tab) => tab.id === activeTab)?.tab}
          </div>
        </div>
      </WrapperContent>
    </div>
  );
};

export default NavbarMenuContent;
