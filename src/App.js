import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Gallery from "./components/pages/Gallery";
import Menu from "./components/pages/Menu";
import Contact from "./components/pages/Contact";
import ScrollToTop from "./ScrollToTop";
import Footer from "./components/Footer";
import Content from "./components/Content";

const SliderData = [
  {
    image: "images/img3.jpg",
  },
  {
    image: "images/img1.jpg",
  },
  {
    image: "images/img2.jpg",
  },
  {
    image: "images/img4.jpg",
  },
  {
    image: "images/img5.jpg",
  },

  {
    image: "images/img7.jpg",
  },
  {
    image: "images/bg1.jpg",
  },
  {
    image: "images/bg2.jpg",
  },
  {
    image: "images/bg3.jpg",
  },
  {
    image: "images/bg4.jpg",
  },
  {
    image: "images/img7.jpg",
  },
  {
    image: "images/fd1.jpg",
  },
  {
    image: "images/fd2.jpg",
  },
  {
    image: "images/fd3.jpg",
  },
  {
    image: "images/fd4.jpg",
  },
  {
    image: "images/fd5.jpg",
  },
  {
    image: "images/fd6.jpg",
  },
  {
    image: "images/fd7.jpg",
  },
];

function App() {
  const handleScroll = () => {
    const downArrows = document.querySelectorAll(".fa-chevron-down");

    const optionTop = {
      root: null,
      threshold: 0,
      rootMargin: "0px",
    };

    const topObserver = new IntersectionObserver(function (
      entries,
      topObserver
    ) {
      entries.forEach((entry) => {
        const navbar = document.querySelector(".navbar");
        const navMenu = document.querySelector(".nav-menu");
        const midSvg = document.querySelector("#divider-mid");

        if (!entry.isIntersecting) {
          navbar.style.top = "auto";

          if (window.innerWidth <= 796) {
            navMenu.style.width = "100vw";
            navbar.style.background = `black`;
            navbar.style.bottom = "0";
          } else {
            navMenu.style.width = "30vw";
            navbar.style.bottom = "18px";

            navbar.style.background = ` transparent`;
          }
          navbar.style.height = "80px";
        } else {
          navbar.style.top = "0";
          navbar.style.bottom = "auto";

          if (midSvg === null) {
            return;
          } else {
            navMenu.style.width = "40vw";
          }

          if (window.innerWidth <= 796) {
            navMenu.style.width = "100vw";

            navbar.style.background = "transparent";
          } else {
            navMenu.style.width = "32vw";

            navbar.style.background = "#000000";
          }
        }
      });
    },
    optionTop);

    downArrows.forEach((arrow) => {
      topObserver.observe(arrow);
    });
  };

  useEffect(() => {
    handleScroll();
  }, []);

  return (
    <div className="app  scale-in-center">
      <Router>
        <ScrollToTop />

        <Navbar />

        <Switch>
          <Route path="/menu">
            <Menu />
          </Route>

          <Route path="/about">
            <Content
              mainBg="black"
              tittleAnime="fade-up"
              paraAnime="fade-down-left"
              imgAnime="fade-down-right"
              title="OUR STORY"
              btnDisplay="none"
              para={` "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
              src="images/img3.jpg"
              flexDirection="row"
            />
            <Gallery slides={SliderData} />
          </Route>

          <Route path="/events">
            <Content
              mainBg="#000000cc"
              tittleAnime="fade-up"
              paraAnime="fade-down-right"
              imgAnime="fade-down-left"
              flexDirection="row-reverse"
              title="EVENTS"
              para={
                "- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
              }
              src="images/mobilebg.jpg"
              btnDisplay="none"
            />
          </Route>

          <Route path="/contact">
            <Contact />

            <Content
              mainBg={`black`}
              btnDisplay="none"
              tittleAnime="fade-up"
              paraAnime="fade-up"
              btnTo="/contact"
              imgAnime="fade-right"
              flexDirection="column-reverse"
              title="We Loook Foward to hearing from you"
            />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
