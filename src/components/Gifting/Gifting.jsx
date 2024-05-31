import React from "react";
import "./Gifting.css";
import "./Responsive_Gifting.css";

function Gifting() {
  return (
    <>
      <section className="container-fluid section-3">
        <div className="row">
          <div
            id="giftingslider"
            className="carousel slide carousel-fade p-0"
            data-bs-ride="carousel"
            data-bs-interval="200000"
          >
            <div className="carousel-inner">
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#giftingslider"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#giftingslider"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#giftingslider"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-item active">
                <div
                  className="w-50 d-flex flex-column left-col"
                  data-aos="zoom-in-up"
                >
                  <h6>Access From Anywhere</h6>
                  <h3>
                    Let Recommendations{" "}
                    <span style={{ fontWeight: "700" }}>
                      Make Every Gift Count!
                    </span>
                  </h3>
                  <div className="d-flex align-items-center item-abs">
                    <span>
                      <img src="/assets/icons/phone-icon.png" alt="" />
                    </span>
                    <div
                      className="d-flex flex-column"
                      style={{
                        color: "var(--Neutrals-800, #39423D)",
                        fontFamily: "var(--font-quicksand)",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: "500",
                        lineHeight: "150%" /* 21px */,
                        marginLeft: "-6px",
                      }}
                    >
                      <span>Available on</span>
                      <span>iOS / Android</span>
                    </div>
                  </div>
                </div>
                <div className="w-50 d-flex justify-content-center right-col">
                  <div className="image-container">
                    <img
                      src="/assets/images/gifting1.png"
                      loading="lazy"
                      className="d-block h-100 w-100"
                      alt="..."
                    />
                  </div>
                  <div className="overlay"></div>
                </div>
              </div>
              <div className="carousel-item">
                <div
                  className="w-50 d-flex flex-column left-col"
                  data-aos="zoom-in-up"
                >
                  <h6>Access From Anywhere</h6>
                  <h3>
                    Elevate your corporate connections
                    <span style={{ fontWeight: "700" }}>
                      {" "}
                      with effortless gifting
                    </span>
                  </h3>
                  <div className="d-flex align-items-center item-abs">
                    <span>
                      <img src="/assets/icons/phone-icon.png" alt="" />
                    </span>
                    <div
                      className="d-flex flex-column"
                      style={{
                        color: "var(--Neutrals-800, #39423D)",
                        fontFamily: "var(--font-quicksand)",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: "500",
                        lineHeight: "150%" /* 21px */,
                        marginLeft: "-6px",
                      }}
                    >
                      <span>Available on</span>
                      <span>iOS / Android</span>
                    </div>
                  </div>
                </div>
                <div className="w-50 d-flex justify-content-center right-col">
                  <div className="image-container">
                    <img
                      src="/assets/images/gifting2.png"
                      loading="lazy"
                      className="d-block h-100 w-100"
                      alt="..."
                    />
                  </div>
                  <div className="overlay"></div>
                </div>
              </div>
              <div className="carousel-item">
                <div
                  className="w-50 d-flex flex-column left-col"
                  data-aos="zoom-in-up"
                >
                  <h6>Access From Anywhere</h6>
                  <h3>
                    Impress with professional
                    <span style={{ fontWeight: "700" }}>
                      {" "}
                      elegant gifts for every occasion
                    </span>
                  </h3>
                  <div className="d-flex align-items-center item-abs">
                    <span>
                      <img src="/assets/icons/phone-icon.png" alt="" />
                    </span>
                    <div
                      className="d-flex flex-column"
                      style={{
                        color: "var(--Neutrals-800, #39423D)",
                        fontFamily: "var(--font-quicksand)",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: "500",
                        lineHeight: "150%",
                        /* 21px */ marginLeft: "-6px",
                      }}
                    >
                      <span>Available on</span>
                      <span>iOS / Android</span>
                    </div>
                  </div>
                </div>
                <div className="w-50 d-flex justify-content-center right-col">
                  <div className="image-container">
                    <img
                      src="/assets/images/gifting3.png"
                      loading="lazy"
                      className="d-block h-100 w-100"
                      alt="..."
                    />
                  </div>
                  <div className="overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gifting;
