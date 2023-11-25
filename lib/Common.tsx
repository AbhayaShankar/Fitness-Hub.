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

interface UnderlineHeadingProps {
  title: string;
}

export const HeadingComp = ({ title, advStyle }: HeadingCompProps) => {
  return (
    <h1
      className={cn(
        `font-bold tracking-[0.2px] text-left capitalize dark:text-white text-xl lg:text-3xl ${advStyle}`,
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
        `text-center dark:text-muted-foreground pb-5 max-w-[600px] ${advStyle}`,
        font.className
      )}
      dangerouslySetInnerHTML={{ __html: desc }}
    ></p>
  );
};

export const UnderlinedHeading = ({ title }: UnderlineHeadingProps) => {
  return (
    <div className="relative">
      <HeadingComp title={title} advStyle="capitalize text-2xl mb-3" />
      <span className="top-[33px] absolute w-[4rem] h-[4px] bg-[#ce032c]"></span>
    </div>
  );
};
