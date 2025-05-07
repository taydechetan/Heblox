import React, { useEffect } from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import image1 from "../../Assets/Images/pro-1.jpg";
import image2 from "../../Assets/Images/pro-2.jpg";

import Home from "../../Home/Home";

const Refrensh = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Home />

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
