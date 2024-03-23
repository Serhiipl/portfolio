"use client";

import { projectsData } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import React from "react";

import Project from "./Project";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28">
      <SectionHeader>My Projects</SectionHeader>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
