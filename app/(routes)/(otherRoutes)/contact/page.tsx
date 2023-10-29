"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ALL_CLASSES } from "@/constants";
import { DescriptionComp, HeadingComp } from "@/lib/Common";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const ContactPage = () => {
  const [mounted, setMounted] = useState(false);
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 lg:p-8 ">
      <h1 className="absolute top-[260px] left-[44%] text-[30px] tracking-wide font-semibold capitalize text-white dark:text-white">
        Contact
      </h1>
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center p-2 lg:p-8 gap-5 gap-x-12">
        {/* left */}
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
                advStyle="capitalize text-[20px]"
              />
              <span className="top-[30px] absolute w-[3rem] h-[4px] bg-[#ce032c]"></span>
              <p className="mt-5 text-muted-foreground font-medium">
                Near Hanuman Mandir, Putki <br /> Dhanbad, Jharkhand 828116
              </p>
            </div>
            <div className="relative">
              <HeadingComp
                title="Opening Hours."
                advStyle="capitalize text-[20px]"
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
                advStyle="capitalize text-[20px]"
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
                advStyle="capitalize text-[20px]"
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
        {/* Right */}
        <div>
          <Card className="min-w-[320px] lg:min-w-[450px] relative p-2">
            <CardHeader>
              <CardTitle>
                <HeadingComp
                  title="Leave us your info"
                  advStyle="capitalize text-xl lg:text-3xl mb-3 font-semibold tracking-wide"
                />
              </CardTitle>
              <CardDescription>
                <span className="top-[70px] absolute w-[4rem] h-[4px] bg-[#ce032c]"></span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-8">
                  <div className="flex flex-col space-y-4 relative">
                    <Input
                      className="placeholder:tracking-wide"
                      id="Name"
                      placeholder="Full Name*"
                    />
                    <Input
                      id="Email"
                      type="email"
                      placeholder="Email Address*"
                      className="placeholder:tracking-wide"
                    />
                  </div>
                  <div className="flex flex-col space-y-4">
                    <Label htmlFor="Class">Classes</Label>
                    <Select>
                      <SelectTrigger id="classes">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        {ALL_CLASSES.map((item) => (
                          <SelectItem value={item.name} key={item.id}>
                            {item.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <Textarea
                    className="placeholder:tracking-wide"
                    placeholder="Comments."
                    id="message"
                  />
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-center w-full">
              <Button className="z-1 w-full" size={"lg"} variant={"custom1"}>
                Submit
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <Map />
    </div>
  );
};

function Map() {
  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 23.760209790070338, lng: 86.35606878025722 }}
      mapContainerClassName="h-[30rem] w-full"
    >
      <Marker position={{ lat: 23.760209790070338, lng: 86.35606878025722 }} />
    </GoogleMap>
  );
}

export default ContactPage;
