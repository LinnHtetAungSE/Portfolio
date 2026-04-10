"use client";

import { useState } from "react";
import { NavBrand } from "./NavBrand";
import { NavMenu } from "./NavMenus";
import { Menu, X } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="fixed top-8 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl bg-white/80 backdrop-blur-md border border-slate-100 px-8 py-4 flex justify-between items-center z-50 rounded-2xl transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-slate-200/40"
      aria-label="Main Navigation"
    >
      <NavBrand />

      <div className="hidden md:flex items-center">
        <NavMenu setCloseNavbar={() => setIsOpen(false)} />
      </div>

      <button
        className="md:hidden text-slate-900 transition-transform active:scale-90"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <div
        className={`absolute top-[110%] left-0 w-full bg-white border border-slate-100 rounded-2xl md:hidden transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="py-8">
          <NavMenu setCloseNavbar={() => setIsOpen(false)} mobile />
        </div>
      </div>
    </nav>
  );
};
