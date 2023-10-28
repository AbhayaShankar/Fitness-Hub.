import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import Image from "next/image";

const font = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const Routelayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={cn(
        "min-h-full relative bg-[url(/assets/bg/bg-2.jpg)] dark:bg-none ",
        font.className
      )}
    >
      <Image
        alt="banner-img"
        src={"/assets/banner1.jpg"}
        className="h-[320px] object-cover relative lg:object-cover w-full p-0"
        height={1600}
        width={1600}
      />
      <main>{children}</main>
    </div>
  );
};

export default Routelayout;
