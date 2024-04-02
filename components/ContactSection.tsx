"use client";
import React from "react";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)]"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      <SectionHeader>Contact</SectionHeader>
    </motion.section>
  );
}