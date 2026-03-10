"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type MotionSectionProps = {
  children: ReactNode;
  className?: string;
};

export function MotionSection({ children, className = "" }: MotionSectionProps) {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
