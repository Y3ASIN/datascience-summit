"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { navLinks } from "@/constants/index";
import GradientButton from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link: string) => {
    setIsOpen(false);
    if (pathname === "/") {
      const section = document.getElementById(link);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      router.push(`/#{link}`);
    }
  };

  const handleScroll = () => {
    const heroHeight = document.getElementById("hero")?.offsetHeight;
    setShowScrollButton(window.scrollY > heroHeight!);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white py-2 shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between">
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
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => handleLinkClick(link)}
                    className="rounded-md border-b-2 border-transparent px-3 py-2 text-lg font-medium text-gray-800 hover:border-blue-600 hover:text-blue-600"
                  >
                    {link.charAt(0).toUpperCase() +
                      link.slice(1).replace("-", " ")}
                  </button>
                ))}

                <Link
                  href="/about"
                  className="rounded-md border-b-2 border-transparent px-3 py-2 text-lg font-medium text-gray-800 hover:border-blue-600 hover:text-blue-600"
                >
                  Event Details
                </Link>
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
        <div className="blue-gradient absolute right-0 top-20 z-50 mx-4 my-2 flex min-w-[140px] rounded-xl p-6">
          <ul className="flex list-none flex-col items-start justify-end gap-4">
            {navLinks.map((link, i) => (
              <li key={i}>
                <button
                  className="text-md font-poppins leading-normal text-white hover:text-blue-600"
                  onClick={() => handleLinkClick(link)}
                >
                  {link.charAt(0).toUpperCase() +
                    link.slice(1).replace("-", " ")}
                </button>
              </li>
            ))}
            <li>
              <Link
                href="/about"
                className="text-md font-poppins leading-normal text-white hover:text-blue-600"
              >
                Event Details
              </Link>
            </li>
            <li className="mt-3">
              <GradientButton text="Register Now" />
            </li>
          </ul>
        </div>
      )}

      {/* Back to Top Button */}

      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-5 rounded-full bg-blue-400 p-3 font-bold text-white shadow-md transition-all duration-150 hover:scale-105 hover:bg-blue-600 focus:outline-none sm:right-8"
        >
          ↑
        </button>
      )}
    </nav>
  );
};

export default Navbar;
