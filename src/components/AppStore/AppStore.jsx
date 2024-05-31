import React from 'react'
import './AppStore.css'
import './Responsive_Appstore.css'

function AppStore() {
  return (
    <>
    <section className="container-fluid app-store-banner d-flex flex-column justify-content-center align-items-center">
        <div className="row">
            <div className="col-12">
                <h3>Get Circlepr on the App Store and Play Store</h3>
            </div>

        </div>
        <div className="row">
            <div className="col-12 d-flex justify-content-center">
                <p>Enjoy easy, personalized suggestions, and multiple available options wherever you are. Elevate your
                    experience with our mobile app! </p>
            </div>
        </div>
        <div className="row">
            <div className="col-12 d-flex flex-row btn-container" style={{gap:'16px'}}>
                <button data-aos="fade-right" className="playstore-btn d-flex align-items-center justify-content-center"
                    style={{gap:'5px'}}><img src="src/assets/logos/playstore.png" alt=""/><span
                        className="d-flex flex-column align-items-start">Get it on<span
                            style={{fontSize: '14px', fontWeight: '600'}}>Google Play</span></span></button>
                <button data-aos="fade-left" className="playstore-btn d-flex align-items-center justify-content-center"
                    style={{gap:'5px'}}><img src="src/assets/logos/appstore.png" alt="" style={{width: '36px',
                            height: '38px'}}/><span className="d-flex flex-column align-items-start">Download on the<span
                            style={{fontSize: '14px', fontWeight: '600'}}>Apple Store</span></span></button>
            </div>
        </div>
    </section>
    </>
  )
}

export default AppStore