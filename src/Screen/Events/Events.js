import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { FaRegCalendarAlt } from 'react-icons/fa';
import './Events.css';
import image1 from "../../Assets/Images/events.png";
import image2 from "../../Assets/Images/award.png";
import image3 from "../../Assets/Images/enquiry.png";
import image4 from "../../Assets/Images/award.png";
import image5 from "../../Assets/Images/news.png";
import image6 from "../../Assets/Images/reference.png";

const eventData = [
    {
        id: 1,
        type: 'Trade Show',
        title: 'SolarCon 2025',
        date: '04/18/2025',
        image: 'https://www.secrets4exams.com/images/testimonial/48FT-Bulbs-Included-Weatherproof-Outdoor-String-Lights-E26-E27-Commercial-Grade-Heavy-Duty-Strand-Lighting-With.webp',
        text: 'Heblox provides end-to-end solar solutions, from design to installation, with 20+ years  Heblox provides end- to - end solar solutions, from design to installation, with 20 + years',
        text2: 'Solar energy reduces greenhouse gas emissions and air pollution compared to fossil fuels, contributing to cleaner air and mitigating climate change.'
    },
    {
        id: 2,
        type: 'Conference',
        title: 'GreenTech Summit',
        date: '06/05/2025',
        image: 'https://www.secrets4exams.com/images/testimonial/sonal-gupta.webp',
        text: 'Heblox offers end to end solar energy solutions from design to sourcing to installation, with more than 20 years of combined experience',
        text2: 'Solar panels can be installed on rooftops, ground-mounted arrays, and even integrated into building materials, offering flexibility in deployment.'
    },
    {
        id: 3,
        type: 'Expo',
        title: 'EcoEnergy World',
        date: '09/12/2025',
        image: 'https://www.secrets4exams.com/images/testimonial/download.jpg',
        text: 'Solar energy reduces greenhouse gas emissions and air pollution compared to fossil fuels, contributing to cleaner air and mitigating climate change',
        text2: "Solar energy reduces greenhouse gas emissions and air pollution compared to fossil fuels, contributing to cleaner air and mitigating climate change.",
    },
];

const Events = () => {
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

            <Container fluid className="event-page-wrapper py-5">
                {eventData.map((event) => (
                    <Row key={event.id} className="align-items-center mb-5">
                        <Col md={6} className="text-center   mb-4 mb-md-0">
                            <p className="event-subtitle">{event.type}</p>
                            <h2 className="event-title">{event.title}</h2>
                            <p>{event.text}</p>
                            <p style={{ padding: '40px' }}>{event.text2}</p>
                        </Col>
                        <Col md={5} className="position-relative text-center">
                            <Image
                                src={event.image}
                                fluid
                                className="event-image"
                                alt={event.title}
                            />
                            <div className="event-date-box d-flex align-items-center">
                                <FaRegCalendarAlt className="me-2" />
                                <span>{event.date}</span>
                            </div>
                        </Col>
                    </Row>
                ))}
            </Container>
        </>
    );
};

export default Events;
