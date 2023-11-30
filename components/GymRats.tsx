"use client";

import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const GymRats = () => {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div className="flex items-start flex-wrap justify-between gap-5 gap-y-14 py-9 px-20 w-full flex-col lg:flex-row m-auto">
      <div className="box-item">
        <div className="flip-box">
          <div className="flip-box-front text-center bg-[url('/assets/test.jpg')]">
            {/* Before Flip */}
            <div className="inner text-white">
              <h3 className="flip-box-header">Custom Domains</h3>
              <p>A short sentence describing this callout is.</p>
              <div className="flex justify-center">
                <Image
                  width={500}
                  height={500}
                  src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png"
                  alt=""
                  className="flip-box-img h-10 w-10"
                />
              </div>
            </div>
          </div>
          {/* After Flip */}
          <div className="flip-box-back text-center bg-[url('/assets/test.jpg')]">
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
          <div className="flip-box-front text-center bg-[url('/assets/test.jpg')]">
            {/* Before Flip */}
            <div className="inner text-white">
              <h3 className="flip-box-header">Custom Domains</h3>
              <p>A short sentence describing this callout is.</p>
              <div className="flex justify-center">
                <Image
                  width={500}
                  height={500}
                  src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png"
                  alt=""
                  className="flip-box-img h-10 w-10"
                />
              </div>
            </div>
          </div>
          {/* After Flip */}
          <div className="flip-box-back text-center bg-[url('/assets/test.jpg')]">
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
          <div className="flip-box-front text-center bg-[url('/assets/test.jpg')]">
            {/* Before Flip */}
            <div className="inner text-white">
              <h3 className="flip-box-header">Custom Domains</h3>
              <p>A short sentence describing this callout is.</p>
              <div className="flex justify-center">
                <Image
                  width={500}
                  height={500}
                  src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png"
                  alt=""
                  className="flip-box-img h-10 w-10"
                />
              </div>
            </div>
          </div>
          {/* After Flip */}
          <div className="flip-box-back text-center bg-[url('/assets/test.jpg')]">
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
          <div className="flip-box-front text-center bg-[url('/assets/test.jpg')]">
            {/* Before Flip */}
            <div className="inner text-white">
              <h3 className="flip-box-header">Custom Domains</h3>
              <p>A short sentence describing this callout is.</p>
              <div className="flex justify-center">
                <Image
                  width={500}
                  height={500}
                  src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png"
                  alt=""
                  className="flip-box-img h-10 w-10"
                />
              </div>
            </div>
          </div>
          {/* After Flip */}
          <div className="flip-box-back text-center bg-[url('/assets/test.jpg')]">
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
