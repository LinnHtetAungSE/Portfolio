"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { FeaturedProject } from "@/type";
import { featuredProjects } from "@/config/projects.config";

const ProjectCard: React.FC<{
  project: FeaturedProject;
  index: number;
  progress: any;
  total: number;
}> = ({ project, index, progress, total }) => {
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

      <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden rounded-tr-[2.5rem] pointer-events-none z-20">
        <div className="absolute top-7 -right-8 w-40 py-1 bg-sky-500 text-white text-[10px] font-black uppercase tracking-[0.2em] text-center rotate-45 shadow-lg border-y border-sky-400">
          {project.year}
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="relative h-64 w-full rounded-2xl overflow-hidden border border-slate-100">
          <Image
            src={project.imgUrl}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-3xl font-black text-slate-900 tracking-tight">
            {project.name}
          </h3>
          <p className="text-slate-600 leading-relaxed font-medium">
            {project.peekDescription}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.techs.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-[10px] font-bold bg-slate-900 text-white rounded-md tracking-wider"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-4">
          {project.gitHubLink && (
            <a
              href={project.gitHubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-900 text-white hover:bg-sky-600 transition-all active:scale-90"
            >
              <Github size={20} />
            </a>
          )}
          {project.websiteLink && (
            <a
              href={project.websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-grow flex items-center justify-center gap-2 h-12 bg-white border-2 border-slate-900 text-slate-900 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all active:scale-95"
            >
              <ExternalLink size={16} />
              Visit Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const FeaturedProjectsSection: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={containerRef} className="py-32 relative" id="projects">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[0.8fr_1.2fr] gap-20">
        <div className="flex flex-col h-full">
          <div className="sticky top-32">
            <h2 className="text-6xl md:text-8xl font-black text-slate-300 tracking-tighter leading-none mb-8">
              FEATURED <br />
              <span className="text-gradient animate-gradient-x pe-1">
                PROJECTS
              </span>
            </h2>

            <p className="text-slate-300 font-medium leading-relaxed max-w-sm mb-10">
              A curated selection of technical solutions, focusing on
              high-performance architecture and seamless user experiences.
            </p>
          </div>
        </div>

        <div className="relative space-y-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={index}
              total={featuredProjects.length}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
