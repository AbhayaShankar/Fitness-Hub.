import { NavbarLinks } from "@/constants";
import Link from "next/link";
import { ModeToggle } from "./ThemeToggler";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Montserrat({
  subsets: ["latin"],
  weight: ["500"],
});

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 py-6 border-b-2  ">
      <h1 className="font-bold text-2xl tracking-widest">Fitness Hub</h1>
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
