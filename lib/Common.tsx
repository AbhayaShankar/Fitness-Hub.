import { Montserrat } from "next/font/google";
import { cn } from "./utils";

const font = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

interface HeadingCompProps {
  title: string;
}

interface DescriptionCompProps {
  desc: string;
  advStyle?: string;
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

export const DescriptionComp = ({ desc, advStyle }: DescriptionCompProps) => {
  return (
    <p
      className={cn(
        "text-center dark:text-muted-foreground pb-5 max-w-[600px]",
        font.className,
        advStyle
      )}
    >
      {desc}
    </p>
  );
};
