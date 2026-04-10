"use client";

import { navMenus } from "@/config/navMenus.config";

interface NavMenuProps {
  mobile?: boolean;
  setCloseNavbar: () => void;
}

export const NavMenu: React.FC<NavMenuProps> = ({
  setCloseNavbar,
  mobile = false,
}) => {
  return (
    <ul
      className={`${
        mobile
          ? "flex flex-col items-center space-y-6"
          : "flex items-center space-x-10"
      }`}
    >
      {navMenus.map((menu) => (
        <li key={menu.href}>
          <a
            href={menu.href}
            onClick={(e) => {
              setCloseNavbar();
              const targetElement = document.querySelector(menu.href);
              if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400 transition-colors duration-300 hover:text-slate-900"
          >
            {menu.text}
          </a>
        </li>
      ))}
    </ul>
  );
};
