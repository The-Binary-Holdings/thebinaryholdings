import { ILayoutItem } from "@/common/constants";
import React from "react";
import { Link } from "@nextui-org/react";
import VariantsComponent from "@/components/VariantsComponent";

const ItemTab = ({ items }: { items: ILayoutItem }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center space-y-5">
      <VariantsComponent direction="x" startDistance={-100} isOnce={false}>
        <p className="text-sm uppercase text-white/60">{items.title}</p>
      </VariantsComponent>
      {items.subItems.map((subItem, index) => {
        return (
          <VariantsComponent direction="x" key={index} startDistance={-100} delay={index * 0.2} isOnce={false}>
            <Link
              href={subItem.href}
              className="text-white text-5xl cursor-pointer"
            >
              {subItem.name}
            </Link>
          </VariantsComponent>
        );
      })}
    </div>
  );
};

export default ItemTab;