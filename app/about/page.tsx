import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Symba-Maz",
  description: "This is About Page for Symba-Maz Projects Provate Limited India",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Symba-Maz"
        description="We are a global catalyst for a cleaner, smarter, and more sustainable energy future and revolutionize how the world converts waste, harnesses the sun, and trades resources."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
