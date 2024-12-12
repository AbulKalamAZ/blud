"use client";
import ContentWrap from "@/components/ContentWrap";
import Hero from "@/components/Hero";
import Map from "@/components/Map";
import Info from "@/components/Sections/Info";
import Signup from "@/components/Sections/Signup";
import Tickets from "@/components/Sections/Tickets";
import Video from "@/components/Sections/Video";
import Accessibility from "@/sections/Accessibility";
import { useScroll, useTransform } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const batsScale = useTransform(scrollYProgress, [0, 0.2], [1, 0], {
    clamp: false,
  });
  return (
    <>
      <Hero />
      <Info dottedBg invertedDots />
      {/* <ContentWrap theme="black" dottedBg invertedDots>
        <Info />
      </ContentWrap> */}
      <Video />
      <ContentWrap theme="black" dottedBg invertedDots>
        <Tickets />
      </ContentWrap>
      <Accessibility />

      <Signup />

      <ContentWrap dottedBg invertedDots>
        <Map />
      </ContentWrap>
    </>
  );
}
