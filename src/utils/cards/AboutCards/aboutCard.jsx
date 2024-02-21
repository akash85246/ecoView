import React, { useState } from "react";
import "./AboutCard.css";

export default function AboutCard(props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="about-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={props.devloperPhoto}
        className="developer-image"
        alt="Developer"
      ></img>
      <div className={`slider ${isHovered ? "active" : ""}`}>
        <h1>{props.heading}</h1>
        <h2>{props.content}</h2>
      </div>
    </div>
  );
}
