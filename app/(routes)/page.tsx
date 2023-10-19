import ClassesCard from "@/components/ClassesCard";
import TitleBg from "@/components/TitleBg";
import Trainers from "@/components/Trainers";
import { Button } from "@/components/ui/button";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex space-x-5 space-y-10 p-5 flex-col">
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
      <div className="grid grid-cols-4 gap-5 mx-auto w-full">
        <ClassesCard item={0} />
        <ClassesCard item={1} />
        <ClassesCard item={2} />
        <ClassesCard item={3} />
        <ClassesCard item={4} />
        <ClassesCard item={5} />
      </div>
    </main>
  );
}
