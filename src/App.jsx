import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Home from "./components/Home";
import AllBlogs from "./components/AllBlogs/AllBlogs";
import BlogPost1 from "./components/BlogPosts/BlogPost1/BlogPost1";
import BlogPost2 from "./components/BlogPosts/BlogPost2/BlogPost2";
import BlogPost3 from "./components/BlogPosts/BlogPost3/BlogPost3";
import BlogPost4 from "./components/BlogPosts/BlogPost4/BlogPost4";
import BlogPost5 from "./components/BlogPosts/BlogPost5/BlogPost5";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
  useEffect(() => {
    AOS.init({
      // Initialize AOS after the DOM is loaded
      // AOS.init();
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: true, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/blogpost1" element={<BlogPost1 />} />
        <Route path="/blogpost2" element={<BlogPost2 />} />
        <Route path="/blogpost3" element={<BlogPost3 />} />
        <Route path="/blogpost4" element={<BlogPost4 />} />
        <Route path="/blogpost5" element={<BlogPost5 />} />
        <Route path="/all-blogs" element={<AllBlogs />} />
      </Routes>
    </>
  );
}

export default App;
