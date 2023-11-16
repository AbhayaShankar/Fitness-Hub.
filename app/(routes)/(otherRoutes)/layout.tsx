import { cn } from "@/lib/utils";
import Image from "next/image";

const Routelayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={cn(
        "min-h-full relative bg-[url(/assets/bg/bg-2.jpg)] dark:bg-[url(/assets/bg/dark-bg2.jpg)]"
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
