import React from "react";

const WrapperContent = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={` max-w-screen-2xl mx-auto px-4 md:px-16 lg:px-32 ${className}`}>
      {children}
    </div>
  );
};

export default WrapperContent;
