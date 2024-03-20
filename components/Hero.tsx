"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              width={192}
              height={192}
              src={"/hero.jpg"}
              alt="That's me=)"
              priority={true}
              className=" h-24 w-24 rounded-full object-cover border-[0.35rem]
             border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 255,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋🏻
          </motion.span>
        </div>
      </div>
      <motion.p
        className="mt-4 mb-10 px-4 text-2xl font-medium
       !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">{`Hello, I'm Serhii.`}</span> {`I'm a`}{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">2 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.p>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center 
      gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href={"#contact"}
          className="group bg-gray-900 text-white px-7
        py-3 flex items-center gap-2 rounded-full outline-none hover:scale-110
         focus:scale-110 hover:bg-gray-950 active:scale-105 transition cursor-pointer"
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          className="gorup bg-white px-7 border border-black/10
        py-3 flex items-center gap-2 rounded-full outline-none hover:scale-110
         focus:scale-110 active:scale-105 transition"
          href="/Sukhovetskyi_Serhii_CV.pdf"
          download={true}
        >
          Download CV
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/serhii-sukhovetskyi-68b67721a/"
          target="_blank"
          className="bg-white p-4 text-gray-700 hover:text-gray-950
        py-3 flex items-center gap-2 rounded-full border border-black/10
        outline-none hover:scale-110 focus:scale-110 active:scale-105 transition"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/Serhiipl"
          target="_blank"
          className="bg-white p-4 text-gray-700 hover:text-gray-950
        py-3 flex items-center gap-2 rounded-full text-[1.15rem] border 
        border-black/10 outline-none hover:scale-[1.15]
         focus:scale-[1.15] active:scale-105 transition"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
