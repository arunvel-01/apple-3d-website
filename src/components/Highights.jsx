import { useGSAP } from "@gsap/react"; // Importing necessary dependencies
import { gsap } from "gsap";
import React from "react";
import { rightImg, watchImg } from "../utils"; // Assuming these are image assets
import VideoCarousel from "./VideoCarousel"; // Assuming this is a component for a video carousel

const Highights = () => {
  // Using the useGSAP hook to trigger animations
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0 }); // Fade in and move the title
    gsap.to(".link", { opacity: 1, y: 0, duration: 1, stagger: 0.25 }); // Fade in the links with stagger effect
  }, []);

  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc "
    >
      <div className=" screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          {/* Section title */}
          <h1 id="title" className="section-heading">
            Get the highlights.
          </h1>
          {/* Links */}
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film
              <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link">
              Watch the event
              <img src={rightImg} alt="right" className="ml-2" />
            </p>
          </div>
        </div>
        {/* Video carousel component */}
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highights;
