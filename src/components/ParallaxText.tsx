"use client"
import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const ParallaxText = ({ children, distance = 100 }: { children: React.ReactNode, distance? : number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, distance);

  return <motion.div style={{y}}>
    {children}
  </motion.div>;
};

export default ParallaxText;
