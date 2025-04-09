import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Symba Maz Projects",
  description: "This is home for Symba Maz Projects",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Newsletter />
    </>
  );
}


/**<Video />
<Brands />
<Testimonials />
<Pricing />
<Blog />*/
      
