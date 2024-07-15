import React from "react";
import Image from "next/image";

const CareerHero = () => {
  return (
    <div className="w-full px-4 md:px-16">
      <h2 className="text-5xl mb-4">Career</h2>
      <div className="w-full h-72 xl:h-[600px] bg-center bg-no-repeat bg-cover rounded-3xl overflow-hidden bg-[url(/career_hero.png)]">
      </div>
    </div>
  );
};

export default CareerHero;
