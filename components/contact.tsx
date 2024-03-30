import React from "react";
import SectionHeader from "./SectionHeader";
import { FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="mb-20 sm:mb-28 w-[min(100%,38rem)]">
      <SectionHeader>Contact me</SectionHeader>
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
      <form
        action=""
        className="mt-10 flex flex-col invalid:border-red-500 invalid:text-red-500"
      >
        <input
          className="h-14 rounded-lg borderBlack px-3"
          type="email"
          placeholder="You email"
        />
        <textarea
          className="borderBlack h-52 rounded-lg my-3 p-2 focus:border-black-600"
          placeholder="You message..."
        />
        <button
          type="submit"
          className="flex flex-row items-center justify-center gap-2
           h-[3rem] w-[8rem] bg-gray-900 text-white focus:scale-110 hover:scale-110 active:scale-105
        rounded-full outline-none transition-all group"
        >
          Submit
          <FaPaperPlane
            className="text-xs opacity-70 transition-all 
          group-hover:translate-x-1 group-hover:-translate-y-1 "
          />
        </button>
      </form>
    </section>
  );
}
