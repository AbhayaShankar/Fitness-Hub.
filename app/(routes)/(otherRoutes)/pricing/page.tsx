"use client";

import PricingCard from "@/components/PricingCard";
import React, { useState } from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { CheckCircle2, XCircle } from "lucide-react";
import { PRICING_PLANS } from "@/constants";
import { Badge } from "@/components/ui/badge";

interface CustomRadioButtonProps {
  label: string;
  value: string;
  selectedValue: string;
  onChange(arg: string): any;
}

const PricingPage = () => {
  const [billingPeriod, setBillingPeriod] = useState("monthly");

  const handleBillingPeriodChange = (value: string) => {
    setBillingPeriod(value);
  };

  return (
    <div>
      <div>
        <h1 className="absolute top-[260px] left-[44%] text-[30px] tracking-wide font-semibold capitalize text-white dark:text-white">
          Pricing
        </h1>
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-center gap-10 p-10">
          <div>
            <h2 className="capitalize text-lg font-medium mb-4">
              Pick your plan
            </h2>
            <div className="flex flex-col  items-start gap-1 p-4 tracking border-[1px] rounded-lg border-muted-foreground/30">
              <CustomRadioButton
                label="Monthly Billing"
                value="monthly"
                selectedValue={billingPeriod}
                onChange={handleBillingPeriodChange}
              />
              <div>
                <CustomRadioButton
                  label="Yearly Billing"
                  value="yearly"
                  selectedValue={billingPeriod}
                  onChange={handleBillingPeriodChange}
                />
                <Badge variant={"custom1"}>Save 20%</Badge>
              </div>
            </div>
          </div>
          {billingPeriod === "monthly" ? (
            <>
              <PricingCard
                billingPeriod="monthly"
                planType="Beginners Plan"
                MonthlyAmount={10}
              />
              <PricingCard
                billingPeriod="monthly"
                planType="Intermediate Plan"
                MonthlyAmount={30}
              />
              <PricingCard
                billingPeriod="monthly"
                planType="Advance Plan"
                MonthlyAmount={50}
              />
            </>
          ) : (
            <>
              <PricingCard
                billingPeriod="yearly"
                planType="Beginners Plan"
                YearlyAmount={100}
              />
              <PricingCard
                billingPeriod="yearly"
                planType="Intermediate Plan"
                YearlyAmount={288}
              />
              <PricingCard
                billingPeriod="yearly"
                planType="Advance Plan"
                YearlyAmount={480}
              />
            </>
          )}
        </div>
      </div>
      <Table className="p-4 px-6 lg:p-0 lg:px-0 lg:w-fit lg:mx-auto mb-20">
        <TableBody>
          {PRICING_PLANS.map((item) => (
            <TableRow className="" key={item.id}>
              <TableCell className="font-medium px-0 pl-1 pr-5 lg:min-w-[280px] ">
                {item.plan}
              </TableCell>
              <TableCell className="p-1 lg:pr-0 lg:min-w-[200px] text-left">
                <div className="center-icon">
                  {item.beginner ? (
                    <CheckCircle2 strokeWidth={1.2} />
                  ) : (
                    <XCircle strokeWidth={1.2} />
                  )}
                </div>
              </TableCell>
              <TableCell className="p-1 lg:min-w-[260px] text-center lg:pl-10">
                <div className="center-icon">
                  {item.intermediate ? (
                    <CheckCircle2 strokeWidth={1.2} />
                  ) : (
                    <XCircle strokeWidth={1.2} />
                  )}
                </div>
              </TableCell>
              <TableCell className="p-1 lg:pl-8 lg:min-w-[260px] pr-0 text-center">
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

function CustomRadioButton({
  label,
  value,
  selectedValue,
  onChange,
}: CustomRadioButtonProps) {
  const isChecked = selectedValue === value;

  return (
    <label>
      <input
        type="radio"
        value={value}
        checked={isChecked}
        onChange={() => onChange(value)}
      />
      {label}
    </label>
  );
}

export default PricingPage;
