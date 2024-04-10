"use client";
import React from "react";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SubmitBtn from "./SubmitBtn";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";

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
      <p className="text-gray-700 dark:text-white/60">
        Please contact me directly at{" "}
        <a
          className="font-semibold text-gray-900 dark:text-white/90"
          href="mailto:s.sukhovetskyi@gmail.com"
        >
          s.sukhovetskyi@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        action={async (formData) => {
          const { error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email wysłano");
        }}
        className="mt-10 flex flex-col"
      >
        <input
          className="h-14 rounded-lg borderBlack px-3 dark:bg-white dark:bg-opacity-70
           dark:text-black dark:focus:bg-opacity-90 transition-all outline-black/30 dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={150}
          placeholder="You email"
        />
        <textarea
          className="borderBlack h-52 rounded-lg my-3 p-2 focus:border-black-600 dark:bg-white dark:bg-opacity-70
           dark:text-black dark:focus:bg-opacity-90 transition-all  outline-black/30 dark:outline-none"
          placeholder="You message..."
          name="message"
          required
          maxLength={1500}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
