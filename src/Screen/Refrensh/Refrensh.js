import React, { useEffect } from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import image1 from "../../Assets/Images/pro-1.jpg";
import image2 from "../../Assets/Images/pro-2.jpg";

import images1 from "../../Assets/Images/events.png";
import images2 from "../../Assets/Images/award.png";
import image3 from "../../Assets/Images/enquiry.png";
import image4 from "../../Assets/Images/award.png";
import image5 from "../../Assets/Images/news.png";
import image6 from "../../Assets/Images/reference.png";


const Refrensh = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
            <Container className="py-5">
                <h4
                    className="text-center  mb-5"
                    style={{ color: "#1a4578", textDecoration: "underline" }}
                >
                    Project Reference
                </h4>

                <Row className="align-items-center">
                    <Col md={6} className="mb-4 mb-md-0">
                        <h3 className="mb-3" style={{ color: "#1a4578" }}>
                            Congratulations on taking the first step towards harnessing the
                            power of the sun.
                        </h3>
                        <p>
                            You can use the following search options to locate a dealer
                            nearest to you. Please select the region from the drop-down list
                            and then select your state, city to get the contact details of our
                            dealers.
                        </p>

                        <p className="mt-4">
                            If you didn't find a dealer near your region or you need more
                            information on our products/services, please{" "}
                        </p>

                        <p className="mt-4">
                            We thank you for showing interest in Power Solar{" "}
                            <span>See More</span>
                        </p>
                    </Col>

                    <Col md={6} className="text-center">
                        <div className="position-relative">
                            <Image
                                src={image1}
                                alt="Power Solar"
                                fluid
                                className="rounded shadow"
                                style={{
                                    borderRadius: "0",
                                    boxShadow: "none",
                                    transition: "none",
                                    transform: "none",
                                }}
                            />
                        </div>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col md={6} className="text-center">
                        <div className="position-relative">
                            <Image
                                src={image2}
                                alt="Power Solar"
                                fluid
                                className="rounded shadow"
                                style={{
                                    borderRadius: "0",
                                    boxShadow: "none",
                                    transition: "none",
                                    transform: "none",
                                }}
                            />
                        </div>
                    </Col>

                    <Col md={6} className="mb-4 mb-md-0 mt-4">
                        <h3 className="mb-3" style={{ color: "#1a4578" }}>
                            Heblox provides end-to-end solar solutions, from design to
                            installation, with 20+ years' experience in residential and
                            commercial projects.
                        </h3>
                        <p>
                            You can use the following search options to locate a dealer
                            nearest to you. Please select the region from the drop-down list
                            and then select your state, city to get the contact details of our
                            dealers.
                        </p>

                        <p className="mt-4">
                            If you didn't find a dealer near your region or you need more
                            information on our products/services, please{" "}
                        </p>

                        <p className="mt-4">
                            We thank you for showing interest in Power Solar{" "}
                            <span>See More</span>
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Refrensh;
