import React from "react";
import "./hero.component.scss";
const Hero = () => {
  return (
    <div className="hero min-h-screen hero-background">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Your Trusted Local Plumbing Experts
          </h1>
          <p className="mb-5">
            At [Your Plumbing Company Name], we deliver reliable, expert
            plumbing services for homes and businesses in [City/Region]. From
            quick repairs to full installations, our licensed team is here to
            handle all your plumbing needs with efficiency and care.
          </p>
          <button className="btn btn-primary">Call Us Today</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
