import ClassGrid from "@/components/ClassGrid";
import ClassesCard from "@/components/ClassesCard";
import TitleBg from "@/components/TitleBg";
import Trainers from "@/components/Trainers";
import { Button } from "@/components/ui/button";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex  space-y-10 p-5 flex-col">
      <Link href="/sign-in">
        <Button variant={"custom1"} size={"lg"}>
          Login
        </Button>
      </Link>
      <Link href="/sign-up">
        <Button variant={"custom2"} size={"lg"}>
          Register
        </Button>
      </Link>
      {/* <TitleBg title={"Pricing"} isDark={true} />
      <TitleBg title={"Courses"} isDark={false} /> */}
      <Trainers />
      <ClassGrid />
    </main>
  );
}
