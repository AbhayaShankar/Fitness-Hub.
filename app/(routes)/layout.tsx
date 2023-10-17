import { Navbar } from "@/components/Navbar";

const Routelayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default Routelayout;
