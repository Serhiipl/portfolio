"use client";
import React from "react";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-2xl text-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
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
