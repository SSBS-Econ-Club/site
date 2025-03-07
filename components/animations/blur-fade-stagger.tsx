"use client";

import { motion } from "framer-motion";
import React from "react";

interface BlurFadeStaggerProps {
  children: React.ReactNode;
  initialDelay?: number;
  staggerDelay?: number;
}

export default function BlurFadeStagger({
  children,
  initialDelay = 0,
  staggerDelay = 0.1,
}: BlurFadeStaggerProps) {
  const childrenArray = React.Children.toArray(children);

  return (
    <>
      {childrenArray.map((child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{
            duration: 0.8,
            delay: initialDelay + index * staggerDelay,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {child}
        </motion.div>
      ))}
    </>
  );
}
