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
      <div className="flex flex-col lg:grid grid-cols-4 grid-rows-2 gap-6 p-10 w-full h-full lg:h-[40rem]">
        <ClassesCard
          item={0}
          className="Cycling"
          timings="Friday : 9:00 AM - 11:00 AM"
        />
        <ClassesCard
          item={1}
          className="Cycling"
          timings="Friday : 9:00 AM - 11:00 AM"
        />
        <ClassesCard
          item={2}
          className="Cycling"
          timings="Friday : 9:00 AM - 11:00 AM"
        />
        <ClassesCard
          item={3}
          className="Cycling"
          timings="Friday : 9:00 AM - 11:00 AM"
        />
        <ClassesCard
          item={4}
          className="Cycling"
          timings="Friday : 9:00 AM - 11:00 AM"
        />
        <ClassesCard
          item={5}
          className="Cycling"
          timings="Friday : 9:00 AM - 11:00 AM"
        />
      </div>
    </main>
  );
}
