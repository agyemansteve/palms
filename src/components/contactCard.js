import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import "./contactCard.css";

export default function ContactCard(props) {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div data-aos="zoom-in" className="contact-card-links">
      <a
        className="contact-card-links bounce"
        href={props.href}
        target="_blank"
        //  rel="noopener noreferrer"
        aria-label={props.label}
      >
        <i className={`fas contact-card-item ${props.icon}`}> </i>
        <p className="contact-card-item">{`${props.action}: ${props.to}`}</p>
      </a>
    </div>
  );
}
