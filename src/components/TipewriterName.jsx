import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function TipewriterName({ text, speed = 120 }) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <span className="font-mono whitespace-pre-wrap">
      {displayedText}
      <motion.span
        className="text-indigo-400 select-none"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        _
      </motion.span>
    </span>
  );
}
