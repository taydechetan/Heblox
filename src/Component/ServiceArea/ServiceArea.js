import React from "react";
import "./ServiceArea.css";
import IndiaImage from "../../Assets/Images/india.png";
import China from "../../Assets/Images/china.png";
import Bhutan from "../../Assets/Images/Bhutan.png";
import Vietnam from "../../Assets/Images/vietnam.png";
import Sweden from "../../Assets/Images/sweden.png";
import Taiwan from "../../Assets/Images/taiwan.png";
import USA from "../../Assets/Images/usa.png";
import { MdLocalPhone } from "react-icons/md";

import images1 from "../../Assets/Images/events.png";
import images2 from "../../Assets/Images/award.png";
import image3 from "../../Assets/Images/enquiry.png";
import image4 from "../../Assets/Images/award.png";
import image5 from "../../Assets/Images/news.png";
import image6 from "../../Assets/Images/reference.png";

const serviceData = [
    { name: "India", image: IndiaImage },
    { name: "China", image: China },
    { name: "USA", image: USA },
    { name: "Taiwan", image: Taiwan },
    { name: "Vietnam", image: Vietnam },
    { name: "Bhutan", image: Bhutan },
    { name: "Sweden", image: Sweden },
];

export default function ServiceArea() {
    return (
        <>
            <div>
                <section
                    className="custom-banner-section"
                >
                    <div className="custom-side-icons">
                        <a href="refrensh" className="custom-side-icon">
                            <div className="custom-image-icon">
                                <img src={images1} alt="social-icon" />
                            </div>
                            <span className="custom-label">References</span>
                        </a>
                        <a href="ProductServices" className="custom-side-icon">
                            <div className="custom-image-icon">
                                <img src={images2} alt="social-icon" />
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
            <section className="block_team-sec my-5">
                <div className="team-container">
                    <div className="team-row">
                        <div className="heading_wrapper mb-md-4 mb-3 text-center">
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "10px",
                                    marginTop: "25px",
                                }}
                            >
                                <h4 style={{ margin: 0, color: "#1a4578" }}>Services Area</h4>
                                <div
                                    style={{
                                        width: "100px",
                                        height: "1px",
                                        backgroundColor: "#1a4578",
                                    }}
                                ></div>
                            </div>
                            <h2 className="section_heading mt-3">
                                What we’re offering to our Company Solutions
                            </h2>
                        </div>
                    </div>
                    <div className="team-col mt-5">
                        <ul className="wrapper-team">
                            {serviceData.map((service, index) => (
                                <li key={index}>
                                    <div className="image_map">
                                        <img src={service.image} alt={service.name} />
                                    </div>
                                    <div className="content_item">
                                        <span className="user_name">{service.name}</span>
                                        <span className="user_info">
                                            <a href="tel:+919990941114">
                                                <i className="ri-phone-fill">
                                                    <MdLocalPhone />
                                                </i>{" "}
                                                +91-95608 77731
                                            </a>
                                        </span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}
