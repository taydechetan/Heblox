import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FiArrowUpRight } from "react-icons/fi";
import "./ProductServices.css";
import Image1 from "../../Assets/Images/pro-1.jpg";
import Image2 from "../../Assets/Images/pro-2.jpg";
import { useNavigate } from "react-router-dom";

import images1 from "../../Assets/Images/events.png";
import images2 from "../../Assets/Images/award.png";
import image3 from "../../Assets/Images/enquiry.png";
import image4 from "../../Assets/Images/award.png";
import image5 from "../../Assets/Images/news.png";
import image6 from "../../Assets/Images/reference.png";

export default function ProductServices() {
    const navigate = useNavigate();

    const handelclick = () => {
        navigate("/refrensh");
    }

    const projectData = [
        {
            id: 1,
            category: "Sustainable Energy",
            title: "Large-Scale Solar Power",
            image: Image2,
        },
        {
            id: 2,
            category: "Transformations",
            title: "Smart Solar Installations",
            image: Image1,
        },
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
            <section className="recent-projects py-5">
                <Container>
                    <Row>
                        <Col md={4}>
                            <div className="heading-wrapper mb-4">
                                <div className="d-flex align-items-center  gap-2 mb-3">
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            gap: "10px",
                                            marginTop: "25px",
                                        }}
                                    >
                                        <h4 style={{ margin: 0, color: "#1a4578" }}>
                                            Featured Projects
                                        </h4>
                                        <div
                                            style={{
                                                width: "100px",
                                                height: "1px",
                                                backgroundColor: "#1a4578",
                                            }}
                                        ></div>
                                    </div>
                                </div>
                                <h2 className="section-heading text-dark">
                                    Few of Our Projects Delivered
                                </h2>
                            </div>
                            <p className="text-muted mb-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Praesentium, doloribus! Eveniet asperiores..
                            </p>
                            <button className="view-all-button mb-4" onClick={handelclick}>
                                View All <FiArrowUpRight />
                            </button>
                        </Col>

                        <Col md={8}>
                            <div className="project-grid d-grid gap-3">
                                {projectData.map((project) => (
                                    <div
                                        key={project.id}
                                        className="project-card position-relative"
                                    >
                                        <div className="project-image">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="img-fluid"
                                            />
                                        </div>
                                        <div className="project-content position-absolute p-3">
                                            <h6 className="text-white">{project.category}</h6>
                                            <h2 className="text-white">{project.title}</h2>
                                            <button variant="light" className="read-more-btn mt-3">
                                                Read More <FiArrowUpRight />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}
