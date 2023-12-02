import React from "react";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Ruler,
  Twitter,
  Weight,
  Youtube,
} from "lucide-react";

export interface GymRatsProps {
  id: number;
  name: string;
  profession: string;
  location: string;
  height: number;
  weight: number;
  imgUrl: string;
  bench: number;
  squats: number;
  deadlift: number;
  instaLink: string;
  facebookLink: string;
  youtubeLink: string;
  twitterLink: string;
  achievements: string[];
}

const GymRatCard = ({
  name,
  profession,
  location,
  height,
  weight,
  imgUrl,
  bench,
  squats,
  deadlift,
  instaLink,
  youtubeLink,
  facebookLink,
  twitterLink,
  achievements,
}: GymRatsProps) => {
  return (
    <div className="box-item">
      <div className="flip-box">
        <div
          className={`flip-box-front rounded-md border-[1px] border-muted-foreground dark:border-muted text-center `}
          style={{
            backgroundImage: `url('/assets/${imgUrl}')`,
          }}
        >
          {/* Before Flip */}
          <div className="inner text-white relative">
            <div className="h-[260px] w-full bg-transparent absolute -top-[150px] left-0 flex flex-col items-center justify-end"></div>
            <div className="h-[150px] w-full absolute bg-black/40 dark:bg-[#1c1c1cb4]  backdrop-blur-2xl bg-opacity-80 text-[#fcfcfc]  left-0 -bottom-[150px] rounded-md z-20 backdrop-filter">
              <div className="p-2 flex items-center justify-evenly mt-2">
                <div className="text-2xl leading-5 uppercase font-semibold  tracking-wider">
                  {name}
                </div>
              </div>
              <div className="capitalize text-sm font-medium tracking-widest">
                ( {profession} )
              </div>
              <div className="tracking-wide text-sm mt-[2px]">{location}</div>
              <div className="p-2 px-8 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Ruler
                    color="#ce032c"
                    strokeWidth={1.25}
                    className="w-5 h-5 "
                  />
                  <p className="!text-sm"> {height} cms</p>
                </div>
                <div className="flex items-center gap-2">
                  <Weight
                    color="#ce032c"
                    strokeWidth={1.25}
                    className="w-5 h-5 "
                  />
                  <p className="!text-sm"> {weight} kgs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* After Flip */}
        <div
          className={`flip-box-back rounded-md border-[1px] border-muted-foreground dark:border-muted text-center `}
          style={{
            backgroundImage: `url('/assets/${imgUrl}')`,
          }}
        >
          <div className="inner-back text-white text-left">
            <ul className="text-lg pl-2 space-y-2">
              <li className="list-image-[url('/assets/custom-list.png')] list-outside">
                2<sup>nd</sup> position at xyz Powerlifting competition.
              </li>
              <li className="list-image-[url('/assets/custom-list.png')] list-outside">
                Max Bench - {bench} kgs
              </li>
              <li className="list-image-[url('/assets/custom-list.png')] list-outside">
                Max Deadlift - {deadlift} kgs
              </li>
              <li className="list-image-[url('/assets/custom-list.png')] list-outside">
                Max Squats - {squats} kgs
              </li>
            </ul>
            <div>
              <h3 className="text-center capitalize text-lg mt-8 mb-4">
                Follow for More ...
              </h3>
              <div className="flex items-center gap-5 justify-center">
                <Link className="group" href={instaLink} target="_blank">
                  <Instagram
                    color="#fcfcfc"
                    strokeWidth={1.25}
                    className="w-9 h-9 group-hover:stroke-[#c235a7] transition-all ease-in duration-150 p-[6px] border-[1px] border-[#fcfcfc] border-[#] rounded-full group-hover:border-[#c235a7] group-hover:bg-[#c235a7]/10"
                  />
                </Link>
                <Link className="group" href={facebookLink} target="_blank">
                  <Facebook
                    color="#fcfcfc"
                    strokeWidth={1.25}
                    className="w-9 h-9 group-hover:stroke-[#0862f6] transition-all ease-in duration-150 p-[6px] border-[1px] border-[#fcfcfc] border-[#] rounded-full group-hover:border-[#0862f6] group-hover:bg-[#0862f6]/10"
                  />
                </Link>
                <Link className="group" href={youtubeLink} target="_blank">
                  <Youtube
                    color="#fcfcfc"
                    strokeWidth={1.25}
                    className="w-9 h-9 group-hover:stroke-[#f70000] transition-all ease-in duration-150 p-[6px] border-[1px] border-[#fcfcfc] border-[#] rounded-full group-hover:border-[#f70000] group-hover:bg-[#f70000]/10"
                  />
                </Link>
                <Link className="group" href={twitterLink} target="_blank">
                  <Twitter
                    color="#fcfcfc"
                    strokeWidth={1.25}
                    className="w-9 h-9 group-hover:stroke-[#1c9cea] transition-all ease-in duration-150 p-[6px] border-[1px] border-[#fcfcfc] border-[#] rounded-full group-hover:border-[#1c9cea] group-hover:bg-[#1c9cea]/10"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GymRatCard;
