import React from "react";
import DynamicCard from "../dynamic-card/dynamic-card.component";

// Icons
import pipe from "../../assets/icons/pipes.svg";
import emergency from "../../assets/icons/emergency.svg";
import unclog from "../../assets/icons/unclog.svg";
import maintenance from "../../assets/icons/maintenance.svg";
import water from "../../assets/icons/water.svg";
import fire from "../../assets/icons/fire.svg";

import "./feature-section.comonent.scss";

const FeatureSection = () => {
  const cards = [
    {
      title: "Pipe Repair and Replacement",
      body: "Replacing old pipes with new materials like copper, PEX, or PVC.",
      image: pipe,
    },
    {
      title: "Drain Cleaning and Unclogging",
      body: "Hydro-jetting or snaking to remove blockages in the drainage system.",
      image: unclog,
    },
    {
      title: "Emergency Plumbing",
      body: "Immediate response to urgent issues like burst pipes, leaks, clogs, or gas leaks.",
      image: emergency,
    },
    {
      title: "Water Treatment and Filtration",
      body: "Water filtration system installation: Installing systems to improve water quality.",
      image: water,
    },
    {
      title: "Maintenance Services",
      body: "Pipe inspections, Water pressure checks, and Leak detection",
      image: maintenance,
    },
    {
      title: "Water Heater",
      body: "Trust our experts for efficient water heater installations and repairs.",
      image: fire,
    },
  ];

  return (
    <div id="about-us">
      <div className="hero bg-base-200 about-us">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={require("../../assets/images/plumbing.jpg")}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="Plumbing"
          />
          <div>
            <h1 className="text-5xl font-bold">
              About Us: <br /> Delivering Reliable Plumbing Solutions
            </h1>
            <p className="py-6">
              At [Your Plumbing Business Name], we pride ourselves on being a
              reliable and trusted plumbing service provider in [City/Region].
              With over [X] years of experience, we offer comprehensive plumbing
              solutions for both residential and commercial clients. Whether
              it’s fixing a simple leak, installing a new system, or providing
              emergency repairs, we have the expertise to handle all your
              plumbing needs.
            </p>
            <p className="py-6">
              Our team of licensed and insured plumbers is committed to
              delivering high-quality workmanship with exceptional customer
              service. We understand the importance of quick and efficient
              service, so we always aim to resolve issues promptly, ensuring
              your home or business runs smoothly.
            </p>
            <p className="py-6">
              Trust [Your Plumbing Business Name] for all your plumbing needs.
              Let us take care of the problem so you can focus on what matters
              most!
            </p>
            <button className="btn btn-primary">Contact Us</button>
          </div>
        </div>
      </div>
      {/* SERVICES */}
      <div className="all-services" id="services">
        <div className="text-5xl font-bold services-title">
          <p>Our Plumbing Services</p>
        </div>
        <div className="services">
          {cards.map((card) => (
            <div className="individual-service">
              <DynamicCard
                title={card.title}
                body={card.body}
                image={card.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
