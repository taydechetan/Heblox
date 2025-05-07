import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./BannerSection.css";
import SolarPanel from "../../Assets/Images/solar-panel.png";
import Maintaines from "../../Assets/Images/why-benefite.png";
import Customized from "../../Assets/Images/customize.png";
import Hours from "../../Assets/Images/24-hours-support.png";

const BannerSection = () => {
    const services = [
        {
            icon: SolarPanel,
            title: "Solar Panel Installation",
        },
        {
            icon: Maintaines,
            title: "Maintenance and Monitoring",
        },
        {
            icon: Customized,
            title: "Customized Solar Solutions",
        },
        {
            icon: Hours,
            title: "24/7 Customer Support",
        },
    ];

    return (
        <>
            <div className="services-section">
                <Container>
                    <Row className="g-4">
                        {services.map((service, index) => (
                            <Col key={index} xs={12} sm={6} md={3}>
                                <Card
                                    className="service-card"
                                    style={{
                                        border: "none",
                                        borderRadius: "0",
                                        borderBottom: "3px solid #1a4578",
                                    }}
                                >
                                    <Card.Body className="d-flex flex-column justify-content-center">
                                        <img
                                            src={service.icon}
                                            alt={service.title}
                                            className="service-icon"
                                        />
                                        <Card.Title
                                            className="fs-6 mt-4"
                                            style={{ color: "#63656f", fontFamily: "sans-serif" }}
                                        >
                                            {service.title}
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>


        </>
    );
};

export default BannerSection;
