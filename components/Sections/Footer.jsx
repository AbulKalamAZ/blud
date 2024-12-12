import Image from "next/image";

const Footer = () => {
  return (
    <div className="font-ExtraBoldCond pt-20 pb-10 relative ">
      <div className="container flex flex-col items-center justify-center">
        <div className="flex  flex-col w-full items-center">
          <div className="flex flex-col gap-y-4 text-center items-center">
            <Image
              width="500"
              height="500"
              quality="100"
              src="/bratlogo.png"
              alt="BRAT Logo"
              className="h-auto w-[100px] md:w-[180px] [filter:invert(1)]"
            />

            <a
              href="https://specialprojectsmusic.com/"
              target="_blank"
              className="text-center"
            >
              <Image
                width="200"
                height="500"
                quality="100"
                src="/specialprojects.webp"
                alt="Special Music Logo"
                className="h-auto md:h-[80px] [filter:invert(1)] "
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center mt-4 text-center ">
          <div>Copyright 2024 ©</div>
          <a
            href="http://instagram.com/adamthedev"
            target="_blank"
            className="text-[11px]  font-Light uppercase text-white"
          >
            Developed by @adamthedev
          </a>
        </div>
      </div>
      <div
        className={`absolute inset-0 bg-dottedTexture1 z-10 bg-contain opacity-20  pointer-events-none`}
      />
    </div>
  );
};

export default Footer;
