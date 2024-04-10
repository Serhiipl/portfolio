"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionHeader from "./SectionHeader";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { UseTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: false });
  const { ref: sectionRef } = useSectionInView("Experience", 0.8);
  const { theme } = UseTheme();
  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeader>My Experience</SectionHeader>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={inView}
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255,255,255,0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0,0,0,0.05)",
                textAlign: "left",
                padding: "1rem 3 rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "7px solid #9ca3af"
                    : "0.4rem solid rgba(255,255,255,0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255,255,255,0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 ref={sectionRef} className="font-semibold capitalize">
                {item.title}
              </h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
