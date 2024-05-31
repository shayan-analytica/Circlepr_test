import React, { useEffect, useRef } from "react";
import { HashLink as Link } from "react-router-hash-link";

import "./Navbar.css";
import "./Responsive_Nav.css";

function Navbar() {
  const btn = useRef(null);
  const logo = useRef(null);
  const nav = useRef(null);
  const logoContainer2 = useRef(null);

  const rotate = () => {
    btn.current.classList.toggle("rotate1");
    logo.current.classList.toggle("logo-hide");
    logoContainer2.current.removeAttribute("id");  
  };

  const closeNavbar = (sectionId) => {
    const navbarToggler = document.getElementById("navbarNav");
    navbarToggler.classList.remove("show");
    btn.current.classList.toggle("rotate2");
    logo.current.classList.toggle("logo-hide");
    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        window.scrollTo({ top: section.offsetTop, behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };


  


  useEffect(() => {
    const navbar = document.getElementById("nav");
    const navbarOffset = navbar.offsetTop;
    // Function to update styles based on scroll position
    function updateNavbarStyles() {
      if (window.scrollY >= navbarOffset) {
        // Add the "fixed" styles to make the navbar fixed
        navbar.style.transition =
          "background-color 0.3s ease, transform 0.3s ease"; // Smooth transition
        navbar.style.position = "fixed";
        navbar.style.top = "0";
        navbar.style.transform = "translateY(0)";
        navbar.style.backgroundColor = "var(--primary-green)";
      } else {
        // Remove the "fixed" styles to make the navbar unfixed
        navbar.style.transition =
          "background-color 0.3s ease, transform 0.3s ease"; // Smooth transition
        navbar.style.position = "static";
        navbar.style.transform = "translateY(-100%)";
        navbar.style.backgroundColor = "transparent";
      }
    }

    // Call the update function on scroll
    window.addEventListener("scroll", updateNavbarStyles);

    // Call the update function on load
    updateNavbarStyles();
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light" id="nav" ref={nav}>
        <div className="container-fluid nav-container">
          <div
            style={{ width: "127.839px", height: "64px" }}
            id="logoContainer"
            ref={logo}
          >
            <Link className="navbar-brand" to="/">
              <img
                src="/assets/logos/CirclePR v5 white .png"
                alt=""
                style={{ objectFit: "contain" }}
                className="h-100 w-100"
              />
            </Link>
          </div>
          <button
            onClick={rotate}
            ref={btn}
            id="rotateBtn"
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav w-100">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/"  onClick={()=>closeNavbar()}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/aboutus" onClick={() => closeNavbar("aboutus-section")}>
                  AboutUs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/#working" onClick={() => closeNavbar("working-section")}>
                  How It Works
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/#giftingslider" onClick={() => closeNavbar("giftingslider-section")}>
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/#blogs" onClick={() => closeNavbar("blogs-section")}>
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/#contact" onClick={() => closeNavbar("contact-section")}>
                  Contact
                </Link>
              </li>
            </ul>

            <div className="d-flex btn-container" style={{ gap: "16px" }}>
              <button
                className="playstore-btn d-flex align-items-center justify-content-center"
                style={{ gap: "5px" }}
              >
                <img src="/assets/logos/playstore.png" alt="" />
                <span className="d-flex flex-column align-items-start">
                  Get it on
                  <span style={{ fontSize: "14px", fontWeight: "600" }}>
                    Google Play
                  </span>
                </span>
              </button>
              <button
                className="playstore-btn d-flex align-items-center justify-content-center"
                style={{ gap: "5px" }}
              >
                <img
                  src="/assets/logos/appstore.png"
                  alt=""
                  style={{ width: "36px", height: "38px" }}
                />
                <span className="d-flex flex-column align-items-start">
                  Download on the
                  <span style={{ fontSize: "14px", fontWeight: "600" }}>
                    Apple Store
                  </span>
                </span>
              </button>
            </div>
            <div className="d-flex justify-content-center my-5">
              <div
                style={{ width: "127.839px", height: "64px" }}
                id="logoContainer2"
                ref={logoContainer2}
              >
                <Link className="navbar-brand" to="/">
                  <img
                    src="/assets/logos/CirclePR v5 white .png"
                    alt=""
                    style={{ objectFit: "contain" }}
                    className="h-100 w-100"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
