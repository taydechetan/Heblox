import React from "react";
import {
    Button,
    Card,
    Container,
    Row,
    Col,
    Image,
    Form,
} from "react-bootstrap";
import "./ProductDetails.css";
import image1 from "../../Assets/Images/product-1.png";
import Image2 from "../../Assets/Images/product-2.png";
import WhySolar from "../WhySolor/WhySolar";
import ServiceArea from "../ServiceArea/ServiceArea";
import Review from "../Review/Review";
import { useNavigate } from "react-router-dom";
import Image1 from "../../Assets/Images/events.png";
import image2 from "../../Assets/Images/award.png";
import image3 from "../../Assets/Images/enquiry.png";
import image4 from "../../Assets/Images/award.png";
import image5 from "../../Assets/Images/news.png";
import image6 from "../../Assets/Images/reference.png";

const ProductDetails = () => {
    const navigate = useNavigate();

    const handlopenenqury = (e) => {
        navigate('/inquresnow')
    }
    return (
        <>
            <div>
                <section
                    className="custom-banner-section"
                >
                    <div className="custom-side-icons">
                        <a href="refrensh" className="custom-side-icon">
                            <div className="custom-image-icon">
                                <img src={Image1} alt="social-icon" />
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


            <Container className="toughx-container py-5">
                <Row>
                    <Col md={5} className="toughx-image-section text-center mb-4 mb-md-0">
                        <Image
                            src={Image2}
                            alt="ToughX Trolley"
                            fluid
                            className="toughx-main-image"
                        />
                        <div className="toughx-thumbnail mt-3">
                            <Image src={image1} alt="Thumbnail" width={40} />
                            <Image src={Image2} alt="Thumbnail" width={40} />
                        </div>
                    </Col>
                    <Col md={7} className="toughx-details">
                        <h2 className="toughx-title">ToughX trolley TX100L</h2>
                        <h4 className="toughx-price">
                            ₹ 1,700.00{" "}
                            <small className="text-muted">(Inclusive of all taxes)</small>
                        </h4>
                        <p className="toughx-finance">
                            Buy in 3/6 monthly payments above ₹10000
                        </p>
                        <p>
                            For more details, visit the <strong>Warranty</strong> section under{" "}
                            <strong>Specifications</strong>.
                        </p>
                        <p>
                            Loom Solar 10 Wp, 12 V PV Module for Mobile Charging and yet
                            pleasing to the eye. It surely is the very best accessory for your
                            Luminous UPS set.
                        </p>

                        <div className="toughx-buttons mt-4 d-flex gap-3">
                            <button className="InqureBtn" onClick={handlopenenqury}>
                                Inquire Now
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>

            <WhySolar />
            <ServiceArea />
            <Review />
        </>
    );
};

export default ProductDetails;
