import React, { useEffect } from 'react'
import './NavigateToTop.css'

function NavigateToTop() {

useEffect(()=>{
    var goTopButton = document.getElementById("goTopBtn");
    var footer = document.getElementById("footer"); // Replace with the actual ID of your footer
  
    window.addEventListener("scroll", function () {
      var firstSection = document.querySelector("section"); // Update this selector based on your actual structure
      var scrollPosition = window.scrollY;
  
      // Adjust the threshold as needed
      var threshold = footer.offsetTop - window.innerHeight;
  
      if (
        scrollPosition > firstSection.clientHeight &&
        scrollPosition < threshold
      ) {
        goTopButton.style.opacity = "1";
      } else {
        goTopButton.style.opacity = "0";
      }
    });
  
    goTopButton.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
},[])
   

  return (
    <>
     <button className="Btn gotop" id="goTopBtn">
        <svg height="1.2em" className="arrow" viewBox="0 0 512 512">
            <path
                d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z">
            </path>
        </svg>
    </button>
    </>
  )
}

export default NavigateToTop