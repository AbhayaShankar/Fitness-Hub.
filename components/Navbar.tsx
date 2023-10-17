import { UserButton, useAuth } from "@clerk/nextjs";
import Link from "next/link";

export const Navbar = () => {
  //   const { isSignedIn } = useAuth();

  return (
    <div className="flex items-center justify-between">
      <h1>Fitness Hub</h1>
      <div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/classes">Classes</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/courses">Courses</Link>
        <Link href="/contact">Contact</Link>
      </div>
      {/* <UserButton afterSignOutUrl="/" /> */}
    </div>
  );
};
