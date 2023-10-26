import PricingCard from "@/components/PricingCard";
import { Button } from "@/components/ui/button";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CheckCircle2, XCircle } from "lucide-react";

const PRICING_PLANS = [
  {
    id: 1,
    plan: "Fitness",
    beginner: true,
    intermediate: true,
    advance: true,
  },
  {
    id: 2,
    plan: "Yoga",
    beginner: true,
    intermediate: true,
    advance: true,
  },
  {
    id: 3,
    plan: "Cardio",
    beginner: true,
    intermediate: true,
    advance: true,
  },
  {
    id: 4,
    plan: "Powerlifting",
    beginner: false,
    intermediate: true,
    advance: true,
  },
  {
    id: 5,
    plan: "Arm Wrestling",
    beginner: false,
    intermediate: true,
    advance: true,
  },
  {
    id: 6,
    plan: "Calisthenics",
    beginner: false,
    intermediate: false,
    advance: true,
  },
  {
    id: 7,
    plan: "Powerlifting Belt",
    beginner: false,
    intermediate: false,
    advance: true,
  },
  {
    id: 8,
    plan: "Arm Wrestling kit",
    beginner: false,
    intermediate: false,
    advance: true,
  },
];

const PricingPage = () => {
  return (
    <div>
      <div>
        <h1 className="absolute top-[260px] left-[44%] text-[30px] tracking-wide font-semibold capitalize text-white dark:text-white">
          Pricing
        </h1>
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-center gap-10 p-10">
          <div>
            <h2>Pick your plan</h2>
            <div>
              <h3>Monthly Billing</h3>
              <h3>Yearly Billing</h3>
            </div>
          </div>
          <PricingCard planType="Beginners Plan" amount={0} />
          <PricingCard planType="Intermediate Plan" amount={30} />
          <PricingCard planType="Advance Plan" amount={50} />
        </div>
      </div>
      <Table className="p-4 lg:p-0 lg:px-0 w-fit mx-auto">
        <TableBody>
          {PRICING_PLANS.map((item) => (
            <TableRow className="" key={item.id}>
              <TableCell className="font-medium lg:min-w-[180px] px-0">
                {item.plan}
              </TableCell>
              <TableCell className=" p-0 lg:min-w-[200px] text-left">
                <div className="center-icon">
                  {item.beginner ? (
                    <CheckCircle2 strokeWidth={1.2} />
                  ) : (
                    <XCircle strokeWidth={1.2} />
                  )}
                </div>
              </TableCell>
              <TableCell className="p-0 lg:min-w-[260px] text-center">
                <div className="center-icon">
                  {item.intermediate ? (
                    <CheckCircle2 strokeWidth={1.2} />
                  ) : (
                    <XCircle strokeWidth={1.2} />
                  )}
                </div>
              </TableCell>
              <TableCell className="p-0 lg:min-w-[260px] text-center">
                <div className="center-icon">
                  {item.advance ? (
                    <CheckCircle2 strokeWidth={1.2} />
                  ) : (
                    <XCircle strokeWidth={1.2} />
                  )}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PricingPage;
