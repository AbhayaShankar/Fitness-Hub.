"use client";

import React, { useState } from "react";
import { Badge } from "./ui/badge";
import PricingCard from "./PricingCard";

interface CustomRadioButtonProps {
  label: string;
  value: string;
  selectedValue: string;
  onChange(arg: string): any;
}

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
        className="mr-[6px] checked:bg-blue-700 indeterminate:bg-red-500"
        type="radio"
        value={value}
        checked={isChecked}
        onChange={() => onChange(value)}
      />
      {label}
    </label>
  );
}

const PricingComp = () => {
  const [billingPeriod, setBillingPeriod] = useState("monthly");

  const handleBillingPeriodChange = (value: string) => {
    setBillingPeriod(value);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-end justify-center gap-10 p-10">
      <div>
        <h2 className="capitalize text-lg font-medium mb-4">Pick your plan</h2>
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
            isDefault={true}
          />
          <PricingCard
            billingPeriod="monthly"
            planType="Intermediate Plan"
            MonthlyAmount={30}
            isDefault={false}
          />
          <PricingCard
            billingPeriod="monthly"
            planType="Advance Plan"
            MonthlyAmount={50}
            isDefault={false}
          />
        </>
      ) : (
        <>
          <PricingCard
            billingPeriod="yearly"
            planType="Beginners Plan"
            YearlyAmount={100}
            isDefault={false}
          />
          <PricingCard
            billingPeriod="yearly"
            planType="Intermediate Plan"
            YearlyAmount={288}
            isDefault={true}
          />
          <PricingCard
            billingPeriod="yearly"
            planType="Advance Plan"
            YearlyAmount={480}
            isDefault={false}
          />
        </>
      )}
    </div>
  );
};

export default PricingComp;
