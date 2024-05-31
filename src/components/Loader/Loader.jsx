import React, { useEffect } from "react";
import "./Loader.css";

function Loader() {
  useEffect(() => {
    // Your spinner element
    const spinner = document.querySelector(".spinner");
    const overlay = document.querySelector("#overlay");

    // Hide the spinner when the page is fully loaded
    window.addEventListener("load", function () {
      spinner.style.display = "none";
      overlay.style.display = "none";
    });
  }, []);
  return (
    <>
      <div className="overlay" id="overlay">
        <div className="spinner">
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Loader;
