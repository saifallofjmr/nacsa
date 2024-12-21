"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import NavbarItemMobile from "./NavbarItemMobile";

export default function Navbar() {
  const [isActiveMobileNav, setIsActiveMobileNav] = useState(false);
  const path = usePathname();

  const handleToggleNavOff = () => {
    setTimeout(() => {
      setIsActiveMobileNav(false);
    }, 300);
  };

  return (
    <header
      className={`poppins relative z-50 flex justify-between p-6 md:px-40 font-bold text-bluegray ${path == "/" ? "bg-bg bg-opacity-80" : ""}`}
    >
      <div className="">
        <Image
          src="/assets/navbar.png"
          width={1000}
          height={1000}
          alt="owl logo"
          className="w-24 lg:w-36"
        />
      </div>
      <nav className="flex items-center text-sm md:text-xl">
        <div className="max-lg:hidden">
          <ul className="flex space-x-7">
            <li className="hover">
              <Link href="/">HOME</Link>
            </li>
            <li className="hover">
              <Link href="/news">NEWS</Link>
            </li>
            <li className="hover">
              <Link href="/tourney">TOURNEY</Link>
            </li>
            <li className="hover">
              <Link href="/faceit">HUB</Link>
            </li>
            <li className="hover">
              <Link href="/prizes">PRIZES</Link>
            </li>
            <li className="hover">
              <Link href="/staff">STAFF</Link>
            </li>

            <li className="hover">
              <Link href="/team">TEAM</Link>
            </li>
          </ul>
        </div>

        <div
          className="flex justify-end"
          onClick={() => setIsActiveMobileNav(!isActiveMobileNav)}
        >
          <div className="z-20 flex h-6 w-[25px] flex-col items-end justify-center gap-1 lg:hidden">
            <motion.div
              className="z-20 h-[2px] w-[25px] bg-secondary"
              initial={{ position: "relative" }}
              animate={{
                top: isActiveMobileNav ? "3px" : 0,
                rotate: isActiveMobileNav ? 45 : 0,
              }}
            ></motion.div>
            <AnimatePresence mode="popLayout">
              {!isActiveMobileNav && (
                <motion.div
                  className="z-20 h-[2px] w-[25px] bg-secondary"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, position: "relative" }}
                ></motion.div>
              )}
            </AnimatePresence>
            <motion.div
              className="z-20 h-[2px] w-[25px] bg-secondary"
              initial={{ position: "relative" }}
              animate={{
                bottom: isActiveMobileNav ? "3px" : 0,
                rotate: isActiveMobileNav ? -45 : 0,
              }}
            ></motion.div>
          </div>
        </div>
        <AnimatePresence>
          {isActiveMobileNav && (
            <motion.div
              className="absolute flex h-screen w-full flex-col items-center justify-center gap-10 bg-primary"
              initial={{ right: "-100%", top: 0 }}
              animate={{ right: 0 }}
              exit={{ right: "-100%" }}
            >
              <NavbarItemMobile
                handleNavMobile={handleToggleNavOff}
                location="/"
                content="HOME"
              />
              <NavbarItemMobile
                handleNavMobile={handleToggleNavOff}
                location="/news"
                content="NEWS"
              />
              <NavbarItemMobile
                handleNavMobile={handleToggleNavOff}
                location="/tourney"
                content="TOURNEY"
              />
              <NavbarItemMobile
                handleNavMobile={handleToggleNavOff}
                location="/faceit"
                content="HUB"
              />
              <NavbarItemMobile
                handleNavMobile={handleToggleNavOff}
                location="/prizes"
                content="PRIZES"
              />
              <NavbarItemMobile
                handleNavMobile={handleToggleNavOff}
                location="/staff"
                content="STAFF"
              />
              <NavbarItemMobile
                handleNavMobile={handleToggleNavOff}
                location="/team"
                content="TEAM"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
