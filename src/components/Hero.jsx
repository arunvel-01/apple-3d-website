import { useGSAP } from "@gsap/react"; // Importing necessary dependencies
import gsap from "gsap";
import React, { useEffect, useState } from "react";
import { heroVideo, smallHeroVideo } from "../utils"; // Assuming these are video assets

const Hero = () => {
  // State to manage the video source based on window width
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  // Function to handle setting the video source based on window width
  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  // Effect to add and remove resize event listener
  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);
    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);

  // Using the useGSAP hook to trigger animations
  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 2 }); // Fade in the hero title
    gsap.to("#cta", { opacity: 1, y: -50, delay: 2 }); // Slide up the call to action
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        {/* Hero title */}
        <p id="hero" className="hero-title">
          iPhone 15 Pro
        </p>
        {/* Video element */}
        <div className="md:w-10/12 w-9/12">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Call to action */}
      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlights" className="btn">
          Buy
        </a>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
