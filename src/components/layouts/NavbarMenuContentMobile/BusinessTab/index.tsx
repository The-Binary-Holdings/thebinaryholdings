import React, { use, useContext } from "react";
import { IBusiness, PRODUCTS } from "@/common/constants";
import VariantsComponent from "@/components/VariantsComponent";
import { Link } from "@nextui-org/react";
import { BUSINESSES } from "@/common/constants";
import { ProviderContext } from "@/components/Provider";
import { useRouter } from "next/navigation";

const BusinessTab = () => {
  const { onOpen, setData } = useContext(ProviderContext);
  const router = useRouter();

  const handleClick = (data: IBusiness) => {
    setData(data);
    setTimeout(() => {
      onOpen();
    }, 1000);
  };

  return (
    <div className="w-full grid gap-10">
      {PRODUCTS.map((product, index) => {
        return (
          <VariantsComponent
            key={index}
            className="w-full cursor-pointer"
            delay={index * 0.1}
          >
            <Link
              className="flex flex-col items-start text-white w-full space-y-3"
              onClick={(e) => {
                e.preventDefault();
                const data =
                  BUSINESSES.find(
                    (business) => business.name === product.name
                  ) || BUSINESSES[0];
                const element = document.getElementById("business");
                const buttonCloseMenu = document.getElementById("menu-toggle");
                if (product.name.includes("incubator")) {
                  router.push("/incubator");
                  buttonCloseMenu?.click();
                  return;
                }
                buttonCloseMenu?.click();
                setTimeout(() => {
                  element?.scrollIntoView({ behavior: "smooth" });
                  handleClick(data);
                }, 300);
              }}
            >
              {/* <Image src={product.logo} alt="logo" className='border w-2/3 aspect-square object-contain p-5' removeWrapper radius='lg'/> */}
              <div className="space-y-3">
                <h1 className="font-medium text-3xl">{product.name}</h1>
                <p>{product.description}</p>
              </div>
            </Link>
          </VariantsComponent>
        );
      })}
    </div>
  );
};

export default BusinessTab;
