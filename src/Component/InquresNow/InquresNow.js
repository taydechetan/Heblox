import React, { useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./InquresNow.css";
import Image from "../../Assets/Images/product-1.png";
import Review from "../Review/Review";
import WhySolar from "../WhySolor/WhySolar";
import image1 from "../../Assets/Images/events.png";
import image2 from "../../Assets/Images/award.png";
import image3 from "../../Assets/Images/enquiry.png";
import image4 from "../../Assets/Images/award.png";
import image5 from "../../Assets/Images/news.png";
import image6 from "../../Assets/Images/reference.png";

const InquresNow = () => {
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
      <div className="solar-main-wrapper py-5 px-3">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="solar-left-section  mb-4 mb-lg-0">
              <h1>
                Switch to <span style={{ color: "#1a4578" }}>Solar</span> in India,{" "}
                <br />
                You'll love the savings.
              </h1>
              <p className="mt-3">
                Thousands of families in India trust our rooftop solar
                solutions
              </p>
              <div className="solar-image-box mt-4 rounded">
                <img
                  src={Image}
                  alt="Solar Team"
                  className="img-fluid rounded"
                />
              </div>
            </Col>

            <Col lg={6}>
              <div className="solar-form-box bg-white p-4 rounded shadow-sm">
                <h5 className="fw-bold">Book a FREE Solar Consultation</h5>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      Full name <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control type="text" placeholder="Enter full Name" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>
                      WhatsApp number <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter WhatsApp Number"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>
                      Pin code <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control type="number" placeholder="Enter pin code" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>
                      Email-id<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control type="email" placeholder="Enter E-Mail ID" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>
                      Address<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control type="email" placeholder="Enter Address" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>
                      Description<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Enter description" />
                  </Form.Group>

                  <Form.Group className="mb-3 form-check">
                    <Form.Check
                      type="checkbox"
                      label={
                        <>
                          I agree to SolarSquare's{" "}
                          <a href="#">terms of service</a> &{" "}
                          <a href="#">privacy policy</a>
                        </>
                      }
                    />
                  </Form.Group>
                  <div className="Ghsnow">
                    <button className="Btnss">Inqury Now</button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <WhySolar />
      <Review />
    </>
  );
};

export default InquresNow;
