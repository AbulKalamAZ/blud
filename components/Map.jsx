import Image from "next/image";

const Map = () => {
  return (
    <div className="relative container">
      <div className="pointer-events-none absolute inset-0 z-10" />
      <div className="md:grid md:grid-cols-2">
        <div className="flex justify-center flex-col text-left md:pr-20 mb-8">
          <h2 className="text-xl md:text-4xl font-ExtraBoldCond mb-4 text-center md:text-left ">
            2025 Venue
          </h2>
          <p className="text-xl md:text-4xl font-BoldCond w-[700px] max-w-full mx-auto normal-case mb-4 text-center md:text-left pr-2">
            Milton Keynes Bowl – The Perfect Stage for Bludfest 2025
          </p>
          <p className="text-center md:text-left normal-case">
            Located in the heart of the UK, Milton Keynes Bowl provides the
            ideal setting for our festival. With state-of-the-art facilities,
            easy transport links, and a capacity for thousands, it’s the perfect
            home for Bludfest.
          </p>
        </div>
        <div className="cursor-pointer rounded-[30px] overflow-hidden">
          <a
            target="_blank"
            href="https://www.google.com/maps/place/The+National+Bowl/@52.0163005,-0.7608289,17z/data=!4m6!3m5!1s0x48765552d1c7fa85:0xeb96ef617ef403f6!8m2!3d52.0165391!4d-0.7611971!16zL20vMDZuazE3?hl=en&entry=ttu"
          >
            <Image
              width="500"
              height="500"
              quality="100"
              src="/map.gif"
              className="w-full object-cover aspect-square overflow-hidden"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Map;
