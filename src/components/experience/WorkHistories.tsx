"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Experience } from "@/type";
import { experiences } from "@/config/experience.config";

export const ExperienceCard: React.FC<Experience> = ({
  date,
  position,
  title,
  company,
  description,
  skills,
}) => {
  return (
    <div className="relative">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
        <div>
          <h3 className="text-2xl font-black text-slate-900 tracking-tight ">
            {title}
          </h3>
          <p className="text-sm font-bold text-sky-600 tracking-wide ">
            {position}
          </p>
        </div>
        <div className="bg-white border-2 border-dashed border-slate-200 p-4 absolute -top-16 -right-12 md:-right-16 text-right rotate-6 rounded-2xl shadow-sm group-hover:rotate-0 transition-transform duration-500">
          <p className="text-[10px] font-black text-slate-400 tracking-[0.2em] mb-1">
            Timeline
          </p>
          <p className="text-xs font-black text-slate-900 tracking-widest whitespace-nowrap">
            {date}
          </p>
        </div>
      </div>
      <p className="text-sm font-bold text-slate-900 italic">{company}</p>

      <p className="text-slate-600 leading-relaxed font-medium mb-6">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 text-[10px] font-bold bg-slate-900 text-white rounded-md  tracking-wider"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export const WorkHistories = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={containerRef} className="py-32 relative" id="experience">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[0.8fr_1.2fr] gap-20">
        <div className="flex flex-col h-full">
          <div className="sticky top-32">
            <h2 className="text-6xl md:text-8xl font-black text-slate-300 tracking-tighter leading-none mb-8">
              WORK <br />
              <span className="text-gradient animate-gradient-x">HISTORY</span>
            </h2>

            <p className="text-slate-300 font-medium leading-relaxed max-w-sm mb-10">
              A detailed record of professional engagement, focusing on
              architectural decisions, leadership, and technical delivery across
              diverse ecosystems.
            </p>
          </div>
        </div>

        <div className="relative space-y-12">
          {experiences.map((exp, index) => (
            <ParallaxItem
              key={index}
              exp={exp}
              index={index}
              total={experiences.length}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ParallaxItem = ({
  exp,
  index,
  total,
  progress,
}: {
  exp: Experience;
  index: number;
  total: number;
  progress: any;
}) => {
  const y = useTransform(
    progress,
    [0, 1],
    [(index + 1) * 40, (total - index) * -40],
  );

  return (
    <motion.div
      style={{ y }}
      className="group relative bg-white border border-slate-100 p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/40 transition-all duration-500 hover:shadow-2xl hover:shadow-sky-500/5"
    >
      <div className="absolute inset-0 bg-sky-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem] -z-10" />

      <ExperienceCard {...exp} />
    </motion.div>
  );
};
