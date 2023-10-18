import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex space-x-5 p-5">
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
    </main>
  );
}
