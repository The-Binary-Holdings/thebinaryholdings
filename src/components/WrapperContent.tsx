import React from "react";

const WrapperContent = ({ className, children }: { className?: string, children: React.ReactNode }) => {
  return <div className={`${className} w-full px-4 md:px-16`}>
    {children}
  </div>;
};

export default WrapperContent;
