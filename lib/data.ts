import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { PiCertificate } from "react-icons/pi";
import looksImg from "@/public/looks.webp";
import weatherApp from "@/public/weatherApp.webp";
import store from "@/public/store.webp";
import dashboard from "@/public/dashboard.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Khmelnytskyi University of Economics",
    location: "Khmelnytskyi, Ukraine",
    description:
      "Graduated with a Master’s degree in Finance after 5 years of study.",
    icon: React.createElement(LuGraduationCap),
    date: "2008",
  },
  {
    title: "Orange Optics Expert",
    location: "Gdańsk, Poland",
    description:
      "Design and assembly (installation) of fiber optic networks in FTTH technology and local computer networks for individuals and companies.Welding of fiber optic cables. Performing reflectometric measurements. Training of new staff. Service delivery optimization.",
    icon: React.createElement(CgWorkAlt),
    date: "2016 - present",
  },
  {
    title: "Course JavaScript v2.0",
    location: "Gdańsk, Poland",
    description: `https://itgid.info/ru/course/js20   Array methods, Iterating over arrays: for, for in, for of, LocalStorage, GET, POST requests. POSTMAN. Working with API, AJAX Fetch request. Async functions, await. Promise, chains of promises (chaining), PromiseAll`,
    icon: React.createElement(PiCertificate),
    date: "2023",
  },
  {
    title: "Course TypeScript",
    location: "Gdańsk, Poland",
    description: `https://itgid.info/ru/course/ts    
      Functions, objects, arrays, corteges  in TypeScript. interfaces classes and generics in typescript,TypeScript Data Modifiers: public, private, protected.`,
    icon: React.createElement(PiCertificate),
    date: "2024",
  },
  {
    title: "Full-Stack Developer",
    location: "Gdańsk, Poland",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "theLooKS.pl",
    link: "https://thelooks.pl",
    description:
      "I worked as a full-stack developer on this startup project. This is a Landing page for Beauty Studio.",
    tags: ["HTML", "SCSS", "Vanilla JS", "PHP.Mailer", "PhotoSwipe", "Swiper"],
    imageUrl: looksImg,
  },
  {
    title: "sergiosweather.vercel.app",
    link: "https://sergiosweather.vercel.app",
    description: `This weather app https://sergiosweather.vercel.app, built with React and Next.js, fetches five-day forecasts using OpenWeatherMap's API. Users input a city name to view current weather conditions.`,
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "date-fns",
      "ReactQuery",
      "Jotai",
    ],
    imageUrl: weatherApp,
  },
  {
    title: "sergioslab-ecommerce-store.vercel.app",
    link: "https://sergioslab-ecommerce-store.vercel.app",
    description: `E-commerce store dashboard built with React JS, Next.js,
TypeScript, Tailwind CSS, shadcn/ui, Prisma, Cloudinary,
NeonDb, Clerk Authentication, and Stripe integration.`,
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Prisma",
      "Cloudinary",
      "NeonDb",
      "ClerkAuth",
      "Stripe",
    ],
    imageUrl: store,
  },
  {
    title: "sergios-e-commerce-dashboard.vercel.app",
    link: "https://sergios-e-commerce-dashboard.vercel.app",
    description: `Project of a dashboard for an e-commerce shop based on
    React JS & Next.js, TypeScript, Tailwind, shadcn/ui, Prisma,
    Cloudinary, NeonDb, ClerkAuth, Stripe.`,
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Prisma",
      "Cloudinary",
      "NeonDb",
      "ClerkAuth",
      "Stripe",
    ],
    imageUrl: dashboard,
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "SASS",
  "Styled Components",
  "Jotai",
  "Express",
  "Framer Motion",
  "Resend",
  "PHP.Mailer",
  "Prisma",
  "Cloudinary",
  "NeonDb",
  "ClerkAuth",
  "Stripe",
] as const;
