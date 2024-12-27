import React from "react";
import "./dynamic-card.component.css";

const DynamicCard = ({ title, body, image }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="service" className="rounded-xl card-image" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default DynamicCard;
