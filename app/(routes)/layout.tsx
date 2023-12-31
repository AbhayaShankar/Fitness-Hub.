import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { cn } from "@/lib/utils";

const Routelayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={cn(`min-h-full relative`)}>
      <div className="hidden lg:block sticky top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <main>
        <Sidebar />
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default Routelayout;
