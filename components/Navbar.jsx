"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "./Button";
import Socials from "./Socials";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
      setIsScrolled(currentScrollPos > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const menuVariants = {
    closed: {
      y: "-100%",
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    exit: {
      y: "-100%",
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <nav
      className={`font-BoldCond uppercase fixed w-screen z-[9999] transition-all duration-300 
      ${visible ? "translate-y-0" : "-translate-y-full"} 
      ${isScrolled ? "bg-black" : "bg-transparent"} 
      xl:translate-y-0`}
    >
      {/* Desktop Nav */}
      <div className="hidden xl:grid xl:grid-cols-3 xl:justify-between xl:items-center px-10 relative h-[120px] z-20">
        <div className="flex items-center space-x-4">
          <Button link="/" text="Home" fontSize="text-[16px]" />
          <Button link="/faqs" text="FAQs" fontSize="text-[16px]" />
          <Button
            link="https://www.axs.com/uk"
            newWindow
            text="BUY TICKETS"
            fontSize="text-[16px]"
          />
          <Button
            link="/accessibility"
            text="ACCESSIBILITY"
            fontSize="text-[16px]"
          />
        </div>

        <Link href="/" className="flex justify-center">
          <Image
            width="500"
            height="500"
            quality="100"
            src="/logo.png"
            alt="Logo"
            className="w-[150px]"
          />
        </Link>

        <div className="flex items-end justify-end">
          <Socials />
        </div>
      </div>

      {/* Mobile Nav */}
      <div className="xl:hidden">
        <div
          className={`flex justify-between items-center px-4 py-3 ${isMenuOpen ? "bg-black" : "bg-transparent"}`}
        >
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={100}
              height={40}
              quality={100}
            />
          </Link>
          <details
            className="relative"
            onToggle={(e) => setIsMenuOpen(e.target.open)}
          >
            <summary className="list-none">
              <svg
                className="w-6 h-6 text-white cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </summary>
            <AnimatePresence>
              {isMenuOpen && (
                <motion.nav
                  initial="closed"
                  animate="open"
                  exit="exit"
                  variants={menuVariants}
                  className="fixed top-[60px] left-0 w-full h-screen bg-black flex flex-col items-center justify-center"
                >
                  <motion.div
                    variants={{
                      closed: { opacity: 0 },
                      open: { opacity: 1 },
                    }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col items-center"
                  >
                    <Link
                      href="/"
                      className="text-white text-2xl md:text-3xl py-3 uppercase font-BoldCond"
                    >
                      Home
                    </Link>
                    <Link
                      href="/faqs"
                      className="text-white text-2xl md:text-3xl py-3 uppercase font-BoldCond"
                    >
                      FAQs
                    </Link>
                    <Link
                      href="https://www.axs.com/uk/events/536760/bludfest-tickets/promopage/53603?skin=aegpresentsuk"
                      target="_blank"
                      className="text-white text-2xl md:text-3xl py-3 uppercase font-BoldCond"
                    >
                      Buy Tickets
                    </Link>
                    <Link
                      href="/accessibility"
                      className="text-white text-2xl md:text-3xl py-3 uppercase font-BoldCond"
                    >
                      Accessibility
                    </Link>
                    <div className="mt-8">
                      <Socials />
                    </div>
                  </motion.div>
                </motion.nav>
              )}
            </AnimatePresence>
          </details>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
