import { NavbarLinks } from "@/constants";
import Link from "next/link";
import { ModeToggle } from "./ThemeToggler";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 py-6 ">
      <h1>Fitness Hub</h1>
      <div className="flex space-x-6 ">
        {NavbarLinks.map((item) => (
          <Link
            key={item.id}
            className="hover:text-red-500 transition-all delay-75"
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
