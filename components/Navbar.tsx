"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { navLinks } from "@/constants/index";
import GradientButton from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (path: string) => {
    setIsOpen(false); // Close the menu
    router.push(path); // Navigate to the path
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-28 items-center justify-between">
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
                    className="rounded-md px-3 py-2 text-lg font-medium text-gray-800 hover:text-blue-600"
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
              className="inline-flex items-center justify-center rounded-md bg-gray-200 p-2 text-gray-600 hover:bg-gray-600 hover:text-white focus:outline-none"
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
        <div className="blue-gradient top-30 absolute right-0 z-10 mx-4 my-2 flex min-w-[140px] rounded-xl p-6">
          <ul className="flex list-none flex-col items-start justify-end gap-4">
            {navLinks.map((link, i) => (
              <li key={i}>
                <button
                  className="font-montserrat text-md leading-normal text-black hover:text-blue-600"
                  onClick={() => handleLinkClick(`/${link}`)}
                >
                  {link.charAt(0).toUpperCase() +
                    link.slice(1).replace("-", " ")}
                </button>
              </li>
            ))}
            <li className="mt-3">
              <GradientButton text="Register Now" />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
