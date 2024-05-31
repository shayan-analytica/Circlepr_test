import React from "react";
import "./Footer.css";
import "./Responsive_Footer.css";

function Footer() {
  function navigateTo(event) {
    const url = event.target.getAttribute("data-url");
    if (url) {
      window.location.href = url;
    }
  }

  return (
    <>
      <footer id="footer">
        <div className="row mb-4">
          <div className="logo-container">
            <img
              src="/assets/logos/CirclePR v5 white .png"
              alt=""
              style={{ objectFit: "contain" }}
              className="h-100 w-100"
            />
          </div>
        </div>
        <div className="row d-flex justify-content-between">
          <div
            className="d-flex align-items-baseline footer-links"
            style={{ width: "fit-content" }}
          >
            <div>
              <span className="cc">@ Circle 2024</span>
            </div>
            <div>
              <ul className="">
                <li className="nav-item">
                  <a className="nav-link" href="#working">
                    How It Works
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#giftingslider">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#blogs">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#contact"
                    style={{ border: "0" }}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="d-flex align-items-center footer-social"
            style={{ width: "fit-content", gap: "24px" }}
          >
            <svg
              onClick={(event) => navigateTo(event)}
              data-url="https://www.instagram.com/circleprapp/"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.65524 0H17.4088C21.0651 0.00352654 24.0284 2.96615 24.0328 6.6224V17.3776C24.0284 21.0338 21.0651 23.9965 17.4088 24H6.65524C2.99899 23.9956 0.0363635 21.0322 0.0328369 17.376V6.6224C0.037245 2.96678 2.99961 0.00440809 6.65524 0ZM17.4088 21.872C19.8899 21.8694 21.9006 19.8587 21.9032 17.3776V6.624C21.9006 4.14291 19.8899 2.13225 17.4088 2.1296H6.65524C4.17539 2.13313 2.16596 4.14256 2.16244 6.6224V17.3776C2.16508 19.8581 4.17477 21.8685 6.65524 21.872H17.4088Z"
                fill="#FAFBFA"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.85159 12.0016C5.85042 8.58665 8.61748 5.8172 12.0324 5.81543C15.4475 5.81719 18.2161 8.58431 18.2196 11.9994C18.2196 15.4143 15.4516 18.1828 12.0367 18.1834C8.62175 18.184 5.85277 15.4165 5.85159 12.0016ZM7.97799 12.001C7.97799 14.2402 9.79321 16.0554 12.0324 16.0554V16.0538C14.2699 16.0512 16.0833 14.2385 16.0868 12.001C16.0868 9.76185 14.2716 7.94663 12.0324 7.94663C9.79321 7.94663 7.97799 9.76185 7.97799 12.001Z"
                fill="#FAFBFA"
              />
              <path
                d="M18.4803 4.01074C17.7361 4.01085 17.0957 4.53651 16.9505 5.26633C16.8053 5.99615 17.1957 6.72692 17.8832 7.01185C18.5706 7.29678 19.3635 7.05653 19.7772 6.43799C20.1909 5.81945 20.1101 4.99484 19.5843 4.46834C19.2911 4.17605 18.8942 4.01156 18.4803 4.01074Z"
                fill="#FAFBFA"
              />
            </svg>
            <svg
              onClick={(event) => navigateTo(event)}
              data-url="https://twitter.com/cicleprapp/"
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="20"
              viewBox="0 0 23 20"
              fill="none"
            >
              <path
                d="M0.0328369 0H2.53284L17.5328 20H15.0328L0.0328369 0ZM4.53284 0H7.03284L22.0328 20H19.5328L4.53284 0ZM2.03284 0H7.03284V2H2.03284V0ZM15.0328 18H20.0328V20H15.0328V18ZM17.5328 0H21.0328L4.03284 20H0.532837L17.5328 0Z"
                fill="#FAFBFA"
              />
            </svg>
            <svg
              onClick={(event) => navigateTo(event)}
              data-url="https://www.facebook.com/circleprapp//"
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="24"
              viewBox="0 0 13 24"
              fill="none"
            >
              <path
                d="M12.5137 0.00897796H9.40311C7.82394 -0.0816062 6.28303 0.51669 5.17875 1.64919C4.07448 2.78168 3.51525 4.3372 3.64564 5.91357V8.63238H0.522221C0.251942 8.63238 0.0328369 8.85148 0.0328369 9.12176V13.0688C0.0328369 13.3391 0.251942 13.5582 0.522221 13.5582H3.65044V23.5106C3.65044 23.7809 3.86955 24 4.13983 24H8.22602C8.4963 24 8.71541 23.7809 8.71541 23.5106V13.5566H12.373C12.6433 13.5566 12.8624 13.3375 12.8624 13.0672V9.12496C12.8624 8.85468 12.6433 8.63558 12.373 8.63558H8.70581V6.32779C8.70581 5.21948 8.9697 4.65493 10.4155 4.65493H12.5105C12.7808 4.65493 12.9999 4.43582 12.9999 4.16555V0.50316C13.0012 0.373091 12.9506 0.247864 12.8594 0.155139C12.7682 0.0624144 12.6438 0.00982185 12.5137 0.00897796Z"
                fill="#FAFBFA"
              />
            </svg>
            <svg
              onClick={(event) => navigateTo(event)}
              data-url="https://www.tiktok.com/@circleprapp/"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="18"
              viewBox="0 0 16 18"
              fill="none"
            >
              <path
                d="M12.6328 2.82C11.9493 2.03962 11.5726 1.03743 11.5728 0H8.48284V12.4C8.45901 13.071 8.17571 13.7066 7.69261 14.1729C7.2095 14.6393 6.56429 14.8999 5.89284 14.9C4.47284 14.9 3.29284 13.74 3.29284 12.3C3.29284 10.58 4.95284 9.29 6.66284 9.82V6.66C3.21284 6.2 0.192841 8.88 0.192841 12.3C0.192841 15.63 2.95284 18 5.88284 18C9.02284 18 11.5728 15.45 11.5728 12.3V6.01C12.8258 6.90985 14.3302 7.39265 15.8728 7.39V4.3C15.8728 4.3 13.9928 4.39 12.6328 2.82Z"
                fill="#FAFBFA"
              />
            </svg>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
