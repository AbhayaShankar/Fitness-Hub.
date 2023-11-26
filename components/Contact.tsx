import React from "react";
import ContactForm from "./ContactForm";
import ContactContent from "./ContactContent";

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center p-2 lg:p-8 gap-5 gap-x-12">
      <ContactContent />
      <ContactForm />
    </div>
  );
};

export default Contact;
