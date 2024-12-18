"use client";

import { motion, useScroll } from "framer-motion";

const Progressbar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
  );
};

export default Progressbar;
