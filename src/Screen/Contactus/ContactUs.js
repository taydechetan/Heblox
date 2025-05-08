import React, { useEffect, useMemo, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import ApiEndPoints from "../../Network_Call/ApiEndPoints";
// import { apiCallNew } from "../../Network_Call/apiservices";
import toast from "react-hot-toast";
import { PulseLoader } from "react-spinners";
import moment from "moment";

const ContactUs = () => {
    const [load, setLoad] = useState(false);
    const [formDatas, setFormDatas] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormDatas({
            ...formDatas,
            [name]: value,
        });
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     // const formData = new FormData();
    //     // formData.append("booking_id", ids);
    //     // formData.append("booking_departure_date", selectedDate);
    //     // formData.append("booking_arrival_date", arrivalDate);
    //     try {
    //         setLoad(true);
    //         const response = await apiCallNew(
    //             "post",
    //             formDatas,
    //             ApiEndPoints.Contact
    //         );
    //         if (response) {
    //             toast.success(response.msg);
    //             setLoad(false);
    //             setFormDatas({
    //                 name: "",
    //                 email: "",
    //                 message: "",
    //             });
    //         } else {
    //             setLoad(false);
    //         }
    //     } catch (error) {
    //         console.log(error);
    //         setLoad(false);
    //     }
    // };

    return (
        <Container className="mt-3 mb-5">
            {load && (
                <div>
                    <PulseLoader loading={load} color="#3C4DFE" style={styles.backdrop} />
                </div>
            )}
            <Row className="justify-content-center">
                <Col xs={12} md={10} lg={8}>
                    <h2 className="text-center mb-4">Contact Us</h2>
                    <p className="text-center text-muted mb-4">
                        If you have any questions, feel free to reach out to us. We are here
                        to help with all your luggage service needs.
                    </p>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col xs={12} md={6}>
                    {/* onSubmit={handleSubmit} */}
                    <Form >
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                name="name"
                                value={formDatas.name}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                name="email"
                                value={formDatas.email}
                                onChange={handleChange}
                                required
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                placeholder="Type your message here"
                                name="message"
                                value={formDatas.message}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Button
                            className="w-100"
                            type="submit"
                            style={{ backgroundColor: "#1a4578", color: "#fff" }}
                        >
                            Submit
                        </Button>
                    </Form>
                </Col>

                <Col xs={12} md={6} className="mt-4 mt-md-0">
                    <h5 className="mb-3 fw-bold">Contact Information</h5>
                    <p>
                        Email:{" "}
                        <span className="text-muted"> support@Heblox.com</span>
                    </p>
                    <p>
                        Phone: <span className="text-muted"> +1 234 567 890</span>
                    </p>
                    <p>
                        Address:{" "}
                        <span className="text-muted">  india  </span>
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

const styles = {
    backdrop: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 1000,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#3260a8",
    },
};
export default ContactUs;
