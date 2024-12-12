"use client";

import { motion } from "framer-motion";

// const variants = {

//   offscreen: {
//     y: 300,
//   },
//   onscreen: {
//     y: 50,
//     transition: {
//       type: "spring",
//       bounce: 0.4,
//       duration: 0.8,
//     },
//   },
// };

const curve = {
  type: "spring",
  stiffness: 2000000,
  damping: 30,
};

const ContentWrap = ({ children, theme, dottedBg, invertedDots }) => {
  let style;

  switch (theme) {
    case "white":
      style = "bg-white text-black";
      break;
    case "blue":
      style = "background-union text-black";
      break;
    case "pink":
      style = "background-pink";
      break;
    case "green":
      style = "background-green";
      break;
    case "grey":
      style = "background-grey";
      break;
    case "red":
      style = "background-red";
      break;
    case "union":
      style = "background-union";
      break;
    case "access":
      style = "background-access";
      break;
    case "signup":
      style = "background-signup";
      break;
    default:
      style = "background-black";
  }

  return (
    <div
      className={`flex justify-center items-center py-20 ${style} relative w-full h-full overflow-hidden z-10`}
    >
      {/* <div className="absolute inset-0 bg-texture z-10 opacity-10" /> */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="container text-center w-full h-full uppercase relative z-20"
      >
        {children}
      </motion.div>
      {dottedBg && (
        <div
          className={`absolute inset-0 bg-dottedTexture1 z-10 bg-contain opacity-20 ${invertedDots ? `invert` : ``} pointer-events-none`}
        />
      )}
    </div>
  );
};

export default ContentWrap;
