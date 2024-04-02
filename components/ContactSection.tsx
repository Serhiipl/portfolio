"use client";
import React from "react";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function ContactSection() {
  const { ref } = useSectionInView("Contact", 0.2);
  return (
    <motion.section
      ref={ref}
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
      <p className="text-gray-700">
        Please contact me directly at{" "}
        <a
          className="font-semibold text-gray-900"
          href="mailto:s.sukhovetskyi@gmail.com"
        >
          s.sukhovetskyi@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form action="" className="mt-10 flex flex-col">
        <input
          className="h-14 rounded-lg borderBlack px-3"
          name="senderEmail"
          type="email"
          required
          maxLength={150}
          placeholder="You email"
        />
        <textarea
          className="borderBlack h-52 rounded-lg my-3 p-2 focus:border-black-600"
          placeholder="You message..."
          name="message"
          required
          maxLength={1500}
        />
      </form>
    </motion.section>
  );
}
