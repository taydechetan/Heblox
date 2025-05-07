import React from "react";
import "./Home.css";
import { BrowserRouter, Route, Router, useLocation } from "react-router-dom";
import Banner from "../Component/Banner/Banner";
import BannerSection from "../Component/BannerSection/BannerSection";
import ProjectSection from "../Component/ProjectSection/ProjectSection";
import AboutUs from "../Component/AboutUs/AboutUs";
import Video from "../Component/Videos/Video";
import ProductServices from "../Component/ProductServices/ProductServices";
import WhySolar from "../Component/WhySolor/WhySolar";
import ServiceArea from "../Component/ServiceArea/ServiceArea";
import Review from "../Component/Review/Review";
import image1 from "../Assets/Images/events.png";
import image2 from "../Assets/Images/award.png";
import image3 from "../Assets/Images/enquiry.png";
import image4 from "../Assets/Images/award.png";
import image5 from "../Assets/Images/news.png";
import image6 from "../Assets/Images/reference.png";

export default function Home() {
    const location = useLocation();
    const isHomePage = location.pathname === "/";


    return (
        <>
            <div>
                <section
                    className="custom-banner-section"
                >
                    <div className="custom-side-icons">
                        <a href="refrensh" className="custom-side-icon">
                            <div className="custom-image-icon">
                                <img src={image1} alt="social-icon" />
                            </div>
                            <span className="custom-label">References</span>
                        </a>
                        <a href="ProductServices" className="custom-side-icon">
                            <div className="custom-image-icon">
                                <img src={image2} alt="social-icon" />
                            </div>
                            <span className="custom-label">Bulk Enquiries</span>
                        </a>
                        <a href="servicearea" className="custom-side-icon">
                            <div className="custom-image-icon">
                                <img src={image3} alt="social-icon" />
                            </div>
                            <span className="custom-label">Visit Stores</span>
                        </a>
                        <a href="#!" className="custom-side-icon">
                            <div className="custom-image-icon">
                                <img src={image4} alt="social-icon" />
                            </div>
                            <span className="custom-label">Dealers</span>
                        </a>
                        <a href="award" className="custom-side-icon">
                            <div className="custom-image-icon">
                                <img src={image5} alt="social-icon" />
                            </div>
                            <span className="custom-label">Awards</span>
                        </a>
                        <a href="events" className="custom-side-icon">
                            <div className="custom-image-icon">
                                <img src={image6} alt="social-icon" />
                            </div>
                            <span className="custom-label">Events</span>
                        </a>
                        <a href="news" className="custom-side-icon">
                            <div className="custom-image-icon">
                                <img src={image6} alt="social-icon" />
                            </div>
                            <span className="custom-label">News</span>
                        </a>
                    </div>
                </section>
            </div>

            <>
                {isHomePage && (
                    <>
                        <div>
                            <section className="custom-banner-section">
                                <div className="custom-side-icons">

                                </div>
                            </section>
                        </div>

                        <Banner />
                        <BannerSection />
                        <AboutUs />
                        <Video />
                        <ProjectSection />
                        <ProductServices />
                        <WhySolar />
                        <ServiceArea />
                        <Review />
                    </>
                )}
            </>


            {/* <Banner />
            <BannerSection />
            <AboutUs />
            <Video />
            <ProjectSection />
            <ProductServices />
            <WhySolar />
            <ServiceArea />
            <Review /> */}
        </>
    );
}
