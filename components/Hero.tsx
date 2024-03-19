"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section>
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
            className="absolute bottom-0 left-0 text-4xl"
            initial={{ opacity: 0, x: 50, scale: 0 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋🏻
          </motion.span>
        </div>
      </div>
    </section>
  );
}
