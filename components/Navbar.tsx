import { NavbarLinks } from "@/constants";
import Link from "next/link";
import { ModeToggle } from "./ThemeToggler";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";

const font = Montserrat({
  subsets: ["latin"],
  weight: ["500"],
});

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 py-6 border-b-2  ">
      <Link href={"/"} className="flex items-center space-x-3">
        <Image
          src={"/logo.png"}
          width={500}
          height={500}
          className="h-10 w-10"
          alt="logo-fh"
        />
        <h1 className="font-bold text-2xl tracking-widest">Fitness Hub</h1>
      </Link>
      <div className="flex space-x-6  ">
        {NavbarLinks.map((item) => (
          <Link
            key={item.id}
            className={cn(
              "transition-all delay-75 text-[17px] dark:text-gray-400 dark:hover:text-white font-medium",
              font.className
            )}
            href={item.href}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <ModeToggle />
    </div>
  );
};
