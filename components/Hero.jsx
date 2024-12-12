"use client";

import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import LineUp from "./Lineup";

const Hero = () => {
  const { scrollYProgress } = useScroll();

  const cloudsScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.2]);
  const batsScale = useTransform(scrollYProgress, [0, 0.2], [1, 0], {
    clamp: false,
  });
  const cloudsOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const lineUpY = useTransform(scrollYProgress, [0, 1], [1, 20]);
  const crowdScale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const cloudsY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  return (
    <AnimatePresence>
      <div className="hero w-full h-[80vh] sm:h-[120vh] lg:h-auto relative overflow-hidden">
        {/* Left Bats */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 4 }}
          className="w-full absolute top-0 lg:top-10 z-[1]"
          style={{
            scale: batsScale,
          }}
        >
          <motion.div
            className="w-full flex justify-start pl-[30vw]"
            animate={{
              x: [0, 60, 0, -60, 0],
              y: [0, -15, -25, -15, 0],
              rotate: [0, 1.5, 0, -1.5, 0],
            }}
            transition={{
              duration: 12,
              ease: [0.45, 0.05, 0.55, 0.95],
              repeat: Infinity,
              times: [0, 0.25, 0.5, 0.75, 1],
              repeatType: "mirror",
            }}
          >
            <Image
              width="1000"
              height="1000"
              quality={100}
              src="/bat_left.png"
              alt="Bats Left"
              className="w-[11vw] mt-12"
            />
          </motion.div>
        </motion.div>

        {/* Right Bats */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 4 }}
          className="w-full absolute top-0 lg:top-10 z-[1]"
          style={{
            scale: batsScale,
          }}
        >
          <motion.div
            className="w-full flex justify-end pr-[30vw]"
            animate={{
              x: [0, -40, 0, 40, 0],
              y: [0, -20, -30, -20, 0],
              rotate: [0, -2, 0, 2, 0],
            }}
            transition={{
              duration: 14,
              ease: [0.45, 0.05, 0.55, 0.95],
              repeat: Infinity,
              times: [0, 0.25, 0.5, 0.75, 1],
              repeatType: "mirror",
            }}
          >
            <Image
              width="1000"
              height="1000"
              quality={100}
              src="/bat_right.png"
              alt="Bats Right"
              className="w-[20vw] mt-12"
            />
          </motion.div>
        </motion.div>

        {/* Updated Clouds section with drop-in animation */}
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
            delay: 0.5,
          }}
          className="w-full relative top-0 bottom-0 z-[2] mb-[50vw]"
          style={{
            scale: cloudsScale,
            opacity: cloudsOpacity,
            y: cloudsY,
          }}
        >
          <Image
            width="1000"
            height="1000"
            quality={100}
            src="/CLOUDS2.png"
            alt="Clouds"
            className="w-full absolute inset-0"
          />
        </motion.div>

        {/* Side Flag - Slide in from left with bounce */}
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.6,
            duration: 0.8,
            type: "spring",
            bounce: 0.4,
          }}
          className="absolute left-0 z-10 top-[4vw]"
        >
          <Image
            width="1000"
            height="1000"
            quality={100}
            src="/flag-image-1.png"
            alt="PoALINEster"
            className="w-[28vw] animate-wave mt-[40vw]"
          />
        </motion.div>

        {/* Logo and center flag section */}
        <div className="flex justify-center items-center z-[200] flex-col relative">
          <motion.div
            initial={{ y: -200, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            <Image
              width="1000"
              height="1000"
              quality={100}
              src="/logo.png"
              alt="Logo Large"
              className="w-[50vw] h-auto z-10 mx-auto -mt-[40vw]"
            />
          </motion.div>

          {/* Center flag - Changed to animate from top like logo */}
          <motion.div
            initial={{ y: -200, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 1,
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <Image
              width="1000"
              height="1000"
              quality={100}
              src="/flag-1.png"
              alt="PoALINEster"
              className="z-10 w-[16vw] animate-wave -mt-[15vw]"
            />
          </motion.div>
        </div>

        <motion.div
          className="lineup-container absolute flex justify-center mt-[5vw] items-center z-[100] mx-auto w-full"
          style={{ y: lineUpY }}
        >
          <LineUp />
        </motion.div>

        <div className="absolute bottom-0 overflow-hidden w-full">
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ scale: crowdScale }}
          >
            <Image
              width="1000"
              height="1000"
              quality={100}
              src="/stage1.png"
              alt="PoALINEster"
              className="z-10 w-full"
            />
          </motion.div>
        </div>

        <div className="absolute lg:relative bottom-0 overflow-hidden lg:-mt-[20vw] z-[1]">
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ scale: crowdScale }}
          >
            <Image
              width="1000"
              height="1000"
              quality={100}
              src="/crowd2.png"
              alt="PoALINEster"
              className="z-10 w-full"
            />
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Hero;
