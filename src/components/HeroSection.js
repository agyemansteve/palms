import React, { useEffect } from "react";
import "../App.css";

import "./HeroSection.css";
import AOS from "aos";
import "aos/dist/aos.css";

function HeroSection(props) {
  useEffect(() => {
    AOS.init({
      startEvent: "DOMContentLoaded",
      duration: 2000,
    });
  }, []);

  useEffect(() => {
    let prevScrollpos = window.pageYOffset;
    let downArrow = document.querySelector(".down-arrow");
    let menuBtns = document.querySelector(".menu-btns");

    window.onscroll = function () {
      if (menuBtns === null) {
        return;
      }
      let currentScrollPos = window.pageYOffset;
      if (currentScrollPos === 0) {
        if (window.screen.width < 760) {
          downArrow.style.top = "302px";
          menuBtns.style.top = "474px";
        } else {
          downArrow.style.top = "250px";
          menuBtns.style.top = "81%";
        }
      } else {
        downArrow.style.top = "-60%";
        menuBtns.style.top = "-60%";
      }
      prevScrollpos = currentScrollPos;
    };
  }, []);

  return (
    <div
      className="hero-container"
      style={{ background: props.backgroundImg }}
      id={props.id}
    >
      <video src={props.bgVideo} autoPlay loop muted />

      <div className="hero-text " data-aos="fade-up">
        <h1>{props.title}</h1>

        <p>{props.para}</p>
      </div>

      <i className="fas fa-chevron-down down-arrow bounce2"></i>
    </div>
  );
}

export default HeroSection;
