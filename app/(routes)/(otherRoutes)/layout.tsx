import Image from "next/image";

const Routelayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-full relative">
      <Image
        alt="banner-img"
        src={"/assets/banner1.jpg"}
        className="h-[320px] object-cover w-full p-0"
        height={1600}
        width={1600}
      />
      <main>{children}</main>
    </div>
  );
};

export default Routelayout;
