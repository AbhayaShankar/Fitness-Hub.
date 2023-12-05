import { Button } from "./ui/button";

interface PricingCardProps {
  planType: string;
  MonthlyAmount?: number;
  YearlyAmount?: number;
  billingPeriod: string;
  isDefault: boolean;
}

const PricingCard = ({
  planType,
  MonthlyAmount,
  YearlyAmount,
  billingPeriod,
  isDefault,
}: PricingCardProps) => {
  return (
    <div
      className={`min-w-[220px] rounded-lg p-5 text-center hover:bg-[#0c0a09] hover:dark:bg-white/90 transition-all duration-100 ease-in group hover:scale-[1.05] ${
        isDefault && "bg-[#0c0a09] dark:bg-white/90"
      }`}
    >
      <h2
        className={`text-base font-medium mb-5 group-hover:text-white dark:group-hover:text-[#0c0a09] ${
          isDefault && "text-white dark:text-[#0c0a09]"
        }`}
      >
        {planType}
      </h2>
      <h1
        className={`text-5xl font-bold mb-2 group-hover:text-white dark:group-hover:text-[#0c0a09] ${
          isDefault && "text-white dark:text-[#0c0a09]"
        }`}
      >
        ${billingPeriod === "yearly" ? YearlyAmount : MonthlyAmount}
      </h1>
      <p
        className={`text-xs font-medium text-muted-foreground mb-8 group-hover:text-white dark:group-hover:text-[#0c0a09]  ${
          isDefault && "text-white dark:text-[#0c0a09]"
        }`}
      >
        Per Month
      </p>
      <Button variant={"outline"} size={"sm"} className="rounded-full">
        Get Started
      </Button>
    </div>
  );
};

export default PricingCard;
