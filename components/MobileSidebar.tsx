"use client";

import React, { useState } from "react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { NavbarLinks } from "@/constants";
import { ModeToggle } from "./ThemeToggler";

const font = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const MobileSidebar = () => {
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger asChild>
        <Button variant={"ghost"} size={"icon"} className="lg:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="p-0">
        {/* Navbar.tsx component --> resolving the SheetClose, Had to modify this way */}
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
              <SheetClose asChild key={item.id}>
                <Link
                  key={item.id}
                  className={cn(
                    "font-semibold transition-all delay-75 text-[17px] dark:text-muted-foreground dark:hover:text-white  text-gray-500 hover:text-gray-900 ",
                    font.className
                  )}
                  href={item.href}
                >
                  {item.label}
                </Link>
              </SheetClose>
            ))}
          </div>
          <div className="block lg:hidden absolute right-5">
            <ModeToggle />
          </div>
          <div className="hidden lg:block">
            <ModeToggle />
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
