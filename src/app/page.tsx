"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

//CARD COMPONENT FOR LATEST NEWS
const Card = ({
  name,
  image,
  content,
  href,
}: {
  name: string;
  image: string;
  content: string;
  href?: string;
}) => {
  return (
    <a href={href} className="">
      <div className="news max-w-sm overflow-hidden rounded shadow-lg">
        <Image
          src={image}
          width={10000}
          height={10000}
          alt="latest news image"
          className="w-full rounded-lg"
        />
        <div className="px-6 py-4 text-center">
          <h5 className="mb-2 text-xl font-bold text-[#fafafae8]">{name}</h5>
          <p className="font-medium text-secondary">{content}</p>
        </div>
      </div>
    </a>
  );
};

export default function Home() {
  const words = ["COMPETITION", "STANDARDS", "COMEBACKS", "CHALLENGES"];
  const [wordsIndex, setWordsIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordsIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      <div className="relative flex items-center justify-center">
        <video
          src="/assets/looped-clip.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="opacity-50 w-full object-cover h-[760px]"
        ></video>
        <div className="absolute flex flex-col items-center justify-center">
          <AnimatePresence mode="popLayout">
            <h1 className="poppins mb-10 w-[95%] text-2xl md:w-[834px] whitespace-nowrap md:text-6xl font-bold text-white">
              DEFINING THE{" "}
              <motion.span
                key={wordsIndex}
                className="relative text-lightblue"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                exit={{ opacity: 0 }}
              >
                {words[wordsIndex]}
              </motion.span>
            </h1>
          </AnimatePresence>

          <button className="poppins m-7 mx-auto h-10 w-40 rounded-lg bg-primary text-lg font-medium text-white shadow-xl hover:bg-accent hover:text-bg">
            <Link
              href="https://discord.com/invite/afterhourscs2"
              target="_blank"
            >
              DISCORD
            </Link>
          </button>
        </div>
      </div>


    </div>
  );
}
