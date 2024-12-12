"use client";

import { motion } from "framer-motion";

const InternalHero = ({ text }) => {
  return (
    <div className=" pt-24 md:pt-40 pb-4 text-white font-ExtraBoldCond text-2xl md:text-4xl flex justify-center items-center relative">
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="relative m-auto">{text}</h1>
      </motion.div>
    </div>
  );
};

export default InternalHero;
