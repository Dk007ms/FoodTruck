import React from "react";
import "./Card.css";

const Card = ({ imageUrl, heading, info }) => {
  return (
    <div className="new-card">
      <img src={imageUrl} alt={heading} className="new-card-image" />
      <div className="new-card-content">
        <h2 className="new-card-heading">{heading}</h2>
        <p className="new-card-info">{info}</p>
        <button className="new-card-button">Read More</button>
      </div>
    </div>
  );
};

export default Card;
