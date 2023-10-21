"use client";

import React, { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Navbar } from "./Navbar";

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
        <Navbar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
