import React from "react";
import Image from "next/image";
import { ExternalLink, Package } from "lucide-react";
import { libraries } from "@/config/library.config";

export const LibraryHubSection: React.FC = () => {
  return (
    <section id="libraries" className="px-6 py-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-20 mb-20">
          <div className="flex flex-col h-full">
            <div className="sticky top-32">
              <h2 className="text-6xl md:text-8xl font-black text-slate-300 tracking-tighter leading-none mb-8">
                LIBRARY <br />{" "}
                <span className="text-gradient animate-gradient-x">HUB.</span>
              </h2>
              <div className="space-y-6 text-slate-300 font-medium leading-relaxed max-w-sm">
                <p>
                  Performance-driven modules, packages, and technical tools
                  developed to solve complex architectural bottlenecks and
                  accelerate development lifecycles.
                </p>
                <div className="flex gap-2">
                  <Package className="w-5 h-5 text-slate-400" />
                  <span className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400">
                    Total Modules: {libraries.length}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            {libraries.map((lib) => (
              <div
                key={lib.name}
                className="group flex flex-col bg-white border border-slate-100 p-6 rounded-[3rem] shadow-2xl shadow-slate-100/60 hover:border-sky-100 transition-all duration-700"
              >
                <div className="relative w-full h-[320px] rounded-[2.2rem] overflow-hidden border border-slate-50 mb-8">
                  {lib.imgUrl ? (
                    <Image
                      src={lib.imgUrl}
                      alt={lib.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-slate-50 flex flex-col items-center justify-center gap-3">
                      <Package size={40} className="text-slate-200" />
                      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:16px_16px]" />
                    </div>
                  )}

                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-slate-200 z-10 shadow-sm">
                    <p className="text-[10px] font-mono font-black text-sky-600 tracking-widest">
                      {lib.version}
                    </p>
                  </div>
                </div>

                {/* Content Area */}
                <div className="px-4 pb-4 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex flex-wrap gap-3">
                      {lib.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 bg-green-50 rounded-full border border-green-100">
                      <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[8px] font-black text-green-700 uppercase tracking-widest">
                        {lib.status}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-4xl font-black text-slate-900 tracking-tighter mb-4">
                    {lib.name}
                  </h3>

                  <p className="text-slate-500 font-medium text-sm leading-relaxed mb-10 max-w-xl">
                    {lib.description}
                  </p>

                  <div className="mt-auto flex gap-4">
                    {lib.npmLink && (
                      <a
                        href={lib.npmLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 flex items-center justify-center rounded-2xl bg-slate-900 text-white hover:bg-[#CB3837] transition-all active:scale-90 shadow-xl shadow-slate-900/10"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          width="22"
                          height="22"
                          fill="currentColor"
                        >
                          <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0H1.763zM5.13 5.323l13.837.019-.009 13.328h-3.414V8.738h-3.454v9.913H5.13V5.323z" />
                        </svg>
                      </a>
                    )}
                    {lib.websiteLink && (
                      <a
                        href={lib.websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-grow flex items-center justify-center gap-3 h-14 bg-white border-2 border-slate-900 text-slate-900 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-slate-900 hover:text-white transition-all active:scale-95 shadow-sm"
                      >
                        <ExternalLink size={16} />
                        Documentation
                      </a>
                    )}
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
