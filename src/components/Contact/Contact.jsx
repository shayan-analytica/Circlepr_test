import React from 'react'
import './Contact.css'
import './Responsive_Contact.css'

function Contact() {
  return (
    <>
    <section className="contact" id="contact">
        <div className="row" data-aos="fade-down">
            <div className="col-lg-6 col-md-12 col-sm-12 d-flex flex-column align-items-center justify-content-center info">
                <h3>Need assistance or have questions?</h3>
                <p className="m-0">Contact us for personalized support.</p>
                <p>Our friendly team is here to make every interaction delightful!</p>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
                <form action="">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="form-group d-flex flex-column mb-4" style={{gap:'12px', width: '49%'}}>
                            <label htmlFor="">Name</label>
                            <input type="text" placeholder="Name"/>
                        </div>
                        <div className="form-group d-flex flex-column mb-4" style={{gap:'12px',width: '49%'}}>
                            <label htmlFor="">Phone</label>
                            <input type="text" placeholder="Phone Number"/>
                        </div>
                    </div>

                    <div className="form-group d-flex flex-column mb-4" style={{gap:'12px'}}>
                        <label htmlFor="">Email Address</label>
                        <input type="text" placeholder="Email Address" required/>
                    </div>
                    <div className="form-group d-flex flex-column" style={{gap:'12px'}}>
                        <label htmlFor="">Message</label>
                        <textarea name="" id="" cols="30" rows="10" placeholder="Your Message" style={{height: '100px'}}
                            required></textarea>
                    </div>
                    <button>
                        <div className="svg-wrapper-1">
                            <div className="svg-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path fill="currentColor"
                                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <span>Send</span>
                    </button>
                </form>
            </div>
        </div>
    </section>
    </>
  )
}

export default Contact