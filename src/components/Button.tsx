import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant = "primary",
  className = "",
}) => {
  const baseStyles =
    "px-6 py-3 rounded-full font-medium transition-all duration-200 inline-block text-center";
  const variants = {
    primary: "bg-[#008060] text-white hover:bg-[#005e46] shadow-md hover:shadow-lg",
    secondary: "bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 shadow-sm",
    outline: "bg-transparent text-gray-700 hover:text-gray-900",
  };

  return (
    <Link href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
};
