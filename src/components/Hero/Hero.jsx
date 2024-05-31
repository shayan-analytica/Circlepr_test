import React from "react";
import "./Hero.css";
import "./Responsive_Hero.css";

function Hero() {
  return (
    <>
      <section className="container-fluid hero-section p-0">
        <div className="row w-100 h-100" style={{ position: "relative" }}>
          <div className="col-12 p-0 d-flex flex-row align-items-center justify-content-start hero-content">
            <div
              className="hero-content d-flex flex-column align-items-start"
              data-aos="fade-up"
            >
              <hr />
              <h3>"Strengthen Your Professional Relationships"</h3>
              <h5>Recognition Made Easy and Effective</h5>
            </div>
            <div className="hero-img">
              <img
                src="/assets/images/hero-img.png"
                className="h-100 w-100"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="row w-100 d-flex align-items-center justify-content-start logo-row-mobile">
          <div
            className="d-flex align-items-center justify-content-between logo-block"
            id="logo-block-desk"
          >
            <div className="logo-container">
              <img src="/assets/logos/hopin-logo.svg" alt="" />
            </div>

            <div className="logo-container">
              <img src="/assets/logos/pendo-logo.svg" alt="" />
            </div>

            <div className="logo-container">
              <img src="/assets/logos/fivetran-logo.svg" alt="" />
            </div>
          </div>
          <div
            className="d-flex align-items-center justify-content-between logo-block"
            data-aos="fade-right"
            id="logo-block-mobile"
          >
            <div className="logo-container">
              <img src="/assets/logos/l1.svg" alt="" />
            </div>

            <div className="logo-container">
              <img src="/assets/logos/l2.svg" alt="" />
            </div>

            <div className="logo-container">
              <img src="/assets/logos/l3.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
