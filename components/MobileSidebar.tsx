"use client";

import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Montserrat } from "next/font/google";
import { Navbar } from "./Navbar";

const font = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const MobileSidebar = () => {
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger asChild>
        <Button variant={"ghost"} size={"icon"} className="lg:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="p-0">
        {/* REFERENCE - https://codesandbox.io/s/upbeat-galileo-6rxfm7?file=/src/App.tsx:1476-1483 */}
        <Navbar setOpen={setSheetOpen} />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
