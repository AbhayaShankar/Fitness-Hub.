import { VideoReferenceType } from "@/app/(routes)/(otherRoutes)/exercise/[slug]/page";
import { PlayCircle, PlaySquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const VideoReference = ({
  VideoReferenceList,
}: {
  VideoReferenceList: VideoReferenceType[];
}) => {
  // For Filtering out videos of sepcific categories
  const filteredVideosList = VideoReferenceList.filter(
    (videos) => videos.category === "chest"
  );

  return (
    <div className="grid place-items-center grid-cols-3 gap-5">
      {VideoReferenceList.map((video: VideoReferenceType) => (
        <Link
          href={video.link}
          target="_blank"
          key={video.title}
          className="rounded-xl  cursor-pointer relative"
        >
          <Image
            src={`/assets/video-references/${video.imgsrc}`}
            alt={video.title}
            height={400}
            width={600}
            className="overflow-hidden w-[520px] h-[276px] object-cover rounded-xl"
          />
          {/* <div className="absolute top-0 left-0 w-full h-full rounded-xl bg-black/20"></div> */}
          <PlayCircle
            className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-24 h-20 hover:stroke-[#b0b0b0] transition-all linear z-10"
            color="#a1a1a1"
            strokeWidth={2}
          />
        </Link>
      ))}
    </div>
  );
};

export default VideoReference;
