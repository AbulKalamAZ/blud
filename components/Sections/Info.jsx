"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
const Info = () => {
  const { scrollYProgress } = useScroll();
  const cloudsScale = useTransform(scrollYProgress, [0, 1], [1, 3]);
  const batsScale = useTransform(scrollYProgress, [0, 0.2], [1, 0], {
    clamp: false,
  });

  return (
    <div className="info relative text-white text-center py-20 overflow-hidden">
      <div className="absolute invert inset-0 bg-dottedTexture1 z-10 bg-contain opacity-20 pointer-events-none" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="w-screen absolute top-0 bottom-0 object-cover overflow-visible"
        style={{ scale: cloudsScale }}
      >
        <Image
          width="1000"
          height="1000"
          quality={100}
          src="/CLOUDS2.png"
          alt="Clouds"
          className="h-auto absolute top-12 sm:top-20 lg:top-0 inset-0 w-screen object-cover"
        />
      </motion.div>

      <motion.div className="max-w-[800px] m-auto relative z-50 container">
        <h1 className="font-ExtraBoldCond text-xl md:text-4xl mb-6">
          Welcome to BLUDFEST!
        </h1>

        <p className="text-md md:text-lg max-w-full mx-auto normal-case leading-tight mb-2">
          We’re back, bigger and louder than ever. Bludfest 2025 isn’t just a
          festival—it’s a movement, a family, and a space where individuality
          thrives.
        </p>
        <p className="text-md md:text-lg max-w-full mx-auto normal-case leading-tight mb-2">
          This year, we’re breaking boundaries, smashing genres, and turning up
          the energy. No pretentious nonsense, no corporate bollocks—just raw,
          unfiltered creativity, music, and community.
        </p>
        <p className="text-md md:text-lg max-w-full mx-auto normal-case leading-tight mb-2">
          It’s not just about the music (although we’ve got some killer artists
          lined up). It’s about the connection. The feeling of being part of
          something electric and unforgettable.
        </p>
        <p className="text-md md:text-lg max-w-full mx-auto normal-case leading-tight mb-2">
          Dive in. Be different. Be loud. Be part of something unforgettable.
        </p>
        <p className="text-md md:text-lg max-w-full mx-auto normal-case leading-tight mb-2">
          This is YOUR Bludfest. OUR Bludfest. Let’s make it legendary.
        </p>
      </motion.div>
    </div>
  );
};

export default Info;
