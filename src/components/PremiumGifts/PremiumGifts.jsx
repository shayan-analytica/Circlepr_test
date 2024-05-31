import React, { useState,useEffect, useRef } from 'react';
import './PremiumGifts.css';
import './Responsive_Premiumgifts.css'



function PremiumGifts() {
  const [isDown, setIsDown] = useState(false);
  const giftslider = useRef(null);
  const prevBtn2 = useRef(null);
  const nextBtn2 = useRef(null);
  let startX = 0;
  let scrollLeft = 0;

  useEffect(() => {
    const smoothScroll2 = (amount) => {
      const start = giftslider.current.scrollLeft;
      const target = start + amount;
      const duration = 500; // Adjust the duration as needed
      let startTime;

      function animateScroll(time) {
        if (!startTime) startTime = time;

        const progress = (time - startTime) / duration;
        const newPosition = start + amount * progress;

        giftslider.current.scrollLeft = newPosition;

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        } else {
          startTime = null;
        }
      }

      requestAnimationFrame(animateScroll);
    };

    prevBtn2.current.addEventListener('click', () => {
      smoothScroll2(-500); // Adjust the scroll value as needed
    });

    nextBtn2.current.addEventListener('click', () => {
      smoothScroll2(500); // Adjust the scroll value as needed
    });

    giftslider.current.addEventListener('mousedown', (e) => {
      setIsDown(true);
      giftslider.current.classList.add('active');
      startX = e.pageX - giftslider.current.offsetLeft;
      scrollLeft = giftslider.current.scrollLeft;
    });

    giftslider.current.addEventListener('mouseleave', () => {
      setIsDown(false);
      giftslider.current.classList.remove('active');
    });

    giftslider.current.addEventListener('mouseup', () => {
      setIsDown(false);
      giftslider.current.classList.remove('active');
    });

    giftslider.current.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - giftslider.current.offsetLeft;
      const walk = (x - startX) * 1.5; // Adjust this multiplier to control drag speed
      giftslider.current.scrollLeft = scrollLeft - walk;
    });
  }, []);

  return (
    <>
    <section className="container-fluid premium-gifts">
        <div className="row mb-5">
            <div className="col-12"><span className="pg">Premium Gifts. <span>Leveling Up Connections with Corporate Gifting
                        Solutions. </span></span></div>
        </div>
        <div className="row cards-row swiper">
            <div className="col-12">
                <div className="chev-container2">
                    <button className="swiper-button-prev" id="prevBtn2" ref={prevBtn2}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                            viewBox="0 0 32 32" fill="none">
                            <path
                                d="M17.7334 23.0667L11.6001 16.9333C11.4667 16.8 11.3725 16.6556 11.3174 16.5C11.2623 16.3444 11.2343 16.1778 11.2334 16C11.2334 15.8222 11.2614 15.6556 11.3174 15.5C11.3734 15.3444 11.4676 15.2 11.6001 15.0667L17.7334 8.93333C17.9778 8.68889 18.289 8.56667 18.6667 8.56667C19.0445 8.56667 19.3556 8.68889 19.6001 8.93333C19.8445 9.17778 19.9667 9.48889 19.9667 9.86667C19.9667 10.2444 19.8445 10.5556 19.6001 10.8L14.4001 16L19.6001 21.2C19.8445 21.4444 19.9667 21.7556 19.9667 22.1333C19.9667 22.5111 19.8445 22.8222 19.6001 23.0667C19.3556 23.3111 19.0445 23.4333 18.6667 23.4333C18.289 23.4333 17.9778 23.3111 17.7334 23.0667Z"
                                fill="#fff" />
                        </svg></button>
                    <button className="swiper-button-next" id="nextBtn2" ref={nextBtn2}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                            viewBox="0 0 32 32" fill="none">
                            <path
                                d="M11.6001 23.0667C11.3556 22.8222 11.2334 22.5111 11.2334 22.1333C11.2334 21.7556 11.3556 21.4444 11.6001 21.2L16.8001 16L11.6001 10.8C11.3556 10.5556 11.2334 10.2444 11.2334 9.86667C11.2334 9.48889 11.3556 9.17778 11.6001 8.93333C11.8445 8.68889 12.1556 8.56667 12.5334 8.56667C12.9112 8.56667 13.2223 8.68889 13.4667 8.93333L19.6001 15.0667C19.7334 15.2 19.8281 15.3444 19.8841 15.5C19.9401 15.6556 19.9676 15.8222 19.9667 16C19.9667 16.1778 19.9387 16.3444 19.8827 16.5C19.8267 16.6556 19.7325 16.8 19.6001 16.9333L13.4667 23.0667C13.2223 23.3111 12.9112 23.4333 12.5334 23.4333C12.1556 23.4333 11.8445 23.3111 11.6001 23.0667Z"
                                fill="#fff" />
                        </svg></button>
                </div>
            </div>
            <div  className="col-md-12 cards-container p-2" id="giftslider" ref={giftslider}>
                <div className="card big-card " data-aos="fade-up" data-aos-duration="500">
                    <div className="card-header">
                        <h4>Gifting gets simplified.</h4>
                        <h5>Essentials that pair perfectlywith your corporate.</h5>
                    </div>
                    <div className="card-img">
                        <img src="src/assets/images/Mockups.png" loading="lazy" className="h-100 w-100"
                            style={{objectFit: 'cover'}} alt=""/>
                    </div>
                </div>
                <div className="card small-card " data-aos="fade-up" data-aos-duration="1000">
                    <div className="card-header">
                        <img src="src/assets/images/gift1.png" loading="lazy" className="h-100 w-100" style={{objectFit: 'cover'}}
                            alt=""/>
                    </div>
                    <div className="card-body">
                        <div>
                            <span className="new-tag">new</span>
                            <h4>Personlized Vaccum Flask Gift Set</h4>
                        </div>
                        <h5>AED 189</h5>
                    </div>

                </div>
                <div className="card small-card " data-aos="fade-up" data-aos-duration="2000">
                    <div className="card-header">
                        <img src="src/assets/images/gift2.png" loading="lazy" className="h-100 w-100" style={{objectFit: 'cover'}}
                            alt=""/>
                    </div>
                    <div className="card-body">
                        <div>
                            <span className="new-tag">new</span>
                            <h4>Personalised Card Holder Gift Box</h4>
                        </div>
                        <h5>AED 149</h5>
                    </div>

                </div>
                <div className="card small-card " data-aos="fade-up" data-aos-duration="3000">
                    <div className="card-header">
                        <img src="src/assets/images/gift3.png" loading="lazy" className="h-100 w-100" style={{objectFit: 'cover'}}
                            alt=""/>
                    </div>
                    <div className="card-body">
                        <div>
                            <span className="new-tag">new</span>
                            <h4>Personalised Hip Flask Gift Set</h4>
                        </div>
                        <h5>AED 159</h5>
                    </div>

                </div>
                <div className="card small-card" data-aos="fade-up" data-aos-duration="4000">
                    <div className="card-header">
                        <img src="src/assets/images/gift4.png" loading="lazy" className="h-100 w-100" style={{objectFit: 'cover'}}
                            alt=""/>
                    </div>
                    <div className="card-body">
                        <div>
                            <span className="new-tag">new</span>
                            <h4>January Birthday Wish Flowers Vase And Cake</h4>
                        </div>
                        <h5>AED 250</h5>
                    </div>

                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default PremiumGifts