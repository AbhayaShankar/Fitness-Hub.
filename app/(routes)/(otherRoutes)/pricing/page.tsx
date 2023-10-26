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

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
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
      <div className="p-4  xl:px-[300px] ">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="min-w-[220px]">Invoice</TableHead>
              <TableHead className="min-w-[220px]">Status</TableHead>
              <TableHead className="min-w-[220px]">Method</TableHead>
              <TableHead className="text-center min-w-[220px]">
                Amount
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                <TableCell>{invoice.paymentStatus}</TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>
                <TableCell className="text-center">
                  {invoice.totalAmount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default PricingPage;
