import React from "react";
import { Card, CardBody, Image } from "@nextui-org/react";
import { IService } from "@/common/constants";

const ServiceCard = ({
  className,
  data,
}: {
  className?: string;
  data: IService;
}) => {
  return (
    <Card className={`${className}`}>
      <CardBody className="z-10 flex-col !items-start justify-end select-none bg-black/40 space-y-5 py-10">
        <h4 className="text-white md:font-normal text-4xl md:text-5xl font-medium">
          {data.name}
        </h4>
        <p className="">
          {data.description}
        </p>
      </CardBody>
      <Image
        removeWrapper
        alt="Card background"
        className="absolute z-0 w-full h-full object-cover"
        src={data.img}
        draggable={false}
      />
    </Card>
  );
};

export default ServiceCard;
