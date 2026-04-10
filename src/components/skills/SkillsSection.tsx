import React from "react";
import { skills } from "@/config/skills.config";

export const SkillsSection: React.FC = () => {
  return (
    <section id="tech-stack" className="px-6 py-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-20">
          <div className="flex flex-col h-full">
            <div className="sticky top-32">
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8 text-slate-300 animate-fade-up">
                TECH <br />{" "}
                <span className="text-gradient animate-gradient-x">STACK</span>
              </h2>
              <div className="space-y-6 text-slate-300 font-medium leading-relaxed max-w-sm">
                <p className="animate-fade-up delay-200">
                  A comprehensive mapping of my technical ecosystem, categorized
                  by proficiency and years of active deployment in production
                  environments.
                </p>
                <div className="flex gap-2 animate-fade-in delay-300">
                  <div className="w-2 h-2 rounded-full bg-slate-900" />
                  <div className="w-2 h-2 rounded-full bg-slate-500" />
                  <div className="w-2 h-2 rounded-full bg-slate-300" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-slate-100 border border-slate-100 overflow-hidden rounded-3xl shadow-2xl shadow-slate-200/50">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-white p-10 flex flex-col justify-between group hover:bg-slate-50 transition-colors duration-500 animate-fade-up"
              >
                <div className="flex justify-between items-start mb-12">
                  <span className="text-[10px] font-mono font-bold text-slate-400 tracking-widest animate-fade-in">
                    Exp. Since {skill.since}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center group-hover:border-sky-600 group-hover:bg-sky-50 transition-all">
                    <div className="w-1.5 h-1.5 bg-slate-200 group-hover:bg-sky-600 rounded-full" />
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl font-black tracking-tight mb-4 text-slate-900 animate-fade-up">
                    {skill.name}
                  </h3>

                  <div className="relative w-full h-1 bg-slate-100 rounded-full mb-6 overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 transition-all duration-1000 ease-out"
                      style={{ width: `${(skill.score / 10) * 100}%` }}
                    />
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex-grow h-px bg-slate-100 group-hover:bg-sky-100 transition-colors" />
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-black text-slate-900 animate-fade-in">
                        {skill.score}
                      </span>
                      <span className="text-[10px] font-bold text-slate-400">
                        / 10
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
