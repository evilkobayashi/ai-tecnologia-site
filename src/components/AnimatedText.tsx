"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface AnimatedTextProps {
  text: string | React.ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedText({ text, className = "", delay = 0 }: AnimatedTextProps) {
  // If text is a string, split by words. If not, just animate as a block.
  if (typeof text === "string") {
    const words = text.split(" ");
    
    return (
      <span className={`inline-block overflow-hidden ${className}`}>
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
            <motion.span
              className="inline-block"
              initial={{ y: "110%", rotate: 2 }}
              whileInView={{ y: "0%", rotate: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: delay + i * 0.03,
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </span>
    );
  }

  // Fallback for ReactNode
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: "0%", opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
          delay: delay,
        }}
      >
        {text}
      </motion.div>
    </div>
  );
}
