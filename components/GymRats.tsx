"use client";

import React from "react";
import { Button } from "./ui/button";

const GymRats = () => {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div className="flex items-start flex-wrap justify-center gap-5 gap-y-14 py-9 px-20 w-full flex-col lg:flex-row m-auto ">
      <div className="box-item">
        <div className="flip-box">
          <div className="flip-box-front rounded-md border-[1px] border-muted-foreground dark:border-muted text-center bg-[url('/assets/test.jpg')]">
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
                      &#9733; &#9733; &#9733;
                    </span>
                  </div>
                  <div className="text-xl uppercase font-semibold -mt-2 tracking-wider">
                    ABHAYA SHANKAR
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* After Flip */}
          <div className="flip-box-back rounded-md border-[1px] border-muted-foreground dark:border-muted text-center bg-[url('/assets/test.jpg')]">
            <div className="inner text-white">
              <h3 className="flip-box-header">Custom Domains</h3>
              <p>A short sentence describing this callout is.</p>
              <Button onClick={handleClick} className="flip-box-button">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="box-item">
        <div className="flip-box">
          <div className="flip-box-front rounded-md border-[1px] border-muted-foreground dark:border-muted text-center bg-[url('/assets/test.jpg')]">
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
                      &#9733; &#9733; &#9733;
                    </span>
                  </div>
                  <div className="text-xl uppercase font-semibold -mt-2 tracking-wider">
                    ABHAYA SHANKAR
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* After Flip */}
          <div className="flip-box-back rounded-md border-[1px] border-muted-foreground dark:border-muted text-center bg-[url('/assets/test.jpg')]">
            <div className="inner text-white">
              <h3 className="flip-box-header">Custom Domains</h3>
              <p>A short sentence describing this callout is.</p>
              <Button onClick={handleClick} className="flip-box-button">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="box-item">
        <div className="flip-box">
          <div className="flip-box-front rounded-md border-[1px] border-muted-foreground dark:border-muted text-center bg-[url('/assets/test.jpg')]">
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
                      &#9733; &#9733; &#9733;
                    </span>
                  </div>
                  <div className="text-xl uppercase font-semibold -mt-2 tracking-wider">
                    ABHAYA SHANKAR
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* After Flip */}
          <div className="flip-box-back rounded-md border-[1px] border-muted-foreground dark:border-muted text-center bg-[url('/assets/test.jpg')]">
            <div className="inner text-white">
              <h3 className="flip-box-header">Custom Domains</h3>
              <p>A short sentence describing this callout is.</p>
              <Button onClick={handleClick} className="flip-box-button">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="box-item">
        <div className="flip-box">
          <div className="flip-box-front rounded-md border-[1px] border-muted-foreground dark:border-muted text-center bg-[url('/assets/test.jpg')]">
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
                      &#9733; &#9733; &#9733;
                    </span>
                  </div>
                  <div className="text-xl uppercase font-semibold -mt-2 tracking-wider">
                    ABHAYA SHANKAR
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* After Flip */}
          <div className="flip-box-back rounded-md border-[1px] border-muted-foreground dark:border-muted text-center bg-[url('/assets/test.jpg')]">
            <div className="inner text-white">
              <h3 className="flip-box-header">Custom Domains</h3>
              <p>A short sentence describing this callout is.</p>
              <Button onClick={handleClick} className="flip-box-button">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="box-item">
        <div className="flip-box">
          <div className="flip-box-front rounded-md border-[1px] border-muted-foreground dark:border-muted text-center bg-[url('/assets/test.jpg')]">
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
                      &#9733; &#9733; &#9733;
                    </span>
                  </div>
                  <div className="text-xl uppercase font-semibold -mt-2 tracking-wider">
                    ABHAYA SHANKAR
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* After Flip */}
          <div className="flip-box-back rounded-md border-[1px] border-muted-foreground dark:border-muted text-center bg-[url('/assets/test.jpg')]">
            <div className="inner text-white">
              <h3 className="flip-box-header">Custom Domains</h3>
              <p>A short sentence describing this callout is.</p>
              <Button onClick={handleClick} className="flip-box-button">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="box-item">
        <div className="flip-box">
          <div className="flip-box-front rounded-md border-[1px] border-muted-foreground dark:border-muted text-center bg-[url('/assets/test.jpg')]">
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
                      &#9733; &#9733; &#9733;
                    </span>
                  </div>
                  <div className="text-xl uppercase font-semibold -mt-2 tracking-wider">
                    ABHAYA SHANKAR
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* After Flip */}
          <div className="flip-box-back rounded-md border-[1px] border-muted-foreground dark:border-muted text-center bg-[url('/assets/test.jpg')]">
            <div className="inner text-white">
              <h3 className="flip-box-header">Custom Domains</h3>
              <p>A short sentence describing this callout is.</p>
              <Button onClick={handleClick} className="flip-box-button">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="box-item">
        <div className="flip-box">
          <div className="flip-box-front rounded-md border-[1px] border-muted-foreground dark:border-muted text-center bg-[url('/assets/test.jpg')]">
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
                      &#9733; &#9733; &#9733;
                    </span>
                  </div>
                  <div className="text-xl uppercase font-semibold -mt-2 tracking-wider">
                    ABHAYA SHANKAR
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* After Flip */}
          <div className="flip-box-back rounded-md border-[1px] border-muted-foreground dark:border-muted text-center bg-[url('/assets/test.jpg')]">
            <div className="inner text-white">
              <h3 className="flip-box-header">Custom Domains</h3>
              <p>A short sentence describing this callout is.</p>
              <Button onClick={handleClick} className="flip-box-button">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="box-item">
        <div className="flip-box">
          <div className="flip-box-front rounded-md border-[1px] border-muted-foreground dark:border-muted text-center bg-[url('/assets/test.jpg')]">
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
                      &#9733; &#9733; &#9733;
                    </span>
                  </div>
                  <div className="text-xl uppercase font-semibold -mt-2 tracking-wider">
                    ABHAYA SHANKAR
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* After Flip */}
          <div className="flip-box-back rounded-md border-[1px] border-muted-foreground dark:border-muted text-center bg-[url('/assets/test.jpg')]">
            <div className="inner text-white">
              <h3 className="flip-box-header">Custom Domains</h3>
              <p>A short sentence describing this callout is.</p>
              <Button onClick={handleClick} className="flip-box-button">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="box-item">
        <div className="flip-box">
          <div className="flip-box-front rounded-md border-[1px] border-muted-foreground dark:border-muted text-center bg-[url('/assets/test.jpg')]">
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
                      &#9733; &#9733; &#9733;
                    </span>
                  </div>
                  <div className="text-xl uppercase font-semibold -mt-2 tracking-wider">
                    ABHAYA SHANKAR
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* After Flip */}
          <div className="flip-box-back rounded-md border-[1px] border-muted-foreground dark:border-muted text-center bg-[url('/assets/test.jpg')]">
            <div className="inner text-white">
              <h3 className="flip-box-header">Custom Domains</h3>
              <p>A short sentence describing this callout is.</p>
              <Button onClick={handleClick} className="flip-box-button">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GymRats;
