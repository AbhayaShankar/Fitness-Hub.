"use client";

import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "./ui/button";

const formSchema = z.object({
  weight: z.number().min(1, {
    message: "Weight .",
  }),
});

const font = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const BMIComponent = () => {
  const { control, handleSubmit, setValue } = useForm();
  const [bmi, setBMI] = useState(null);
  const [category, setCategory] = useState("");

  const onSubmit = (data) => {
    const weight = parseFloat(data.weight);
    const height = parseFloat(data.height) / 100; // Convert height to meters
    const BMI = weight / (height * height);
    const ApproxBMI = BMI.toFixed(2);
    setBMI(ApproxBMI);

    if (+ApproxBMI < 18.5) {
      setCategory("Underweight");
    } else if (+ApproxBMI >= 18.5 && +ApproxBMI < 25) {
      setCategory("Normal weight");
    } else if (+ApproxBMI >= 25 && +ApproxBMI < 30) {
      setCategory("Overweight");
    } else {
      setCategory("Obesity");
    }
  };

  return (
    <div
      className={cn(
        "flex flex-col lg:flex-row items-center justify-evenly gap-5 p-4 lg:py-16 lg:pl-16",
        font.className
      )}
      style={{ backgroundImage: "url(/assets/bg/bg-2.jpg)" }}
    >
      {/* main comp */}
      <div className="flex flex-col gap-3">
        <h1 className="capitalize text-2xl text-center lg:text-4xl font-bold">
          Let&#39;s calculate your <span className="text-[#ce032c]">BMI</span>
        </h1>
        <p className="text-sm text-muted-foreground">
          Easily determine your body mass index with our accurate calculation
          tool.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <div className="flex gap-5">
            <Controller
              name="weight"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input {...field} type="number" placeholder="Weight (in Kgs)" />
              )}
            />
            <Controller
              name="height"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input {...field} type="number" placeholder="Height (in cms)" />
              )}
            />
          </div>
          {bmi && (
            <div className="flex flex-col lg:flex-row lg:items-center gap-1 justify-between">
              <p className="text-semibold">
                Your BMI:{" "}
                <span className="text-[#ce032c] text-bold"> {bmi} </span>
              </p>
              <p className="text-semibold">
                Your Weight:{" "}
                <span className="text-[#ce032c] text-bold"> {category} </span>
              </p>
            </div>
          )}
          <Button
            variant={"custom1"}
            type="submit"
            size={"lg"}
            className="font-semibold text-base lg:text-base"
          >
            Calculate
          </Button>
        </form>
      </div>
      {/* Image */}
      <div>
        <Image
          src={"/assets/bmi.jpg"}
          alt="bmi-image"
          width={400}
          height={400}
          className="h-[300px] w-[450px] object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default BMIComponent;
