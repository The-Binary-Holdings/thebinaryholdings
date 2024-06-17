import React from "react";
import WrapperContent from "@/components/WrapperContent";
import { motion } from "framer-motion";
import localFont from "next/font/local";
import { LAYOUT_ITEMS } from "@/common/constants";
import { Accordion, AccordionItem } from "@nextui-org/react";
import BusinessTab from "./BusinessTab";
import ItemTab from "./ItemTab";
import ProductTab from "../NavbarMenuContent/ProductTab";

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
    {
      id: "PRODUCTS", 
      label: "PRODUCTS",
      tab: <ProductTab />,
    },
    {
      id: "LEARN",
      label: "LEARN",
      tab: <ItemTab items={LAYOUT_ITEMS[2]} />,
    },
    {
      id: "ABOUTUS",
      label: "About us",
      tab: <ItemTab items={LAYOUT_ITEMS[3]} />,
    },
    // {
    //   id: "BNRYLAB",
    //   label: "BNRY LAB",
    //   tab: <ItemTab items={LAYOUT_ITEMS[0]} />,
    // },
  ];

const NavbarMenuContent = () => {
  return (
    <div className="w-full h-full text-white block md:hidden">
      <WrapperContent className="h-full py-8">
        <Accordion selectionMode="single" className="dark text-white">
          {tabs.map((tab) => (
            <AccordionItem
              className="text-white border-b-2"
              key={tab.id}
              aria-label={tab.label}
              title={tab.label}
              classNames={{
                title: `${monumentExtended.className} text-4xl uppercase`,
                content: "text-white",
              }}
            >
              {tab.tab}
            </AccordionItem>
          ))}
        </Accordion>
      </WrapperContent>
    </div>
  );
};

export default NavbarMenuContent;
