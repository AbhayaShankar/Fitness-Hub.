import AboutBanner2 from "@/components/AboutBanner2";
import BMIComponent from "@/components/BMI";
import ClassGrid from "@/components/ClassGrid";
import GalleryGrid from "@/components/GalleryGrid";
import { GymCards } from "@/components/GymCards";
import LandingHero from "@/components/LandingHero";
import StagesGrid from "@/components/StagesGrid";
import Trainers from "@/components/Trainers";

export default function Home() {
  return (
    <main className="flex  space-y-10 lg:pb-20 flex-col bg-[url(/assets/bg/bg-2.jpg)] dark:bg-[url(/assets/bg/dark-bg2.jpg)] pb-8">
      <LandingHero />
      <StagesGrid />
      <AboutBanner2 />
      <Trainers />
      <ClassGrid />
      <GymCards />
      <GalleryGrid />
      <BMIComponent />
    </main>
  );
}
