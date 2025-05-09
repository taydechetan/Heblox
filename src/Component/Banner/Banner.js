import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import "./banner.css";
import { MdArrowOutward } from "react-icons/md";
import Prov1 from "../../Assets/Images/pro-1.jpg";
import Prov2 from "../../Assets/Images/pro-2.jpg";
import { useNavigate } from "react-router-dom";

const sliderData = [
    {
        id: 1,
        image: Prov1,
        title: "Summer savings are here—stay cool and Save Big",
        description:
            "Heblox provides end-to-end solar solutions, from design to installation, with 20+ years' experience in residential and commercial projects.",
    },
    {
        id: 2,
        image: Prov2,
        title: "Get the Best Solar Panels Installed Today",
        description:
            "With Heblox, you get guaranteed quality products and top-notch service for your home and business energy needs.",
    },
    {
        id: 3,
        image: Prov1,
        title: "Save More with Heblox Energy Solutions",
        description:
            "Power your future sustainably and cut your electricity bills drastically with our affordable solar options.",
    },
];


const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const navigate = useNavigate();
    const handelclick = () => {
        navigate('/inquresnow');
    }

    const goToNextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    };

    const goToPrevSlide = () => {
        setCurrentSlide(
            (prev) => (prev - 1 + sliderData.length) % sliderData.length
        );
    };

    const { image, title, description } = sliderData[currentSlide];

    return (
        <div className="banerp">
            <section
                style={{
                    background: "#f5f5f5",
                    padding: "50px 0",
                    position: "relative",
                }}
            >
                <Container>
                    <Row className="align-items-center BannerP">
                        <Col xs={12} md={6} className="text-center mb-4 mb-md-0">
                            <div style={{ position: "relative", display: "inline-block" }}>
                                <img
                                    src={image}
                                    alt="Left Side"
                                    className="img-fluid"
                                    style={{ height: "373px", objectFit: "cover" }}
                                />
                                <GoArrowLeft
                                    className="Goarrowlefts"
                                    onClick={() => goToPrevSlide()}
                                />
                            </div>
                        </Col>

                        <Col xs={12} md={6} className="position-relative">
                            <div style={{ position: "relative" }}>
                                <div className="SecondImg">
                                    <h2 className="mb-3 TtileForBanne">{title}</h2>
                                    <p style={{ color: "#666", width: "90%" }}>{description}</p>

                                    <div className="d-flex flex-wrap gap-3 mt-4">
                                        <button className="Needhelp">
                                            Need Help{" "}
                                            <span style={{ marginLeft: "8px" }}>
                                                {" "}
                                                <MdArrowOutward />
                                            </span>
                                        </button>
                                        <button className="getAppoinment" onClick={handelclick}>
                                            Get Appointment{" "}
                                            <span style={{ marginLeft: "8px" }}>
                                                <GoArrowRight />
                                            </span>
                                        </button>
                                    </div>
                                </div>

                                <GoArrowRight
                                    className="Rightssicons"
                                    onClick={() => goToNextSlide()}
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>

                <div className="mobile-arrow-row">
                    <GoArrowLeft
                        className="mobile-arrow-icon  styled-icon"
                        onClick={() => goToPrevSlide()}
                    />
                    <GoArrowRight
                        className="mobile-arrow-icon  styled-icon"
                        onClick={() => goToNextSlide()}
                    />
                </div>

            </section>
        </div>
    );
};

export default Banner;
