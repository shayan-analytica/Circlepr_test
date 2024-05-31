import React from "react";
import "./Section.css";
import "./Responsive_section1.css";

function Section1() {
  return (
    <>
      <section className="container-fluid section-1">
        <div className="row">
          <div className="col-12 p-3 d-flex flex-column align-items-center justify-content-center">
            <div>
              <h3 data-aos="fade-right" className="mb-3">
                Enhance Connections with Delightful Giving
              </h3>
              <h6 data-aos="fade-right" className="mb-5">
                Your Professional Relationships are Important
              </h6>
            </div>
            <div className="img-container">
              <img
                src="/assets/images/section-1-image.png"
                alt=""
                className="w-100 h-100"
                data-aos="zoom-in"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section1;
