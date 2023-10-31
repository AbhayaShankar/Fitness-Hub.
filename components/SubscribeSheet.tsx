"use client";

import React, { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Montserrat } from "next/font/google";
import { Navbar } from "./Navbar";

const font = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const SubscribeSheet = () => {
  const [sheetOpen, setSheetOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSheetOpen(true);
    }, 8000);
  }, []);

  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger asChild>
        {/* add this along with theme toggler and you would have to refractor the code for links while responsive design layout as well. */}
        <Button variant={"ghost"} size={"icon"} className="hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side={"right"} className="p-0">
        {/* Also need to design this compoennt */}
        <Navbar setOpen={setSheetOpen} />
      </SheetContent>
    </Sheet>
  );
};

export default SubscribeSheet;
