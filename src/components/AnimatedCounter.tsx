"use client";

import { motion, useInView, useSpring, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedCounterProps {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({ target, prefix = "", suffix = "", duration = 2, className }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000, bounce: 0 });
  const display = useTransform(springValue, (v) => `${prefix}${Math.round(v).toLocaleString("pt-BR")}${suffix}`);

  useEffect(() => {
    if (isInView) {
      motionValue.set(target);
    }
  }, [isInView, motionValue, target]);

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  );
}
