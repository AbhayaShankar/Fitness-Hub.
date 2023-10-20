import { Montserrat } from "next/font/google";
import { cn } from "./utils";

const font = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

interface HeadingCompProps {
  title: string;
  advStyle?: string;
}

interface DescriptionCompProps {
  desc: string;
  advStyle?: string;
}

export const HeadingComp = ({ title, advStyle }: HeadingCompProps) => {
  return (
    <h1
      className={cn(
        "font-bold tracking-[0.2px] capitalize dark:text-white text-3xl ",
        font.className,
        advStyle
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
