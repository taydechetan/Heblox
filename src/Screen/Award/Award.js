import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./Award.css";
import image from "../../Assets/Images/Awards.png";
import image1 from "../../Assets/Images/events.png";
import image2 from "../../Assets/Images/award.png";
import image3 from "../../Assets/Images/enquiry.png";
import image4 from "../../Assets/Images/award.png";
import image5 from "../../Assets/Images/news.png";
import image6 from "../../Assets/Images/reference.png";

const Award = () => {
    const awardsData = [
        {
            title: "Heblox Power Renewables bags prestigious Platinum Award at the CII Six Sigma Awards 2024",
            description: "Heblix Power Solar is recognized as the largest solar company in India. Heblix Power Solar specializes in high efficiency PV module manufacturing and comprehensive EPC solutions.",
            image: require('../../Assets/Images/award-05apr24.jpeg')
        },
        {
            title: "Heblox Power Solar won big at WSO-India (State) Level OHSE Awards 2023",
            description: "Heblox Power Solar has won in the Workplace OHSE Excellence category at the 2nd edition of the prestigious World Safety Organisation-India (State) Level OHSE Awards 2023 for outstanding performance in manufacturing and construction sectors. The Manufacturing unit, Bengaluru, Karnataka and 1 GW SJVN site, Bikaner, Rajasthan won Outstanding Performance, Gold 4 Star awards. 4GW Modules and 4GW Cells Manufacturing Plant, Tamil Nadu bagged Very Good Performance, Silver 3 Star award. The awards will be presented at the 4th Annual WSO-INDIA OHS&E Professional Development Symposium in Chennai",
            image: require('../../Assets/Images/award-29may24.jpeg')
        },
        {
            title: "Tata Power Solar wins Best Large Scale Solar Project Award",
            description: "TataPowerSolar has won the ‘Best Large Scale Solar Project Award‘ for its 300MW Dholera Solar project “India’s largest single axis solar tracker” at the Mercom India Clean Energy Awards 2023. The Awards acknowledge organisations that increase clean energy capacity, advance clean energy manufacturing, boost India’s economy, and positively impact the environment."
        }
    ];

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

            <div className="awards-wrapper">
                <div className="awards-header-section text-white d-flex align-items-center justify-content-center" style={{ height: "400px", overflow: "hidden" }}>
                    <Image src={image} style={{ backgroundSize: 'cover', width: "100%", height: "100%", objectFit: "cover" }} />
                </div>

                <Container className="awards-content-container py-5">
                    <Row>
                        <Col md={4} className="mb-4 mb-md-0 text-center text-md-start">
                            <div className="awards-side-box">
                                <h5 className="awards-side-heading">
                                    LEARN MORE
                                    <br />
                                    ABOUT Heblix POWER SOLAR
                                </h5>
                                <div className="awards-heritage">
                                    Heblox provides end-to-end solar solutions, from design to installation, with 20+ years'
                                    experience in residential and commercial projects.
                                </div>
                            </div>
                        </Col>

                        <Col md={8}>
                            <div className="awards-main-content">
                                {awardsData.map((item, index) => (
                                    <div key={index} className="mb-4">
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>

                                        <Image
                                            src={item.image}
                                            className="img-fluid mt-2"
                                            style={{ borderRadius: '8px' }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </Col>

                    </Row>

                </Container>
            </div>
        </>
    );
};

export default Award;
