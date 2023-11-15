"use client";

import Link from "next/link";
import { ModeToggle } from "./ThemeToggler";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { NAVBAR_LINKS } from "@/constants";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import SubscribeSheet from "./SubscribeSheet";

const font = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const Navbar = (props: any) => {
  const pathname = usePathname();
  const trimmedPath = pathname.split("/")[1];

  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // TODO : Scroll to hide feature.
  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      console.log("scrolled");
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <nav
      className={`flex flex-col lg:flex-row items-start px-4 lg:px-6 lg:items-center justify-between py-6 border-b-[2px] sticky top-0 left-0 z-30 bg-[#fff] dark:bg-[#0c0a09] ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <Link href={"/"} className="flex items-center space-x-3">
        <Image
          src={"/logo.png"}
          width={500}
          height={500}
          className="h-10 w-10"
          alt="logo-fh"
        />
        <div>
          <h1
            className={cn(
              "font-extrabold text-2xl tracking-normal",
              "font-bold",
              font.className
            )}
          >
            <span className="dark:text-[#fafe19]">Fitness </span>
            Hub
          </h1>
          <p className="text-[9.5px] uppercase tracking-wide text-muted-foreground">
            Ultimate Fitness Center
          </p>
        </div>
      </Link>
      <div
        className={`flex mt-5 lg:mt-0 mb-5 lg:mb-0 lg:gap-x-2 gap-y-6 flex-col lg:flex-row items-start `}
      >
        {NAVBAR_LINKS.map((item) => (
          <div key={item.id}>
            <Link
              key={item.id}
              className={cn(
                `font-semibold transition-all delay-75 duration-150 text-[15.5px] py-[6px] px-4 dark:text-muted-foreground dark:hover:text-white  text-gray-400 hover:text-gray-900 active:text-gray-900 hover:bg-black/[0.075] dark:hover:bg-white/10 rounded-xl  hidden lg:block ${
                  trimmedPath === item.label.toLowerCase() ||
                  (item.label.toLowerCase() === "home" && trimmedPath === "")
                    ? "text-gray-900 dark:text-white bg-black/[0.075] dark:bg-white/10"
                    : ""
                }`,
                font.className
              )}
              href={item.href}
            >
              {item.label}
            </Link>
            <Link
              key={item.id}
              className={cn(
                "font-semibold transition-all delay-75 text-[17px] dark:text-muted-foreground dark:hover:text-white  text-gray-500 hover:text-gray-900 lg:hidden",
                font.className
              )}
              href={item.href}
              onClick={() => props.setOpen(false)}
            >
              {item.label}
            </Link>
          </div>
        ))}
      </div>
      <div className="block lg:hidden absolute right-5">
        <ModeToggle />
      </div>
      <div className="hidden lg:flex gap-5 items-center">
        <SubscribeSheet />
        <ModeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  );
};
