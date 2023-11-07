import { Metadata } from "next";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { CheckCircle2, XCircle } from "lucide-react";
import { PRICING_PLANS } from "@/constants";
import PricingComp from "@/components/PricingComp";

export const metadata: Metadata = {
  title: "Pricing - Fitness Hub",
  description: "Pricing page",
};

const PricingPage = () => {
  return (
    <div>
      <div>
        <h1 className="absolute top-[260px] left-[44%] text-[30px] tracking-wide font-semibold capitalize text-white dark:text-white">
          Pricing
        </h1>
      </div>
      <PricingComp />
      <Table className="p-4 px-6 lg:p-0 lg:px-0 lg:w-fit lg:mx-auto mb-20">
        <TableBody>
          {PRICING_PLANS.map((item) => (
            <TableRow
              className="hover:bg-black/5 dark:hover:bg-white/5"
              key={item.id}
            >
              <TableCell className="font-medium px-0 pl-1 pr-5 lg:min-w-[280px] ">
                {item.plan}
              </TableCell>
              <TableCell className="p-1 lg:pr-0 lg:min-w-[200px] text-left">
                <div className="center-icon">
                  {item.beginner ? (
                    <CheckCircle2
                      className="text-green-500"
                      strokeWidth={1.2}
                    />
                  ) : (
                    <XCircle className="text-red-500" strokeWidth={1.2} />
                  )}
                </div>
              </TableCell>
              <TableCell className="p-1 lg:min-w-[260px] text-center lg:pl-10">
                <div className="center-icon">
                  {item.intermediate ? (
                    <CheckCircle2
                      className="text-green-500"
                      strokeWidth={1.2}
                    />
                  ) : (
                    <XCircle className="text-red-500" strokeWidth={1.2} />
                  )}
                </div>
              </TableCell>
              <TableCell className="p-1 lg:pl-8 lg:min-w-[260px] pr-0 text-center">
                <div className="center-icon">
                  {item.advance ? (
                    <CheckCircle2
                      className="text-green-500"
                      strokeWidth={1.2}
                    />
                  ) : (
                    <XCircle className="text-red-500" strokeWidth={1.2} />
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
