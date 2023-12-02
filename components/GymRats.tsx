"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const GymRats = () => {
  return (
    <div className="flex items-start flex-wrap justify-center gap-5 gap-y-14 py-9 px-20 w-full flex-col lg:flex-row m-auto ">
      <div className="box-item">
        <div className="flip-box">
          <div className="flip-box-front rounded-md border-[1px] border-muted-foreground dark:border-muted text-center bg-[url('/assets/Abhaya.jpg')]">
            {/* Before Flip */}
            <div className="inner text-white relative">
              <div className="h-[260px] w-full bg-transparent absolute -top-[150px] left-0 flex flex-col items-center justify-end"></div>
              <div className="h-[150px] w-full absolute bg-black/50 dark:bg-[#090909b4]  backdrop-blur-2xl bg-opacity-80 text-[#fcfcfc]  left-0 -bottom-[150px] rounded-md z-20 backdrop-filter">
                <div className="p-2 flex items-center justify-evenly">
                  <div className="flex flex-col items-center">
                    <h3 className="text-xl font-medium">
                      2 <sup>nd</sup>
                    </h3>
                    <span className="text-[#FFC000] text-xl">
                      &#9733; &#9733; &#9734;
                      {/* if(value === 1){
                        return &#9733; &#9734; &#9734;
                      } */}
                    </span>
                  </div>
                  <div className="text-xl uppercase font-semibold -mt-2 tracking-wider">
                    ABHAYA SHANKAR
                  </div>
                </div>
                <div className="uppercase text-2xl font-medium tracking-widest">
                  Powerlifting
                </div>
                <div className="tracking-wide">Dhanbad, Jharkhand</div>
              </div>
            </div>
          </div>
          {/* After Flip */}
          <div className="flip-box-back rounded-md border-[1px] border-muted-foreground dark:border-muted text-center bg-[url('/assets/Abhaya.jpg')]">
            <div className="inner-back text-white text-left">
              <ul className="text-lg pl-2 space-y-2">
                <li className="list-image-[url('/assets/custom-list.png')] list-outside">
                  2<sup>nd</sup> position at xyz Powerlifting competition.
                </li>
                <li className="list-image-[url('/assets/custom-list.png')] list-outside">
                  Max Bench - 105 kgs
                </li>
                <li className="list-image-[url('/assets/custom-list.png')] list-outside">
                  Max Deadlift - 190 kgs
                </li>
                <li className="list-image-[url('/assets/custom-list.png')] list-outside">
                  Max Squats - 125 kgs
                </li>
              </ul>
              <div>
                <h3 className="text-center capitalize text-lg mt-8 mb-4">
                  Follow for More ...
                </h3>
                <div className="flex items-center gap-5 justify-center">
                  <Link
                    className="group"
                    href={"https://www.abhayashankar.com"}
                    target="_blank"
                  >
                    <Instagram
                      color="#fcfcfc"
                      strokeWidth={1.25}
                      className="w-9 h-9 group-hover:stroke-[#c235a7] transition-all ease-in duration-150 p-[6px] border-[1px] border-[#fcfcfc] border-[#] rounded-full group-hover:border-[#c235a7] group-hover:bg-[#c235a7]/10"
                    />
                  </Link>
                  <Link
                    className="group"
                    href={"https://www.abhayashankar.com"}
                    target="_blank"
                  >
                    <Facebook
                      color="#fcfcfc"
                      strokeWidth={1.25}
                      className="w-9 h-9 group-hover:stroke-[#0862f6] transition-all ease-in duration-150 p-[6px] border-[1px] border-[#fcfcfc] border-[#] rounded-full group-hover:border-[#0862f6] group-hover:bg-[#0862f6]/10"
                    />
                  </Link>
                  <Link
                    className="group"
                    href={"https://www.abhayashankar.com"}
                    target="_blank"
                  >
                    <Youtube
                      color="#fcfcfc"
                      strokeWidth={1.25}
                      className="w-9 h-9 group-hover:stroke-[#f70000] transition-all ease-in duration-150 p-[6px] border-[1px] border-[#fcfcfc] border-[#] rounded-full group-hover:border-[#f70000] group-hover:bg-[#f70000]/10"
                    />
                  </Link>
                  <Link
                    className="group"
                    href={"https://www.abhayashankar.com"}
                    target="_blank"
                  >
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
      <div className="box-item">
        <div className="flip-box">
          <div className="flip-box-front rounded-md border-[1px] border-muted-foreground dark:border-muted text-center bg-[url('/assets/Abhaya.jpg')]">
            {/* Before Flip */}
            <div className="inner text-white relative">
              <div className="h-[260px] w-full bg-transparent absolute -top-[150px] left-0 flex flex-col items-center justify-end">
                {/* <h3 className="flip-box-header">Custom Domains</h3> */}
              </div>
              <div className="h-[150px] w-full absolute bg-white/10 dark:bg-[#3333337b]  backdrop-blur-2xl bg-opacity-80 text-[#fcfcfc]  left-0 -bottom-[150px] rounded-md z-20 backdrop-filter">
                <div className="p-2 flex items-center justify-evenly">
                  <div className="flex flex-col items-center">
                    <h3 className="text-xl font-medium">
                      2 <sup>nd</sup>
                    </h3>
                    <span className="text-[#FFC000] text-xl">
                      &#9733; &#9733; &#9734;
                      {/* if(value === 1){
                        return &#9733; &#9734; &#9734;
                      } */}
                    </span>
                  </div>
                  <div className="text-xl uppercase font-semibold -mt-2 tracking-wider">
                    ABHAYA SHANKAR
                  </div>
                </div>
                <div className="uppercase text-2xl font-medium tracking-widest">
                  Powerlifting
                </div>
                <div className="tracking-wide">Dhanbad, Jharkhand</div>
              </div>
            </div>
          </div>
          {/* After Flip */}
          <div className="flip-box-back rounded-md border-[1px] border-muted-foreground dark:border-muted text-center bg-[url('/assets/Abhaya.jpg')]">
            <div className="inner-back text-white text-left">
              <ul className="text-lg pl-2 space-y-2">
                <li className="list-image-[url('/assets/custom-list.png')] list-outside">
                  2<sup>nd</sup> position at xyz Powerlifting competition.
                </li>
                <li className="list-image-[url('/assets/custom-list.png')] list-outside">
                  Max Bench - 105 kgs
                </li>
                <li className="list-image-[url('/assets/custom-list.png')] list-outside">
                  Max Deadlift - 190 kgs
                </li>
                <li className="list-image-[url('/assets/custom-list.png')] list-outside">
                  Max Squats - 125 kgs
                </li>
              </ul>
              <div>
                <h3 className="text-center capitalize text-lg mt-8 mb-4">
                  Follow for More ...
                </h3>
                <div className="flex items-center gap-5 justify-center">
                  <Link
                    className="group"
                    href={"https://www.abhayashankar.com"}
                    target="_blank"
                  >
                    <Instagram
                      color="#fcfcfc"
                      strokeWidth={1.25}
                      className="w-9 h-9 group-hover:stroke-[#c235a7] transition-all ease-in duration-150 p-[6px] border-[1px] border-[#fcfcfc] border-[#] rounded-full group-hover:border-[#c235a7] group-hover:bg-[#c235a7]/10"
                    />
                  </Link>
                  <Link
                    className="group"
                    href={"https://www.abhayashankar.com"}
                    target="_blank"
                  >
                    <Facebook
                      color="#fcfcfc"
                      strokeWidth={1.25}
                      className="w-9 h-9 group-hover:stroke-[#0862f6] transition-all ease-in duration-150 p-[6px] border-[1px] border-[#fcfcfc] border-[#] rounded-full group-hover:border-[#0862f6] group-hover:bg-[#0862f6]/10"
                    />
                  </Link>
                  <Link
                    className="group"
                    href={"https://www.abhayashankar.com"}
                    target="_blank"
                  >
                    <Youtube
                      color="#fcfcfc"
                      strokeWidth={1.25}
                      className="w-9 h-9 group-hover:stroke-[#f70000] transition-all ease-in duration-150 p-[6px] border-[1px] border-[#fcfcfc] border-[#] rounded-full group-hover:border-[#f70000] group-hover:bg-[#f70000]/10"
                    />
                  </Link>
                  <Link
                    className="group"
                    href={"https://www.abhayashankar.com"}
                    target="_blank"
                  >
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
      <div className="box-item">
        <div className="flip-box">
          <div className="flip-box-front rounded-md border-[1px] border-muted-foreground dark:border-muted text-center bg-[url('/assets/Abhaya.jpg')]">
            {/* Before Flip */}
            <div className="inner text-white relative">
              <div className="h-[260px] w-full bg-transparent absolute -top-[150px] left-0 flex flex-col items-center justify-end">
                {/* <h3 className="flip-box-header">Custom Domains</h3> */}
              </div>
              <div className="h-[150px] w-full absolute bg-white/10 dark:bg-[#3333337b]  backdrop-blur-2xl bg-opacity-80 text-[#fcfcfc]  left-0 -bottom-[150px] rounded-md z-20 backdrop-filter">
                <div className="p-2 flex items-center justify-evenly">
                  <div className="flex flex-col items-center">
                    <h3 className="text-xl font-medium">
                      2 <sup>nd</sup>
                    </h3>
                    <span className="text-[#FFC000] text-xl">
                      &#9733; &#9733; &#9734;
                      {/* if(value === 1){
                        return &#9733; &#9734; &#9734;
                      } */}
                    </span>
                  </div>
                  <div className="text-xl uppercase font-semibold -mt-2 tracking-wider">
                    ABHAYA SHANKAR
                  </div>
                </div>
                <div className="uppercase text-2xl font-medium tracking-widest">
                  Powerlifting
                </div>
                <div className="tracking-wide">Dhanbad, Jharkhand</div>
              </div>
            </div>
          </div>
          {/* After Flip */}
          <div className="flip-box-back rounded-md border-[1px] border-muted-foreground dark:border-muted text-center bg-[url('/assets/Abhaya.jpg')]">
            <div className="inner-back text-white text-left">
              <ul className="text-lg pl-2 space-y-2">
                <li className="list-image-[url('/assets/custom-list.png')] list-outside">
                  2<sup>nd</sup> position at xyz Powerlifting competition.
                </li>
                <li className="list-image-[url('/assets/custom-list.png')] list-outside">
                  Max Bench - 105 kgs
                </li>
                <li className="list-image-[url('/assets/custom-list.png')] list-outside">
                  Max Deadlift - 190 kgs
                </li>
                <li className="list-image-[url('/assets/custom-list.png')] list-outside">
                  Max Squats - 125 kgs
                </li>
              </ul>
              <div>
                <h3 className="text-center capitalize text-lg mt-8 mb-4">
                  Follow for More ...
                </h3>
                <div className="flex items-center gap-5 justify-center">
                  <Link
                    className="group"
                    href={"https://www.abhayashankar.com"}
                    target="_blank"
                  >
                    <Instagram
                      color="#fcfcfc"
                      strokeWidth={1.25}
                      className="w-9 h-9 group-hover:stroke-[#c235a7] transition-all ease-in duration-150 p-[6px] border-[1px] border-[#fcfcfc] border-[#] rounded-full group-hover:border-[#c235a7] group-hover:bg-[#c235a7]/10"
                    />
                  </Link>
                  <Link
                    className="group"
                    href={"https://www.abhayashankar.com"}
                    target="_blank"
                  >
                    <Facebook
                      color="#fcfcfc"
                      strokeWidth={1.25}
                      className="w-9 h-9 group-hover:stroke-[#0862f6] transition-all ease-in duration-150 p-[6px] border-[1px] border-[#fcfcfc] border-[#] rounded-full group-hover:border-[#0862f6] group-hover:bg-[#0862f6]/10"
                    />
                  </Link>
                  <Link
                    className="group"
                    href={"https://www.abhayashankar.com"}
                    target="_blank"
                  >
                    <Youtube
                      color="#fcfcfc"
                      strokeWidth={1.25}
                      className="w-9 h-9 group-hover:stroke-[#f70000] transition-all ease-in duration-150 p-[6px] border-[1px] border-[#fcfcfc] border-[#] rounded-full group-hover:border-[#f70000] group-hover:bg-[#f70000]/10"
                    />
                  </Link>
                  <Link
                    className="group"
                    href={"https://www.abhayashankar.com"}
                    target="_blank"
                  >
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
      <div className="box-item">
        <div className="flip-box">
          <div className="flip-box-front rounded-md border-[1px] border-muted-foreground dark:border-muted text-center bg-[url('/assets/Abhaya.jpg')]">
            {/* Before Flip */}
            <div className="inner text-white relative">
              <div className="h-[260px] w-full bg-transparent absolute -top-[150px] left-0 flex flex-col items-center justify-end">
                {/* <h3 className="flip-box-header">Custom Domains</h3> */}
              </div>
              <div className="h-[150px] w-full absolute bg-white/10 dark:bg-[#3333337b]  backdrop-blur-2xl bg-opacity-80 text-[#fcfcfc]  left-0 -bottom-[150px] rounded-md z-20 backdrop-filter">
                <div className="p-2 flex items-center justify-evenly">
                  <div className="flex flex-col items-center">
                    <h3 className="text-xl font-medium">
                      2 <sup>nd</sup>
                    </h3>
                    <span className="text-[#FFC000] text-xl">
                      &#9733; &#9733; &#9734;
                      {/* if(value === 1){
                        return &#9733; &#9734; &#9734;
                      } */}
                    </span>
                  </div>
                  <div className="text-xl uppercase font-semibold -mt-2 tracking-wider">
                    ABHAYA SHANKAR
                  </div>
                </div>
                <div className="uppercase text-2xl font-medium tracking-widest">
                  Powerlifting
                </div>
                <div className="tracking-wide">Dhanbad, Jharkhand</div>
              </div>
            </div>
          </div>
          {/* After Flip */}
          <div className="flip-box-back rounded-md border-[1px] border-muted-foreground dark:border-muted text-center bg-[url('/assets/Abhaya.jpg')]">
            <div className="inner-back text-white text-left">
              <ul className="text-lg pl-2 space-y-2">
                <li className="list-image-[url('/assets/custom-list.png')] list-outside">
                  2<sup>nd</sup> position at xyz Powerlifting competition.
                </li>
                <li className="list-image-[url('/assets/custom-list.png')] list-outside">
                  Max Bench - 105 kgs
                </li>
                <li className="list-image-[url('/assets/custom-list.png')] list-outside">
                  Max Deadlift - 190 kgs
                </li>
                <li className="list-image-[url('/assets/custom-list.png')] list-outside">
                  Max Squats - 125 kgs
                </li>
              </ul>
              <div>
                <h3 className="text-center capitalize text-lg mt-8 mb-4">
                  Follow for More ...
                </h3>
                <div className="flex items-center gap-5 justify-center">
                  <Link
                    className="group"
                    href={"https://www.abhayashankar.com"}
                    target="_blank"
                  >
                    <Instagram
                      color="#fcfcfc"
                      strokeWidth={1.25}
                      className="w-9 h-9 group-hover:stroke-[#c235a7] transition-all ease-in duration-150 p-[6px] border-[1px] border-[#fcfcfc] border-[#] rounded-full group-hover:border-[#c235a7] group-hover:bg-[#c235a7]/10"
                    />
                  </Link>
                  <Link
                    className="group"
                    href={"https://www.abhayashankar.com"}
                    target="_blank"
                  >
                    <Facebook
                      color="#fcfcfc"
                      strokeWidth={1.25}
                      className="w-9 h-9 group-hover:stroke-[#0862f6] transition-all ease-in duration-150 p-[6px] border-[1px] border-[#fcfcfc] border-[#] rounded-full group-hover:border-[#0862f6] group-hover:bg-[#0862f6]/10"
                    />
                  </Link>
                  <Link
                    className="group"
                    href={"https://www.abhayashankar.com"}
                    target="_blank"
                  >
                    <Youtube
                      color="#fcfcfc"
                      strokeWidth={1.25}
                      className="w-9 h-9 group-hover:stroke-[#f70000] transition-all ease-in duration-150 p-[6px] border-[1px] border-[#fcfcfc] border-[#] rounded-full group-hover:border-[#f70000] group-hover:bg-[#f70000]/10"
                    />
                  </Link>
                  <Link
                    className="group"
                    href={"https://www.abhayashankar.com"}
                    target="_blank"
                  >
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
      <div className="box-item">
        <div className="flip-box">
          <div className="flip-box-front rounded-md border-[1px] border-muted-foreground dark:border-muted text-center bg-[url('/assets/Abhaya.jpg')]">
            {/* Before Flip */}
            <div className="inner text-white relative">
              <div className="h-[260px] w-full bg-transparent absolute -top-[150px] left-0 flex flex-col items-center justify-end">
                {/* <h3 className="flip-box-header">Custom Domains</h3> */}
              </div>
              <div className="h-[150px] w-full absolute bg-white/10 dark:bg-[#3333337b]  backdrop-blur-2xl bg-opacity-80 text-[#fcfcfc]  left-0 -bottom-[150px] rounded-md z-20 backdrop-filter">
                <div className="p-2 flex items-center justify-evenly">
                  <div className="flex flex-col items-center">
                    <h3 className="text-xl font-medium">
                      2 <sup>nd</sup>
                    </h3>
                    <span className="text-[#FFC000] text-xl">
                      &#9733; &#9733; &#9734;
                      {/* if(value === 1){
                        return &#9733; &#9734; &#9734;
                      } */}
                    </span>
                  </div>
                  <div className="text-xl uppercase font-semibold -mt-2 tracking-wider">
                    ABHAYA SHANKAR
                  </div>
                </div>
                <div className="uppercase text-2xl font-medium tracking-widest">
                  Powerlifting
                </div>
                <div className="tracking-wide">Dhanbad, Jharkhand</div>
              </div>
            </div>
          </div>
          {/* After Flip */}
          <div className="flip-box-back rounded-md border-[1px] border-muted-foreground dark:border-muted text-center bg-[url('/assets/Abhaya.jpg')]">
            <div className="inner-back text-white text-left">
              <ul className="text-lg pl-2 space-y-2">
                <li className="list-image-[url('/assets/custom-list.png')] list-outside">
                  2<sup>nd</sup> position at xyz Powerlifting competition.
                </li>
                <li className="list-image-[url('/assets/custom-list.png')] list-outside">
                  Max Bench - 105 kgs
                </li>
                <li className="list-image-[url('/assets/custom-list.png')] list-outside">
                  Max Deadlift - 190 kgs
                </li>
                <li className="list-image-[url('/assets/custom-list.png')] list-outside">
                  Max Squats - 125 kgs
                </li>
              </ul>
              <div>
                <h3 className="text-center capitalize text-lg mt-8 mb-4">
                  Follow for More ...
                </h3>
                <div className="flex items-center gap-5 justify-center">
                  <Link
                    className="group"
                    href={"https://www.abhayashankar.com"}
                    target="_blank"
                  >
                    <Instagram
                      color="#fcfcfc"
                      strokeWidth={1.25}
                      className="w-9 h-9 group-hover:stroke-[#c235a7] transition-all ease-in duration-150 p-[6px] border-[1px] border-[#fcfcfc] border-[#] rounded-full group-hover:border-[#c235a7] group-hover:bg-[#c235a7]/10"
                    />
                  </Link>
                  <Link
                    className="group"
                    href={"https://www.abhayashankar.com"}
                    target="_blank"
                  >
                    <Facebook
                      color="#fcfcfc"
                      strokeWidth={1.25}
                      className="w-9 h-9 group-hover:stroke-[#0862f6] transition-all ease-in duration-150 p-[6px] border-[1px] border-[#fcfcfc] border-[#] rounded-full group-hover:border-[#0862f6] group-hover:bg-[#0862f6]/10"
                    />
                  </Link>
                  <Link
                    className="group"
                    href={"https://www.abhayashankar.com"}
                    target="_blank"
                  >
                    <Youtube
                      color="#fcfcfc"
                      strokeWidth={1.25}
                      className="w-9 h-9 group-hover:stroke-[#f70000] transition-all ease-in duration-150 p-[6px] border-[1px] border-[#fcfcfc] border-[#] rounded-full group-hover:border-[#f70000] group-hover:bg-[#f70000]/10"
                    />
                  </Link>
                  <Link
                    className="group"
                    href={"https://www.abhayashankar.com"}
                    target="_blank"
                  >
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
      <div className="box-item">
        <div className="flip-box">
          <div className="flip-box-front rounded-md border-[1px] border-muted-foreground dark:border-muted text-center bg-[url('/assets/Abhaya.jpg')]">
            {/* Before Flip */}
            <div className="inner text-white relative">
              <div className="h-[260px] w-full bg-transparent absolute -top-[150px] left-0 flex flex-col items-center justify-end">
                {/* <h3 className="flip-box-header">Custom Domains</h3> */}
              </div>
              <div className="h-[150px] w-full absolute bg-white/10 dark:bg-[#3333337b]  backdrop-blur-2xl bg-opacity-80 text-[#fcfcfc]  left-0 -bottom-[150px] rounded-md z-20 backdrop-filter">
                <div className="p-2 flex items-center justify-evenly">
                  <div className="flex flex-col items-center">
                    <h3 className="text-xl font-medium">
                      2 <sup>nd</sup>
                    </h3>
                    <span className="text-[#FFC000] text-xl">
                      &#9733; &#9733; &#9734;
                      {/* if(value === 1){
                        return &#9733; &#9734; &#9734;
                      } */}
                    </span>
                  </div>
                  <div className="text-xl uppercase font-semibold -mt-2 tracking-wider">
                    ABHAYA SHANKAR
                  </div>
                </div>
                <div className="uppercase text-2xl font-medium tracking-widest">
                  Powerlifting
                </div>
                <div className="tracking-wide">Dhanbad, Jharkhand</div>
              </div>
            </div>
          </div>
          {/* After Flip */}
          <div className="flip-box-back rounded-md border-[1px] border-muted-foreground dark:border-muted text-center bg-[url('/assets/Abhaya.jpg')]">
            <div className="inner-back text-white text-left">
              <ul className="text-lg pl-2 space-y-2">
                <li className="list-image-[url('/assets/custom-list.png')] list-outside">
                  2<sup>nd</sup> position at xyz Powerlifting competition.
                </li>
                <li className="list-image-[url('/assets/custom-list.png')] list-outside">
                  Max Bench - 105 kgs
                </li>
                <li className="list-image-[url('/assets/custom-list.png')] list-outside">
                  Max Deadlift - 190 kgs
                </li>
                <li className="list-image-[url('/assets/custom-list.png')] list-outside">
                  Max Squats - 125 kgs
                </li>
              </ul>
              <div>
                <h3 className="text-center capitalize text-lg mt-8 mb-4">
                  Follow for More ...
                </h3>
                <div className="flex items-center gap-5 justify-center">
                  <Link
                    className="group"
                    href={"https://www.abhayashankar.com"}
                    target="_blank"
                  >
                    <Instagram
                      color="#fcfcfc"
                      strokeWidth={1.25}
                      className="w-9 h-9 group-hover:stroke-[#c235a7] transition-all ease-in duration-150 p-[6px] border-[1px] border-[#fcfcfc] border-[#] rounded-full group-hover:border-[#c235a7] group-hover:bg-[#c235a7]/10"
                    />
                  </Link>
                  <Link
                    className="group"
                    href={"https://www.abhayashankar.com"}
                    target="_blank"
                  >
                    <Facebook
                      color="#fcfcfc"
                      strokeWidth={1.25}
                      className="w-9 h-9 group-hover:stroke-[#0862f6] transition-all ease-in duration-150 p-[6px] border-[1px] border-[#fcfcfc] border-[#] rounded-full group-hover:border-[#0862f6] group-hover:bg-[#0862f6]/10"
                    />
                  </Link>
                  <Link
                    className="group"
                    href={"https://www.abhayashankar.com"}
                    target="_blank"
                  >
                    <Youtube
                      color="#fcfcfc"
                      strokeWidth={1.25}
                      className="w-9 h-9 group-hover:stroke-[#f70000] transition-all ease-in duration-150 p-[6px] border-[1px] border-[#fcfcfc] border-[#] rounded-full group-hover:border-[#f70000] group-hover:bg-[#f70000]/10"
                    />
                  </Link>
                  <Link
                    className="group"
                    href={"https://www.abhayashankar.com"}
                    target="_blank"
                  >
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
      <div className="box-item">
        <div className="flip-box">
          <div className="flip-box-front rounded-md border-[1px] border-muted-foreground dark:border-muted text-center bg-[url('/assets/Abhaya.jpg')]">
            {/* Before Flip */}
            <div className="inner text-white relative">
              <div className="h-[260px] w-full bg-transparent absolute -top-[150px] left-0 flex flex-col items-center justify-end">
                {/* <h3 className="flip-box-header">Custom Domains</h3> */}
              </div>
              <div className="h-[150px] w-full absolute bg-white/10 dark:bg-[#3333337b]  backdrop-blur-2xl bg-opacity-80 text-[#fcfcfc]  left-0 -bottom-[150px] rounded-md z-20 backdrop-filter">
                <div className="p-2 flex items-center justify-evenly">
                  <div className="flex flex-col items-center">
                    <h3 className="text-xl font-medium">
                      2 <sup>nd</sup>
                    </h3>
                    <span className="text-[#FFC000] text-xl">
                      &#9733; &#9733; &#9734;
                      {/* if(value === 1){
                        return &#9733; &#9734; &#9734;
                      } */}
                    </span>
                  </div>
                  <div className="text-xl uppercase font-semibold -mt-2 tracking-wider">
                    ABHAYA SHANKAR
                  </div>
                </div>
                <div className="uppercase text-2xl font-medium tracking-widest">
                  Powerlifting
                </div>
                <div className="tracking-wide">Dhanbad, Jharkhand</div>
              </div>
            </div>
          </div>
          {/* After Flip */}
          <div className="flip-box-back rounded-md border-[1px] border-muted-foreground dark:border-muted text-center bg-[url('/assets/Abhaya.jpg')]">
            <div className="inner-back text-white text-left">
              <ul className="text-lg pl-2 space-y-2">
                <li className="list-image-[url('/assets/custom-list.png')] list-outside">
                  2<sup>nd</sup> position at xyz Powerlifting competition.
                </li>
                <li className="list-image-[url('/assets/custom-list.png')] list-outside">
                  Max Bench - 105 kgs
                </li>
                <li className="list-image-[url('/assets/custom-list.png')] list-outside">
                  Max Deadlift - 190 kgs
                </li>
                <li className="list-image-[url('/assets/custom-list.png')] list-outside">
                  Max Squats - 125 kgs
                </li>
              </ul>
              <div>
                <h3 className="text-center capitalize text-lg mt-8 mb-4">
                  Follow for More ...
                </h3>
                <div className="flex items-center gap-5 justify-center">
                  <Link
                    className="group"
                    href={"https://www.abhayashankar.com"}
                    target="_blank"
                  >
                    <Instagram
                      color="#fcfcfc"
                      strokeWidth={1.25}
                      className="w-9 h-9 group-hover:stroke-[#c235a7] transition-all ease-in duration-150 p-[6px] border-[1px] border-[#fcfcfc] border-[#] rounded-full group-hover:border-[#c235a7] group-hover:bg-[#c235a7]/10"
                    />
                  </Link>
                  <Link
                    className="group"
                    href={"https://www.abhayashankar.com"}
                    target="_blank"
                  >
                    <Facebook
                      color="#fcfcfc"
                      strokeWidth={1.25}
                      className="w-9 h-9 group-hover:stroke-[#0862f6] transition-all ease-in duration-150 p-[6px] border-[1px] border-[#fcfcfc] border-[#] rounded-full group-hover:border-[#0862f6] group-hover:bg-[#0862f6]/10"
                    />
                  </Link>
                  <Link
                    className="group"
                    href={"https://www.abhayashankar.com"}
                    target="_blank"
                  >
                    <Youtube
                      color="#fcfcfc"
                      strokeWidth={1.25}
                      className="w-9 h-9 group-hover:stroke-[#f70000] transition-all ease-in duration-150 p-[6px] border-[1px] border-[#fcfcfc] border-[#] rounded-full group-hover:border-[#f70000] group-hover:bg-[#f70000]/10"
                    />
                  </Link>
                  <Link
                    className="group"
                    href={"https://www.abhayashankar.com"}
                    target="_blank"
                  >
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
      <div className="box-item">
        <div className="flip-box">
          <div className="flip-box-front rounded-md border-[1px] border-muted-foreground dark:border-muted text-center bg-[url('/assets/Abhaya.jpg')]">
            {/* Before Flip */}
            <div className="inner text-white relative">
              <div className="h-[260px] w-full bg-transparent absolute -top-[150px] left-0 flex flex-col items-center justify-end">
                {/* <h3 className="flip-box-header">Custom Domains</h3> */}
              </div>
              <div className="h-[150px] w-full absolute bg-white/10 dark:bg-[#3333337b]  backdrop-blur-2xl bg-opacity-80 text-[#fcfcfc]  left-0 -bottom-[150px] rounded-md z-20 backdrop-filter">
                <div className="p-2 flex items-center justify-evenly">
                  <div className="flex flex-col items-center">
                    <h3 className="text-xl font-medium">
                      2 <sup>nd</sup>
                    </h3>
                    <span className="text-[#FFC000] text-xl">
                      &#9733; &#9733; &#9734;
                      {/* if(value === 1){
                        return &#9733; &#9734; &#9734;
                      } */}
                    </span>
                  </div>
                  <div className="text-xl uppercase font-semibold -mt-2 tracking-wider">
                    ABHAYA SHANKAR
                  </div>
                </div>
                <div className="uppercase text-2xl font-medium tracking-widest">
                  Powerlifting
                </div>
                <div className="tracking-wide">Dhanbad, Jharkhand</div>
              </div>
            </div>
          </div>
          {/* After Flip */}
          <div className="flip-box-back rounded-md border-[1px] border-muted-foreground dark:border-muted text-center bg-[url('/assets/Abhaya.jpg')]">
            <div className="inner-back text-white text-left">
              <ul className="text-lg pl-2 space-y-2">
                <li className="list-image-[url('/assets/custom-list.png')] list-outside">
                  2<sup>nd</sup> position at xyz Powerlifting competition.
                </li>
                <li className="list-image-[url('/assets/custom-list.png')] list-outside">
                  Max Bench - 105 kgs
                </li>
                <li className="list-image-[url('/assets/custom-list.png')] list-outside">
                  Max Deadlift - 190 kgs
                </li>
                <li className="list-image-[url('/assets/custom-list.png')] list-outside">
                  Max Squats - 125 kgs
                </li>
              </ul>
              <div>
                <h3 className="text-center capitalize text-lg mt-8 mb-4">
                  Follow for More ...
                </h3>
                <div className="flex items-center gap-5 justify-center">
                  <Link
                    className="group"
                    href={"https://www.abhayashankar.com"}
                    target="_blank"
                  >
                    <Instagram
                      color="#fcfcfc"
                      strokeWidth={1.25}
                      className="w-9 h-9 group-hover:stroke-[#c235a7] transition-all ease-in duration-150 p-[6px] border-[1px] border-[#fcfcfc] border-[#] rounded-full group-hover:border-[#c235a7] group-hover:bg-[#c235a7]/10"
                    />
                  </Link>
                  <Link
                    className="group"
                    href={"https://www.abhayashankar.com"}
                    target="_blank"
                  >
                    <Facebook
                      color="#fcfcfc"
                      strokeWidth={1.25}
                      className="w-9 h-9 group-hover:stroke-[#0862f6] transition-all ease-in duration-150 p-[6px] border-[1px] border-[#fcfcfc] border-[#] rounded-full group-hover:border-[#0862f6] group-hover:bg-[#0862f6]/10"
                    />
                  </Link>
                  <Link
                    className="group"
                    href={"https://www.abhayashankar.com"}
                    target="_blank"
                  >
                    <Youtube
                      color="#fcfcfc"
                      strokeWidth={1.25}
                      className="w-9 h-9 group-hover:stroke-[#f70000] transition-all ease-in duration-150 p-[6px] border-[1px] border-[#fcfcfc] border-[#] rounded-full group-hover:border-[#f70000] group-hover:bg-[#f70000]/10"
                    />
                  </Link>
                  <Link
                    className="group"
                    href={"https://www.abhayashankar.com"}
                    target="_blank"
                  >
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
      <div className="box-item">
        <div className="flip-box">
          <div className="flip-box-front rounded-md border-[1px] border-muted-foreground dark:border-muted text-center bg-[url('/assets/Abhaya.jpg')]">
            {/* Before Flip */}
            <div className="inner text-white relative">
              <div className="h-[260px] w-full bg-transparent absolute -top-[150px] left-0 flex flex-col items-center justify-end">
                {/* <h3 className="flip-box-header">Custom Domains</h3> */}
              </div>
              <div className="h-[150px] w-full absolute bg-white/10 dark:bg-[#3333337b]  backdrop-blur-2xl bg-opacity-80 text-[#fcfcfc]  left-0 -bottom-[150px] rounded-md z-20 backdrop-filter">
                <div className="p-2 flex items-center justify-evenly">
                  <div className="flex flex-col items-center">
                    <h3 className="text-xl font-medium">
                      2 <sup>nd</sup>
                    </h3>
                    <span className="text-[#FFC000] text-xl">
                      &#9733; &#9733; &#9734;
                      {/* if(value === 1){
                        return &#9733; &#9734; &#9734;
                      } */}
                    </span>
                  </div>
                  <div className="text-xl uppercase font-semibold -mt-2 tracking-wider">
                    ABHAYA SHANKAR
                  </div>
                </div>
                <div className="uppercase text-2xl font-medium tracking-widest">
                  Powerlifting
                </div>
                <div className="tracking-wide">Dhanbad, Jharkhand</div>
              </div>
            </div>
          </div>
          {/* After Flip */}
          <div className="flip-box-back rounded-md border-[1px] border-muted-foreground dark:border-muted text-center bg-[url('/assets/Abhaya.jpg')]">
            <div className="inner-back text-white text-left">
              <ul className="text-lg pl-2 space-y-2">
                <li className="list-image-[url('/assets/custom-list.png')] list-outside">
                  2<sup>nd</sup> position at xyz Powerlifting competition.
                </li>
                <li className="list-image-[url('/assets/custom-list.png')] list-outside">
                  Max Bench - 105 kgs
                </li>
                <li className="list-image-[url('/assets/custom-list.png')] list-outside">
                  Max Deadlift - 190 kgs
                </li>
                <li className="list-image-[url('/assets/custom-list.png')] list-outside">
                  Max Squats - 125 kgs
                </li>
              </ul>
              <div>
                <h3 className="text-center capitalize text-lg mt-8 mb-4">
                  Follow for More ...
                </h3>
                <div className="flex items-center gap-5 justify-center">
                  <Link
                    className="group"
                    href={"https://www.abhayashankar.com"}
                    target="_blank"
                  >
                    <Instagram
                      color="#fcfcfc"
                      strokeWidth={1.25}
                      className="w-9 h-9 group-hover:stroke-[#c235a7] transition-all ease-in duration-150 p-[6px] border-[1px] border-[#fcfcfc] border-[#] rounded-full group-hover:border-[#c235a7] group-hover:bg-[#c235a7]/10"
                    />
                  </Link>
                  <Link
                    className="group"
                    href={"https://www.abhayashankar.com"}
                    target="_blank"
                  >
                    <Facebook
                      color="#fcfcfc"
                      strokeWidth={1.25}
                      className="w-9 h-9 group-hover:stroke-[#0862f6] transition-all ease-in duration-150 p-[6px] border-[1px] border-[#fcfcfc] border-[#] rounded-full group-hover:border-[#0862f6] group-hover:bg-[#0862f6]/10"
                    />
                  </Link>
                  <Link
                    className="group"
                    href={"https://www.abhayashankar.com"}
                    target="_blank"
                  >
                    <Youtube
                      color="#fcfcfc"
                      strokeWidth={1.25}
                      className="w-9 h-9 group-hover:stroke-[#f70000] transition-all ease-in duration-150 p-[6px] border-[1px] border-[#fcfcfc] border-[#] rounded-full group-hover:border-[#f70000] group-hover:bg-[#f70000]/10"
                    />
                  </Link>
                  <Link
                    className="group"
                    href={"https://www.abhayashankar.com"}
                    target="_blank"
                  >
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
    </div>
  );
};

export default GymRats;
