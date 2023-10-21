import { DescriptionComp, HeadingComp } from "@/lib/Common";
import ClassesCard from "./ClassesCard";
import TitleBg from "./TitleBg";
import GalleryCard from "./GalleryCard";

const GalleryGrid = () => {
  return (
    <div className="flex flex-col space-y-4 pt-16 items-center">
      <TitleBg title={"Gallery"} />
      <HeadingComp title="Our WorkPlace" advStyle="capitalize text-[32px]" />
      <DescriptionComp
        desc="Showcasing our dedicated, loyal and competitive customers that make you and people around them keep motivated. Stay Fit!"
        advStyle="max-w-[750px]"
      />

      <div className="flex flex-col lg:grid grid-cols-4 grid-rows-3 gap-5 p-6 lg:px-28 pb-20 pt-8 w-full h-full lg:h-[42rem]">
        <GalleryCard item={0} src="/assets/gallery2.jpg" />
        <GalleryCard item={1} src="/assets/gallery3_1.jpg" />
        <GalleryCard item={2} src="/assets/gallery4.jpg" />
        <GalleryCard item={3} src="/assets/gallery5.jpg" />
        <GalleryCard item={4} src="/assets/gallery1.jpg" />
      </div>
    </div>
  );
};

export default GalleryGrid;
