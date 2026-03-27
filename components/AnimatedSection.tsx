"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type SlideDir = "left" | "right" | "none";

const fadeOnly: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const slide = (dir: SlideDir): Variants => {
  if (dir === "none") return fadeOnly;
  const x = dir === "left" ? -40 : 40;
  return {
    hidden: { opacity: 0, x },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };
};

export function AnimatedSection({
  children,
  className,
  slide: slideDir = "none",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  slide?: SlideDir;
  id?: string;
}) {
  return (
    <motion.section
      id={id}
      className={cn(className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={slide(slideDir)}
    >
      {children}
    </motion.section>
  );
}
