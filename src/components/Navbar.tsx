"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/radio-stations", label: "Radio Stations" },
  { href: "/daily-reminders", label: "Daily Word" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md w-full">
      <div className="flex justify-between items-center w-full px-gutter max-w-7xl mx-auto h-20">
        <Link
          href="/"
          className="font-headline-md text-primary font-bold"
        >
          NoRadio
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-lg items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-label-md transition-colors duration-200 ${
                  isActive
                    ? "text-primary font-bold border-b-2 border-primary pb-1"
                    : "text-on-surface-variant font-medium hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Listen Live Button */}
        <Link
          className="hidden md:block bg-primary text-on-primary font-label-md px-md py-sm rounded-full hover:scale-95 duration-150 transition-transform"
          href="/#stations"
        >
          Listen Live
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-2xl">
            {mobileOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="md:hidden bg-surface-container-low border-t border-outline-variant/30 px-gutter py-md">
          <nav className="flex flex-col space-y-md">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`font-label-md py-sm ${
                    isActive
                      ? "text-primary font-bold"
                      : "text-on-surface-variant"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              className="bg-primary text-on-primary font-label-md px-md py-sm rounded-full w-fit"
              href="/#stations"
              onClick={() => setMobileOpen(false)}
            >
              Listen Live
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
