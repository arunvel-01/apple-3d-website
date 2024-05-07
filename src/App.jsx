import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highights";
import Model from "./components/Model";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react"

import * as Sentry from "@sentry/react";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
      <Analytics />
    </main>
    
  );
};

export default Sentry.withProfiler(App);
