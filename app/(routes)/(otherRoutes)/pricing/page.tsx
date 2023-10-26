import PricingCard from "@/components/PricingCard";
import { Button } from "@/components/ui/button";
import React from "react";

const PricingPage = () => {
  return (
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
  );
};

export default PricingPage;
