"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/assets/images/logo.png";
import { specialPath } from "@/constants";
import { cn } from "@/utils";

import { Button } from "./ui/button";
import { CircleHelp, ShoppingCart } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathName = usePathname();
  const isLocationSpecial = specialPath.includes(pathName);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigateToSection = (id: string) => {
    window.location.href = `/#${id}`;
    setIsOpen(false);
  };

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    });

    // Observe each section
    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const isActive = (id: string) => {
    if (pathName === "/help") {
      return id === "help";
    } else if (pathName === "/cart") {
      return id === "cart";
    } else {
      return id === activeSection;
    }
  };

  return (
    <>
      {!isLocationSpecial && (
        <nav className="sticky top-0 z-40 w-full bg-white py-3 backdrop-blur-md">
          <div className="px-4 md:px-5 lg:px-4 xl:px-0 container mx-auto flex flex-row items-center justify-between">
            <div>
              <Link href="/" onClick={isOpen ? toggleMenu : undefined}>
                <Image
                  src={logo}
                  alt="AlphaElite Logo"
                  className="h-16 w-fit"
                  priority
                />
              </Link>
            </div>
            <div className="hidden lg:flex">
              <Button
                size="sm"
                className={cn(
                  "px-4 relative",
                  isActive("workout-plans")
                    ? "text-green"
                    : "text-gray hover:text-green"
                )}
                onClick={() => navigateToSection("workout-plans")}>
                Workout Plans
                <span
                  className="absolute left-0 right-0 bottom-0 h-0.5 bg-green"
                  style={{
                    width: isActive("workout-plans") ? "100%" : "0",
                    transition: "width 0.3s",
                  }}
                />
              </Button>
              <Button
                size="sm"
                className={cn(
                  "px-4 relative",
                  isActive("faqs") ? "text-green" : "text-gray hover:text-green"
                )}
                onClick={() => navigateToSection("faqs")}>
                FAQs
                <span
                  className="absolute left-0 right-0 bottom-0 h-0.5 bg-green"
                  style={{
                    width: isActive("faqs") ? "100%" : "0",
                    transition: "width 0.3s",
                  }}
                />
              </Button>
              <Button
                size="sm"
                className={cn(
                  "px-4 relative",
                  isActive("contact-us")
                    ? "text-green"
                    : "text-gray hover:text-green"
                )}
                onClick={() => navigateToSection("contact-us")}>
                Contact Us
                <span
                  className="absolute left-0 right-0 bottom-0 h-0.5 bg-green"
                  style={{
                    width: isActive("contact-us") ? "100%" : "0",
                    transition: "width 0.3s",
                  }}
                />
              </Button>
            </div>
            <div className="flex space-x-5">
              <Link href="/help">
                <CircleHelp
                  className={cn(
                    isActive("help")
                      ? "text-green"
                      : "text-gray hover:text-green"
                  )}
                  size="21"
                />
              </Link>
              <Link href="/cart">
                <ShoppingCart
                  className={cn(
                    isActive("cart")
                      ? "text-green"
                      : "text-gray hover:text-green"
                  )}
                  size="21"
                />
              </Link>
            </div>

            <button
              id="menu-button"
              className={`${
                isOpen ? "open" : ""
              } relative block size-6 self-center transition-all duration-300 focus:outline-none lg:hidden`}
              onClick={toggleMenu}>
              <span className="hamburger-top absolute left-0 top-0 h-[2px] w-6 rotate-0 bg-gray transition-all duration-300"></span>
              <span className="hamburger-middle absolute left-0 top-0 h-[2px] w-6 translate-y-2 rotate-0 bg-gray transition-all duration-300"></span>
              <span className="hamburger-bottom absolute left-0 top-0 h-[2px] w-6 translate-y-4 rotate-0 bg-gray transition-all duration-300"></span>
            </button>
          </div>
          <div id="mobile-menu">
            <div
              id="menu"
              className={`${
                isOpen ? "flex" : "hidden"
              } absolute left-6 right-6 mt-4 flex-col items-center gap-6 self-end rounded-xl bg-white py-8 font-semibold drop-shadow-md sm:w-auto sm:self-center`}>
              <Button
                variant="link"
                onClick={() => navigateToSection("workout-plans")}>
                Workout Plans
              </Button>
              <Button variant="link" onClick={() => navigateToSection("faqs")}>
                FAQs
              </Button>
              <Button
                variant="link"
                onClick={() => navigateToSection("contact-us")}>
                Contact Us
              </Button>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}
