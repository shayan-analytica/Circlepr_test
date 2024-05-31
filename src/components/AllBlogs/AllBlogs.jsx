import React from "react";
import { Link } from 'react-router-dom'
import "./AllBlogs.css";
import "./Responsive_Allblogs.css"

import Loader from "../Loader/Loader";
import Navbar from "../Navbar/Navbar";
import Contact from "../Contact/Contact";
import NavigateToTop from "../NavigateToTop/NavigateToTop";
import Footer from "../Footer/Footer";

function AllBlogs() {
  return (
    <>
      {/* <Loader /> */}
      <Navbar />
      <section className="container-fluid page-title">
        <div className="row">
          <div className="col-12 d-flex flex-column justify-content-center align-items-center">
            <h1>News & Articles</h1>
            <h2>#1 Blog on making Personal Relations better.</h2>
          </div>
        </div>
      </section>
      <section className="container-fluid all-blogs">
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card" data-aos="fade-up" data-aos-duration="500">
              <div className="card-header">
                <img
                  src="src/assets/images/blogs/blog1.jpg"
                  alt=""
                  className="h-100 w-100"
                />
              </div>
              <div className="card-body">
                <h1 className="card-title">Corporate Relations Strategy</h1>
                <p className="card-description">
                  Make professional relationships easy with CirclePR – a smart
                  app for thoughtful gestures.
                </p>
                <Link className="read-more-btn" to="/blogpost1">
                  Read more
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card" data-aos="fade-up" data-aos-duration="1000">
              <div className="card-header">
                <img
                  src="src/assets/images/blogs/blog2.jpg"
                  alt=""
                  className="h-100 w-100"
                />
              </div>
              <div className="card-body">
                <h1 className="card-title">
                  Revolution in Corporate Relations
                </h1>
                <p className="card-description">
                  Navigate business connections, send thoughtful gestures, and
                  enhance your professional image.
                </p>
                <Link className="read-more-btn" to="/blogpost2">
                  Read more
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card" data-aos="fade-up" data-aos-duration="2000">
              <div className="card-header">
                <img
                  src="src/assets/images/blogs/blog9.jpg"
                  alt=""
                  className="h-100 w-100"
                />
              </div>
              <div className="card-body">
                <h1 className="card-title">
                  Professional Relationship Enhancement
                </h1>
                <p className="card-description">
                  AI-Powered Present Suggestions' for meaningful corporate
                  connections.
                </p>
                <Link className="read-more-btn" to="/blogpost3">
                  Read more
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card" data-aos="fade-up" data-aos-duration="3000">
              <div className="card-header">
                <img
                  src="src/assets/images/blogs/blog8.jpg"
                  alt=""
                  className="h-100 w-100"
                />
              </div>
              <div className="card-body">
                <h1 className="card-title">Crafting Lasting Impressions</h1>
                <p className="card-description">
                  From commemorating milestones to expressing gratitude, this
                  tool ensures every occasion is marked with meaningful gifts.
                </p>
                <Link className="read-more-btn" to="/blogpost4">
                  Read more
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card" data-aos="fade-up" data-aos-duration="500">
              <div className="card-header">
                <img
                  src="src/assets/images/blogs/blog7.jpg"
                  alt=""
                  className="h-100 w-100"
                />
              </div>
              <div className="card-body">
                <h1 className="card-title">Elevating Corporate Relations</h1>
                <p className="card-description">
                  Enhance Connections with Delightful Giving' – a philosophy,
                  not just a feature. Elevate relationships, and leave lasting
                  impressions.
                </p>
                <Link className="read-more-btn" to="/blogpost5">
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact />
      <NavigateToTop />
      <Footer />
    </>
  );
}

export default AllBlogs;
