import React from "react";
import Image from "next/image";

const CareerHero = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-5xl">Career</h2>
      <div className="mt-4 relative w-full h-56 xl:h-[600px] rounded-sm overflow-hidden">
        <Image
          src={"/career_hero.png"}
          className="object-cover"
          sizes="auto"
          alt=""
          fill
        />
      </div>
    </div>
  );
};

export default CareerHero;
