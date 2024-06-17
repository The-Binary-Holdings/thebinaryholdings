import React from "react";

const WrapperContent = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <div className={`w-full px-4 md:px-16 ${className}`}>{children}</div>;
};

export default WrapperContent;
