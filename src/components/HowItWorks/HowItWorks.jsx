import React from "react";
import "./HowItWorks.css";
import "./Responsive_Howitworks.css";

function HowItWorks() {
  return (
    <>
      <section className="container-fluid section-2" id="working">
        <div className="row">
          <div
            id="workingslider"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
            data-bs-interval="2000"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#workingslider"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#workingslider"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#workingslider"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="w-50 d-flex justify-content-center left-col">
                  <div className="image-container" data-aos="fade-right">
                    <img
                      src="/assets/images/feature1.png"
                      className="d-block w-100"
                      alt="..."
                      loading="lazy"
                    />
                  </div>
                </div>
                <div
                  className="w-50 d-flex flex-column right-col"
                  style={{ gap: "30px" }}
                >
                  <h4 data-aos="fade-left">Choose Presents by Occasion</h4>
                  <p data-aos="fade-left">
                    Explore Circlepr's innovative 'Choose Gifts by Occasion'
                    feature for effortless corporate gifting. Find tailored, and
                    elegant gifts for every business milestone. Strengthen
                    relationships, and leave a lasting impression. Elevate your
                    corporate relationships with user-friendly interface and
                    personalized recommendations. Make each occasion memorable.
                  </p>
                  <div
                    className="d-flex btn-container"
                    data-aos="fade-left"
                    style={{ gap: "16px" }}
                  >
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
                </div>
              </div>
              <div className="carousel-item">
                <div className="w-50 d-flex justify-content-center left-col">
                  <div className="image-container" data-aos="fade-right">
                    <img
                      src="/assets/images/feature2.png"
                      className="d-block w-100"
                      alt="..."
                      loading="lazy"
                    />
                  </div>
                </div>
                <div
                  className="w-50 d-flex flex-column right-col"
                  style={{ gap: "30px" }}
                >
                  <h4 data-aos="fade-left">AI - Powered Present Suggestions</h4>
                  <p data-aos="fade-left">
                    We use artificial intelligence to analyze your recipient’s
                    data and behavior, provide you with the best present
                    options. Whether you want to increase loyalty, generate
                    referrals, or strengthen relationships, Circlepr will help
                    you to find the most effective present for your professional
                    relationship enhancement strategy.{" "}
                  </p>
                  <div
                    data-aos="fade-left"
                    className="d-flex btn-container"
                    style={{ gap: "16px" }}
                  >
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
                </div>
              </div>
              <div className="carousel-item">
                <div className="w-50 d-flex justify-content-center left-col">
                  <div className="image-container" data-aos="fade-right">
                    <img
                      src="/assets/images/feature3.png"
                      className="d-block w-100"
                      alt="..."
                      loading="lazy"
                    />
                  </div>
                </div>
                <div
                  className="w-50 d-flex flex-column right-col"
                  style={{ gap: "30px" }}
                >
                  <h4 data-aos="fade-left">
                    Send Presents to Multiple Recipients
                  </h4>
                  <p data-aos="fade-left">
                    We made it easy to send presents to multiple recipients at
                    once, and schedule them in advance. You can select one
                    present for a group of contacts or customize each present
                    individually. You can also set the date and time for
                    delivery, and we will take care of the rest. No more
                    forgetting or procrastinating!{" "}
                  </p>
                  <div
                    data-aos="fade-left"
                    className="d-flex btn-container"
                    style={{ gap: "16px" }}
                  >
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HowItWorks;
