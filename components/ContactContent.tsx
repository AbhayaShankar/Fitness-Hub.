"use client";

import React from "react";
import { DescriptionComp, HeadingComp } from "@/lib/Common";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const ContactContent = () => {
  return (
    <div className="flex items-start justify-start flex-col p-4 gap-8">
      <HeadingComp
        title="We are here for help you! To Shape Your Body."
        advStyle="capitalize text-[30px]"
      />
      <DescriptionComp
        desc="At Gymate, we are dedicated to helping you achieve the body of your dreams. Our expert trainers and nutritionists will work with you to create a personalized fitness and nutrition plan that helps you reach your specific goals."
        advStyle="text-left text-muted-foreground max-w-[600px]"
      />
      <div className="grid grid-cols-1 lg:grid-rows-2 lg:grid-cols-2 w-full gap-8 lg:max-w-[800px]">
        <div className="relative">
          <HeadingComp
            title="Fitness Hub, Putki."
            advStyle="capitalize text-left !text-[20px]"
          />
          <span className="top-[30px] absolute w-[3rem] h-[4px] bg-[#ce032c]"></span>
          <p className="mt-5 text-muted-foreground font-medium">
            Near Hanuman Mandir, Putki <br /> Dhanbad, Jharkhand 828116
          </p>
        </div>
        <div className="relative">
          <HeadingComp
            title="Opening Hours."
            advStyle="capitalize text-left !text-[20px]"
          />
          <span className="top-[30px] absolute w-[3rem] h-[4px] bg-[#ce032c]"></span>
          <p className="mt-5 text-muted-foreground font-medium">
            <strong>Mon - Fri</strong> : 6:30 AM - 9:00 PM <br />
            <strong>Sat </strong>: 8:00 AM - 8:00 PM <br />
            <strong>Sun </strong>: Closed
          </p>
        </div>
        <div className="relative">
          <HeadingComp
            title="Information."
            advStyle="capitalize text-left !text-[20px]"
          />
          <span className="top-[30px] absolute w-[3rem] h-[4px] bg-[#ce032c]"></span>
          <p className="mt-5 text-muted-foreground font-medium">
            +91-654xxxxx58 <br />
            fitnesshub@gmail.com
          </p>
        </div>
        <div className="relative">
          <HeadingComp
            title="Follow us on."
            advStyle="capitalize text-left !text-[20px]"
          />
          <span className="top-[30px] absolute w-[3rem] h-[4px] bg-[#ce032c]"></span>
          <p className="mt-5 text-muted-foreground font-medium">
            <div className="flex items-center gap-5 ">
              <div className="bg-gray-200 group rounded-full p-2">
                <Instagram
                  color="#5f5f5f"
                  strokeWidth={2}
                  className="w-6 h-6 group-hover:stroke-[#ce032c] transition-all ease-in duration-150"
                />
              </div>
              <div className="bg-gray-200 group rounded-full p-2">
                <Facebook
                  fill="#5f5f5f"
                  stroke="1px"
                  color="#5f5f5f"
                  className="w-6 h-6 group-hover:fill-[#ce032c] transition-all ease-in duration-150"
                />
              </div>
              <div className="bg-gray-200 group rounded-full p-2">
                <Twitter
                  fill="#5f5f5f"
                  stroke="1px"
                  color="#5f5f5f"
                  className="w-6 h-6 group-hover:fill-[#ce032c] transition-all ease-in duration-150"
                />
              </div>
              <div className="bg-gray-200 group rounded-full p-2">
                <Youtube
                  color="#5f5f5f"
                  strokeWidth={2}
                  className="w-6 h-6 group-hover:stroke-[#ce032c] transition-all ease-in duration-150"
                />
              </div>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
