import ClassGrid from "@/components/ClassGrid";
import GalleryGrid from "@/components/GalleryGrid";
import { GymCards } from "@/components/GymCards";
import Trainers from "@/components/Trainers";
import { Button } from "@/components/ui/button";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex  space-y-10 mt-5 pb-20 flex-col">
      <Link href="/sign-in" className="w-fit">
        <Button variant={"custom1"} size={"lg"}>
          Login
        </Button>
      </Link>
      <Link href="/sign-up" className="w-fit">
        <Button variant={"custom2"} size={"lg"}>
          Register
        </Button>
      </Link>
      <Trainers />
      <ClassGrid />
      <GymCards />
      <GalleryGrid />
    </main>
  );
}
