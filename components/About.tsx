"use client";
import React from "react";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.75);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-2xl text-center scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
      id="about"
    >
      <SectionHeader>About me</SectionHeader>
      <p className="mb-3">
        I am a beginner full-stack developer who has completed the JavaScript
        v2.0 course, TypeScript course. I am mainly interested in , React,
        NextJS. Knowing HTML, SCSS, JavaScript, and Tailwindcss. I have a great
        enthusiasm for work, passion, and the ability to learn quickly.
      </p>
    </motion.section>
  );
}
