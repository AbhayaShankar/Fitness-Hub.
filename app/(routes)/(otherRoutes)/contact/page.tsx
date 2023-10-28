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

const ContactPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  // 23.760209790070338, 86.35606878025722

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
        </div>
        {/* Right */}
        <div>
          <Card className="min-w-[320px] lg:max-w-[500px] relative p-2">
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
              {/* <Button variant="outline">Cancel</Button> */}
              <Button className="z-1 w-full" size={"lg"} variant={"custom1"}>
                Submit
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
