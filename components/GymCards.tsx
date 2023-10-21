import { GymCardList } from "@/constants";
import Image from "next/image";

interface GymCardProps {
  src: string;
}

export const GymCards = () => {
  return (
    <div className="w-full flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-16 bg-[url('/assets/gym-card-bg.avif')] py-16 md:py-24 lg:py-32 border-muted-foreground bg-no-repeat object-cover bg-cover object-center">
      {GymCardList.map((card) => (
        <Image
          width={400}
          height={400}
          className="w-[70px] sm:w-20 md:w-24 lg:w-[120px] h-auto text-red-600 opacity-40 hover:opacity-100 transition-all duration-100 ease-in"
          key={card.id}
          alt="gym-card"
          src={card.src}
        />
      ))}
    </div>
  );
};