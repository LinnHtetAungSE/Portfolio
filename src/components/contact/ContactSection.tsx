"use client";

import React, { useState } from "react";
import { Send, Mail, Phone, MapPin, AlertTriangle } from "lucide-react";
import { socials } from "@/config/socialLinks.config";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("Under Maintenance");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <section id="contact" className="py-40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-20">
            <div className="flex flex-col h-full">
              <div className="sticky top-32">
                <h2 className="text-6xl md:text-8xl font-black text-slate-300 tracking-tighter leading-[0.8] mb-12">
                  LET'S <br />
                  <span className="text-gradient animate-gradient-x">TALK</span>
                </h2>

                <div className="space-y-10">
                  <p className="text-slate-300 font-medium leading-relaxed max-w-sm">
                    I am open to exploring new opportunities, architectural
                    collaborations, or meaningful discussions about software
                    engineering and systems design.
                  </p>

                  <div className="space-y-6">
                    {[
                      {
                        icon: Phone,
                        label: "Phone",
                        val: "098-521-2787",
                        href: "tel:0985212787",
                      },
                      {
                        icon: Mail,
                        label: "Email",
                        val: "linnhtet3064@gmail.com",
                        href: "mailto:linnhtet3064@gmail.com",
                      },
                      {
                        icon: MapPin,
                        label: "Location",
                        val: "Chiang Mai, TH.",
                        href: "#",
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center gap-4 group"
                      >
                        <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-sky-500 group-hover:border-sky-100 transition-all">
                          <item.icon size={20} />
                        </div>
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-widest text-slate-200">
                            {item.label}
                          </p>
                          <a
                            href={item.href}
                            className="text-sm font-bold text-slate-300 hover:text-sky-600 transition-colors"
                          >
                            {item.val}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-10 border-t border-slate-100">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6">
                      Socials
                    </p>
                    <div className="flex gap-4">
                      {socials.map((social) => (
                        <a
                          key={social.name}
                          href={social.url}
                          className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-900 text-white hover:bg-sky-500 transition-all active:scale-90 shadow-lg shadow-slate-900/10"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {<social.icon size={18} />}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group h-fit">
              <div className="absolute inset-0 z-30 pointer-events-none flex items-center justify-center overflow-hidden rounded-[3.5rem]">
                <div className="absolute top-1/4 -left-20 -right-20 py-2 bg-yellow-400 border-y-2 border-slate-900 text-slate-900 font-black text-[10px] tracking-[0.3em] uppercase -rotate-12 shadow-2xl flex justify-around items-center">
                  <span>Caution</span> <AlertTriangle size={12} />{" "}
                  <span>System Offline</span> <AlertTriangle size={12} />{" "}
                  <span>Maintenance</span> <AlertTriangle size={12} />{" "}
                  <span>Caution</span>
                </div>
                <div className="absolute bottom-1/4 -left-20 -right-20 py-2 bg-yellow-400 border-y-2 border-slate-900 text-slate-900 font-black text-[10px] tracking-[0.3em] uppercase rotate-12 shadow-2xl flex justify-around items-center">
                  <span>Caution</span> <AlertTriangle size={12} />{" "}
                  <span>No Input Access</span> <AlertTriangle size={12} />{" "}
                  <span>Under Repair</span> <AlertTriangle size={12} />{" "}
                  <span>Caution</span>
                </div>
              </div>

              <div className="relative bg-white border border-slate-100 p-10 md:p-16 rounded-[3.5rem] shadow-2xl shadow-slate-200/40 opacity-40 grayscale-[0.5]">
                <div className="absolute -top-6 -right-6 bg-white border-2 border-dashed border-slate-200 p-5 rotate-6 rounded-2xl shadow-sm z-10 hidden md:block">
                  <p className="text-[10px] font-black text-slate-400 tracking-[0.2em] mb-1 uppercase text-right">
                    System Status
                  </p>
                  <p className="text-xs font-black text-slate-900 tracking-widest whitespace-nowrap text-red-500">
                    Form Disabled
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-900 ml-1">
                        Name
                      </label>
                      <input
                        disabled
                        type="text"
                        placeholder="Disabled"
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl font-medium cursor-not-allowed outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-900 ml-1">
                        Email
                      </label>
                      <input
                        disabled
                        type="email"
                        placeholder="Disabled"
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl font-medium cursor-not-allowed outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-900 ml-1">
                      Message
                    </label>
                    <textarea
                      disabled
                      rows={6}
                      placeholder="This form is currently offline for maintenance..."
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl font-medium cursor-not-allowed outline-none resize-none"
                    />
                  </div>

                  <button
                    disabled
                    type="button"
                    className="w-full py-5 bg-slate-400 text-white rounded-2xl font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-3 cursor-not-allowed"
                  >
                    <AlertTriangle size={18} />
                    {status}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-12 py-10 border-t border-slate-100 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
          © {new Date().getFullYear()} Lin Htet Aung. All Rights Reserved.
        </p>
      </footer>
    </>
  );
};
