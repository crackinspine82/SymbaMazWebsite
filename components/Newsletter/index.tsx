"use client";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription here
    console.log("Newsletter subscription for:", email);
    setEmail("");
  };

  return (
    <section className="relative z-10 overflow-hidden bg-primary py-20 lg:py-[115px]">
      <div className="container mx-auto">
        <div className="relative overflow-hidden">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[570px] text-center">
                <h2 className="mb-2 text-3xl font-bold leading-tight text-white sm:text-4xl sm:leading-tight">
                  Subscribe to Our Newsletter
                </h2>
                <p className="mb-6 text-base leading-relaxed text-white md:text-lg">
                  Stay updated with our latest news, projects, and sustainable energy initiatives
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-5 py-3 text-base bg-white border outline-none border-stroke text-body-color rounded-lg focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6 sm:w-2/3"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-primary transition duration-300 ease-in-out bg-white rounded-lg hover:bg-opacity-90 sm:w-1/3"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
