import React from "react";

interface VideoReferenceProps {}

const VideoReference: React.FC<VideoReferenceProps> = ({
  VideoReferenceList,
}: any) => {
  return (
    <div>
      {VideoReferenceList.videos.map((video) => (
        <div key={video.title}>{video.title}</div>
      ))}
    </div>
  );
};

export default VideoReference;
