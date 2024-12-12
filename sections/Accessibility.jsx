"use client";

import { useRef } from "react";
import Button from "../components/Button";
import ContentWrap from "../components/ContentWrap";

const Accessibility = () => {
  const ref = useRef(null);
  return (
    <ContentWrap theme="black" dottedBg invertedDots>
      <div className="text-left">
        <img
          src="/dom_zombie.png"
          alt="Dom"
          className="w-[40vw] opacity-90 lg:opacity-1 md:w-[20vw] absolute  -bottom-[12vw] md:-bottom-[7vw] lg:-bottom-[3vw] xl:-bottom-[1vw] -left-[10vw] "
        />
        <div ref={ref} className="relative flex flex-col text-center">
          <div className="relative max-w-full">
            {/* Rest of your content remains the same */}
            <h2 className="text-xl md:text-4xl font-ExtraBoldCond mb-4">
              Accessibility
            </h2>
            <p className="text-md   w-[700px] max-w-full mx-auto normal-case leading-tight mb-4">
              At Bludfest, we are committed to creating an inclusive and
              welcoming environment for all festival-goers.
            </p>

            <p className="text-md   w-[700px] max-w-full mx-auto normal-case leading-tight mb-4">
              Ensuring that everyone can enjoy the festival is at the heart of
              what we do, and we strive to make Bludfest 2025 as accessible as
              possible for d/Deaf, Disabled, and neurodivergent attendees.
            </p>

            <p className="text-md   w-[700px] max-w-full mx-auto normal-case leading-tight mb-8">
              <strong>We have made significant improvements for 2025</strong>,
              and we continue to work with accessibility experts and
              organisations to ensure that our facilities meet the highest
              standards.
            </p>
            <Button
              link="/accessibility"
              text="More accessibility info"
              className="bg-mainPink text-white border-transparent hover:bg-white hover:text-black"
            />
          </div>
        </div>
      </div>
    </ContentWrap>
  );
};

export default Accessibility;
