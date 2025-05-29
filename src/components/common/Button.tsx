import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, ...buttonProps }) => {
  return (
    <button
      {...buttonProps}
      className={`bg-dark-blue px-4 py-2 rounded-xl text-white font-semibold cursor-pointer ${buttonProps.className}`}
    >
      {children}
    </button>
  );
};
