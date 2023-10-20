import { Navbar } from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const Routelayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative">
      <div className="hidden lg:block w-full">
        <Navbar />
      </div>
      <main>
        <Sidebar />
        {children}
      </main>
    </div>
  );
};

export default Routelayout;
