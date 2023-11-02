import { Metadata } from "next";
import Contact from "@/components/Contact";
import Map from "@/components/DynamicMap";

export const metadata: Metadata = {
  title: "Contact - Fitness Hub",
  description: "Contact FitnessHub for joining and more",
};

const ContactPage = () => {
  return (
    <div className="p-4 lg:p-8 ">
      <h1 className="absolute top-[260px] left-[44%] text-[30px] tracking-wide font-semibold capitalize text-white dark:text-white">
        Contact
      </h1>
      <Contact />
      <Map />
    </div>
  );
};

export default ContactPage;
