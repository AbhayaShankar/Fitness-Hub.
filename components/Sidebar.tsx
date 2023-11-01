import React from "react";
import MobileSidebar from "./MobileSidebar";
import { UserButton } from "@clerk/nextjs";
import SubscribeSheet from "./SubscribeSheet";

const Sidebar = () => {
  return (
    <div className="w-full flex items-center justify-between p-2 lg:p-0 sticky left-0 top-0 z-30 bg-[#fff] dark:bg-[#0c0a09]">
      <MobileSidebar />
      <div className="flex items-center gap-x-5 lg:hidden ">
        <SubscribeSheet />
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Sidebar;
