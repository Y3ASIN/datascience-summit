"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { navLinks } from "@/constants/index";
import GradientButton from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  className="h-16 w-auto"
                  src="/logo.svg"
                  alt="Logo"
                  width={32}
                  height={50}
                />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((link, index) => (
                  <Link
                    href={`/${link}`}
                    key={index}
                    passHref
                    className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-lg font-medium"
                  >
                    {link.charAt(0).toUpperCase() +
                      link.slice(1).replace("-", " ")}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <GradientButton text="Register Now" />
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-white hover:bg-gray-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link, index) => (
              <Link key={index} href={`/${link}`} passHref>
                <div className="text-gray-800 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                  {link.charAt(0).toUpperCase() +
                    link.slice(1).replace("-", " ")}
                </div>
              </Link>
            ))}
            <GradientButton text="Register Now" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
