"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { HeadingComp } from "@/lib/Common";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { ALL_CLASSES } from "@/constants";
import { Label } from "./ui/label";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const validOptions = z.enum(ALL_CLASSES.map((item) => item.name));

type FormData = {
  name: string;
  email: string;
  comments: string;
};

const schema = z.object({
  name: z.string().min(1, { message: "Enter your full name" }),
  email: z
    .string()
    .min(1, { message: "Please enter email" })
    .email("This is not a valid email."),
  //   select: validOptions,
  comments: z.string().min(1),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    reset();
  };

  return (
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
        {/* TODO: Move this into different component. Add a form handler - Console.log the data first in the console. Save the data in Prisma DB  */}
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid w-full items-center gap-6">
              <div className="flex flex-col space-y-4 relative">
                <Input
                  className="placeholder:tracking-wide"
                  id="Name"
                  type="text"
                  placeholder="Full Name*"
                  {...register("name")}
                />
                {errors.name?.message && (
                  <p className="text-sm text-red-500 pl-1 space-y-0">
                    {errors.name?.message}
                  </p>
                )}
                <Input
                  id="Email"
                  type="email"
                  placeholder="Email Address*"
                  className="placeholder:tracking-wide"
                  {...register("email")}
                />
                {errors.email?.message && (
                  <p className="text-sm text-red-500 pl-1">
                    {errors.email?.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col space-y-4">
                <Label htmlFor="Class" className="pl-1">
                  Classes
                </Label>
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
                <div>
                  <Textarea
                    className="placeholder:tracking-wide"
                    placeholder="Comments."
                    id="message"
                    {...register("comments")}
                  />
                  {errors.comments?.message && (
                    <p className="text-sm text-red-500 pl-1 pt-0 mt-0 space-y-2">
                      {errors.comments?.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <Button
              type="submit"
              className="z-1 w-full mt-5"
              size={"lg"}
              variant={"custom1"}
            >
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;
