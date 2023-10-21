import React from "react";
import MobileSidebar from "./MobileSidebar";
import { UserButton } from "@clerk/nextjs";

const Sidebar = () => {
  return (
    <div className="w-full flex items-center">
      <MobileSidebar />
      <div className="w-full flex justify-end ">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Sidebar;
