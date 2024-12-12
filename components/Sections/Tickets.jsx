"use client";

import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Button from "../Button";

const Tickets = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const leftBatScale = useTransform(scrollYProgress, [0, 0.5], [0.4, 1.2]);
  const rightBatScale = useTransform(scrollYProgress, [0, 0.5], [0.4, 1.2]);

  return (
    <div className="relative" ref={containerRef}>
      {/* <motion.div
        className="absolute left-[10vw] top-0 -z-4"
        style={{ scale: leftBatScale, rotate: 180 }}
      >
        <motion.div
          animate={{
            x: [0, 60, 0, -60, 0],
            y: [0, -20, -30, -20, 0],
            rotate: [0, 2, 0, -2, 0],
          }}
          transition={{
            duration: 12,
            ease: [0.45, 0.05, 0.55, 0.95],
            repeat: Infinity,
            times: [0, 0.25, 0.5, 0.75, 1],
            repeatType: "mirror",
          }}
        >
          <img src="/bat_left.png" alt="Left Bat" className="w-[10vw]" />
        </motion.div>
      </motion.div> */}
      {/* <motion.div
        className="absolute right-[10vw] top-0"
        style={{ scale: rightBatScale, rotate: 180 }}
      >
        <motion.div
          animate={{
            x: [0, -60, 0, 60, 0],
            y: [0, -20, -30, -20, 0],
            rotate: [0, -2, 0, 2, 0],
          }}
          transition={{
            duration: 12,
            ease: [0.45, 0.05, 0.55, 0.95],
            repeat: Infinity,
            times: [0, 0.25, 0.5, 0.75, 1],
            repeatType: "mirror",
          }}
        >
          <img src="/bat_right.png" alt="Right Bat" className="w-[12vw]" />
        </motion.div>
      </motion.div> */}
      <h2 className="text-xl md:text-4xl font-ExtraBoldCond mb-4">Tickets</h2>
      <p className="text-md md:text-xl font-Med w-[700px] max-w-full mx-auto normal-case leading-tight mb-2">
        Secure Your Spot at Bludfest 2025!
      </p>
      <p className="text-md w-[700px] max-w-full mx-auto normal-case leading-tight mb-2">
        Tickets for Bludfest 2025 go live soon! Don't miss your chance to be
        part of an unforgettable experience. Here's everything you need to know:
      </p>

      <div className="mt-10">
        <div className="text-md md:text-2xl w-[700px] max-w-full mx-auto normal-case leading-tight mb-8 flex flex-col gap-6">
          <div className="space-y-8">
            <div>
              <h3 className="font-ExtraBoldCond uppercase">FAN PRESALE</h3>
              <p className="text-[16px]">WEDNESDAY 11TH DECEMBER</p>
              <p className="text-sm mt-2">10AM GMT</p>
            </div>

            <div>
              <h3 className="font-ExtraBoldCond uppercase">TIKTOK PRESALE</h3>
              <p className="text-[16px] font-cramps">
                HEAD TO @YUNGLUB ON TIKTOK FOR YOUR CODE!
              </p>
              <p className="text-[16px]">THURSDAY 12TH DECEMBER</p>
              <p className="text-sm mt-2">10AM GMT</p>
            </div>

            <div>
              <h3 className="font-ExtraBoldCond uppercase">GENERAL ONSALE</h3>
              <p className="text-[16px]">FRIDAY 13TH DECEMBER</p>
              <p className="text-sm mt-2">10AM GMT</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4 flex-row md:flex-row">
        <Button
          link={`https://yungblud.os.fan/register-for-bludfest2025-presale`}
          text="SIGN UP FOR PRESALE"
          className="bg-mainPink text-white border-transparent hover:bg-white hover:text-black"
        />
        <Button
          link={`#`}
          text="BUY TICKETS"
          className="bg-mainPink text-white border-transparent hover:bg-white hover:text-black"
        />
      </div>
    </div>
  );
};

export default Tickets;
