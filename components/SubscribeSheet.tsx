"use client";

import React, { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { UserPlus } from "lucide-react";
import SubscribeComp from "./Subscribe";

const SubscribeSheet = () => {
  const [sheetOpen, setSheetOpen] = useState(false);

  useEffect(() => {
    const timeoutFn = setTimeout(() => {
      setSheetOpen(false);
    }, 8000);

    return () => {
      clearTimeout(timeoutFn);
    };
  }, []);

  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger asChild>
        {/* add this along with theme toggler and you would have to refractor the code for links while responsive design layout as well. */}
        <Button variant={"outline"} size={"icon"} className="">
          <UserPlus className="w-5 h-5" strokeWidth={1.75} />
        </Button>
      </SheetTrigger>
      <SheetContent side={"right"} className="p-0 overflow-y-scroll">
        <SubscribeComp setOpen={setSheetOpen} />
      </SheetContent>
    </Sheet>
  );
};

/*

export const SubscribeSheetDesktop = () => {
    const [sheetOpen, setSheetOpen] = useState(false);
  
    useEffect(() => {
      setTimeout(() => {
        setSheetOpen(true);
      }, 8000);
    }, []);
  
    return (
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger asChild>
          <Button variant={"outline"} size={"icon"} className="">
            <UserPlus className="w-5 h-5" strokeWidth={1.75} />
          </Button>
        </SheetTrigger>
        <SheetContent side={"right"} className="p-0 overflow-y-scroll">
          <SubscribeComp setOpen={setSheetOpen} />
        </SheetContent>
      </Sheet>
    );
  };
  
  */

export default SubscribeSheet;
