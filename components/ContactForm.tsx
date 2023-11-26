"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
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

import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Check } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  comments: string;
  selectField: string;
};

const schema = z.object({
  name: z.string().min(1, { message: "Enter your full name" }),
  email: z
    .string()
    .min(1, { message: "Please enter email" })
    .email("This is not a valid email."),
  selectField: z.string().min(1, { message: "Please select a class" }),
  comments: z.string().min(1, { message: "Please add comments" }),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
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
                {typeof errors.name?.message === "string" && (
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
                {typeof errors.email?.message === "string" && (
                  <p className="text-sm text-red-500 pl-1">
                    {errors.email?.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col space-y-4">
                <Label htmlFor="selectField" className="pl-1">
                  Classes
                </Label>
                <Controller
                  name="selectField"
                  control={control}
                  defaultValue=""
                  rules={{ required: "This field is required" }}
                  render={({ field, fieldState }) => (
                    // <div>
                    //   <Select
                    //     value={field.value || "Select Class"}
                    //     onChange={(e) =>
                    //       setValue("selectField", e.target.value)
                    //     }
                    //   >
                    //     <SelectTrigger id="classes">
                    //       <SelectValue>
                    //         {field.value ? field.value : "Select"}
                    //       </SelectValue>
                    //     </SelectTrigger>
                    //     <SelectContent position="popper">
                    //       {ALL_CLASSES.map((item) => (
                    //         <SelectItem
                    //           value={item.name}
                    //           key={item.id}
                    //           onSelect={() =>
                    //             setValue("selectField", item.name)
                    //           }
                    //         >
                    //           {item.name}
                    //         </SelectItem>
                    //       ))}
                    //     </SelectContent>
                    //   </Select>
                    //   {fieldState && fieldState.error && (
                    //     <p className="text-sm text-red-500 pl-1 space-y-0">
                    //       {fieldState.error.message}
                    //     </p>
                    //   )}
                    // </div>
                    <div>
                      <select
                        value={field.value || ""}
                        onChange={(e) =>
                          setValue("selectField", e.target.value)
                        }
                        className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option
                          className="text-muted-foreground"
                          value=""
                          disabled
                        >
                          Select
                        </option>
                        {ALL_CLASSES.map((item) => (
                          <option
                            className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 mt-5"
                            value={item.name}
                            key={item.id}
                          >
                            {/* <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                              {field.value && <Check className="h-4 w-4" />}
                            </span> */}
                            {item.name}
                          </option>
                        ))}
                      </select>
                      {fieldState && fieldState.error && (
                        <p className="text-sm text-red-500 pl-1 space-y-0">
                          {fieldState.error.message}
                        </p>
                      )}
                    </div>
                  )}
                />

                <div>
                  <Textarea
                    className="placeholder:tracking-wide"
                    placeholder="Comments."
                    id="message"
                    {...register("comments")}
                  />
                  {typeof errors.comments?.message === "string" && (
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
