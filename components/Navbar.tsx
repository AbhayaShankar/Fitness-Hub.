import { NavbarLinks } from "@/constants";
import Link from "next/link";
import { ModeToggle } from "./ThemeToggler";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";

const font = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 py-6 border-b-[2px] sticky left-0 top-0 z-50 bg-[#fff] dark:bg-[#0c0a09]   ">
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
      <div className="flex space-x-6  ">
        {NavbarLinks.map((item) => (
          <Link
            key={item.id}
            className={cn(
              "font-semibold transition-all delay-75 text-[17px] dark:text-muted-foreground dark:hover:text-white  text-gray-500 hover:text-gray-900",
              font.className
            )}
            href={item.href}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <ModeToggle />
    </nav>
  );
};
