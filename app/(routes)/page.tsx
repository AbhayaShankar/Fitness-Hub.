import TitleBg from "@/components/TitleBg";
import TrainerCard from "@/components/TrainerCard";
import { Button } from "@/components/ui/button";
import { TrainersList } from "@/constants";

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
      <TitleBg title={"Pricing"} isDark={true} />
      <TitleBg title={"Courses"} isDark={false} />
      <TitleBg title={"Gym Trainers"} isDark={true} />
      <div className="flex items-center justify-center flex-wrap gap-10 ">
        {TrainersList.map((item) => (
          <TrainerCard
            key={item.id}
            name={item.name}
            type={item.type}
            src={item.src}
          />
        ))}
      </div>
    </main>
  );
}
