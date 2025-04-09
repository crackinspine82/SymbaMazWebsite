import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "This is Contact Page for Symba-Maz",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Whether you're seeking innovative energy solutions or exploring partnership opportunities, the SYMBA MAZ team is ready to connect."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
