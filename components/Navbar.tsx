"use client";

import { NavbarLinks } from "@/constants";
import Link from "next/link";
import { ModeToggle } from "./ThemeToggler";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const font = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const Navbar = (props: any) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <nav className="flex flex-col lg:flex-row items-start px-4 lg:px-6 lg:items-center justify-between py-6 border-b-[2px] sticky top-0 left-0 z-50 bg-[#fff] dark:bg-[#0c0a09]">
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
      <div className="flex mt-5 lg:mt-0 mb-5 lg:mb-0 lg:gap-x-6 gap-y-6 flex-col lg:flex-row items-start ">
        {NavbarLinks.map((item) => (
          <Link
            key={item.id}
            className={cn(
              "font-semibold transition-all delay-75 text-[17px] dark:text-muted-foreground dark:hover:text-white  text-gray-500 hover:text-gray-900 ",
              font.className
            )}
            href={item.href}
            onClick={() => props.setOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className="block lg:hidden absolute right-5">
        <ModeToggle />
      </div>
      <div className="hidden lg:block">
        <ModeToggle />
      </div>
    </nav>
  );
};
