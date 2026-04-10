import { Download } from "lucide-react";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden"
      id="about-me"
    >
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] blur-[120px] rounded-full z-0 pointer-events-none" />

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="flex flex-col gap-8 order-2 lg:order-1">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-[10px] font-black tracking-widest mb-6 text-slate-500 animate-fade-in">
              Hi, I'm Lin Htet Aung
            </span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-6 text-slate-300 animate-fade-up">
              ENGINEER <br />
              <span className="text-gradient animate-gradient-x">
                & ARCHITECT
              </span>
            </h1>
          </div>

          <p className="text-lg md:text-xl leading-relaxed text-slate-300 max-w-xl font-medium animate-fade-up delay-200">
            Full-Stack Software Engineer specializing in building scalable web
            applications with modern technologies like Next.js, Nuxt.js,
            TypeScript, Express.js, .NET, and Spring Boot.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="/LinHtetAung_Resume.pdf"
              download
              className="flex items-center gap-x-3 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-sm transition-all hover:bg-sky-600 active:scale-95 group animate-fade-up delay-50"
            >
              <Download size={18} className="group-hover:animate-bounce" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        <div className="relative order-1 lg:order-2">
          <div className="absolute -inset-3 bg-slate-100/80 rounded-[3rem] rotate-3 -z-10" />
          <div className="relative aspect-square w-full max-w-[500px] mx-auto bg-white border border-slate-100 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 overflow-hidden group">
            <Image
              src="/profile-image.png"
              alt="Lin Htet Aung - Full-Stack Engineer"
              fill
              className="object-contain p-8 transition-transform duration-700 group-hover:scale-105"
              priority
            />

            <div className="absolute top-8 right-8 flex flex-col items-end">
              <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center bg-white/50 backdrop-blur-sm shadow-sm group-hover:rotate-90 transition-transform duration-500">
                <div className="w-1.5 h-1.5 bg-sky-600 rounded-full" />
              </div>
            </div>
          </div>

          <div className="absolute -bottom-8 -right-4 bg-white px-8 py-6 rounded-2xl border border-slate-100 shadow-xl hidden md:block">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                Location
              </span>
              <p className="text-sm font-bold text-slate-900 flex items-center gap-2 animate-fade-in delay-500">
                Chiang Mai, TH
              </p>
              <div className="mt-3 flex gap-1">
                <div className="h-1 w-8 bg-sky-600 rounded-full" />
                <div className="h-1 w-2 bg-slate-100 rounded-full" />
                <div className="h-1 w-2 bg-slate-100 rounded-full" />
              </div>
            </div>
          </div>

          <div className="absolute top-1/2 -left-8 -translate-y-1/2 bg-white p-4 rounded-xl border border-slate-100 shadow-lg hidden md:block vertical-text">
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest [writing-mode:vertical-lr] rotate-180 animate-fade-in delay-700">
              Design & Development
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
