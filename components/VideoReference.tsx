import { VideoReferenceType } from "@/app/(routes)/(otherRoutes)/exercise/[slug]/page";
import { PlayCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type VideoType = {
  VideoReferenceList: VideoReferenceType[];
  muscleCategory: string;
};

const VideoReference = ({ VideoReferenceList, muscleCategory }: VideoType) => {
  // For Filtering out videos of sepcific categories

  const relatedVideos = VideoReferenceList.filter((videos) => {
    return videos.category === muscleCategory;
  });

  console.log("Related", relatedVideos);

  const filteredVideosList = relatedVideos.splice(0, 3);

  console.log("Filtered", filteredVideosList);

  return (
    <div className="grid place-items-center grid-cols-3 gap-5">
      {filteredVideosList.map((video: VideoReferenceType, index) => (
        <Link
          href={video.link}
          target="_blank"
          key={index}
          className="rounded-xl  cursor-pointer relative"
        >
          <Image
            src={`/assets/video-references/${video.imgsrc}`}
            alt={video.title}
            height={400}
            width={600}
            className="overflow-hidden w-[520px] h-[276px] object-cover rounded-xl"
          />
          <PlayCircle
            className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-24 h-20 hover:stroke-[#b0b0b0] transition-all linear z-10"
            color="#a1a1a1"
            strokeWidth={2}
          />
          <p className="uppercase mt-2 font-bold tracking-wide">
            {video.title.length > 40
              ? video.title.substring(0, 38) + "..."
              : video.title}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default VideoReference;
