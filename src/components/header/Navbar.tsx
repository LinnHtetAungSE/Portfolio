"use client";

import { useState } from "react";
import { NavBrand } from "./NavBrand";
import { NavMenu } from "./NavMenus";
import { Menu, X } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="xl:max-w-6xl fixed top-0 left-0 xl:left-1/2 xl:-translate-x-1/2 w-full bg-pale-blue px-5 py-3 flex justify-between items-center z-50"
      aria-label="Main Navigation"
    >
      <NavBrand />

      <div className="hidden md:flex items-center gap-8">
        <NavMenu setCloseNavbar={() => setIsOpen(false)} />
      </div>

      <button
        className="md:hidden text-dark-blue focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div
        className={`absolute top-full left-0 w-full bg-pale-blue shadow-lg md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center !text-sm py-4 space-y-4">
          <NavMenu setCloseNavbar={() => setIsOpen(false)} mobile />
        </div>
      </div>
    </nav>
  );
};
