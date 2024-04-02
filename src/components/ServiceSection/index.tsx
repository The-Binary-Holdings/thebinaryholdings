import React from "react";
import WrapperContent from "../WrapperContent";
import VariantsComponent from "../VariantsComponent";
import { Link } from "@nextui-org/react";
import Carousel from "../Carousel";
import { SERVICES } from "@/common/constants/index";
import ServiceCard from "../ServiceCard";
import clsx from "clsx";

const ServiceSection = () => {
  return (
    <section className="w-full py-16 md:py-32">
      <WrapperContent>
        <div className="w-full flex flex-col md:space-y-20">
          <div className="w-full flex justify-between items-center">
            <VariantsComponent direction="x" startDistance={-100}>
              <h1 className="text-highlight text-6xl font-medium">Services</h1>
            </VariantsComponent>
            <Link className="text-white cursor-pointer underline-offset-4 hidden md:inline">
              VIEW ALL
            </Link>
          </div>
          <Carousel>
            {SERVICES.map((item, index) => {
              return (
                <VariantsComponent
                  key={index}
                  className={clsx(
                    "w-[80vw] md:w-[20vw] h-[50vh] hover:shadow-[0_4px_55px_20px_#AD00FF40] transition-shadow duration-1000",
                    index % 2 == 0 ? "mb-10" : "mt-10"
                  )}
                  startDistance={index % 2 == 0 ? -100 : 100}
                  whileHoverObject={{
                    y: index % 2 == 0 ? 40 : -40,
                    transition: { duration: 0.3 },
                  }}
                >
                  <ServiceCard
                    data={item}
                    className={clsx(
                      "w-full h-full text-white border-2 border-[#1E1E1E] bg-black hover:border-white transition-border duration-1000"
                    )}
                  />
                </VariantsComponent>
              );
            })}
          </Carousel>
          <Link className="text-white cursor-pointer underline-offset-4 md:hidden self-center underline">
            VIEW ALL
          </Link>
        </div>
      </WrapperContent>
    </section>
  );
};

export default ServiceSection;
