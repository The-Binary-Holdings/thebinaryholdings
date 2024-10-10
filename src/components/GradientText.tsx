import React, { ReactNode } from "react";
import clsx from "clsx";

const GradientText = ({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <p
      className={clsx(
        "bg-gradient-to-b from-white to-[#BFBFBF] inline-block text-transparent bg-clip-text",
        className
      )}
    >
      {children}
    </p>
  );
};

export default GradientText;
