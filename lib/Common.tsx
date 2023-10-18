import { Montserrat } from "next/font/google";
import { cn } from "./utils";

const font = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

interface HeadingCompProps {
  title: string;
}

interface DescriptionCompProps {
  desc: string;
}

export const HeadingComp = ({ title }: HeadingCompProps) => {
  return (
    <h1
      className={cn(
        "text-[32px] font-bold tracking-[0.2px] capitalize dark:text-white ",
        font.className
      )}
    >
      {title}
    </h1>
  );
};

export const DescriptionComp = ({ desc }: DescriptionCompProps) => {
  return (
    <p
      className={cn(
        "max-w-[40%] text-center dark:text-muted-foreground pb-5",
        font.className
      )}
    >
      {desc}
    </p>
  );
};
