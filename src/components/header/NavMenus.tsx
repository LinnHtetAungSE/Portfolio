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
          ? "flex flex-col items-center space-y-4"
          : "flex items-center space-x-6"
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
            className="relative px-1 py-2 text-dark-blue font-semibold transition-colors duration-200 hover:text-sky-900"
          >
            {menu.text}
          </a>
        </li>
      ))}
    </ul>
  );
};
