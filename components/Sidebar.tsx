import React from "react";
import MobileSidebar from "./MobileSidebar";
import { UserButton } from "@clerk/nextjs";

const Sidebar = () => {
  return (
    <div className="w-full flex items-center justify-between p-2 sticky left-0 top-0 z-50 bg-[#fff] dark:bg-[#0c0a09]">
      <MobileSidebar />
      <div className="lg:hidden ">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Sidebar;
