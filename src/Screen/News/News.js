import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './News.css';
import image1 from "../../Assets/Images/000_9PD9WV.webp";
import image2 from "../../Assets/Images/27_solar2_1_3_1.jpg";
import image3 from "../../Assets/Images/i-auction.webp";
import image4 from "../../Assets/Images/pro-1.jpg";

import images1 from "../../Assets/Images/events.png";
import images2 from "../../Assets/Images/award.png";
import images3 from "../../Assets/Images/enquiry.png";
import images4 from "../../Assets/Images/award.png";
import images5 from "../../Assets/Images/news.png";
import images6 from "../../Assets/Images/reference.png";

const newsData = [
    {
        date: 'Oct 30, 2024',
        title: 'HOW TO SELL SOLAR IN COAL COUNTRY',
        source: 'Solar panels can be installed on rooftops, ground-mounted arrays, and even integrated into building materials, offering flexibility in deployment.',
        image: image1,
    },
    {
        date: 'Apr 16, 2025',
        title: 'VIDEO: UK BATTERY MAKERS MOVING TO THE UNITED STATES?',
        source: 'Heblox offers end to end solar energy solutions from design to sourcing to installation, with more than 20 years of combined experience ',
        image: image2,
    },
    {
        date: 'Sep 15, 2024',
        title: 'HOW CASH-STRAPPED SCHOOLS ARE BENEFITING FROM THE SUN',
        source: 'Heblox offers end to end solar energy solutions from design to sourcing to installation, with more than 20 years of combined experience',
        image: image3,
    },
    {
        date: 'jan 08, 2025',
        title: '‘THIS IS THE FUTURE’: RURAL VIRGINIA PIVOTS FROM COAL TO GREEN JOBS',
        source: 'Heblox provides end-to-end solar solutions, from design to installation, with 20+ years experience in residential and commercial projects.',
        image: image4,
    }
];

const News = () => {
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
                                <img src={images3} alt="social-icon" />
                            </div>
                            <span className="custom-label">Visit Stores</span>
                        </a>
                        <a href="#!" className="custom-side-icon">
                            <div className="custom-image-icon">
                                <img src={images4} alt="social-icon" />
                            </div>
                            <span className="custom-label">Dealers</span>
                        </a>
                        <a href="award" className="custom-side-icon">
                            <div className="custom-image-icon">
                                <img src={images5} alt="social-icon" />
                            </div>
                            <span className="custom-label">Awards</span>
                        </a>
                        <a href="events" className="custom-side-icon">
                            <div className="custom-image-icon">
                                <img src={images6} alt="social-icon" />
                            </div>
                            <span className="custom-label">Events</span>
                        </a>
                        <a href="news" className="custom-side-icon">
                            <div className="custom-image-icon">
                                <img src={images6} alt="social-icon" />
                            </div>
                            <span className="custom-label">News</span>
                        </a>
                    </div>
                </section>
            </div>
            <Container className="news-section py-5">
                <h2 className='text-center mb-4 mt-2'>News Media</h2>
                <h4 className="news-heading mb-4">FEATURED STORIES</h4>
                <Row>
                    {newsData.map((news, index) => (
                        <Col key={index} md={6} lg={3} className="mb-4">
                            <Card className="news-card h-100">
                                <Card.Img variant="top" src={news.image} className="news-image" />
                                <Card.Body>
                                    <p className="news-date mb-1">{news.date}</p>
                                    <Card.Title className="news-title" style={{ fontSize: "1.0rem" }}>{news.title}</Card.Title>
                                    <p className="news-source text-muted">{news.source}</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default News;
