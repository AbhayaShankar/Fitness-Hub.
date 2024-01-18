import { VideoReferenceType } from "@/app/(routes)/(otherRoutes)/exercise/[slug]/page";
import React from "react";

const VideoReference = ({
  VideoReferenceList,
}: {
  VideoReferenceList: VideoReferenceType[];
}) => {
  return (
    <div>
      {VideoReferenceList.map((video: VideoReferenceType) => (
        <div key={video.title}>{video.title}</div>
      ))}
    </div>
  );
};

export default VideoReference;
