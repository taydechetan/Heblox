import React, { useEffect } from "react";
import Image1 from "../../Assets/Images/product-1.png";
import Image2 from "../../Assets/Images/product-2.png";
import Image3 from "../../Assets/Images/product-3.png";
import Image4 from "../../Assets/Images/product-4.png";
import "./subcategori.css";
import { FaEye } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import WhySolar from "../WhySolor/WhySolar";
import ServiceArea from "../ServiceArea/ServiceArea";
import Review from "../Review/Review";
import image1 from "../../Assets/Images/events.png";
import image2 from "../../Assets/Images/award.png";
import image3 from "../../Assets/Images/enquiry.png";
import image4 from "../../Assets/Images/award.png";
import image5 from "../../Assets/Images/news.png";
import image6 from "../../Assets/Images/reference.png";

export default function ProjectSection() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const location = useLocation();
    console.log("KK", location)
    const query = new URLSearchParams(location.search);
    const parent = query.get("parent");
    const child = query.get("child");

    const navigate = useNavigate();
    const { search } = useLocation();


    const handlopenenqury = (e) => {
        navigate("/inquresnow");
    };

    const products = [
        {
            img: Image1,
            alt: "Solar panel",
            title: "Loom Solar 10 Wp, 12 V PV Module for Mobile Charging",
        },
        {
            img: Image2,
            alt: "Loom Solar Panel",
            title:
                "Loom Solar 20 Wp, 12 V PV Module for Small Battery Charging & DIY Projects",
        },
        {
            img: Image3,
            alt: "Loom Solar Panel",
            title: "Loom Solar Panel - SHARK 600 Wp | N-Type TOPCon Bifacial 16BB",
        },
        {
            img: Image4,
            alt: "SHARK 730~750",
            title: "SHARK 730~750 Wp HJT Dual-Glass Solar Panel (Pack of 33)",
        },
    ];

    const productstow = [
        {
            img: Image1,
            alt: "Solar panel",
            title: "Loom Solar 10 Wp, 12 V PV Module for Mobile Charging",
        },
        {
            img: Image2,
            alt: "Loom Solar Panel",
            title:
                "Loom Solar 20 Wp, 12 V PV Module for Small Battery Charging & DIY Projects",
        },
        {
            img: Image3,
            alt: "Loom Solar Panel",
            title: "Loom Solar Panel - SHARK 600 Wp | N-Type TOPCon Bifacial 16BB",
        },
        {
            img: Image4,
            alt: "SHARK 730~750",
            title: "SHARK 730~750 Wp HJT Dual-Glass Solar Panel (Pack of 33)",
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
            <div>
                <section className="product-services-sec section_paddingY">
                    <div className="container">
                        <div className="row">
                            <div className="heading_wrapper mb-md-4 mb-3 text-center">
                                <div className="subcontentsd">
                                    {parent?.trim() && (
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "7px",
                                                marginTop: "25px",
                                            }}
                                        >
                                            <h4 style={{ margin: 0, color: "#1a4578" }}>{parent}</h4>
                                            <div
                                                style={{
                                                    width: "100px",
                                                    height: "1px",
                                                    backgroundColor: "#1a4578",
                                                }}
                                            ></div>
                                        </div>
                                    )}

                                    <h3 className="mt-2" style={{
                                        marginTop: "10px",
                                        color: "#000",
                                    }}>{child}</h3>
                                </div>


                            </div>
                        </div>
                        <div className="row product_row  mb-4">
                            {products.map((product, index) => (
                                <div key={index} className="col-md-3 product_item">
                                    <div className="product-item">
                                        <div className="product-thumb">
                                            <img src={product.img} alt={product.alt} />
                                        </div>
                                        <div className="product-content">
                                            <h4>{product.title}</h4>
                                        </div>
                                        <div className="product-buttons">
                                            <a
                                                href="ProductDetails"
                                                className="btn btn-view eye-icon-wrapper"
                                            >
                                                <span className="eye-icon">
                                                    <FaEye />
                                                </span>
                                            </a>

                                            <button className="EnquiryNow" onClick={handlopenenqury}>
                                                Inquiry Now
                                                <i className="ri-send-plane-fill">
                                                    {" "}
                                                    <IoIosSend />
                                                </i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* second content */}

                        <div className="row product_row mt-5 mb-5">
                            {productstow.map((product, index) => (
                                <div key={index} className="col-md-3 product_item">
                                    <div className="product-item">
                                        <div className="product-thumb">
                                            <img src={product.img} alt={product.alt} />
                                        </div>
                                        <div className="product-content">
                                            <h4>{product.title}</h4>
                                        </div>
                                        <div className="product-buttons">
                                            <a
                                                href="ProductDetails"
                                                className="btn btn-view eye-icon-wrapper"
                                            >
                                                <span className="eye-icon">
                                                    <FaEye />
                                                </span>
                                            </a>

                                            <button className="EnquiryNow" onClick={handlopenenqury}>
                                                Inquiry Now
                                                <i className="ri-send-plane-fill">
                                                    {" "}
                                                    <IoIosSend />
                                                </i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
            <WhySolar />
            <ServiceArea />
            <Review />
        </>
    );
}
