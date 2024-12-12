"use client";

import Image from "next/image";

const LineUp = () => {
  const glowStyle = {
    textShadow: "0 0 10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 0, 0, 1)",
  };

  return (
    <div className="flex flex-col items-center justify-center text-centet text-white uppercase -mt-[14vw] max-w-[50vw] mx-auto text-center font-ExtraBoldCond t">
      <div className="icons-wrapper flex justify-center items-center gap-4 lg:gap-8">
        <Image
          width="1000"
          height="1000"
          quality={100}
          src="/YUNGBLUD.png"
          alt="yungblud"
          className="w-[25vw] h-auto z-10 mx-auto my-4 lg:mt-8"
        />
        <Image
          width="1000"
          height="1000"
          quality={100}
          src="/Chase.png"
          alt="chase"
          className="w-[25vw] h-auto z-10 mx-auto my-4 lg:mt-8"
        />
      </div>

      <div className="v">
        <h2
          className="text-[6.5vw] lg:text-[6.2vw] leading-[1] tracking-tight"
          style={glowStyle}
        >
          BLACKBEAR
        </h2>
        <h2
          className="text-[6.5vw] lg:text-[6.2vw] leading-[1] tracking-tight"
          style={glowStyle}
        >
          DENZEL CURRY
        </h2>
        <h2
          className="text-[6.5vw] lg:text-[6.2vw] leading-[1] tracking-tight"
          style={glowStyle}
        >
          RACHEL CHINOURIRI
        </h2>
        <h2
          className="text-[4.75vw] leading-[1] tracking-tight flex justify-center items-center gap-4 md:gap-5 lg:gap-8"
          style={glowStyle}
        >
          <span>JXDN</span> <span>PEACH PRC</span> <span>LUVCAT</span>
        </h2>
        <h2
          className="text-[4vw] leading-[1] tracking-tight flex justify-center items-center gap-4 md:gap-5 lg:gap-8"
          style={glowStyle}
        >
          <span>MASTER PEACE</span> <span>CLIFFORDS</span>
        </h2>
      </div>

      <div className="item">
        <Image
          width="1000"
          height="1000"
          quality={100}
          src="/mtc.png"
          alt="More to come"
          className="w-[20vw] h-auto z-10 mx-auto my-4 lg:mt-8"
        />

        <div className="links flex justify-center items-center gap-4 lg:gap-8">
          <a href="https://bludfest.com">
            <h2
              className="font-ExtraBoldCond text-[2.5vw] leading-none"
              style={glowStyle}
            >
              BLUDFEST.COM
            </h2>
          </a>
          <a href="https://www.aegpresents.co.uk/">
            <h2
              className="font-ExtraBoldCond text-[2.5vw] leading-none"
              style={glowStyle}
            >
              AEGPRESENTS.CO.UK
            </h2>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LineUp;
