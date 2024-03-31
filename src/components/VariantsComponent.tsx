"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

function createVariants(direction: string, startDistance: number, endDistance: number) {
  const componentsVariants: Variants = {
    offscreen: {
      y: direction === "y" ? startDistance : 0,
      x: direction === "x" ? startDistance : 0,
      opacity: 0,
    },
    onscreen: {
      y: direction === "y" ? endDistance : 0,
      x: direction === "x" ? endDistance : 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 2,
      },
    },
  };
  return componentsVariants;
}

const VariantsComponent = ({
  children,
  direction = "y",
  startDistance = 100,
  endDistance = 0,
  className
}: {
  children: React.ReactNode;
  direction?: "x" | "y";
  startDistance?: number;
  endDistance?: number;
  className?: string;
}) => {
  return (
    <motion.div
      variants={createVariants(direction, startDistance, endDistance)}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default VariantsComponent;
