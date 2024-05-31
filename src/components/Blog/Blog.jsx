import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";
import "./Responsive_Blog.css";

function Blog() {
  const [isDown, setIsDown] = useState(false);
  const blogSlider = useRef(null);
  const prevBtn = useRef(null);
  const nextBtn = useRef(null);
  let startX = 0;
  let scrollLeft = 0;

  useEffect(() => {
    const smoothScroll = (amount) => {
      const start = blogSlider.current.scrollLeft;
      const target = start + amount;
      const duration = 500; // Adjust the duration as needed
      let startTime;

      function animateScroll(time) {
        if (!startTime) startTime = time;

        const progress = (time - startTime) / duration;
        const newPosition = start + amount * progress;

        blogSlider.current.scrollLeft = newPosition;

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        } else {
          startTime = null;
        }
      }

      requestAnimationFrame(animateScroll);
    };

    prevBtn.current.addEventListener("click", () => {
      smoothScroll(-500); // Adjust the scroll value as needed
    });

    nextBtn.current.addEventListener("click", () => {
      smoothScroll(500); // Adjust the scroll value as needed
    });

    blogSlider.current.addEventListener("mousedown", (e) => {
      setIsDown(true);
      blogSlider.current.classList.add("active");
      startX = e.pageX - blogSlider.current.offsetLeft;
      scrollLeft = blogSlider.current.scrollLeft;
    });

    blogSlider.current.addEventListener("mouseleave", () => {
      setIsDown(false);
      blogSlider.current.classList.remove("active");
    });

    blogSlider.current.addEventListener("mouseup", () => {
      setIsDown(false);
      blogSlider.current.classList.remove("active");
    });

    blogSlider.current.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - blogSlider.current.offsetLeft;
      const walk = (x - startX) * 1.5; // Adjust this multiplier to control drag speed
      blogSlider.current.scrollLeft = scrollLeft - walk;
    });
  }, []);

  return (
    <>
      <section className="blog-section" id="blogs">
        <div className="row d-flex w-100 mb-3" style={{ padding: "64px" }}>
          <div className="col-md-10 col-xs-12">
            <h2>Read Our Blogs</h2>
            <p>
              Learn how to use Circlepr to optimize your professional brand
              image, build rapport, and grow your network.
            </p>
          </div>
          <div className="col-md-2 col-xs-12 d-flex align-items-center justify-content-between">
            <Link to="/all-blogs">See All</Link>
          </div>
        </div>

        <div className="row blog-row w-100" id="blogSlider" ref={blogSlider}>
          <Link to="/blogpost1">
            <div className="card" data-aos="fade-up">
              <div className="card-header p-0">
                <img
                  src="/assets/images/blogs/blog1.jpg"
                  className="h-100 w-100"
                  style={{ objectFit: "cover" }}
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="card-body">
                <h1>Corporate Relations Strategy</h1>
                <p>
                  Make professional relationships easy with CirclePR – a smart
                  app for thoughtful gestures.
                </p>
              </div>
            </div>
          </Link>
          <Link to="/blogpost2">
            <div className="card" data-aos="fade-up">
              <div className="card-header p-0">
                <img
                  src="/assets/images/blogs/blog2.jpg"
                  className="h-100 w-100"
                  style={{ objectFit: "cover" }}
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="card-body">
                <h1>Revolution in Corporate Relations</h1>
                <p>
                  Easily navigate business connections, send thoughtful
                  gestures, and enhance your professional image effortlessly.
                </p>
              </div>
            </div>
          </Link>
          <Link to="/blogpost3">
            <div className="card" data-aos="fade-up">
              <div className="card-header p-0">
                <img
                  src="/assets/images/blogs/blog9.jpg"
                  className="h-100 w-100"
                  style={{ objectFit: "cover" }}
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="card-body">
                <h1>Professional Relationship Enhancement</h1>
                <p>
                  AI-Powered Present Suggestions' for meaningful corporate
                  connections. This innovative feature uses AI to personalize
                  gifts.
                </p>
              </div>
            </div>
          </Link>
          <Link to="/blogpost4">
            <div className="card" data-aos="fade-up">
              <div className="card-header p-0">
                <img
                  src="/assets/images/blogs/blog8.jpg"
                  className="h-100 w-100"
                  style={{ objectFit: "cover" }}
                  alt=""
                />
              </div>
              <div className="card-body">
                <h1>Crafting Lasting Impressions</h1>
                <p>
                  From commemorating milestones to expressing gratitude, this
                  tool ensures every occasion is marked with meaningful gifts.
                </p>
              </div>
            </div>
          </Link>
          <Link to="/blogpost5">
            <div className="card" data-aos="fade-up">
              <div className="card-header p-0">
                <img
                  src="/assets/images/blogs/blog7.jpg"
                  className="h-100 w-100"
                  style={{ objectFit: "cover" }}
                  alt=""
                />
              </div>
              <div className="card-body">
                <h1>Elevating Corporate Relations</h1>
                <p>
                  Enhance Connections with Delightful Giving' – a philosophy,
                  not just a feature. Elevate relationships, and leave lasting
                  impressions.
                </p>
              </div>
            </div>
          </Link>
        </div>

        <div className="chev-container">
          <button id="prevBtn" ref={prevBtn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M17.7334 23.0667L11.6001 16.9333C11.4667 16.8 11.3725 16.6556 11.3174 16.5C11.2623 16.3444 11.2343 16.1778 11.2334 16C11.2334 15.8222 11.2614 15.6556 11.3174 15.5C11.3734 15.3444 11.4676 15.2 11.6001 15.0667L17.7334 8.93333C17.9778 8.68889 18.289 8.56667 18.6667 8.56667C19.0445 8.56667 19.3556 8.68889 19.6001 8.93333C19.8445 9.17778 19.9667 9.48889 19.9667 9.86667C19.9667 10.2444 19.8445 10.5556 19.6001 10.8L14.4001 16L19.6001 21.2C19.8445 21.4444 19.9667 21.7556 19.9667 22.1333C19.9667 22.5111 19.8445 22.8222 19.6001 23.0667C19.3556 23.3111 19.0445 23.4333 18.6667 23.4333C18.289 23.4333 17.9778 23.3111 17.7334 23.0667Z"
                fill="#fff"
              />
            </svg>
          </button>
          <button id="nextBtn" ref={nextBtn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M11.6001 23.0667C11.3556 22.8222 11.2334 22.5111 11.2334 22.1333C11.2334 21.7556 11.3556 21.4444 11.6001 21.2L16.8001 16L11.6001 10.8C11.3556 10.5556 11.2334 10.2444 11.2334 9.86667C11.2334 9.48889 11.3556 9.17778 11.6001 8.93333C11.8445 8.68889 12.1556 8.56667 12.5334 8.56667C12.9112 8.56667 13.2223 8.68889 13.4667 8.93333L19.6001 15.0667C19.7334 15.2 19.8281 15.3444 19.8841 15.5C19.9401 15.6556 19.9676 15.8222 19.9667 16C19.9667 16.1778 19.9387 16.3444 19.8827 16.5C19.8267 16.6556 19.7325 16.8 19.6001 16.9333L13.4667 23.0667C13.2223 23.3111 12.9112 23.4333 12.5334 23.4333C12.1556 23.4333 11.8445 23.3111 11.6001 23.0667Z"
                fill="#fff"
              />
            </svg>
          </button>
        </div>
      </section>
    </>
  );
}

export default Blog;
